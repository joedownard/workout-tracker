(this.webpackJsonpbfit=this.webpackJsonpbfit||[]).push([[0],{22:function(e,E,t){},23:function(e,E,t){},29:function(e,E,t){"use strict";t.r(E);var s=t(0),R=t.n(s),r=t(6),n=t.n(r),O=(t(22),t(12)),S=t(3),P=(t(23),t(45)),i=t(1);function T(e){for(var E=[],t=function(t){E.push(Object(i.jsx)("button",{className:e.currDay===t-1?"dayWeekButtonSelected":"dayWeekButton",onClick:function(){return e.setDay(t-1)},children:t},t))},R=1;R<e.program[e.currWeek].length+1;R++)t(R);for(var r=[],n=function(E){r.push(Object(i.jsx)("button",{className:e.currWeek===E-1?"dayWeekButtonSelected":"dayWeekButton",onClick:function(){return function(E){e.program[E-1].length<=e.currDay?(e.setDay(0),e.setWeek(E-1)):e.setWeek(E-1)}(E)},children:E},E))},O=1;O<e.program.length+1;O++)n(O);var P=Object(s.useState)(2),T=Object(S.a)(P,2),a=T[0],N=T[1];function A(E){N(E),e.handleSetProgram(E)}return Object(i.jsx)("div",{className:"DayWeekSelectionPage",children:Object(i.jsxs)("div",{className:"dayWeekContainer",children:[Object(i.jsx)("h2",{className:"promptHeader",children:"Program"}),Object(i.jsx)("button",{className:1===a?"dayWeekButtonSelected":"dayWeekButton",onClick:function(){return A(1)},children:"Powerbuilding"}),Object(i.jsx)("button",{className:2===a?"dayWeekButtonSelected":"dayWeekButton",onClick:function(){return A(2)},children:"Push+Legs, Pull+Legs"}),Object(i.jsx)("h2",{className:"promptHeader",children:"Select a day and a week"}),Object(i.jsx)("h3",{children:"Week"}),r,Object(i.jsx)("h3",{children:"Day"}),E]})})}function a(e){var E=Object(s.useState)(0),t=Object(S.a)(E,2),R=t[0],r=t[1],n=Object(s.useState)(),O=Object(S.a)(n,2),P=O[0],T=O[1];function a(){P&&(clearInterval(P),T());var e=new Date,E=setInterval((function(){r(((new Date).getTime()-e.getTime())/1e3)}),1e3);T(E)}function A(){P&&(clearInterval(P),T()),r(0)}function L(E,t){e.setWeight(e.pageNumber-1,E,t)}function h(E,t){e.setReps(e.pageNumber-1,E,t)}var g=1!==e.pageNumber?"\u2b06 "+e.dayProgram[e.pageNumber-2].name:"",p=e.dayProgram[e.pageNumber-1].name,c=e.dayProgram[e.pageNumber-1].notes,C=e.pageNumber!==e.dayProgram.length?"\u2b07 "+e.dayProgram[e.pageNumber].name:" ",o=e.dayProgram[e.pageNumber-1].sets;return Object(i.jsxs)("section",{className:"exercisePage",children:[Object(i.jsxs)("div",{className:"topBar",children:[Object(i.jsx)("p",{className:"previousExerciseName",children:g}),Object(i.jsxs)("p",{className:"timer",children:["RESTING TIME: ",new Date(1e3*R).toISOString().substr(15,4),"m"]}),Object(i.jsx)("p",{className:"nextSetReminder",children:R>180?"START NEXT SET!":""})]}),Object(i.jsxs)("div",{className:"mainContent",children:[Object(i.jsx)("p",{className:"exerciseName",children:p}),Object(i.jsx)("div",{className:"sets",children:o.map((function(e,E){return Object(i.jsx)(N,{id:E,reps:e.reps,RPE:e.RPE,weight:e.weight,startTimer:a,stopTimer:A,setWeight:L,setReps:h},E)}))}),Object(i.jsxs)("div",{className:"notes",children:[Object(i.jsx)("header",{className:"notesHeader",children:"NOTES"}),Object(i.jsx)("p",{className:"notesContent",children:c})]})]}),Object(i.jsx)("div",{className:"bottomBar",children:Object(i.jsx)("p",{className:"nextExerciseName",children:C})})]})}function N(e){var E=Object(s.useState)(e.reps),t=Object(S.a)(E,2),R=t[0],r=t[1],n=Object(s.useState)(e.weight),O=Object(S.a)(n,2),T=O[0],a=O[1];return Object(i.jsxs)("div",{className:"set",children:[Object(i.jsx)(P.a,{className:"checkbox",type:"checkbox",id:"set"+e.id,onClick:function(E){E.target.checked?(e.setWeight(e.id,T),e.setReps(e.id,R),e.startTimer()):e.stopTimer()},size:"medium"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{className:"setDescriptor",children:["Reps: ",R]}),Object(i.jsxs)("p",{className:"lastWeekDescriptor",children:["Last Wk: ",e.reps]})]}),Object(i.jsxs)("div",{className:"adjustmentButtonContainer",children:[Object(i.jsx)("button",{className:"adjustmentButton",onClick:function(){return r(R+1)},children:"\u2191"}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"adjustmentButton",onClick:function(){return r(R-1)},children:"\u2193"})]}),"n/a"===e.RPE?"":Object(i.jsxs)("p",{className:"setDescriptor",children:["RPE: ",e.RPE]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{className:"setDescriptor",children:["Weight: ",T,"kg"]}),Object(i.jsxs)("p",{className:"lastWeekDescriptor",children:["Last Wk: ",e.weight,"kg"]})]}),Object(i.jsxs)("div",{className:"adjustmentButtonContainer",children:[Object(i.jsx)("button",{className:"adjustmentButton",onClick:function(){return a(T+1)},children:"\u2191"}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"adjustmentButton",onClick:function(){return a(T-1)},children:"\u2193"})]})]})}var A=function(){var e=[[[{name:"Back Squat",notes:"FOCUS ON TECHNIQUE AND EXPLOSIVE POWER!",sets:[{reps:5,RPE:"80%",weight:70}]},{name:"Back Squat",notes:"KEEP BACK ANGLE AND FORM CONSISTENT ACROSS ALL REPS",sets:[{reps:8,RPE:"70%",weight:60},{reps:8,RPE:"70%",weight:60}]},{name:"Overhead Press",notes:"RESET EACH REP (DON'T TOUCH-AND-PRESS)",sets:[{reps:8,RPE:"80%",weight:40},{reps:8,RPE:"80%",weight:40},{reps:8,RPE:"80%",weight:40}]},{name:"Lying Leg Curl",notes:"FOCUS ON SQUEEZING GLUTES",sets:[{reps:8,RPE:"7",weight:40},{reps:8,RPE:"7",weight:40},{reps:8,RPE:"7",weight:40}]},{name:"Helms Row",notes:"STRICT FORM. DRIVE ELBOWS OUT AND BACK AT 45 DEGREE ANGLE",sets:[{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20}]},{name:"Hammer Curl",notes:"KEEP ELBOWS LOCKED IN PLACE, SQUEEZE THE DUMBBELL HANDLE HARD!",sets:[{reps:20,RPE:"10",weight:15},{reps:20,RPE:"10",weight:15},{reps:20,RPE:"10",weight:15}]}],[{name:"DEADLIFT",notes:"CONVENTIONAL OR SUMO: USE WHATEVER STANCE YOU ARE STRONGER WITH",sets:[{reps:4,RPE:"80%",weight:100},{reps:4,RPE:"80%",weight:100},{reps:4,RPE:"80%",weight:100}]},{name:"BARBELL BENCH PRESS",notes:"TOP SET. LEAVE 1 (MAYBE 2) REPS IN THE TANK. HARD SET.",sets:[{reps:3,RPE:"85%",weight:60}]},{name:"BARBELL BENCH PRESS",notes:"QUICK 1 SECOND PAUSE ON THE CHEST ON EACH REP",sets:[{reps:10,RPE:"70%",weight:50},{reps:10,RPE:"70%",weight:50}]},{name:"HIP ABDUCTION",notes:"MACHINE, BAND OR WEIGHTED, 1 SECOND ISOMETRIC HOLD AT THE TOP OF EACH REP",sets:[{reps:15,RPE:"9",weight:32},{reps:15,RPE:"9",weight:32},{reps:15,RPE:"9",weight:32}]},{name:"WEIGHTED PULL-UP",notes:"1.5X SHOULDER WIDTH GRIP, PULL YOUR CHEST TO THE BAR",sets:[{reps:5,RPE:"8",weight:20},{reps:5,RPE:"8",weight:20},{reps:5,RPE:"8",weight:20}]},{name:"STANDING CALF RAISE",notes:"1-2 SECOND PAUSE AT THE BOTTOM OF EACH REP, FULL ROM",sets:[{reps:8,RPE:"9",weight:100},{reps:8,RPE:"9",weight:100},{reps:8,RPE:"9",weight:100}]}],[{name:"BACK SQUAT",notes:"MAINTAIN TIGHT PRESSURE IN YOUR UPPER BACK AGAINST THE BAR",sets:[{reps:4,RPE:"80%",weight:80},{reps:4,RPE:"80%",weight:80},{reps:4,RPE:"80%",weight:80}]},{name:"WEIGHTED DIP",notes:"DO DUMBBELL FLOOR PRESS IF NO ACCESS TO DIP HANDLES",sets:[{reps:8,RPE:"8",weight:20},{reps:8,RPE:"8",weight:20},{reps:8,RPE:"8",weight:20}]},{name:"HANGING LEG RAISE",notes:"KNEES TO CHEST, CONTROLLED REPS, STRAIGHTEN LEGS MORE TO INCREASE DIFFICULTY",sets:[{reps:10,RPE:"9",weight:0},{reps:10,RPE:"9",weight:0},{reps:10,RPE:"9",weight:0}]},{name:"DB PULL-OVER",notes:"CAN USE A DB, CABLE/ROPE OR BAND, STRETCH AND SQUEEZE LATS!",sets:[{reps:12,RPE:"8",weight:24},{reps:12,RPE:"8",weight:24},{reps:12,RPE:"8",weight:24}]},{name:"INCLINE DUMBBELL CURL",notes:"DO EACH ARM ONE AT A TIME RATHER THAN ALTERNATING, START WITH YOUR WEAK ARM",sets:[{reps:12,RPE:"9",weight:15},{reps:12,RPE:"9",weight:15},{reps:12,RPE:"9",weight:15}]},{name:"FACE PULL",notes:"CAN USE CABLE/ROPE OR BAND, RETRACT YOUR SHOULDER BLADES AS YOU PULL",sets:[{reps:12,RPE:"9",weight:40},{reps:12,RPE:"9",weight:40},{reps:12,RPE:"9",weight:40},{reps:12,RPE:"9",weight:40}]}],[{name:"PAUSE DEADLIFT",notes:"3 SECOND PAUSE RIGHT AFTER THE PLATES COME OFF THE GROUND",sets:[{reps:2,RPE:"75%",weight:110},{reps:2,RPE:"75%",weight:110},{reps:2,RPE:"75%",weight:110},{reps:2,RPE:"75%",weight:110}]},{name:"PAUSE BARBELL BENCH PRESS",notes:"2-3 SECOND PAUSE ON THE CHEST",sets:[{reps:5,RPE:"75%",weight:60},{reps:5,RPE:"75%",weight:60},{reps:5,RPE:"75%",weight:60}]},{name:"CHEST-SUPPORTED T-BAR ROW ",notes:"BE MINDFUL OF LOWER BACK FATIGUE. STAY LIGHT, MINIMIZE CHEATING",sets:[{reps:10,RPE:"7",weight:50},{reps:10,RPE:"7",weight:50},{reps:10,RPE:"7",weight:50}]},{name:"LYING LEG CURL",notes:"FOCUS ON SQUEEZING HAMSTRINGS",sets:[{reps:6,RPE:"8",weight:45},{reps:6,RPE:"8",weight:45},{reps:6,RPE:"8",weight:45}]},{name:"DUMBBELL SHRUG",notes:"FEEL A STRETCH ON THE TRAPS AT THE BOTTOM, SQUEEZE HARD AT THE TOP",sets:[{reps:20,RPE:"9",weight:15},{reps:20,RPE:"9",weight:15},{reps:20,RPE:"9",weight:15}]}],[{name:"EZ BAR CURL",notes:"CURL THE BAR OUT AND UP IN AN ARC. MINIMIZE MOMENTUM.",sets:[{reps:12,RPE:"8",weight:35},{reps:12,RPE:"8",weight:35},{reps:12,RPE:"8",weight:35}]},{name:"SKULL CRUSHER",notes:"ARC THE BAR BACK BEHIND YOUR HEAD, SOFT TOUCH ON THE FLOOR BEHIND YOU",sets:[{reps:12,RPE:"8",weight:35},{reps:12,RPE:"8",weight:35},{reps:12,RPE:"8",weight:35}]},{name:"CABLE CURL (REVERSE 21s)",notes:"DO BOTH ARMS AT ONCE: 7 REPS FULL ROM, 7 REPS TOP 1/2, 7 REPS BOTTOM 1/2",sets:[{reps:21,RPE:"10",weight:40},{reps:21,RPE:"7",weight:40},{reps:21,RPE:"7",weight:40}]},{name:"TRICEPS PRESSDOWN (REVERSE 21s)",notes:"DO BOTH ARMS AT ONCE: 7 REPS FULL ROM, 7 REPS BOTTOM 1/2, 7 REPS TOP 1/2",sets:[{reps:21,RPE:"10",weight:45},{reps:21,RPE:"10",weight:45},{reps:21,RPE:"10",weight:45}]},{name:"DUMBBELL LATERAL RAISE",notes:"ARC THE DUMBBELL OUT, MIND-MUSCLE CONNECTION WITH MIDDLE FIBERS",sets:[{reps:20,RPE:"9",weight:10},{reps:20,RPE:"9",weight:10},{reps:20,RPE:"9",weight:10}]},{name:"DUMBBELL SHRUG",notes:"1-2 SECOND PAUSE AT THE BOTTOM OF EACH REP, FULL SQUEEZE AT THE TOP",sets:[{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20}]}]],[[{name:"DEADLIFT",notes:"BRACE YOUR LATS, CHEST TALL, PULL THE SLACK OUT OF THE BAR BEFORE LIFTING",sets:[{reps:3,RPE:"80%",weight:130},{reps:3,RPE:"80%",weight:130},{reps:3,RPE:"80%",weight:130}]},{name:"SUMO BOX SQUAT",notes:"SQUAT IT",sets:[{reps:8,RPE:"7",weight:70},{reps:8,RPE:"7",weight:70}]},{name:"PULL-THROUGH",notes:"CAN USE CABLE/ROPE OR BAND, USE YOUR GLUTES TO MOVE THE WEIGHT",sets:[{reps:12,RPE:"9",weight:50},{reps:12,RPE:"9",weight:50},{reps:12,RPE:"9",weight:50}]},{name:"LEG CURL",notes:"DO LYING LEG CURL MACHINE OR NORDIC HAM CURL IF NO MACHINE ACCESS",sets:[{reps:6,RPE:"8",weight:40},{reps:6,RPE:"8",weight:40},{reps:6,RPE:"8",weight:40}]},{name:"STANDING CALF RAISE",notes:"1-2 SECOND PAUSE AT THE BOTTOM OF EACH REP, FULL SQUEEZE AT THE TOP",sets:[{reps:8,RPE:"9",weight:50},{reps:8,RPE:"9",weight:50},{reps:8,RPE:"9",weight:50}]}],[{name:"BARBELL BENCH PRESS",notes:"TOP SET. LEAVE ~2 REPS IN THE TANK. HARD SET.",sets:[{reps:2,RPE:"90%",weight:70}]},{name:"BARBELL BENCH PRESS",notes:"SET UP A COMFORTABLE ARCH, SLIGHT PAUSE ON THE CHEST, EXPLODE UP",sets:[{reps:6,RPE:"77.5%",weight:60},{reps:6,RPE:"77.5%",weight:60},{reps:6,RPE:"77.5%",weight:60}]},{name:"CHIN-UP",notes:"UNDERHAND GRIP, PULL YOUR CHEST TO THE BAR, ADD WEIGHT IF NEEDED TO HIT RPE",sets:[{reps:10,RPE:"8",weight:0},{reps:10,RPE:"8",weight:0},{reps:10,RPE:"8",weight:0}]},{name:"STANDING ARNOLD DUMBBELL PRESS",notes:"ROTATE THE DBS IN AT THE BOTTOM AND OUT AT THE TOP",sets:[{reps:10,RPE:"9",weight:17.5},{reps:10,RPE:"9",weight:17.5}]},{name:"CHEST-SUPPORTED DUMBBELL ROW",notes:"LIE ON AN INCLINE BENCH AND DO ROWS - PULL WITH LATS!",sets:[{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20}]},{name:"FACE PULL",notes:"CAN USE CABLE/ROPE OR BAND, RETRACT YOUR SHOULDER BLADES AS YOU PULL",sets:[{reps:15,RPE:"9",weight:35},{reps:15,RPE:"9",weight:35}]},{name:"DUMBBELL LATERAL RAISE",notes:"ARC THE DUMBBELL OUT, MIND-MUSCLE CONNECTION WITH MIDDLE FIBERS",sets:[{reps:15,RPE:"10",weight:10},{reps:15,RPE:"10",weight:10}]},{name:"CONCENTRATION BICEP CURL",notes:"PIN YOUR ELBOW AGAINST YOUR UPPER LEG OR THE BACK OF A BENCH",sets:[{reps:12,RPE:"9",weight:15},{reps:12,RPE:"9",weight:15},{reps:12,RPE:"9",weight:15}]}],[{name:"BACK SQUAT",notes:"SIT BACK AND DOWN, KEEP YOUR UPPER BACK TIGHT TO THE BAR",sets:[{reps:6,RPE:"75%",weight:70},{reps:6,RPE:"75%",weight:70},{reps:6,RPE:"75%",weight:70}]},{name:"GOOD MORNING",notes:"SAME AS SQUAT STANCE, KEEP SHINS STRAIGHT, GO LIGHTER AND FEEL HAMSTRINGS",sets:[{reps:10,RPE:"7",weight:40},{reps:10,RPE:"7",weight:40}]},{name:"LEG EXTENSION",notes:"USE BANDS IF NO MACHINE ACCESS, MIND-MUSCLE CONNECTION WITH QUADS",sets:[{reps:12,RPE:"9",weight:40},{reps:12,RPE:"9",weight:40},{reps:12,RPE:"9",weight:40}]},{name:"STANDING CALF RAISE",notes:"EMPHASIZE THE MIND-MUSCLE CONNECTION",sets:[{reps:15,RPE:"9",weight:50},{reps:15,RPE:"9",weight:50},{reps:15,RPE:"9",weight:50}]},{name:"V SIT-UP",notes:"THINK ABOUT SQUEEZING YOUR UPPER AND LOWER ABS TOGETHER",sets:[{reps:12,RPE:"9",weight:0},{reps:12,RPE:"9",weight:0},{reps:12,RPE:"9",weight:0}]}],[{name:"OVERHEAD PRESS",notes:"SQUEEZE YOUR GLUTES TO KEEP YOUR TORSO UPRIGHT, PRESS UP AND SLIGHTLY BACK",sets:[{reps:4,RPE:"80%",weight:45},{reps:4,RPE:"80%",weight:45},{reps:4,RPE:"80%",weight:45}]},{name:"SINGLE-ARM LAT PULLDOWN",notes:"PERFORM WITH BANDS IF NO LAT PULLDOWN, DRIVE ELBOWS DOWN AND IN",sets:[{reps:10,RPE:"9",weight:30},{reps:10,RPE:"9",weight:30}]},{name:"CLOSE-GRIP BENCH PRESS",notes:"SHOULDER WIDTH GRIP, TUCK YOUR ELBOWS IN CLOSER TO YOUR TORSO",sets:[{reps:12,RPE:"7",weight:50},{reps:12,RPE:"7",weight:50}]},{name:"PENDLAY ROW",notes:"BE MINDFUL OF LOWER BACK FATIGUE. STAY LIGHT, MINIMIZE CHEATING",sets:[{reps:10,RPE:"7",weight:50},{reps:10,RPE:"7",weight:50}]},{name:"PEC FLYE",notes:"PERFORM WITH CABLE, BANDS OR DUMBBELLS, USE A FULL ROM",sets:[{reps:15,RPE:"9",weight:30},{reps:15,RPE:"9",weight:30}]},{name:"A1. INCLINE SHRUG",notes:"LIE FACE DOWN AGAINST AN INCLINE BENCH AND DO SHRUGS - FULL ROM AND SQUEEZE!",sets:[{reps:15,RPE:"9",weight:35},{reps:15,RPE:"9",weight:35}]},{name:"A2. UPRIGHT ROW",notes:"CAN USE CABLES/ROPE, BANDS OR DUMBBELLS. STOP ROM ONCE ELBOWS REACH SHOULDER HEIGHT",sets:[{reps:15,RPE:"9",weight:20},{reps:15,RPE:"9",weight:20}]},{name:"BARBELL SKULL CRUSHER",notes:"DO THESE ON A BENCH, CONSTANT TENSION ON TRICEPS",sets:[{reps:8,RPE:"8",weight:40},{reps:8,RPE:"8",weight:40}]}],[],[{name:"FLAT-BACK BARBELL BENCH PRESS",notes:"SHOULDER BLADES STILL RETRACTED AND DEPRESSED. SLIGHT ARCH IN UPPER BACK. MINIMIZE LEG DRIVE.",sets:[{reps:10,RPE:"7",weight:60},{reps:10,RPE:"7",weight:60},{reps:10,RPE:"7",weight:60}]},{name:"ECCENTRIC-ACCENTUATED PULL-UP",notes:"3 SECOND NEGATIVE ON EVERY REP, MAINTAIN CONTROLLED FORM FOR ALL REPS",sets:[{reps:99,RPE:"10",weight:0},{reps:99,RPE:"10",weight:0}]},{name:"WEIGHTED DIP",notes:"DO DUMBBELL FLOOR PRESS IF NO ACCESS TO DIP HANDLES",sets:[{reps:12,RPE:"8",weight:25},{reps:12,RPE:"8",weight:25}]},{name:"SINGLE-ARM ROW",notes:"CAN USE CABLES, BANDS OR DUMBBELLS - FEEL YOUR LATS WORKING!",sets:[{reps:10,RPE:"9",weight:30},{reps:10,RPE:"9",weight:30}]},{name:"BARBELL OR EZ BAR CURL",notes:"FOCUS ON THE MIND-MUSCLE CONNECTION",sets:[{reps:12,RPE:"9",weight:35},{reps:12,RPE:"9",weight:35},{reps:12,RPE:"9",weight:35}]},{name:"LEAN-AWAY LATERAL RAISE",notes:"USE A LIGHT DUMBBELL, CONSTANT-TENSION, NO PAUSE AT THE BOTTOM",sets:[{reps:30,RPE:"10",weight:7.5},{reps:30,RPE:"10",weight:7.5}]},{name:"BICYCLE CRUNCH",notes:"KEEP YOUR HANDS BEHIND YOUR EARS",sets:[{reps:10,RPE:"9",weight:0},{reps:10,RPE:"9",weight:0}]}]]],E=Object(s.useState)([[[{name:"SQUAT",notes:"LAST SET REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:80},{reps:6,RPE:"n/a",weight:80},{reps:6,RPE:"n/a",weight:80}]},{name:"CLOSE-GRIP BENCH PRESS",notes:"COMPLETE LAST SET, REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:70},{reps:6,RPE:"n/a",weight:70},{reps:6,RPE:"n/a",weight:70}]},{name:"DB INCLINE PRESS",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:25},{reps:8,RPE:"n/a",weight:25},{reps:8,RPE:"n/a",weight:25}]},{name:"DB LAT RAISE",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:12,RPE:"n/a",weight:10},{reps:12,RPE:"n/a",weight:10},{reps:12,RPE:"n/a",weight:10}]},{name:"CALF RAISE",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:50},{reps:10,RPE:"n/a",weight:50},{reps:10,RPE:"n/a",weight:50}]}],[],[],[],[],[]]]),t=Object(S.a)(E,2),R=t[0],r=(t[1],Object(s.useState)(0)),n=Object(S.a)(r,2),P=n[0],N=n[1],A=Object(s.useState)(0),L=Object(S.a)(A,2),h=L[0],g=L[1],p=Object(s.useState)(),c=Object(S.a)(p,2),C=c[0],o=c[1];function I(e,E,t){var s=Object(O.a)({},C);s[P][h][e].sets[E].weight=t,o(s),localStorage.setItem("program",JSON.stringify(C))}function w(e,E,t){var s=Object(O.a)({},C);s[P][h][e].sets[E].reps=t,o(s),localStorage.setItem("program",JSON.stringify(C))}if(Object(s.useEffect)((function(){var e=localStorage.getItem("program");e?(console.log(JSON.parse(e)),o(JSON.parse(e))):o(R)}),[]),C){console.log(C);var D=C[P][h].map((function(e,E){return Object(i.jsx)(a,{dayProgram:C[P][h],pageNumber:E+1,setWeight:I,setReps:w},E)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(T,{handleSetProgram:function(E){o(1===E?e:R)},setWeek:N,setDay:g,currDay:h,currWeek:P,program:C}),Object(i.jsx)("div",{children:D})]})}return Object(i.jsx)("p",{children:"Loading Data"})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(E){var t=E.getCLS,s=E.getFID,R=E.getFCP,r=E.getLCP,n=E.getTTFB;t(e),s(e),R(e),r(e),n(e)}))};n.a.render(Object(i.jsx)(R.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),L()}},[[29,1,2]]]);
//# sourceMappingURL=main.532e1432.chunk.js.map