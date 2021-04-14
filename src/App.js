import './App.css';
import {useState} from "react";
import { Checkbox } from '@material-ui/core';

function App() {
    let week = 0
    let day = 1

    const program = [[[{
        name: "Back Squat",
        notes: "FOCUS ON TECHNIQUE AND EXPLOSIVE POWER!",
        sets: [{reps: 5, RPE: "80%", weight: 70}]
    }, {
        name: "Back Squat",
        notes: "KEEP BACK ANGLE AND FORM CONSISTENT ACROSS ALL REPS",
        sets: [{reps: 8, RPE: "70%", weight: 60}, {reps: 8, RPE: "70%", weight: 60}]
    },{
        name: "Overhead Press",
        notes: "RESET EACH REP (DON'T TOUCH-AND-PRESS)",
        sets: [{reps: 8, RPE: "80%", weight: 40}, {reps: 8, RPE: "80%", weight: 40}, {reps: 8, RPE: "80%", weight: 40}]
    },{
        name: "Lying Leg Curl",
        notes: "FOCUS ON SQUEEZING GLUTES",
        sets: [{reps: 8, RPE: "7", weight: 40}, {reps: 8, RPE: "7", weight: 40}, {reps: 8, RPE: "7", weight: 40}]
    },{
        name: "Helms Row",
        notes: "STRICT FORM. DRIVE ELBOWS OUT AND BACK AT 45 DEGREE ANGLE",
        sets: [{reps: 12, RPE: "9", weight: 20}, {reps: 12, RPE: "9", weight: 20}, {reps: 12, RPE: "9", weight: 20}]
    },{
        name: "Hammer Curl",
        notes: "KEEP ELBOWS LOCKED IN PLACE, SQUEEZE THE DUMBBELL HANDLE HARD!",
        sets: [{reps: 20, RPE: "10", weight: 15}, {reps: 20, RPE: "10", weight: 15}, {reps: 20, RPE: "10", weight: 15}]
    },],
        [{
            name: "DEADLIFT",
            notes: "CONVENTIONAL OR SUMO: USE WHATEVER STANCE YOU ARE STRONGER WITH",
            sets: [{reps: 4, RPE: "80%", weight: 100},{reps: 4, RPE: "80%", weight: 100},{reps: 4, RPE: "80%", weight: 100}]
        }, {
            name: "BARBELL BENCH PRESS",
            notes: "TOP SET. LEAVE 1 (MAYBE 2) REPS IN THE TANK. HARD SET.",
            sets: [{reps: 3, RPE: "85%", weight: 60}]
        },{
            name: "BARBELL BENCH PRESS",
            notes: "QUICK 1 SECOND PAUSE ON THE CHEST ON EACH REP",
            sets: [{reps: 10, RPE: "70%", weight: 50}, {reps: 8, RPE: "70%", weight: 50}]
        },{
            name: "HIP ABDUCTION",
            notes: "MACHINE, BAND OR WEIGHTED, 1 SECOND ISOMETRIC HOLD AT THE TOP OF EACH REP",
            sets: [{reps: 15, RPE: "9", weight: 32}, {reps: 15, RPE: "9", weight: 32}, {reps: 15, RPE: "9", weight: 32}]
        },{
            name: "WEIGHTED PULL-UP",
            notes: "1.5X SHOULDER WIDTH GRIP, PULL YOUR CHEST TO THE BAR",
            sets: [{reps: 5, RPE: "8", weight: 20},{reps: 5, RPE: "8", weight: 20},{reps: 5, RPE: "8", weight: 20}]
        },{
            name: "STANDING CALF RAISE",
            notes: "1-2 SECOND PAUSE AT THE BOTTOM OF EACH REP, FULL ROM",
            sets: [{reps: 8, RPE: "9", weight: 100},{reps: 8, RPE: "9", weight: 100},{reps: 8, RPE: "9", weight: 100}]
        },]]]
    return (
            program[week][day].map((exercise, index) => <Exercise dayProgram={program[week][day]} pageNumber={index+1}/>)
    );
}

function Exercise(props) {

    const [time, setTime] = useState(0)
    const [timerInterval, setTimerInterval] = useState()

    function startTimer () {
        if (timerInterval) {
            clearInterval(timerInterval)
            setTimerInterval()
        }
        const date = new Date()
        const incrementTimer = setInterval(() => {
            setTime(((new Date().getTime()) - date.getTime())/1000)
        }, 1000)
        setTimerInterval(incrementTimer)
    }

    function stopTimer () {
        if (timerInterval) {
            clearInterval(timerInterval)
            setTimerInterval()
        }
        setTime(0)
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
                <p className="timer">RESTING TIME: {new Date(time * 1000).toISOString().substr(15, 4)}m</p>
                <p className="nextSetReminder">{time > 180 ? "START NEXT SET!" : ""}</p>
            </div>

            <div className="mainContent">
                <p className="exerciseName">{exerciseName}</p>
                <div className="sets">
                    {sets.map((set, index) => <Set id={index} reps={set.reps} RPE={set.RPE} weight={set.weight} startTimer={startTimer} stopTimer={stopTimer}/>)}
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
    function handleCheck(checkbox) {
        if (checkbox.target.checked) {
            props.startTimer()
        } else {
            props.stopTimer()
        }
    }

    return (<div className="set">
        <Checkbox className="checkbox" type="checkbox" id={"set" + props.id} onClick={handleCheck} size="medium"/>
        <p className="setDescriptor">Reps: {props.reps}</p>
        <p className="setDescriptor">RPE: {props.RPE}</p>
        <p className="setDescriptor">Weight: {props.weight}</p>
    </div>)
}

export default App;
