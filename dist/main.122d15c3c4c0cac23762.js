"use strict";(self.webpackChunkreact_webpack_typescript_2022=self.webpackChunkreact_webpack_typescript_2022||[]).push([[179],{973:(e,t,a)=>{var r=a(7294),l=a(745),n=a(1120);const o=(0,n.Z)((()=>({containerStyles:{height:30,width:"100%",backgroundColor:"#e0e0de",borderRadius:50,margin:10},labelStyles:{position:"relative",top:4,color:"#000",fontWeight:"bold",padding:5},active:{backgroundColor:"darkred"}}))),c=e=>{const{completed:t}=e,a=o(),l={height:"100%",width:`${t}%`,maxWidth:"100%",backgroundColor:t>=100?"#ff0000":"rgb(171, 212, 230)",borderRadius:"inherit",textAlign:"center",transition:"width 0.5s ease-in-out"};return r.createElement("div",{className:a.containerStyles},r.createElement("div",{style:l,"data-testid":"progress-bar-fill"},r.createElement("span",{className:a.labelStyles,"data-testid":"progress-bar"},`${t<0?0:t}%`)))};var s=a(1749),i=a(9895),m=a(4436),d=a(3700),p=a(4267),g=a(6479),E=a(282);const u=(0,n.Z)((e=>({root:{"& > *":{margin:e.spacing(1)}},formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)},navigationBtns:{verticalAlign:"bottom"}}))),b=[{completed:25},{completed:50},{completed:75}];console.log("[ERWT] : Renderer execution started");const v=r.createElement((()=>{const e=u(),[t,a]=(0,r.useState)([]),[l,n]=(0,r.useState)(0);(0,r.useEffect)((()=>{a(b)}),[]);const o=e=>{const r=t.map(((t,a)=>(a===l&&(t.completed=t.completed+e<0?0:t.completed+e),t)));a(r)};return r.createElement("div",null,r.createElement("h1",null,"Progress Bars Demo"),r.createElement(s.Z,{id:"top-row",container:!0,spacing:10},r.createElement(s.Z,{item:!0,xs:4},t.map((({completed:e},t)=>r.createElement(c,{key:t,completed:e}))))),r.createElement(s.Z,{id:"bottom-row",container:!0,spacing:10},r.createElement(s.Z,{item:!0,xs:4},r.createElement(i.Z,null,r.createElement(m.Z,{className:e.formControl},r.createElement(d.Z,{id:"demo-simple-select-label"},"Select progress bar"),r.createElement(p.Z,{id:"demo-simple-select",value:l,onChange:e=>{console.log("change",e.target.value),n(e.target.value)}},r.createElement(g.Z,{value:0},"Progress bar 1"),r.createElement(g.Z,{value:1},"Progress bar 2"),r.createElement(g.Z,{value:2},"Progress bar 3"))),r.createElement(m.Z,{className:e.navigationBtns},r.createElement("div",{className:e.root},r.createElement(E.Z,{variant:"contained",color:"primary",size:"small",onClick:()=>o(-25)},"-25"),r.createElement(E.Z,{variant:"contained",color:"primary",size:"small",onClick:()=>o(-10)},"-10"),r.createElement(E.Z,{variant:"contained",color:"primary",size:"small",onClick:()=>o(10)},"+10"),r.createElement(E.Z,{variant:"contained",color:"primary",size:"small",onClick:()=>o(25)},"+25")))))))}),null);(0,l.s)(document.getElementById("app")).render(v)}},e=>{e.O(0,[216],(()=>(973,e(e.s=973)))),e.O()}]);