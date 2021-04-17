(this.webpackJsonpbfit=this.webpackJsonpbfit||[]).push([[0],{20:function(e,t,s){},21:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var E=s(0),r=s.n(E),R=s(5),n=s.n(R),i=(s(20),s(4)),a=(s(21),s(43)),P=s(1);function O(e){return Object(P.jsx)("div",{className:"DayWeekSelectionPage",children:Object(P.jsxs)("div",{className:"dayWeekContainer",children:[Object(P.jsx)("h2",{className:"promptHeader",children:"Select a day and a week"}),Object(P.jsx)("h3",{children:"Week"}),[1].map((function(t){return Object(P.jsx)("button",{className:e.currWeek===t-1?"dayWeekButtonSelected":"dayWeekButton",onClick:function(){return e.setWeek(t-1)},children:t})})),Object(P.jsx)("h3",{children:"Day"}),[1,2,3,4,5].map((function(t){return Object(P.jsx)("button",{className:e.currDay===t-1?"dayWeekButtonSelected":"dayWeekButton",onClick:function(){return e.setDay(t-1)},children:t})}))]})})}function c(e){var t=Object(E.useState)(0),s=Object(i.a)(t,2),r=s[0],R=s[1],n=Object(E.useState)(),a=Object(i.a)(n,2),O=a[0],c=a[1];function h(){O&&(clearInterval(O),c());var e=new Date,t=setInterval((function(){R(((new Date).getTime()-e.getTime())/1e3)}),1e3);c(t)}function S(){O&&(clearInterval(O),c()),R(0)}var p=1!==e.pageNumber?"\u2b06 "+e.dayProgram[e.pageNumber-2].name:"",N=e.dayProgram[e.pageNumber-1].name,A=e.dayProgram[e.pageNumber-1].notes,g=e.pageNumber!==e.dayProgram.length?"\u2b07 "+e.dayProgram[e.pageNumber].name:" ",m=e.dayProgram[e.pageNumber-1].sets;return Object(P.jsxs)("section",{className:"exercisePage",children:[Object(P.jsxs)("div",{className:"topBar",children:[Object(P.jsx)("p",{className:"previousExerciseName",children:p}),Object(P.jsxs)("p",{className:"timer",children:["RESTING TIME: ",new Date(1e3*r).toISOString().substr(15,4),"m"]}),Object(P.jsx)("p",{className:"nextSetReminder",children:r>180?"START NEXT SET!":""})]}),Object(P.jsxs)("div",{className:"mainContent",children:[Object(P.jsx)("p",{className:"exerciseName",children:N}),Object(P.jsx)("div",{className:"sets",children:m.map((function(e,t){return Object(P.jsx)(T,{id:t,reps:e.reps,RPE:e.RPE,weight:e.weight,startTimer:h,stopTimer:S})}))}),Object(P.jsxs)("div",{className:"notes",children:[Object(P.jsx)("header",{className:"notesHeader",children:"NOTES"}),Object(P.jsx)("p",{className:"notesContent",children:A})]})]}),Object(P.jsx)("div",{className:"bottomBar",children:Object(P.jsx)("p",{className:"nextExerciseName",children:g})})]})}function T(e){return Object(P.jsxs)("div",{className:"set",children:[Object(P.jsx)(a.a,{className:"checkbox",type:"checkbox",id:"set"+e.id,onClick:function(t){t.target.checked?e.startTimer():e.stopTimer()},size:"medium"}),Object(P.jsxs)("p",{className:"setDescriptor",children:["Reps: ",e.reps]}),Object(P.jsxs)("p",{className:"setDescriptor",children:["RPE: ",e.RPE]}),Object(P.jsxs)("p",{className:"setDescriptor",children:["Weight: ",e.weight]})]})}var h=function(){var e=Object(E.useState)(0),t=Object(i.a)(e,2),s=t[0],r=t[1],R=Object(E.useState)(4),n=Object(i.a)(R,2),a=n[0],T=n[1],h=[[[{name:"Back Squat",notes:"FOCUS ON TECHNIQUE AND EXPLOSIVE POWER!",sets:[{reps:5,RPE:"80%",weight:70}]},{name:"Back Squat",notes:"KEEP BACK ANGLE AND FORM CONSISTENT ACROSS ALL REPS",sets:[{reps:8,RPE:"70%",weight:60},{reps:8,RPE:"70%",weight:60}]},{name:"Overhead Press",notes:"RESET EACH REP (DON'T TOUCH-AND-PRESS)",sets:[{reps:8,RPE:"80%",weight:40},{reps:8,RPE:"80%",weight:40},{reps:8,RPE:"80%",weight:40}]},{name:"Lying Leg Curl",notes:"FOCUS ON SQUEEZING GLUTES",sets:[{reps:8,RPE:"7",weight:40},{reps:8,RPE:"7",weight:40},{reps:8,RPE:"7",weight:40}]},{name:"Helms Row",notes:"STRICT FORM. DRIVE ELBOWS OUT AND BACK AT 45 DEGREE ANGLE",sets:[{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20}]},{name:"Hammer Curl",notes:"KEEP ELBOWS LOCKED IN PLACE, SQUEEZE THE DUMBBELL HANDLE HARD!",sets:[{reps:20,RPE:"10",weight:15},{reps:20,RPE:"10",weight:15},{reps:20,RPE:"10",weight:15}]}],[{name:"DEADLIFT",notes:"CONVENTIONAL OR SUMO: USE WHATEVER STANCE YOU ARE STRONGER WITH",sets:[{reps:4,RPE:"80%",weight:100},{reps:4,RPE:"80%",weight:100},{reps:4,RPE:"80%",weight:100}]},{name:"BARBELL BENCH PRESS",notes:"TOP SET. LEAVE 1 (MAYBE 2) REPS IN THE TANK. HARD SET.",sets:[{reps:3,RPE:"85%",weight:60}]},{name:"BARBELL BENCH PRESS",notes:"QUICK 1 SECOND PAUSE ON THE CHEST ON EACH REP",sets:[{reps:10,RPE:"70%",weight:50},{reps:10,RPE:"70%",weight:50}]},{name:"HIP ABDUCTION",notes:"MACHINE, BAND OR WEIGHTED, 1 SECOND ISOMETRIC HOLD AT THE TOP OF EACH REP",sets:[{reps:15,RPE:"9",weight:32},{reps:15,RPE:"9",weight:32},{reps:15,RPE:"9",weight:32}]},{name:"WEIGHTED PULL-UP",notes:"1.5X SHOULDER WIDTH GRIP, PULL YOUR CHEST TO THE BAR",sets:[{reps:5,RPE:"8",weight:20},{reps:5,RPE:"8",weight:20},{reps:5,RPE:"8",weight:20}]},{name:"STANDING CALF RAISE",notes:"1-2 SECOND PAUSE AT THE BOTTOM OF EACH REP, FULL ROM",sets:[{reps:8,RPE:"9",weight:100},{reps:8,RPE:"9",weight:100},{reps:8,RPE:"9",weight:100}]}],[{name:"BACK SQUAT",notes:"MAINTAIN TIGHT PRESSURE IN YOUR UPPER BACK AGAINST THE BAR",sets:[{reps:4,RPE:"80%",weight:80},{reps:4,RPE:"80%",weight:80},{reps:4,RPE:"80%",weight:80}]},{name:"WEIGHTED DIP",notes:"DO DUMBBELL FLOOR PRESS IF NO ACCESS TO DIP HANDLES",sets:[{reps:8,RPE:"8",weight:20},{reps:8,RPE:"8",weight:20},{reps:8,RPE:"8",weight:20}]},{name:"HANGING LEG RAISE",notes:"KNEES TO CHEST, CONTROLLED REPS, STRAIGHTEN LEGS MORE TO INCREASE DIFFICULTY",sets:[{reps:10,RPE:"9",weight:0},{reps:10,RPE:"9",weight:0},{reps:10,RPE:"9",weight:0}]},{name:"DB PULL-OVER",notes:"CAN USE A DB, CABLE/ROPE OR BAND, STRETCH AND SQUEEZE LATS!",sets:[{reps:12,RPE:"8",weight:24},{reps:12,RPE:"8",weight:24},{reps:12,RPE:"8",weight:24}]},{name:"INCLINE DUMBBELL CURL",notes:"DO EACH ARM ONE AT A TIME RATHER THAN ALTERNATING, START WITH YOUR WEAK ARM",sets:[{reps:12,RPE:"9",weight:15},{reps:12,RPE:"9",weight:15},{reps:12,RPE:"9",weight:15}]},{name:"FACE PULL",notes:"CAN USE CABLE/ROPE OR BAND, RETRACT YOUR SHOULDER BLADES AS YOU PULL",sets:[{reps:12,RPE:"9",weight:40},{reps:12,RPE:"9",weight:40},{reps:12,RPE:"9",weight:40},{reps:12,RPE:"9",weight:40}]}],[{name:"PAUSE DEADLIFT",notes:"3 SECOND PAUSE RIGHT AFTER THE PLATES COME OFF THE GROUND",sets:[{reps:2,RPE:"75%",weight:110},{reps:2,RPE:"75%",weight:110},{reps:2,RPE:"75%",weight:110},{reps:2,RPE:"75%",weight:110}]},{name:"PAUSE BARBELL BENCH PRESS",notes:"2-3 SECOND PAUSE ON THE CHEST",sets:[{reps:5,RPE:"75%",weight:60},{reps:5,RPE:"75%",weight:60},{reps:5,RPE:"75%",weight:60}]},{name:"CHEST-SUPPORTED T-BAR ROW ",notes:"BE MINDFUL OF LOWER BACK FATIGUE. STAY LIGHT, MINIMIZE CHEATING",sets:[{reps:10,RPE:"7",weight:50},{reps:10,RPE:"7",weight:50},{reps:10,RPE:"7",weight:50}]},{name:"LYING LEG CURL",notes:"FOCUS ON SQUEEZING HAMSTRINGS",sets:[{reps:6,RPE:"8",weight:45},{reps:6,RPE:"8",weight:45},{reps:6,RPE:"8",weight:45}]},{name:"DUMBBELL SHRUG",notes:"FEEL A STRETCH ON THE TRAPS AT THE BOTTOM, SQUEEZE HARD AT THE TOP",sets:[{reps:20,RPE:"9",weight:15},{reps:20,RPE:"9",weight:15},{reps:20,RPE:"9",weight:15}]}],[{name:"EZ BAR CURL",notes:"CURL THE BAR OUT AND UP IN AN ARC. MINIMIZE MOMENTUM.",sets:[{reps:12,RPE:"8",weight:35},{reps:12,RPE:"8",weight:35},{reps:12,RPE:"8",weight:35}]},{name:"SKULL CRUSHER",notes:"ARC THE BAR BACK BEHIND YOUR HEAD, SOFT TOUCH ON THE FLOOR BEHIND YOU",sets:[{reps:12,RPE:"8",weight:35},{reps:12,RPE:"8",weight:35},{reps:12,RPE:"8",weight:35}]},{name:"CABLE CURL (REVERSE 21s)",notes:"DO BOTH ARMS AT ONCE: 7 REPS FULL ROM, 7 REPS TOP 1/2, 7 REPS BOTTOM 1/2",sets:[{reps:21,RPE:"10",weight:40},{reps:21,RPE:"7",weight:40},{reps:21,RPE:"7",weight:40}]},{name:"TRICEPS PRESSDOWN (REVERSE 21s)",notes:"DO BOTH ARMS AT ONCE: 7 REPS FULL ROM, 7 REPS BOTTOM 1/2, 7 REPS TOP 1/2",sets:[{reps:21,RPE:"10",weight:45},{reps:21,RPE:"10",weight:45},{reps:21,RPE:"10",weight:45}]},{name:"DUMBBELL LATERAL RAISE",notes:"ARC THE DUMBBELL OUT, MIND-MUSCLE CONNECTION WITH MIDDLE FIBERS",sets:[{reps:20,RPE:"9",weight:10},{reps:20,RPE:"9",weight:10},{reps:20,RPE:"9",weight:10}]},{name:"DUMBBELL SHRUG",notes:"1-2 SECOND PAUSE AT THE BOTTOM OF EACH REP, FULL SQUEEZE AT THE TOP",sets:[{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20},{reps:12,RPE:"9",weight:20}]}]]],S=h[s][a].map((function(e,t){return Object(P.jsx)(c,{dayProgram:h[s][a],pageNumber:t+1})}));return Object(P.jsxs)("div",{children:[Object(P.jsx)(O,{setWeek:r,setDay:T,currDay:a,currWeek:s}),Object(P.jsx)("div",{children:S})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,E=t.getFID,r=t.getFCP,R=t.getLCP,n=t.getTTFB;s(e),E(e),r(e),R(e),n(e)}))};n.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(h,{})}),document.getElementById("root")),S()}},[[27,1,2]]]);
//# sourceMappingURL=main.502ec6c6.chunk.js.map