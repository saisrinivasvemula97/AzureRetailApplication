(this["webpackJsonpcloud-final"]=this["webpackJsonpcloud-final"]||[]).push([[0],{105:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),c=a.n(s),i=a(71),o=a(13),l=a(28),d=a(15),u=a.n(d),j=a(25),b=a(16),h=a(68),m=a.n(h),O=a(151),p=a(150),x=a(146),f=a(149),g=a(148),v=a(147),y=a(110),N=a(141),S=a(144),E=a(2),C=a(47).Backend_API,A=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),T=function(){var e=A(),t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(""),i=Object(b.a)(c,2),l=i[0],d=i[1],h=Object(o.g)(),N=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(e){e.password===l?(sessionStorage.setItem("user_auth_token",r),h.push("/home")):alert("UserName does not exist or Password is incorrect")},t.preventDefault(),e.next=4,fetch(C+"authenticateUser/",{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify({userName:r,password:l})});case 4:if(a=e.sent,200!==a.status){e.next=13;break}return e.next=9,a.json(a);case 9:n=e.sent,s(n),e.next=14;break;case 13:alert("An Error Occured!");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(E.jsx)(x.a,{}),Object(E.jsxs)("div",{className:e.paper,children:[Object(E.jsx)(O.a,{className:e.avatar,children:Object(E.jsx)(m.a,{})}),Object(E.jsx)(y.a,{component:"h1",variant:"h5",children:"Team 23 - Three Musketeers"}),Object(E.jsxs)("form",{className:e.form,onSubmit:function(e){return N(e)},noValidate:!0,children:[Object(E.jsx)(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"userName",label:"Username",name:"username",autoFocus:!0,onChange:function(e){return s(e.target.value)},value:r}),Object(E.jsx)(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return d(e.target.value)},value:l}),Object(E.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(E.jsx)(v.a,{container:!0,children:Object(E.jsx)(v.a,{item:!0,children:Object(E.jsx)(g.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})},k=a(45),I=a(72),D=a(69),w=a(47).Backend_API,F=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],s=a[1],c=sessionStorage.getItem("user_auth_token"),i=Object(n.useState)([]),o=Object(b.a)(i,2),l=o[0],d=o[1],h=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(){return l[document.getElementById("dataSetName").value]},t.preventDefault(),r){e.next=5;break}return alert("Enter an household number"),e.abrupt("return");case 5:return n=a(),e.next=8,fetch(w+"fetchData/",{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify({houseHoldNumber:r,selectedDataSet:n,userName:c})});case 8:if(s=e.sent,200!==s.status){e.next=17;break}return e.next=13,s.json(s);case 13:(i=e.sent)&&m(i),e.next=18;break;case 17:alert("An Error Occured!");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){function t(e){var t=document.getElementById("tableHeader"),a=document.createElement("tr");for(var n in e){var r=document.createElement("th"),s=document.createTextNode(n);r.appendChild(s),a.appendChild(r)}t.appendChild(a)}function a(e){var t=document.getElementById("tableBody"),a=document.createElement("tr");for(var n in e){var r=document.createElement("td"),s=e[n],c=document.createTextNode(s);r.appendChild(c),t.appendChild(r)}t.appendChild(a)}!function(){var t=document.getElementById("messageDisplayArea");0===e.length?(t.style.display="block",t.innerHTML="HouseHold Number does not exist!"):t.style.display="none"}(),function(){var e=document.getElementById("tableHeader"),t=document.getElementById("tableBody");e.querySelectorAll("*").forEach((function(e){return e.remove()})),t.querySelectorAll("*").forEach((function(e){return e.remove()}))}(),function(){e.length>1?t(e[0]):t(e);var n,r=Object(D.a)(e);try{for(r.s();!(n=r.n()).done;){a(n.value)}}catch(s){r.e(s)}finally{r.f()}}()};return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"fetchDataSetNames",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({userName:c})});case 2:if(t=e.sent,200!==t.status){e.next=10;break}return e.next=7,t.json(t);case 7:a=e.sent,n=a.dataSetNames,d(n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{id:"mainContainer",style:{textAlign:"center",width:"50%",margin:"50px auto"},children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{htmlFor:"sel1",children:"Pick a DataSet:"}),Object(E.jsx)("select",{id:"dataSetName",className:"form-control m-2",children:l.map((function(e,t){return Object(E.jsx)("option",{value:t,children:e},e)}))})]}),Object(E.jsxs)("form",{onSubmit:h,style:{border:"none",marginLeft:"10px"},children:[Object(E.jsx)("input",{type:"search",placeholder:"Enter HSHD_NUM here..",value:r,onChange:function(e){return s(e.target.value)},className:"form-control bg-light mb-4"}),Object(E.jsx)("button",{class:"btn btn-outline-warning my-2 my-sm-0",children:"Search"})]}),Object(E.jsx)("div",{id:"messageDisplayArea",children:Object(E.jsx)("br",{})})]}),Object(E.jsxs)("table",{id:"houseHoldDetails",style:{fontSize:"11px"},className:"table-primary table table-sm table-dark",children:[Object(E.jsx)("thead",{id:"tableHeader",className:"table",style:{color:"#ffc107"}}),Object(E.jsx)("tbody",{id:"tableBody"})]})]})},P=a(52),B=function(){return Object(E.jsx)("div",{children:Object(E.jsx)(P.a,{width:"900px",height:"500px",chartType:"ComboChart",loader:Object(E.jsx)("div",{children:"Loading Chart"}),data:[["Year","Nonfood","Food","Pharma"],["2018",4757.03,23750.28,667.55],["2019",12165.59,61774.39,1844.11],["2020",7586.89,39134.08,1248.04]],options:{title:"Yearly Expenditure on Various Categories",vAxis:{title:"Dollars"},hAxis:{title:"Year"},seriesType:"bars",series:{3:{type:"line"}}}})})},R=function(){return Object(E.jsx)("div",{children:Object(E.jsx)(P.a,{chartType:"PieChart",loader:Object(E.jsx)("div",{children:"Loading Chart"}),data:[["Commodities","Expenditure"],["PET",1207.47],["DAIRY",5622.79],["ALCOHOL",3269.31],["PRODUCE",6039.84],["SEAFOOD",1348.32],["HOUSEHOLD",4809.53],["MEDICATION",1796.14],["PERSONAL CARE",2661.55],["GROCERY STAPLE",15377.71],["SPECIALTY FOOD",428.22],["BEVERAGE - WATER",1182.38],["TOBACCO PRODUCTS",806.83],["INTERNATIONAL FOOD",1025.55],["BEVERAGE - NON WATER",4051.68],["BABY",818.63],["FROZEN FOOD",5254.52],["IN STORE FOOD SERVICE",1464.17],["BAKERY",2912.02],["FLORAL",740.66],["DRY GOODS",1081.04],["CANNED GOODS",1134.58],["DELI",1904.34],["MEAT - PORK",910.96],["GIFT",385.68],["HOLIDAY",91.25],["MEAT - OTHER",1485.02],["MEAT - BEEF",3275.4],["MEAT - CHICKEN",2320.26],["CLOTHING",309.13],["MISC",187.95],["MEAT - SAUSAGE",624.91],["OUTDOOR",223.41],["BULK PRODUCTS",241.72],["COSMETICS",172.81],["MEAT - POULTRY",101.26],["TOYS",46.12],["SEASONAL PRODUCTS",68.74],["AUTO",30.64],["MEAT - TURKEY",260.14],["ELECTRONICS",40.96],["ACTIVITY",22.48],["MEDICAL SUPPLIES",47.97]],options:{title:"Commodities in Year 2019",width:600,height:600}})})},L=function(){return Object(E.jsx)("div",{children:Object(E.jsx)("table",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)(B,{})}),Object(E.jsx)("td",{children:Object(E.jsx)(R,{})})]})})})},U=(a(105),a(47).Backend_API),H=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],s=a[1],c=sessionStorage.getItem("user_auth_token"),i=Object(n.useState)([]),l=Object(b.a)(i,2),d=l[0],h=l[1],m=Object(n.useState)(!1),O=Object(b.a)(m,2),p=O[0],x=O[1],f=Object(o.g)(),g=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!d.includes(r)){e.next=4;break}return alert("A data-set with that name exists!"),e.abrupt("return");case 4:if(a=document.getElementById("transactionsFile").files,n=document.getElementById("productsFile").files,s=document.getElementById("householdsFile").files,(i=new FormData).append("csvFiles",a[0]),i.append("csvFiles",n[0]),i.append("csvFiles",s[0]),!c||!r){e.next=20;break}return x(!0),e.next=15,fetch(U+"csvupload/".concat(c,"/").concat(r),{method:"POST",body:i});case 15:o=e.sent,200===o.status&&(x(!1),console.log("Files inserted succesfully"),f.push("/home/page1")),e.next=23;break;case 20:x(!1),console.log("user Name invalid"),alert("An error occured");case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(U+"fetchDataSetNames",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({userName:c})});case 2:if(t=e.sent,200!==t.status){e.next=10;break}return e.next=7,t.json(t);case 7:a=e.sent,n=a.dataSetNames,h(n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(E.jsx)("div",{id:"mainContainer",children:Object(E.jsxs)("form",{onSubmit:function(e){return g(e)},encType:"multipart/form-data",children:[Object(E.jsxs)("div",{className:"mb-3",children:[Object(E.jsx)("div",{className:"form-group",children:Object(E.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)},className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter Dataset Name",required:!0})}),Object(E.jsxs)("table",{style:{width:"30%",margin:"50px auto"},children:[Object(E.jsx)("thead",{style:{textAlign:"left"},children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Transactions"}),Object(E.jsx)("th",{children:"Products"}),Object(E.jsx)("th",{children:"HouseHolds"})]})}),Object(E.jsx)("tbody",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)("input",{type:"file",id:"transactionsFile",name:"csvFiles",accept:".csv",required:!0})}),Object(E.jsx)("td",{children:Object(E.jsx)("input",{type:"file",id:"productsFile",name:"csvFiles",accept:".csv",required:!0})}),Object(E.jsx)("td",{children:Object(E.jsx)("input",{type:"file",id:"householdsFile",name:"csvFiles",accept:".csv",required:!0})})]})})]})]}),p&&Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:"Uploading data.."})}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},_=function(e){var t,a=null!==(t=sessionStorage.getItem("user_auth_token"))&&void 0!==t?t:"",n=Object(o.g)();return Object(E.jsx)(l.a,{children:Object(E.jsxs)("div",{children:[Object(E.jsxs)(k.a,{bg:"dark",sticky:"top",variant:"dark",children:[Object(E.jsxs)(k.a.Brand,{children:["Hey ",a,"!"]}),Object(E.jsx)(k.a.Brand,{className:"justify-content-center",style:{paddingLeft:"500px"},children:"Azure Retail Web Application"}),Object(E.jsx)(k.a.Collapse,{className:"justify-content-end",children:Object(E.jsx)(I.a,{variant:"outline-info",size:"sm",active:!0,onClick:function(){sessionStorage.removeItem("user_auth_token"),n.push("/login")},children:Object(E.jsx)("strong",{children:"Sign OFF"})})})]}),Object(E.jsx)("div",{id:"pagesContainer",className:"d-flex justify-content-center",children:Object(E.jsx)("table",{children:Object(E.jsxs)("thead",{children:[Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("tr",{children:Object(E.jsx)("th",{style:{color:"#17a2b8"},children:"Please select from the options below:"})}),Object(E.jsx)("br",{}),Object(E.jsx)("tr",{children:Object(E.jsx)("th",{children:Object(E.jsx)("a",{className:"btn btn-dark btn-lg btn-block",href:"/home/page1",children:"Data Pulls"})})}),Object(E.jsx)("br",{}),Object(E.jsx)("tr",{children:Object(E.jsx)("th",{children:Object(E.jsx)("a",{className:"btn btn-dark btn-lg btn-block",href:"/home/page2",children:"Dashboards"})})}),Object(E.jsx)("br",{}),Object(E.jsx)("tr",{children:Object(E.jsx)("th",{children:Object(E.jsx)("a",{className:"btn btn-dark btn-lg btn-block",href:"/home/page4",children:"Upload DataSet"})})})]})})}),Object(E.jsx)("br",{}),Object(E.jsxs)(o.d,{children:[Object(E.jsx)(o.b,{exact:!0,path:"/home/page1",children:Object(E.jsx)(F,{userName:e.user_name})}),Object(E.jsx)(o.b,{exact:!0,path:"/home/page2",children:Object(E.jsx)(L,{})}),Object(E.jsx)(o.b,{exact:!0,path:"/home/page4",children:Object(E.jsx)(H,{userName:e.user_name})})]})]})})},M=(a(106),a(58)),Y=a.n(M),W=a(47).Backend_API,q=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),G=function(){var e=q(),t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(""),i=Object(b.a)(c,2),l=i[0],d=i[1],h=Object(n.useState)(""),m=Object(b.a)(h,2),N=m[0],C=m[1],A=Object(n.useState)(""),T=Object(b.a)(A,2),k=T[0],I=T[1],D=Object(n.useState)(""),w=Object(b.a)(D,2),F=w[0],P=w[1],B=Object(o.g)(),R=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch(W+"newuser/",{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify({userName:r,password:l,email:N,firstName:k,lastName:F})});case 3:if(a=e.sent,200!==a.status){e.next=12;break}return e.next=8,a.json(a);case 8:e.sent.userExists?alert("User Name already in use"):B.push("/login"),e.next=13;break;case 12:alert("An Error Occured!");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(E.jsx)(x.a,{}),Object(E.jsxs)("div",{className:e.paper,children:[Object(E.jsx)(O.a,{className:e.avatar,children:Object(E.jsx)(Y.a,{})}),Object(E.jsx)(y.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(E.jsxs)("form",{className:e.form,onSubmit:R,children:[Object(E.jsxs)(v.a,{container:!0,spacing:2,children:[Object(E.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(f.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return I(e.target.value)},value:k})}),Object(E.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(f.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return P(e.target.value)},value:F})}),Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(f.a,{variant:"outlined",required:!0,fullWidth:!0,id:"userName",label:"Username",name:"userName",autoComplete:"uname",onChange:function(e){return s(e.target.value)},value:r})}),Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(f.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return C(e.target.value)},value:N})}),Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(f.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return d(e.target.value)},value:l})})]}),Object(E.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(E.jsx)(v.a,{container:!0,justifyContent:"flex-end",children:Object(E.jsx)(v.a,{item:!0,children:Object(E.jsx)(g.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})},J=(a(107),function(){return Object(E.jsx)(l.a,{children:Object(E.jsxs)(o.d,{children:[Object(E.jsx)(o.b,{exact:!0,path:"/",children:function(e){var t=sessionStorage.getItem("user_auth_token");return t?Object(E.jsx)(e,{user_name:t}):Object(E.jsx)(o.a,{to:"/login"})}(_)}),Object(E.jsx)(o.b,{path:"/login",children:Object(E.jsx)(T,{})}),Object(E.jsx)(o.b,{path:"/signup",children:Object(E.jsx)(G,{})}),Object(E.jsx)(o.b,{exact:!0,path:"/home",render:function(e){return Object(E.jsx)(_,Object(i.a)({},e))}}),Object(E.jsx)(o.b,{path:"/home/*",children:Object(E.jsx)(_,{})})]})})});c.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(J,{})}),document.getElementById("root"))},47:function(e,t,a){a(92).config();e.exports={Backend_API:"https://azureretailwebapp.azurewebsites.net/"}}},[[108,1,2]]]);
//# sourceMappingURL=main.8ba6d006.chunk.js.map