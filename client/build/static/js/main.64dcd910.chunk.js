(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a,c,r,i,l,o,s,j,b=n(1),d=n.n(b),u=n(23),p=n.n(u),h=(n(32),n(26)),O=n(3),g=n(5),m=n.n(g),x=n(9),f=n(2),v=n(7),y=n(8),k=n(6),S=n(0),C=y.a.div(a||(a=Object(v.a)(["\n    background-color: #7e52a0;\n    color: #E6BCCD;\n    width: 700px;\n    margin-left: 120px;\n    padding: 25px;\n    border-radius: 5px;\n    box-shadow: 2px 2px 25px #d295bf;\n"]))),N=y.a.button(c||(c=Object(v.a)(["\n    background-color: #D295BF;\n    color: #f5f9e9;\n    border: 1px solid #f5f9e9;\n    margin-left: 10px;\n    margin-right: 20px;\n    text-decoration: none;\n    &:hover {\n        background-color: #29274c;\n        color: #d295bf;\n        border: 1px solid #1C2541;\n    }\n"]))),w=y.a.h1(r||(r=Object(v.a)(["\n    color: #7E52A0;\n    margin-top: 100px;\n    margin-left: 160px;\n    margin-bottom: 25px;\n"]))),T=function(e){var t=e.initialName,n=e.initialType,a=e.initialDescription,c=e.initialSkillOne,r=e.initialSkillTwo,i=e.initialSkillThree,l=e.onSubmitProp;console.log("LOGGING THE ON SUBMIT PROP",l);var o=Object(b.useState)({name:"",type:"",description:""}),s=Object(O.a)(o,2),j=s[0],d=s[1],u=Object(b.useState)(t),p=Object(O.a)(u,2),h=p[0],g=p[1],m=Object(b.useState)(n),v=Object(O.a)(m,2),y=v[0],T=v[1],D=Object(b.useState)(a),E=Object(O.a)(D,2),P=E[0],F=E[1],B=Object(b.useState)(c),I=Object(O.a)(B,2),_=I[0],L=I[1],A=Object(b.useState)(r),G=Object(O.a)(A,2),J=G[0],M=G[1],U=Object(b.useState)(i),H=Object(O.a)(U,2),R=H[0],q=H[1],z=Object(b.useState)([]),K=Object(O.a)(z,2),Q=K[0],V=K[1],W=function(e){console.log(Q),"name"===e.target.name&&e.target.value.length<=3?V(Object(f.a)(Object(f.a)({},Q),{},{name:"Name needs more than 3 characters"})):"name"===e.target.name&&e.target.value.length>3?V(Object(f.a)(Object(f.a)({},Q),{},{name:""})):"type"===e.target.name&&e.target.value.length<=3?V(Object(f.a)(Object(f.a)({},Q),{},{type:"please enter a valid type of pet"})):"type"===e.target.name&&e.target.value.length>3?V(Object(f.a)(Object(f.a)({},Q),{},{type:""})):"description"===e.target.name&&e.target.value.length<=3?V(Object(f.a)(Object(f.a)({},Q),{},{description:"Please enter a valid description"})):"description"===e.target.name&&e.target.value.length>3&&V(Object(f.a)(Object(f.a)({},Q),{},{description:""})),d(Object(f.a)(Object(f.a)({},j),{},Object(x.a)({},e.target.name,e.target.value)))};return Object(S.jsxs)("div",{children:[Object(S.jsx)(w,{children:"Pet Shelter - Adopt A Friend Today"}),Object(S.jsx)(C,{children:Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l({name:h,type:y,description:P,skillOne:_,skillTwo:J,skillThree:R}),Object(k.c)("/petshelter/all")},children:[Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Name"}),Object(S.jsx)("input",{type:"text",onInput:function(e){return W(e)},onChange:function(e){return g(e.target.value)},name:"name",value:h}),Q.name]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Type"}),Object(S.jsx)("input",{type:"text",onInput:function(e){return W(e)},onChange:function(e){return T(e.target.value)},name:"type",value:y}),Q.type]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Description"}),Object(S.jsx)("input",{type:"text",onInput:function(e){return W(e)},onChange:function(e){return F(e.target.value)},name:"description",value:P}),Q.description]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Skills"}),Object(S.jsx)("input",{type:"text",onChange:function(e){return L(e.target.value)},value:_}),Object(S.jsx)("input",{type:"text",onChange:function(e){return M(e.target.value)},value:J}),Object(S.jsx)("input",{type:"text",onChange:function(e){return q(e.target.value)},value:R})]}),Object(S.jsx)(N,{type:"submit",className:"btn btn-primary",children:"Submit"})]})})]})},D=y.a.button(i||(i=Object(v.a)(["\n    background-color: #D295BF;\n    color: #f5f9e9;\n    border: 1px solid #f5f9e9;\n    margin-left: 10px;\n    margin-right: 20px;\n    text-decoration: none;\n    &:hover {\n        background-color: #29274c;\n        color: #d295bf;\n        border: 1px solid #1C2541;\n    }\n"]))),E=function(e){var t=e.id,n=e.successCallback;return Object(S.jsx)(D,{onClick:function(e){m.a.delete("http://localhost:8000/api/petshelter/"+t).then((function(e){n()}))},children:"Delete"})},P=y.a.div(l||(l=Object(v.a)(["\n    background-color: #7e52a0;\n    color: #E6BCCD;\n    width: 400px;\n    margin-left: 120px;\n    padding: 25px;\n    box-shadow: 2px 2px 25px #d295bf;\n    border-radius: 5px;\n"]))),F=y.a.button(o||(o=Object(v.a)(["\n    background-color: #D295BF;\n    color: #f5f9e9;\n    border: 1px solid #f5f9e9;\n    margin-left: 10px;\n    margin-right: 20px;\n    text-decoration: none;\n    &:hover {\n        background-color: #29274c;\n        color: #d295bf;\n        border: 1px solid #1C2541;\n    }\n"]))),B=y.a.h1(s||(s=Object(v.a)(["\n    color: #7E52A0;\n    margin-top: 100px;\n    margin-left: 160px;\n    margin-bottom: 25px;\n"]))),I=function(e){return Object(S.jsxs)("div",{children:[Object(S.jsx)(B,{children:"Adoptable Pets"}),Object(S.jsx)(P,{children:e.pets.map((function(t,n){return Object(S.jsxs)("p",{children:[Object(S.jsx)(k.a,{to:"/petshelter/"+t._id,children:t.name}),", ",t.type," ",t.description,Object(S.jsx)(F,{children:Object(S.jsx)(k.a,{to:"/petshelter/edit/"+t._id,children:"Edit"})}),Object(S.jsx)(E,{id:t._id,successCallback:function(){return n=t._id,void e.setPets(e.pets.filter((function(e){return e._id!=n})));var n}})]},n)}))})]})},_=function(){var e=Object(b.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(!1),r=Object(O.a)(c,2),i=r[0],l=r[1];Object(b.useEffect)((function(){m.a.get("http://localhost:8000/api/petshelter/all").then((function(e){console.log(e),a(e.data),l(!0)})).catch((function(e){return console.error(e)}))}),[]);return Object(S.jsxs)("div",{id:"flexy",children:[Object(S.jsx)(T,{onSubmitProp:function(e){m.a.post("http://localhost:8000/api/petsheleter/add",e).then((function(e){a([].concat(Object(h.a)(n),[e.data]))})).catch((function(e){return console.log("errors trying to add a new pet",e)}))},initialName:"",initialType:"",initialDescription:"",initialSkillOne:"",initialSkillTwo:"",initialSkillThree:""}),i&&Object(S.jsx)(I,{pets:n,setPets:a,removeFromDom:function(e){a(n.filter((function(t){return t._id!=e})))}})]})},L=y.a.button(j||(j=Object(v.a)(["\n    background-color: #D295BF;\n    color: #f5f9e9;\n    border: 1px solid #f5f9e9;\n    margin-left: 10px;\n    margin-right: 20px;\n    text-decoration: none;\n    &:hover {\n        background-color: #29274c;\n        color: #d295bf;\n        border: 1px solid #1C2541;\n    }\n"]))),A=function(e){var t=Object(b.useState)({}),n=Object(O.a)(t,2),a=n[0],c=n[1];return Object(b.useEffect)((function(){m.a.get("http://localhost:8000/api/petshelter/"+e.id).then((function(e){return c(e.data)}))}),[]),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("h1",{style:{color:"#E6BCCD"},children:a.name}),Object(S.jsx)("h3",{style:{color:"#E6BCCD"},children:a.type}),Object(S.jsx)("p",{style:{color:"#E6BCCD"},children:a.description}),Object(S.jsxs)("ul",{style:{color:"#f5f9e9"},children:[Object(S.jsx)("li",{children:a.skillOne}),Object(S.jsx)("li",{children:a.skillTwo}),Object(S.jsx)("li",{children:a.skillThree})]}),Object(S.jsx)(k.a,{to:"/petshelter/edit/"+a._id,children:Object(S.jsx)(L,{children:"Edit"})})]})},G=function(e){var t=e.id,n=Object(b.useState)(),a=Object(O.a)(n,2),c=a[0],r=a[1],i=Object(b.useState)(!1),l=Object(O.a)(i,2),o=l[0],s=l[1];Object(b.useEffect)((function(){m.a.get("http://localhost:8000/api/petshelter/"+t).then((function(e){r(e.data),s(!0)})).catch((function(e){return console.log(e)}))}),[]);return Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Update an Pet Information"}),o&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(T,{onSubmitProp:function(e){console.log("we are trying to update a pet"),m.a.put("http://localhost:8000/api/petshelter/"+t,e).then((function(e){return console.log(e)}),Object(k.c)("/petshelter/all")).catch((function(e){return console.log(e)}))},initialName:c.name,initialType:c.type,initialDescription:c.description,initialSkillOne:c.skillOne,initialSkillTwo:c.skillTwo,initialSkillThree:c.skillThree}),Object(S.jsx)(E,{id:c._id,successCallback:function(){return Object(k.c)("/petshelter/all")}})]})]})},J=(n(61),function(e){e.inputs;var t=e.setInputs,n=Object(b.useState)({firstName:"",lastName:"",email:"",password:""}),a=Object(O.a)(n,2),c=a[0],r=a[1],i=Object(b.useState)([]),l=Object(O.a)(i,2),o=l[0],s=l[1],j=function(e){console.log(o),"firstName"===e.target.name&&e.target.value.length<=2?s(Object(f.a)(Object(f.a)({},o),{},{firstName:"First name needs more than 2 characters"})):"firstName"===e.target.name&&e.target.value.length>2?s(Object(f.a)(Object(f.a)({},o),{},{firstName:""})):"lastName"===e.target.name&&e.target.value.length<=2?s(Object(f.a)(Object(f.a)({},o),{},{lastName:"Last name needs more than 2 characters"})):"lastName"===e.target.name&&e.target.value.length>2?s(Object(f.a)(Object(f.a)({},o),{},{lastName:""})):"email"===e.target.name&&e.target.value.length<=5?s(Object(f.a)(Object(f.a)({},o),{},{email:"Please enter a valid email"})):"email"===e.target.name&&e.target.value.length>5?s(Object(f.a)(Object(f.a)({},o),{},{email:""})):"password"===e.target.name&&e.target.value.length<8?s(Object(f.a)(Object(f.a)({},o),{},{password:"please enter a password that is 8 characters long"})):"password"===e.target.name&&e.target.value.length>=8&&s(Object(f.a)(Object(f.a)({},o),{},{password:""})),r(Object(f.a)(Object(f.a)({},c),{},Object(x.a)({},e.target.name,e.target.value)))};return Object(S.jsx)("section",{class:"d-flex justify-content-center align-items-lg-center register-photo",children:Object(S.jsx)("div",{class:"form-container",style:{width:426},children:Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(Object(f.a)({},c))},children:[Object(S.jsx)("h2",{class:"text-center",children:Object(S.jsx)("strong",{children:"Login"})}),Object(S.jsxs)("div",{class:"form-group",children:[Object(S.jsx)("input",{type:"text",name:"firstName",onChange:function(e){return j(e)},placeholder:"First Name"}),o.firstName]}),Object(S.jsxs)("div",{class:"form-group",children:[Object(S.jsx)("input",{type:"text",name:"lastName",onChange:function(e){return j(e)},placeholder:"Last Name"}),o.lastName]}),Object(S.jsxs)("div",{class:"form-group",children:[Object(S.jsx)("input",{type:"email",name:"email",onChange:function(e){return j(e)},placeholder:"Email"}),o.email]}),Object(S.jsxs)("div",{class:"form-group",children:[Object(S.jsx)("input",{type:"password",name:"password",onChange:function(e){return j(e)},placeholder:"Password"}),o.password]}),Object(S.jsx)("div",{class:"form-group",children:Object(S.jsx)("button",{class:"btn btn-primary btn-block",value:"Form",type:"submit",children:"Login"})})]})})})});var M=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(k.b,{children:[Object(S.jsx)(J,{path:"/petshelter"}),Object(S.jsx)(_,{path:"/petshelter/all"}),Object(S.jsx)(T,{path:"/petshelter/add"}),Object(S.jsx)(A,{path:"/petshelter/:id"}),Object(S.jsx)(G,{path:"/petshelter/edit/:id"})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};p.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(M,{})}),document.getElementById("root")),U()}},[[62,1,2]]]);
//# sourceMappingURL=main.64dcd910.chunk.js.map