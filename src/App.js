import './App.css';
import {useEffect, useState} from "react";
import {Checkbox} from '@material-ui/core';

function App() {
    const [program, setProgram] = useState();
    const [day, setDay] = useState(0)

    const [time, setTime] = useState(0)
    const [timerInterval, setTimerInterval] = useState()

    function startTimer() {
        if (timerInterval) {
            clearInterval(timerInterval)
            setTimerInterval()
        }
        const date = new Date()
        const incrementTimer = setInterval(() => {
            setTime(((new Date().getTime()) - date.getTime()) / 1000)
        }, 1000)
        setTimerInterval(incrementTimer)
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval)
            setTimerInterval()
        }
        setTime(0)
    }

    useEffect(() => {
        let loadedProgram = JSON.parse(localStorage.getItem("program"))
        if (loadedProgram) {
            setProgram(loadedProgram)
        } else {
            fetch("./data/program.json").then(
                (res) => res.json()
            ).then(
                (data) => setProgram(data)
            ).catch(
                (err) => console.log(err)
            )
        }
    }, [])


    function setWeight(exerciseNum, setNum, newWeight) {
        let modifiedExercises = [...program];
        modifiedExercises[day][exerciseNum].sets[setNum].weight = newWeight;
        setProgram(modifiedExercises)

        localStorage.setItem("program", JSON.stringify(program))
    }

    function setReps(exerciseNum, setNum, newReps) {
        let modifiedExercises = [...program];
        modifiedExercises[day][exerciseNum].sets[setNum].reps = newReps;
        setProgram(modifiedExercises)

        localStorage.setItem("program", JSON.stringify(program))
    }

    if (program) {
        const exerciseList = program[day].map((exercise, index) => <Exercise dayProgram={program[day]}
                                                                                   key={(day*index) + index} pageNumber={index + 1}
                                                                                   setWeight={setWeight}
                                                                                   setReps={setReps} time={time} startTimer={startTimer} stopTimer={stopTimer}/>)
        return (
            <div>
                <DayWeekSelectionPage setDay={setDay}
                                      currDay={day} program={program} stopTimer={stopTimer}/>
                <div>
                    {exerciseList}
                </div>
            </div>
        );
    } else {
        return (
            <p>Loading Data</p>
        );
    }
}

function DayWeekSelectionPage(props) {
    const dayButtons = []
    for (let i = 1; i < props.program.length + 1; i++) {
        dayButtons.push(<button className={props.currDay === i - 1 ? "dayWeekButtonSelected" : "dayWeekButton"} key={i}
                                onClick={() => handleChangeDay(i-1)}>{i}</button>)
    }

    function handleChangeDay(i) {
        props.stopTimer()
        let checkboxes = document.getElementsByTagName('input');
        for (let i=0; i<checkboxes.length; i++)  {
            if (checkboxes[i].type === 'checkbox')   {
                console.log(checkboxes[i].checked)
                checkboxes[i].checked = false;
                //console.log(checkboxes[i].checked)
            }
        }
        props.setDay(i)
    }

    function handleReset() {
        localStorage.setItem("program", null)
    }

    return (
        <div className="DayWeekSelectionPage">
            <div className="dayWeekContainer">
                <h2 className="promptHeader">Program</h2>
                <h2 className="promptHeader">Select a day</h2>

                <h3>Day</h3>
                {dayButtons}

                <button className="dayWeekButton"
                        onClick={() => handleReset()}>Reset
                </button>

            </div>
        </div>
    );
}

function Exercise(props) {
    console.log(props)

    function setWeight(setNumber, adjustment) {
        props.setWeight(props.pageNumber - 1, setNumber, adjustment)
    }

    function setReps(setNumber, adjustment) {
        props.setReps(props.pageNumber - 1, setNumber, adjustment)
    }

    let previousName = props.pageNumber !== 1 ? "⬆ " + props.dayProgram[props.pageNumber - 2].name : ""
    let exerciseName = props.dayProgram[props.pageNumber - 1].name
    let exerciseNotes = props.dayProgram[props.pageNumber - 1].notes
    let nextName = props.pageNumber !== props.dayProgram.length ? "⬇ " + props.dayProgram[props.pageNumber].name : " "
    let sets = props.dayProgram[props.pageNumber - 1].sets

    return (
        <section className="exercisePage">
            <div className="topBar">
                <p className="previousExerciseName">{previousName}</p>
                <p className="timer">RESTING TIME: {new Date(props.time * 1000).toISOString().substr(15, 4)}m</p>
                <p className="nextSetReminder">{props.time > 180 ? "START NEXT SET!" : ""}</p>
            </div>

            <div className="mainContent">
                <p className="exerciseName">{exerciseName}</p>
                <div className="sets">
                    {sets.map((set, index) => <Set id={index} key={(props.pageNumber*index) + index} reps={set.reps} RPE={set.RPE}
                                                   weight={set.weight}
                                                   startTimer={props.startTimer} stopTimer={props.stopTimer} setWeight={setWeight}
                                                   setReps={setReps}/>)}
                </div>
                <div className="notes">
                    <header className="notesHeader">NOTES</header>
                    <p className="notesContent">{exerciseNotes}</p>
                </div>
            </div>

            <div className="bottomBar">
                <p className="nextExerciseName">{nextName}</p>
            </div>
        </section>
    )
}

function Set(props) {

    const [weight, setWeight] = useState(props.weight)
    const [reps, setReps] = useState(props.reps)

    useEffect(() => {
        setWeight(props.weight)
        setReps(props.reps)
    }, [props.weight, props.reps])

    function handleCheck(checkbox) {
        if (checkbox.target.checked) {
            props.setWeight(props.id, weight)
            props.setReps(props.id, reps)
            props.startTimer()
        } else {
            props.stopTimer()
        }
    }

    return (<div className="set">
        <input className="checkbox" type="checkbox" id={"set" + props.id} onClick={handleCheck} size="medium"/>
        <div>
            <p className="setDescriptor">Reps: {reps}</p>
            <p className="lastWeekDescriptor">Last Wk: {props.reps}</p>
        </div>
        <div className="adjustmentButtonContainer">
            <button className="adjustmentButton" onClick={() => setReps(reps + 1)}>&uarr;</button>
            <br/>
            <button className="adjustmentButton" onClick={() => setReps(reps - 1)}>&darr;</button>
        </div>

        <div>
            <p className="setDescriptor">Weight: {weight}kg</p>
            <p className="lastWeekDescriptor">Last Wk: {props.weight}kg</p>
        </div>
        <div className="adjustmentButtonContainer">
            <button className="adjustmentButton" onClick={() => setWeight(weight + 1)}>&uarr;</button>
            <br/>
            <button className="adjustmentButton" onClick={() => setWeight(weight - 1)}>&darr;</button>
        </div>

    </div>)
}

export default App;
