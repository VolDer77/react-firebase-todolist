(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/add.706d0975.svg"},15:function(e,t,a){e.exports=a.p+"static/media/check.333a7a4a.svg"},17:function(e,t,a){e.exports=a(33)},22:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),c=a(12),l=a.n(c),i=(a(22),a(16)),d=a(8),s=a(13),r=a.n(s).a.initializeApp({apiKey:"AIzaSyDcYrKXTKxajIOvR1eHtQ81ME3r37fw_a4",authDomain:"react-todo-list-51376.firebaseapp.com",databaseURL:"https://react-todo-list-51376.firebaseio.com",projectId:"react-todo-list-51376",storageBucket:"react-todo-list-51376.appspot.com",messagingSenderId:"805510766515",appId:"1:805510766515:web:60d151ccfbdfa8bed6b5c6"}).firestore(),m=a(14),u=a.n(m),p=function(){var e=Object(o.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a?r.collection("todos").add({name:a,completed:!1}):alert("Input can't be blank"),c("")},className:"todo-list__add-todo"},n.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)},type:"text",placeholder:"Your todo goes here..."}),n.a.createElement("button",{className:"todo-list__add-todo-button",type:"submit"},n.a.createElement("img",{className:"icon",src:u.a,alt:"add"}))))},f=a(15),C=a.n(f),E=function(e){var t=e.todo;return n.a.createElement("div",{className:"todo-list__item ".concat(t.completed?"todo-list__item-completed":"")},n.a.createElement("div",{onClick:function(){r.collection("todos").doc(t.id).set({completed:!t.completed},{merge:!0})},className:"todo-list__item-check"},n.a.createElement("img",{className:"icon",src:C.a,alt:"check"})),n.a.createElement("p",null,t.name),n.a.createElement("div",{onClick:function(){window.confirm("Do u really want to delete this todo?","")&&r.collection("todos").doc(t.id).delete()},className:"todo-list__item-delete"},n.a.createElement("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M19 4.00138H14V2.33138C13.9765 1.6912 13.7002 1.08644 13.2316 0.649671C12.7629 0.212905 12.1402 -0.0202285 11.5 0.00137844H8.5C7.85975 -0.0202285 7.23706 0.212905 6.76843 0.649671C6.2998 1.08644 6.02346 1.6912 6 2.33138V4.00138H1C0.734784 4.00138 0.48043 4.10674 0.292893 4.29427C0.105357 4.48181 0 4.73616 0 5.00138C0 5.2666 0.105357 5.52095 0.292893 5.70849C0.48043 5.89602 0.734784 6.00138 1 6.00138H2V17.0014C2 17.797 2.31607 18.5601 2.87868 19.1227C3.44129 19.6853 4.20435 20.0014 5 20.0014H15C15.7956 20.0014 16.5587 19.6853 17.1213 19.1227C17.6839 18.5601 18 17.797 18 17.0014V6.00138H19C19.2652 6.00138 19.5196 5.89602 19.7071 5.70849C19.8946 5.52095 20 5.2666 20 5.00138C20 4.73616 19.8946 4.48181 19.7071 4.29427C19.5196 4.10674 19.2652 4.00138 19 4.00138ZM8 2.33138C8 2.17138 8.21 2.00138 8.5 2.00138H11.5C11.79 2.00138 12 2.17138 12 2.33138V4.00138H8V2.33138ZM16 17.0014C16 17.2666 15.8946 17.521 15.7071 17.7085C15.5196 17.896 15.2652 18.0014 15 18.0014H5C4.73478 18.0014 4.48043 17.896 4.29289 17.7085C4.10536 17.521 4 17.2666 4 17.0014V6.00138H16V17.0014Z",fill:"#C7C7C7"}))))};var b=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(o.useEffect)((function(){r.collection("todos").onSnapshot((function(e){return c(e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())})))}))}),[]),n.a.createElement("div",{className:"todo-list"},n.a.createElement("div",{className:"todo-list__header"},n.a.createElement("h4",null,"Todolist")),n.a.createElement(p,null),n.a.createElement("div",{className:"todo-list__items"},a.map((function(e){return n.a.createElement(E,{key:e.id,todo:e})}))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7403ecb1.chunk.js.map