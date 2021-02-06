(this["webpackJsonpdish-poll"]=this["webpackJsonpdish-poll"]||[]).push([[0],{37:function(e,s,t){},38:function(e,s,t){},49:function(e,s,t){"use strict";t.r(s);var n=t(1),c=t.n(n),a=t(17),r=t.n(a),i=(t(37),t(38),t(3)),d=t(11),j=t(5),l=t(28),o=t.n(l),u=function(e){new o.a({text:e,layout:"bottomRight",theme:"nest",type:"alert",timeout:750}).show()},h=function(e){return{type:"UPDATE_USER",payload:e}},b=function(e){return{type:"UPDATE_VOTE",payload:e}},O=t(0);var x=function(){var e=Object(n.useState)({username:"",password:""}),s=Object(d.a)(e,2),t=s[0],c=s[1],a=Object(j.b)(),r=Object(j.c)((function(e){return e.user.users}));return Object(O.jsx)("div",{className:"login-container",children:Object(O.jsxs)("div",{className:"contents",children:[Object(O.jsx)("div",{className:"wtext",children:"Welcome Back,"}),Object(O.jsx)("h1",{children:"Log In!"}),Object(O.jsx)("input",{type:"text",value:t.username,onChange:function(e){return c(Object(i.a)(Object(i.a)({},t),{},{username:e.target.value}))},placeholder:"Username"}),Object(O.jsx)("input",{type:"password",value:t.password,onChange:function(e){return c(Object(i.a)(Object(i.a)({},t),{},{password:e.target.value}))},placeholder:"Password"}),Object(O.jsx)("button",{onClick:function(){if(""!==t.username&&""!==t.password){var e=r.findIndex((function(e){return e.username===t.username}));if(-1!==e)if(r[e].password===t.password)a((u("Login Success"),{type:"LOGIN_USER"})),a({type:"SET_CURR_USER",payload:r[e]}),console.log("logged in");else u("invalid username or password");else u("invalid username or password")}else u("please fill all the fields")},children:"Log In"})]})})},m=t(16),p=t(4),v=t(29),f=t.n(v);var g=function(){var e=Object(j.b)(),s=Object(j.c)((function(e){return e.user.currentUser})),t=Object(n.useState)({id:Date.now(),name:"",image:"",description:"",votes:0,createdBy:s.username}),c=Object(d.a)(t,2),a=c[0],r=c[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"add-product-container",children:[Object(O.jsx)("div",{className:"heading",children:"Add a new dish"}),Object(O.jsxs)("div",{className:"input-box",children:[Object(O.jsxs)("span",{children:["Dish name ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{value:a.name,onChange:function(e){return r(Object(i.a)(Object(i.a)({},a),{},{name:e.target.value}))},type:"text"}),Object(O.jsxs)("span",{children:["Image ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("div",{children:Object(O.jsx)(f.a,{className:"file-input",multiple:!1,onDone:function(e){var s=e.base64;return r(Object(i.a)(Object(i.a)({},a),{},{image:s}))}})}),Object(O.jsxs)("span",{children:["Description ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("textarea",{value:a.description,onChange:function(e){return r(Object(i.a)(Object(i.a)({},a),{},{description:e.target.value}))}}),Object(O.jsx)("button",{onClick:function(){var s;""!==a.name&&""!==a.description&&""!=a.image&&(e((s=a,u("Dish Added"),{type:"ADD_DISH",payload:s})),r(Object(i.a)(Object(i.a)({},a),{},{id:Date.now(),name:"",description:"",image:""})))},children:"Add Dish"})]})]})})},D=t(13);var k=function(e){var s=e.dish,t=function(){var e=Object(n.useState)(0),s=Object(d.a)(e,2),t=(s[0],s[1]);return function(){return t((function(e){return e+1}))}}(),c=Object(j.b)(),a=Object(j.c)((function(e){return e.user.currentUser})),r="";return r=a.likedDishes.includes(s.id)?"dish-card dish-selected":"dish-card ",Object(O.jsxs)("div",{className:r,children:[Object(O.jsx)("div",{className:"img-container",onClick:function(){if(a.likedDishes.includes(s.id)){var e=a,n=e.likedDishes.findIndex((function(e){return e===s.id}));e.likedDishes.splice(n,1),c(h(e));var r=s;s.votes>0&&r.votes--,c(b(r)),u("Vote Removed")}else{if(3===a.likedDishes.length)return void u("can't vote more than 3 times");if(a.username===s.createdBy)return void u("can't vote own dishes");var i=a;i.likedDishes=[].concat(Object(D.a)(a.likedDishes),[s.id]),c(h(i));var d=s;d.votes++,c(b(d)),u("Vote added")}t()},children:Object(O.jsx)("img",{src:s.image})}),Object(O.jsx)("div",{className:"name",children:s.name}),Object(O.jsx)("div",{className:"description",children:s.description}),Object(O.jsxs)("div",{className:"author",children:["CreatedBy : ",s.createdBy]})]})};var y=function(){var e=Object(j.c)((function(e){return e.dish.dish}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"note",children:"Note : You can only vote for three dishes."}),Object(O.jsxs)("div",{className:"dish-container",children:[0===e.length&&Object(O.jsx)("h1",{children:"No Dishes to display!"}),e.map((function(e,s){return Object(O.jsx)(k,{dish:e,index:s},s)}))]})]})};var N=function(e){var s=e.dish,t=e.index,n="";return n=Object(j.c)((function(e){return e.user.currentUser})).likedDishes.includes(s.id)?"tr-s":" ",Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{className:n,children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:s.name}),Object(O.jsxs)("td",{children:[s.votes," "]}),Object(O.jsx)("td",{children:s.createdBy})]})})})};var w=function(){var e=Object(j.c)((function(e){return e.dish.dish})),s=Object(D.a)(e);return s.sort((function(e,s){var t=e.votes,n=s.votes,c=0;return t>n?c=-1:t<n&&(c=1),c})),console.log(s),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("table",{className:"results",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Ranking"}),Object(O.jsx)("th",{children:"Dish Name"}),Object(O.jsx)("th",{children:"Votes"}),Object(O.jsx)("th",{children:"CreatedBy"})]})}),s.map((function(e,s){return Object(O.jsx)(N,{dish:e,index:s},s)}))]})})};var U=function(){var e=Object(j.b)(),s=Object(n.useState)("addDish"),t=Object(d.a)(s,2),c=t[0],a=t[1],r="",i="",l="";if("addDish"===c){r="selected";i="",l=""}else if("vote"===c)r="",i="selected",l="";else r="",i="",l="selected";return Object(O.jsx)(m.a,{children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("h1",{children:["Dishes ",Object(O.jsx)("i",{className:"fas fa-utensils"})]}),Object(O.jsx)("h2",{onClick:function(){return e((u("Log Out Success"),{type:"LOGOUT_USER"}))},children:"LogOut"})]}),Object(O.jsxs)("div",{className:"nav-bar",children:[Object(O.jsx)(m.b,{to:"/",children:Object(O.jsxs)("h3",{className:r,onClick:function(){return a("addDish")},children:["Add Dish  ",Object(O.jsx)("i",{className:"fas fa-plus-square"})]})}),Object(O.jsx)(m.b,{to:"/vote",children:Object(O.jsxs)("h3",{className:i,onClick:function(){return a("vote")},children:["Vote  ",Object(O.jsx)("i",{className:"fas fa-vote-yea"})]})}),Object(O.jsx)(m.b,{to:"/results",children:Object(O.jsxs)("h3",{className:l,onClick:function(){return a("results")},children:["Results  ",Object(O.jsx)("i",{className:"fas fa-poll-h"})]})})]}),Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",children:Object(O.jsx)(g,{})}),Object(O.jsx)(p.a,{path:"/vote",children:Object(O.jsx)(y,{})}),Object(O.jsx)(p.a,{path:"/results",children:Object(O.jsx)(w,{})})]})]})})};t(45),t(46);var S=function(){var e=Object(j.c)((function(e){return e.user.isLoggedIn}));return Object(O.jsxs)("div",{className:"App",children:[!1===e&&Object(O.jsx)(x,{}),!0===e&&Object(O.jsx)(U,{})]})},E=t(30),R=t(10),I=t(31),C={users:[{username:"deepak",password:"deepak123",likedDishes:[]},{username:"aman",password:"aman123",likedDishes:[]},{username:"anand",password:"anand123",likedDishes:[]},{username:"neha",password:"neha123",likedDishes:[]},{username:"nikhil",password:"nikhil123",likedDishes:[]},{username:"jay",password:"jay123",likedDishes:[]},{username:"anil",password:"anil123",likedDishes:[]},{username:"ankit",password:"ankit123",likedDishes:[]},{username:"shiva",password:"shiva123",likedDishes:[]},{username:"pankaj",password:"pankaj123",likedDishes:[]}],currentUser:{},isLoggedIn:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"LOGIN_USER":return Object(i.a)(Object(i.a)({},e),{},{isLoggedIn:!0});case"SET_CURR_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUser:s.payload});case"LOGOUT_USER":return Object(i.a)(Object(i.a)({},e),{},{isLoggedIn:!1,currentUser:{}});case"UPDATE_USER":var t=e.users.findIndex((function(e){return e.username===s.payload.username})),n=e.users;return n[t]=s.payload,Object(i.a)(Object(i.a)({},e),{},{users:n});default:return e}},L={dish:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"ADD_DISH":return Object(i.a)(Object(i.a)({},e),{},{dish:[].concat(Object(D.a)(e.dish),[s.payload])});case"UPDATE_VOTE":var t=e.dish.findIndex((function(e){return e.id===s.payload.id})),n=e.dish;return n[t]=s.payload,Object(i.a)(Object(i.a)({},e),{},{dish:n});default:return e}},T=t(20),B=t(32),V=t.n(B),F=Object(R.combineReducers)({user:_,dish:A}),P={key:"root",storage:V.a},q=Object(T.a)(P,F),G=Object(R.createStore)(q,Object(I.composeWithDevTools)()),H=Object(T.b)(G);r.a.render(Object(O.jsx)(j.a,{store:G,children:Object(O.jsx)(E.a,{persistor:H,children:Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.1ba8b77d.chunk.js.map