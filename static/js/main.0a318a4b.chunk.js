(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{52:function(e,t,o){},53:function(e,t,o){},62:function(e,t,o){},63:function(e,t,o){"use strict";o.r(t);var c=o(2),n=o.n(c),a=o(20),i=o.n(a),r=(o(52),o(36)),d=o(83),s=o(82),u=o(85),j=o(84),l=(o(53),o(33)),b=l.a.initializeApp({apiKey:"AIzaSyBKk0fI0178XakiyCvj2Fq4GcVfGJBn4uk",authDomain:"todo-react-dab3d.firebaseapp.com",projectId:"todo-react-dab3d",storageBucket:"todo-react-dab3d.appspot.com",messagingSenderId:"769076376896",appId:"1:769076376896:web:a3ac8ce0e8cc754f07b6a5",measurementId:"G-QLXXM6B4KN"}),p=o(79),f=o(80),m=o(81),O=o(86),h=o(12);var x=function(e){return Object(h.jsxs)(p.a,{className:"todo_list",children:[Object(h.jsxs)(f.a,{children:[Object(h.jsx)(m.a,{}),Object(h.jsx)(O.a,{primary:e.todo.todo,secondary:"\u23f0\u23f0"})]}),Object(h.jsx)(s.a,{onClick:function(t){return b.firestore().collection("todos").doc(e.todo.id).delete()},children:"\u274eDelete"})]})};o(62);var v=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),o=t[0],n=t[1],a=Object(c.useState)(""),i=Object(r.a)(a,2),p=i[0],f=i[1];return Object(c.useEffect)((function(){b.firestore().collection("todos").orderBy("timeStamp","desc").onSnapshot((function(e){n(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Hello Vikram \ud83d\udc4b"}),Object(h.jsx)("form",{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u.a,{children:"\u2714\ufe0fWrite your TODO ..."}),Object(h.jsx)(j.a,{value:p,onChange:function(e){return f(e.target.value)}}),Object(h.jsx)(s.a,{disabled:!p,type:"submit",onClick:function(e){e.preventDefault(),b.firestore().collection("todos").add({todo:p,timeStamp:l.a.firestore.FieldValue.serverTimestamp()}),f("")},variant:"contained",color:"primary",children:"Add ToDo"})]})}),Object(h.jsx)("ul",{children:o.map((function(e){return Object(h.jsx)(x,{todo:e})}))})]})},g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,87)).then((function(t){var o=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;o(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),g()}},[[63,1,2]]]);
//# sourceMappingURL=main.0a318a4b.chunk.js.map