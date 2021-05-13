(this.webpackJsonpbfit=this.webpackJsonpbfit||[]).push([[0],{12:function(e,E,t){},13:function(e,E,t){},15:function(e,E,t){"use strict";t.r(E);var S=t(1),s=t.n(S),n=t(7),a=t.n(n),T=(t(12),t(6)),r=t(2),O=(t(13),t(0));function R(e){for(var E=[],t=function(t){E.push(Object(O.jsx)("button",{className:e.currDay===t-1?"dayWeekButtonSelected":"dayWeekButton",onClick:function(){return function(E){e.stopTimer();for(var t=document.getElementsByTagName("input"),S=0;S<t.length;S++)"checkbox"===t[S].type&&(t[S].checked=!1);e.setDay(E)}(t-1)},children:t},t))},S=1;S<e.program.length+1;S++)t(S);return Object(O.jsx)("div",{className:"DayWeekSelectionPage",children:Object(O.jsxs)("div",{className:"dayWeekContainer",children:[Object(O.jsx)("h2",{className:"promptHeader",children:"Program"}),Object(O.jsx)("h2",{className:"promptHeader",children:"Select a day"}),Object(O.jsx)("h3",{children:"Day"}),E]})})}function i(e){function E(E,t){e.setWeight(e.pageNumber-1,E,t)}function t(E,t){e.setReps(e.pageNumber-1,E,t)}var S=1!==e.pageNumber?"\u2b06 "+e.dayProgram[e.pageNumber-2].name:"",s=e.dayProgram[e.pageNumber-1].name,n=e.dayProgram[e.pageNumber-1].notes,a=e.pageNumber!==e.dayProgram.length?"\u2b07 "+e.dayProgram[e.pageNumber].name:" ",T=e.dayProgram[e.pageNumber-1].sets;return Object(O.jsxs)("section",{className:"exercisePage",children:[Object(O.jsxs)("div",{className:"topBar",children:[Object(O.jsx)("p",{className:"previousExerciseName",children:S}),Object(O.jsxs)("p",{className:"timer",children:["RESTING TIME: ",new Date(1e3*e.time).toISOString().substr(15,4),"m"]}),Object(O.jsx)("p",{className:"nextSetReminder",children:e.time>180?"START NEXT SET!":""})]}),Object(O.jsxs)("div",{className:"mainContent",children:[Object(O.jsx)("p",{className:"exerciseName",children:s}),Object(O.jsx)("div",{className:"sets",children:T.map((function(S,s){return Object(O.jsx)(N,{id:s,reps:S.reps,RPE:S.RPE,weight:S.weight,startTimer:e.startTimer,stopTimer:e.stopTimer,setWeight:E,setReps:t},e.pageNumber*s+s)}))}),Object(O.jsxs)("div",{className:"notes",children:[Object(O.jsx)("header",{className:"notesHeader",children:"NOTES"}),Object(O.jsx)("p",{className:"notesContent",children:n})]})]}),Object(O.jsx)("div",{className:"bottomBar",children:Object(O.jsx)("p",{className:"nextExerciseName",children:a})})]})}function N(e){var E=Object(S.useState)(e.weight),t=Object(r.a)(E,2),s=t[0],n=t[1],a=Object(S.useState)(e.reps),T=Object(r.a)(a,2),R=T[0],i=T[1];return Object(S.useEffect)((function(){n(e.weight),i(e.reps)}),[e.weight,e.reps]),Object(O.jsxs)("div",{className:"set",children:[Object(O.jsx)("input",{className:"checkbox",type:"checkbox",id:"set"+e.id,onClick:function(E){E.target.checked?(e.setWeight(e.id,s),e.setReps(e.id,R),e.startTimer()):e.stopTimer()},size:"medium"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"setDescriptor",children:["Reps: ",R]}),Object(O.jsxs)("p",{className:"lastWeekDescriptor",children:["Last Wk: ",e.reps]})]}),Object(O.jsxs)("div",{className:"adjustmentButtonContainer",children:[Object(O.jsx)("button",{className:"adjustmentButton",onClick:function(){return i(R+1)},children:"\u2191"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"adjustmentButton",onClick:function(){return i(R-1)},children:"\u2193"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"setDescriptor",children:["Weight: ",s,"kg"]}),Object(O.jsxs)("p",{className:"lastWeekDescriptor",children:["Last Wk: ",e.weight,"kg"]})]}),Object(O.jsxs)("div",{className:"adjustmentButtonContainer",children:[Object(O.jsx)("button",{className:"adjustmentButton",onClick:function(){return n(s+1.25)},children:"\u2191"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"adjustmentButton",onClick:function(){return n(s-1.25)},children:"\u2193"})]})]})}var c=function(){document.addEventListener("gesturestart",(function(e){e.preventDefault()})),document.addEventListener("gesturechange",(function(e){e.preventDefault()})),document.addEventListener("gestureend",(function(e){e.preventDefault()}));var e=Object(S.useState)([[{name:"HACK SQUAT",notes:"LAST SET REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:80},{reps:6,RPE:"n/a",weight:80},{reps:6,RPE:"n/a",weight:80}],update:!0},{name:"CLOSE-GRIP BENCH PRESS",notes:"COMPLETE LAST SET, REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:70},{reps:6,RPE:"n/a",weight:70},{reps:6,RPE:"n/a",weight:70}]},{name:"DB INCLINE PRESS",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:25},{reps:8,RPE:"n/a",weight:25},{reps:8,RPE:"n/a",weight:25}]},{name:"DB LAT RAISE",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:12,RPE:"n/a",weight:10},{reps:12,RPE:"n/a",weight:10},{reps:12,RPE:"n/a",weight:10}]},{name:"CALF RAISE",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:50},{reps:10,RPE:"n/a",weight:50},{reps:10,RPE:"n/a",weight:50}]}],[{name:"DEADLIFT",notes:"LAST SET REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:115},{reps:6,RPE:"n/a",weight:115},{reps:6,RPE:"n/a",weight:115}]},{name:"DB PULLOVER",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:27.5},{reps:8,RPE:"n/a",weight:27.5},{reps:8,RPE:"n/a",weight:27.5}]},{name:"DB REAR DELT RAISE",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:15},{reps:10,RPE:"n/a",weight:15},{reps:10,RPE:"n/a",weight:15}]},{name:"EZ BAR CURL",notes:"LAST SET REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:40},{reps:6,RPE:"n/a",weight:40},{reps:6,RPE:"n/a",weight:40}]},{name:"FARMERS WALK",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:45},{reps:10,RPE:"n/a",weight:45},{reps:10,RPE:"n/a",weight:45}]}],[{name:"MILITARY PRESS",notes:"LAST SET REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:50},{reps:6,RPE:"n/a",weight:50},{reps:6,RPE:"n/a",weight:50}]},{name:"HACK SQUAT",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:70},{reps:8,RPE:"n/a",weight:70},{reps:8,RPE:"n/a",weight:70}],update:!0},{name:"EZ BAR SKULLCRUSHER",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:35},{reps:8,RPE:"n/a",weight:35},{reps:8,RPE:"n/a",weight:35}]},{name:"MACHINE CHEST PRESS",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:60},{reps:10,RPE:"n/a",weight:60},{reps:10,RPE:"n/a",weight:60}]},{name:"HANGING LEG RAISE",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:0},{reps:10,RPE:"n/a",weight:0},{reps:10,RPE:"n/a",weight:0}]}],[{name:"WEIGHTED PULL UPS",notes:"LAST SET REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:70},{reps:6,RPE:"n/a",weight:70},{reps:6,RPE:"n/a",weight:70}],update:!0},{name:"SEATED ROW",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:50},{reps:8,RPE:"n/a",weight:50},{reps:8,RPE:"n/a",weight:50}]},{name:"LYING LEG CURL",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:50},{reps:10,RPE:"n/a",weight:50},{reps:10,RPE:"n/a",weight:50}]},{name:"CONCENTRATION CURL",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:6,RPE:"n/a",weight:17.5},{reps:6,RPE:"n/a",weight:17.5},{reps:6,RPE:"n/a",weight:17.5}]},{name:"CALF RAISE",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:50},{reps:10,RPE:"n/a",weight:50},{reps:10,RPE:"n/a",weight:50}]}],[{name:"BENCH PRESS",notes:"LAST SET REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:70},{reps:6,RPE:"n/a",weight:70},{reps:6,RPE:"n/a",weight:70}]},{name:"LEAN AWAY LAT RAISE",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:20},{reps:8,RPE:"n/a",weight:20},{reps:8,RPE:"n/a",weight:20}]},{name:"SINGLE LEG EXTENSION",notes:'COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN"',sets:[{reps:8,RPE:"n/a",weight:35},{reps:8,RPE:"n/a",weight:35},{reps:8,RPE:"n/a",weight:35}]},{name:"ROPE TRICEP PUSHDOWN",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:25},{reps:10,RPE:"n/a",weight:25},{reps:10,RPE:"n/a",weight:25}]},{name:"FARMERS WALK",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:45},{reps:10,RPE:"n/a",weight:45},{reps:10,RPE:"n/a",weight:45}]}],[{name:"PENDLAY ROW",notes:"LAST SET REST 15 SECONDS, DO ANOTHER 2-3 REPS, REST ANOTHER 15 SECONDS, DO ANOTHER 1-2 REPS",sets:[{reps:6,RPE:"n/a",weight:55},{reps:6,RPE:"n/a",weight:55},{reps:6,RPE:"n/a",weight:55}]},{name:"GOOD MORNING",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:60},{reps:8,RPE:"n/a",weight:60},{reps:8,RPE:"n/a",weight:60}]},{name:"STRAIGHT ARM PULLDOWN",notes:"ON THE LAST SET DO SLOW ECCENTRICS, THEN HOLD THE STRETCH AFTER THE LAST REP FOR AS LONG AS POSSIBLE",sets:[{reps:8,RPE:"n/a",weight:25},{reps:8,RPE:"n/a",weight:25},{reps:8,RPE:"n/a",weight:25}]},{name:"CABLE CURL",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:30},{reps:10,RPE:"n/a",weight:30},{reps:10,RPE:"n/a",weight:30}]},{name:"HANGING LEG RAISE",notes:"COMPLETE LAST SET, REST 15 SECONDS, THEN DO AS MANY SETS OF 3 AS POSSIBLE WITH 15 SECONDS OF REST BETWEEN",sets:[{reps:10,RPE:"n/a",weight:0},{reps:10,RPE:"n/a",weight:0},{reps:10,RPE:"n/a",weight:0}]}]]),E=Object(r.a)(e,2),t=E[0],s=E[1],n=Object(S.useState)(0),a=Object(r.a)(n,2),N=a[0],c=a[1],P=Object(S.useState)(0),p=Object(r.a)(P,2),A=p[0],g=p[1],h=Object(S.useState)(),o=Object(r.a)(h,2),L=o[0],m=o[1];function C(){L&&(clearInterval(L),m());var e=new Date,E=setInterval((function(){g(((new Date).getTime()-e.getTime())/1e3)}),1e3);m(E)}function D(){L&&(clearInterval(L),m()),g(0)}function H(e,E,S){var n=Object(T.a)(t);n[N][e].sets[E].weight=S,s(n),localStorage.setItem("program",JSON.stringify(t))}function u(e,E,S){var n=Object(T.a)(t);n[N][e].sets[E].reps=S,s(n),localStorage.setItem("program",JSON.stringify(t))}if(Object(S.useEffect)((function(){var e=JSON.parse(localStorage.getItem("program"));e&&(t.forEach((function(E,t){E.forEach((function(E,S){"update"in E&&(e[t][S].name=E.name,console.log("updated!"))}))})),localStorage.setItem("program",JSON.stringify(e)),s(e))}),[]),t){var j=t[N].map((function(e,E){return Object(O.jsx)(i,{dayProgram:t[N],pageNumber:E+1,setWeight:H,setReps:u,time:A,startTimer:C,stopTimer:D},N*E+E)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)(R,{setDay:c,currDay:N,program:t,stopTimer:D}),Object(O.jsx)("div",{children:j})]})}return Object(O.jsx)("p",{children:"Loading Data"})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(E){var t=E.getCLS,S=E.getFID,s=E.getFCP,n=E.getLCP,a=E.getTTFB;t(e),S(e),s(e),n(e),a(e)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(c,{})}),document.getElementById("root")),P()}},[[15,1,2]]]);
//# sourceMappingURL=main.6d13b74e.chunk.js.map