(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),r=t(15),u=t.n(r),o=(t(21),t(6)),s=t(4),i=function(e){return Object(c.jsx)("input",{value:e.search,onChange:e.handleSearch})},d=function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameChange}),"number:"," ",Object(c.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){return Object(c.jsxs)("li",{children:[Object(c.jsxs)("span",{children:[e.person.name," ",e.person.number]}),Object(c.jsx)("span",{children:Object(c.jsx)("button",{onClick:function(){return e.handleDelete(e.person.id,e.person.name)},children:"Delete"})})]},e.person.name)},l=function(e){return Object(c.jsx)("ul",{children:e.persons.map((function(n){return n.name.toUpperCase().includes(e.search.toUpperCase())?Object(c.jsx)(h,{person:n,handleDelete:e.handleDelete}):null}))})},j=function(e){return null===e.message?null:Object(c.jsx)("div",{className:e.alertType,children:Object(c.jsx)("span",{children:e.message})})},b=t(3),m=t.n(b),f="/api/persons",p=function(){return m.a.get(f).then((function(e){return e.data}))},O=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),h=Object(s.a)(u,2),b=h[0],O=h[1],g=Object(a.useState)(""),x=Object(s.a)(g,2),v=x[0],S=x[1],w=Object(a.useState)(""),N=Object(s.a)(w,2),C=N[0],y=N[1],D=Object(a.useState)({}),k=Object(s.a)(D,2),T=k[0],Y=k[1];Object(a.useEffect)((function(){p().then((function(e){return r(e)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(j,{message:T.message,alertType:T.type}),Object(c.jsx)("h2",{children:"Search"}),Object(c.jsx)(i,{search:C,handleSearch:function(e){y(e.target.value)}}),Object(c.jsx)("h2",{children:"Add New Record"}),Object(c.jsx)(d,{handleSubmit:function(e){var n;e.preventDefault(),(n=b,m.a.get("".concat(f,"?name=").concat(n)).then((function(e){return e.data}))).then((function(e){var n,c={name:b,number:v};0===e.length?(function(e){return m.a.post(f,e).then((function(e){return e.data}))}(c).then((function(e){r(t.concat(e)),O(""),S("")})),Y({message:"You created a new record for ".concat(c.name),type:"alert success"}),setTimeout((function(){Y({})}),5e3)):(c=Object(o.a)(Object(o.a)({},c),{},{id:e[0].id}),window.confirm("You are updating details of ".concat(c.name,". Are You Sure?")),(n=c,m.a.put("".concat(f,"/").concat(n.id),n).then((function(e){return e.data}))).then((function(e){p().then((function(e){return r(e)})).catch((function(e){Y({message:"".concat(c.name," doesn't exist on the database."),type:"alert danger"}),setTimeout((function(){Y({})}),5e3)}))})),Y({message:"You Updated the details of ".concat(c.name),type:"alert success"}),setTimeout((function(){Y({})}),5e3))}))},handleNameChange:function(e){O(e.target.value)},handleNumberChange:function(e){S(e.target.value)},newName:b,newNumber:v}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(l,{persons:t,search:C,handleDelete:function(e,n){window.confirm("Deleting ".concat(n,". Are You Sure?")),function(e){return m.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))}(e).then(r(t.filter((function(n){return n.id!==e})))),Y({message:"You deleted ".concat(n),type:"alert danger"}),setTimeout((function(){Y({})}),5e3)}})]})};u.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.760aff45.chunk.js.map