(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{3606:function(e,t,r){"use strict";var n,l=r(7294);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=(0,l.forwardRef)(function(e,t){return l.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.6 18.6",ref:t},e),n||(n=l.createElement("path",{d:"m11.4 9.3 6.7-6.7c.6-.6.6-1.5 0-2.1s-1.5-.6-2.1 0L9.3 7.2 2.6.4C2-.1 1-.1.4.4-.1 1-.1 2 .4 2.6l6.7 6.7L.4 16c-.6.6-.6 1.5 0 2.1s1.5.6 2.1 0l6.7-6.7 6.7 6.7c.6.6 1.5.6 2.1 0s.6-1.5 0-2.1l-6.6-6.7z"})))});t.Z=s},3207:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form",function(){return r(3705)}])},3705:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ew}});var n,l,a,s,o,i,u,c,d=r(5893),p=r(7294);function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=(0,p.forwardRef)(function(e,t){return p.createElement("svg",x({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),n||(n=p.createElement("path",{stroke:"#CCC",strokeWidth:2,d:"M0 6.7h14M6.7 14V0"})))});function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=(0,p.forwardRef)(function(e,t){return p.createElement("svg",h({width:14,height:2,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l||(l=p.createElement("path",{stroke:"#CCC",strokeWidth:2,d:"M0 1h14"})))});let g=e=>{let{label:t,required:r,measure:n,state:l,initialValue:a,max:s,min:o,errors:i}=e,[u,c]=(0,p.useState)(null!=a?a:NaN),[x,h]=null!=l?l:[],g=null!=x&&null!=h?x:u,v=(0,p.useId)(),y=(0,p.useCallback)(e=>{let t=null!=x?x+e:u+e;return null!=x&&null!=h&&isNaN(x)?h(null!=o?o:x):null==x&&null==h&&isNaN(u)?c(null!=o?o:u):null!=o&&!isNaN(o)&&t<o||null!=s&&!isNaN(s)&&t>s?null!=x&&null!=h?h(x):c(u):null!=h&&null!=x?h(t):c(t)},[x,u,h,c,o,s]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"flex items-center mb-2",children:[(0,d.jsx)("label",{className:"font-medium text-[16px] leading-none uppercase text-[#1D2E5B]",htmlFor:v,children:t}),(0,d.jsx)("span",{className:"font-medium text-[16px] leading-none uppercase text-[#1D2E5B] opacity-30 text-right ml-auto shrink-0",children:n})]}),(0,d.jsxs)("div",{className:"flex border-[1px] rounded-md bg-white text-center ".concat(i?"text-[#FF0000] border-[#FF0000]":"text-[#1D2E5B] border-[#CBCED9]"),children:[(0,d.jsx)("button",{className:"bg-transparent p-4 shrink-0",type:"button",onClick:()=>y(-1),children:(0,d.jsx)(f,{width:14,height:1})}),(0,d.jsx)("input",{max:null!=s?s:"",min:null!=o?o:"",required:r,type:"number",id:v,autoComplete:"off",inputMode:"numeric",value:isNaN(g)?"":g,onChange:e=>h?h(parseInt(e.target.value)):c(parseInt(e.target.value)),className:"appearance-none border-none text-center bg-transparent grow shrink min-w-0 font-medium"}),(0,d.jsx)("button",{className:"bg-transparent p-4 shrink-0",onClick:()=>y(1),type:"button",children:(0,d.jsx)(m,{width:14,height:14})})]}),i&&(0,d.jsx)("p",{className:"p-2 px-3 text-[#FF0000] bg-[#FFEFEF] rounded-b-md",children:i})]})};g.displayName="Input.Number";let v=(0,p.createContext)({steps:[],dispatchSteps:()=>{},activeStep:NaN,setActiveStep:()=>{}});v.displayName="Stepper.Context";let y=e=>{let{title:t,id:r,number:n,activeStep:l,setActiveStep:a}=e;return(0,d.jsx)("li",{children:(0,d.jsx)("a",{className:"block rounded-full m-2 w-[5px] h-[5px] bg-[#1D2E5B] ".concat(n===l?"opacity-100":"opacity-30"),href:"#form-steps-".concat(r),"aria-label":"Перейти на шаг ".concat(t),onClick:()=>a(n)})})};y.displayName="Stepper.Control";let b=()=>{let{steps:e,activeStep:t,setActiveStep:r}=(0,p.useContext)(v);return(0,d.jsx)("nav",{className:"ml-auto",children:(0,d.jsx)("ol",{className:"flex items-center flex-wrap",children:e.map(e=>{let{id:n,number:l}=e;return(0,d.jsx)(y,{title:n,id:n,number:l,activeStep:t,setActiveStep:r},n)})})})};b.displayName="Stepper.Controls";let w=e=>{let{children:t,title:r,number:n,active:l,completed:a,description:s,...o}=e,i=(0,p.useId)(),u=(0,p.useRef)(null),[c,x]=(0,p.useState)(null),[m,h]=(0,p.useState)(null),[f,g]=(0,p.useState)(!1),[y,b]=(0,p.useState)(!1),{steps:w,activeStep:j,dispatchSteps:C,setActiveStep:N}=(0,p.useContext)(v);return(0,p.useEffect)(()=>{if(u&&u.current)return C({type:"ADD_STEP",payload:{id:i,ref:u,number:n}}),()=>{C({type:"REMOVE_STEP",payload:{id:i,ref:u,number:n}})}},[C,i,u,n]),(0,p.useEffect)(()=>{let e=w.findIndex(e=>e.id===i)+1,t=w.findIndex(e=>e.id===i)-1;e<w.length?h(w[e]):h(null),t>=0?x(w[t]):x(null),-1===t?g(!0):g(!1),e===w.length?b(!0):b(!1)},[w,x,h,g,b,i]),j===n?(0,d.jsxs)("li",{ref:u,id:"form-steps-".concat(i),className:"p-5 space-y-5 bg-white rounded-xl",children:[(0,d.jsxs)("p",{className:"text-[#1D2E5B] font-bold text-[20px] leading-none",children:["Шаг ",n,". ",(0,d.jsx)("br",{})," ",r]}),(0,d.jsx)("p",{className:"text-[16px] leading-[22px] text-[#444444]",children:s}),(0,d.jsx)("div",{className:"space-y-5",children:t}),(0,d.jsxs)("nav",{className:"space-y-2",children:[y?(0,d.jsx)("button",{className:"bg-[#FFD74B] px-4 py-3 rounded-full w-full uppercase font-bold text-[17px] leading-[17px] block text-center",type:"submit",children:"Отправить"}):m&&(0,d.jsx)("a",{onClick:()=>N(m.number),href:m?"#form-steps-".concat(m.id):"#",className:"bg-[#FFD74B] px-4 py-3 rounded-full w-full uppercase font-bold text-[17px] leading-[17px] block text-center",children:"Следующий шаг"}),!f&&c&&(0,d.jsx)("a",{href:c?"#form-steps-".concat(c.id):"#",onClick:()=>N(c.number),className:"px-4 py-3 rounded-full w-full uppercase font-bold text-[17px] leading-[17px] block text-center",children:"На шаг назад"})]})]}):(0,d.jsx)(d.Fragment,{})};w.displayName="Stepper.Step";let j=e=>{let{children:t,...r}=e;return(0,d.jsx)("ol",{className:"space-y-5",...r,children:t})};j.displayName="Stepper.Steps";let C=(e,t)=>{let{type:r,payload:n}=t;if("ADD_STEP"===r){let{id:l,ref:a,number:s}=n;if(!e.find(e=>e.id===l))return[...e,{id:l,ref:a,number:s}]}return e},N=e=>{let{children:t,activeStep:r,...n}=e,[l,a]=(0,p.useState)(r),[s,o]=(0,p.useReducer)(C,[]);return(0,d.jsx)(v.Provider,{value:{steps:s,dispatchSteps:o,activeStep:l,setActiveStep:a},children:t})};N.displayName="Stepper",N.Step=w,N.Steps=j,N.Controls=b;let E=(e,t,r)=>new Date(e,t,r).getDay(),D=()=>new Date(new Date().setHours(0,0,0,0)),F=e=>{let{locale:t,style:r="short"}=e,n=[];for(let l=3;l<10;l++){let a=new Date("2000-01-0".concat(l));n.push(a.toLocaleDateString(t,{weekday:r}))}return n},k=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Date(Math.min(...t.map(e=>{let t=new Date(e);return t.setHours(0,0,0,0),t.getTime()})))},O=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Date(Math.max(...t.map(e=>{let t=new Date(e);return t.setHours(0,0,0,0),t.getTime()})))},S=e=>{let{firstDate:t,secondDate:r}=e,n=new Date(t),l=new Date(r);return n.setHours(0,0,0,0),l.setHours(0,0,0,0),Math.abs(n.getTime()-l.getTime())/864e5},T=e=>{let{year:t,month:r,mode:n="month"}=e,l=[],a=[],s=E(t,r,1);0===s&&(s=7);for(let o=s-2;o>=0;o--){let i=new Date(t,r,-1*o,0,0,0,0);l.push(i)}let u=42-s;for(let c=1;c<=u+1;c++){let d=new Date(t,r,c,0,0,0,0);l.push(d)}if("month"===n)for(let p=0;p<l.length;p++)l[p].getMonth()!=r&&(l[p]=null);for(let x=0;x<l.length;x+=7)a.push(l.slice(x,x+7));return a},R=e=>{let{firstDate:t,secondDate:r}=e,n=new Date(t),l=new Date(r);return n.setHours(0,0,0,0),l.setHours(0,0,0,0),n.getTime()===l.getTime()},M=e=>{let{compared:t,border:r,includeBorder:n=!1}=e,l=new Date(t),a=new Date(r);return l.setHours(0,0,0,0),a.setHours(0,0,0,0),n?l.getTime()>=a.getTime():l.getTime()>a.getTime()},B=e=>{let{compared:t,border:r,includeBorder:n=!1}=e,l=new Date(t),a=new Date(r);return l.setHours(0,0,0,0),a.setHours(0,0,0,0),n?l.getTime()<=a.getTime():l.getTime()<a.getTime()},I=e=>{let{compared:t,leftBorder:r,rightBorder:n,includeLeftBorder:l=!0,includeRightBorder:a=!0}=e;return!!(M({compared:t,border:r,includeBorder:l})&&B({compared:t,border:n,includeBorder:a}))},L=(e,t)=>{let r=new Date(e.getTime());return r.setDate(2),r.setHours(0,0,0,0),r.setMonth(t),r},_=(e,t)=>{let r=new Date(e.getTime());return r.setHours(0,0,0,0),r.setDate(t),r};function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var A=(0,p.forwardRef)(function(e,t){return p.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 34",ref:t},e),a||(a=p.createElement("path",{d:"M14.4 17 .4 2.6C-.1 2-.1 1 .4.4 1-.2 1.9-.2 2.5.4l15.1 15.5c.6.6.6 1.6 0 2.1L2.5 33.6c-.3.3-.7.4-1 .4s-.8-.1-1-.4c-.6-.6-.6-1.6 0-2.1L14.4 17z"})))});function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var U=(0,p.forwardRef)(function(e,t){return p.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 34",ref:t},e),s||(s=p.createElement("path",{d:"m3.6 17 14-14.4c.6-.6.6-1.6 0-2.1-.6-.6-1.5-.6-2.1 0L.4 15.9c-.6.6-.6 1.6 0 2.1l15.1 15.5c.3.3.7.4 1 .4s.8-.1 1-.4c.6-.6.6-1.6 0-2.1L3.6 17z"})))});let z=e=>{let{calendarCurrentDate:t,dispatchCalendarCurrentDate:r,calendarLocale:n="ru",...l}=e;return(0,d.jsxs)("thead",{className:"grid",...l,children:[(0,d.jsx)("tr",{children:(0,d.jsxs)("th",{className:"flex items-center py-2",colSpan:7,children:[(0,d.jsx)("button",{type:"button",className:"p-2 shrink-0",onClick:()=>r({type:"PREVIOUS_MONTH"}),children:(0,d.jsx)(U,{width:9,height:18})}),(0,d.jsxs)("p",{className:"capitalize grow font-bold text-[#1D2E5B] text-[20px] leading-none",children:[t.toLocaleString(n,{month:"long"})," ",t.getFullYear()]}),(0,d.jsx)("button",{type:"button",className:"p-2 shrink-0",onClick:()=>r({type:"NEXT_MONTH"}),children:(0,d.jsx)(A,{width:9,height:18})})]})}),(0,d.jsx)("tr",{className:"grid grid-cols-7",children:F({locale:n}).map((e,t)=>(0,d.jsx)("th",{className:"capitalize",children:e},t))})]})};z.displayName="Calendar.Header";let V=e=>{let{value:t,calendarInitialDate:r,calendarValue:n,setCalendarValue:l,...a}=e,s=(0,p.useCallback)(()=>{if(!B({compared:t,border:r})){if(n.every(e=>null==e))return l([t,null]);if(null==n[0])return l([t,n[1]]);if(null==n[1])return l([n[0],t]);if(n.every(e=>null!=e)&&R({firstDate:n[0],secondDate:t})&&R({firstDate:n[1],secondDate:t})&&n.some(e=>R({firstDate:e,secondDate:t})))return l([null,null]);if(n.some(e=>null!=e&&R({firstDate:e,secondDate:t}))){let e=n.map(e=>null!=e&&R({firstDate:e,secondDate:t})?null:e);return l(e)}}},[t,n,r,l]);return(0,d.jsx)("td",{className:"block form-calendar-control-cell",...a,children:(0,d.jsx)("button",{type:"button",onClick:s,className:"form-calendar-control",tabIndex:B({compared:t,border:r})?-1:0,"data-allowed":M({compared:t,border:r,includeBorder:!0}),"data-selected":n.some(e=>null!=e&&R({firstDate:e,secondDate:t})),"data-in-range":n.every(e=>null!=e)&&I({compared:t,leftBorder:k(...n),rightBorder:O(...n)}),children:t.getDate()})})};V.displayName="Calendar.Day";let Y=e=>{let{value:t,calendarCurrentDate:r,calendarInitialDate:n,calendarValue:l,setCalendarValue:a,...s}=e;return(0,d.jsx)("tr",{className:"grid grid-cols-7 auto-cols-fr form-calendar-control-row",...s,children:t.map((e,t)=>e?(0,d.jsx)(V,{value:e,calendarInitialDate:n,calendarValue:l,setCalendarValue:a},t):(0,d.jsx)("td",{},t))})};Y.displayName="Calendar.Week";let Z=e=>{let{calendarCurrentDate:t,calendarInitialDate:r,calendarValue:n,setCalendarValue:l,...a}=e;return(0,d.jsx)("tbody",{className:"grid auto-rows-fr mr-[-4px]",...a,children:T({year:t.getFullYear(),month:t.getMonth(),mode:"fill"}).map((e,a)=>(0,d.jsx)(Y,{value:e,calendarCurrentDate:t,calendarInitialDate:r,calendarValue:n,setCalendarValue:l},a))})};Z.displayName="Calendar.Body";let W=(e,t)=>{switch(t.type){case"PREVIOUS_MONTH":return L(e,e.getMonth()-1);case"NEXT_MONTH":return L(e,e.getMonth()+1);default:return e}},X=e=>{let{state:t,initialValue:r=D()}=e,[n,l]=(0,p.useReducer)(W,r),[a,s]=(0,p.useState)([n,n]),[o,i]=null!=t?t:[],u=(0,p.useCallback)(e=>null!=i&&null!=o?i(e):s(e),[o,i,s]);return(0,d.jsxs)("table",{className:"text-center w-full",children:[(0,d.jsx)(z,{calendarCurrentDate:n,dispatchCalendarCurrentDate:l}),(0,d.jsx)(Z,{calendarInitialDate:r,calendarCurrentDate:n,calendarValue:null!=o&&null!=i?o:a,setCalendarValue:u})]})};X.displayName="Calendar";let G=e=>{let{state:t,errors:r}=e,[n,l]=null!=t?t:[],a=(0,p.useMemo)(()=>D(),[]),[s,o]=(0,p.useState)([null!=n?n.start:a,null!=n?n.end:_(a,a.getDate()+2)]);(0,p.useEffect)(()=>{if(null==l)return;let e=s.filter(e=>null!=e);if(0===e.length)return l({start:null,end:null});let t=k(...e),r=O(...e);return R({firstDate:t,secondDate:r})?l({start:null,end:null}):l({start:t,end:r})},[s]);let i=(0,p.useCallback)(e=>{let t=s.filter(e=>null!=e);if(0===t.length)return;let r=k(...t);if(e<0||isNaN(e))return o([r,null]);let n=_(r,r.getDate()+e);o([r,n])},[s,o]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{state:[s.every(e=>null!=e)?S({firstDate:s[0],secondDate:s[1]}):NaN,i],measure:"Дн.",min:1,label:"Длительность:",errors:r}),(0,d.jsx)(X,{state:[s,o]})]})};G.displayName="Input.Duration";let q=()=>{let e=new Date().getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{let n=16*Math.random();return e>0?(n=(e+n)%16|0,e=Math.floor(e/16)):(n=(t+n)%16|0,t=Math.floor(t/16)),("x"==r?n:7&n|8).toString(16)})},K=(0,p.createContext)({routes:[],dispatchRoutes:()=>{},errors:[]});K.displayName="Input.Routes.Context";var J=r(807);let Q=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=(0,p.useRef)(null),n=t=>{var n;(null===(n=r.current)||void 0===n?void 0:n.contains(t.target))||e(t)};return(0,p.useEffect)(()=>{if(r&&r.current)return document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}},[r,...t]),r},$=(0,p.createContext)({controlRef:{current:null},contentRef:{current:null},isDOMVisible:!1,isOpened:!1,trapFocus:!1,shouldCloseOnEscape:!0,strategy:"portal",setIsOpened:()=>{}});$.displayName="Popover.Context";let ee=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,p.useCallback)(e=>{t.forEach(t=>{"function"==typeof t?t(e):t&&(t.current=e)})},[t])};var et=r(6705);let er=(0,p.forwardRef)((e,t)=>{let{children:r,as:n="button",...l}=e,{isOpened:a,setIsOpened:s,controlRef:o}=(0,p.useContext)($),i=ee(o,t);return(0,d.jsx)(n||"button",{onClick:()=>s(e=>!e),...l,ref:i,children:r})});er.displayName="Popover.Control";let en=(0,et.U)(er);var el=r(3935);let ea=e=>{let{children:t,strategy:r}=e;return"parent"===r?(0,d.jsx)(d.Fragment,{children:t}):(0,el.createPortal)(t,document.body)},es=(0,p.forwardRef)((e,t)=>{let{children:r,className:n,...l}=e,{isOpened:a,setIsOpened:s,contentRef:o,controlRef:i,strategy:u,trapFocus:c,shouldCloseOnEscape:x,isDOMVisible:m}=(0,p.useContext)($),h=ee(o,t),f=e=>{var t,r;if(a&&!(null===(t=o.current)||void 0===t?void 0:t.contains(e.target))&&!(null===(r=i.current)||void 0===r?void 0:r.contains(e.target)))return s(!1)},g=e=>{if(a){if("Tab"===e.key&&e.shiftKey&&c&&document.activeElement===o.current){var t;return e.preventDefault(),null===(t=o.current)||void 0===t?void 0:t.focus()}if("Escape"===e.key&&x)return e.preventDefault(),s(!1)}},v=()=>{y()},y=(0,p.useCallback)(()=>{if(!o||!o.current||!i||!i.current)return;let{width:e,height:t,left:r,top:n}=i.current.getBoundingClientRect(),l="parent"===u?0:r+window.scrollX,a="parent"===u?0:n+window.scrollY;o.current.style.left=l+"px",o.current.style.top=a+t+"px";let{width:s,height:c,left:d,top:p}=o.current.getBoundingClientRect();Math.ceil(d+s)>=document.documentElement.clientWidth&&(o.current.style.left=l-s+e+"px"),Math.ceil(p+c)>=document.documentElement.clientHeight&&(o.current.style.top=a-c+"px")},[o,i,u]),b=(0,p.useMemo)(()=>new ResizeObserver(()=>y()),[y]);(0,p.useEffect)(()=>{if(o&&o.current&&i&&i.current){if(y(),a&&c){var e;null===(e=o.current)||void 0===e||e.focus()}return a?(b&&b.observe(o.current),document.addEventListener("keydown",g),document.addEventListener("click",f),window.addEventListener("resize",v)):(b&&b.unobserve(o.current),document.removeEventListener("keydown",g),document.removeEventListener("click",f),window.removeEventListener("resize",v)),()=>{b&&b.disconnect(),document.removeEventListener("click",f)}}},[o,i,a,u,b,c,x]);let w=(0,p.useCallback)(()=>{o&&o.current&&o.current.focus()},[o]);return m||a?(0,d.jsx)(ea,{strategy:u,children:(0,d.jsxs)("dialog",{open:a,style:{position:"absolute",margin:0,zIndex:300},className:n,...l,ref:h,tabIndex:0,children:[r,c&&(0,d.jsx)("div",{onFocus:w,tabIndex:0,className:"sr-only"})]})}):null});es.displayName="Popover.Content";let eo=e=>{let{children:t,isOpened:r,trapFocus:n=!1,isInitiallyOpened:l=!1,shouldCloseOnEscape:a=!0,isDOMVisible:s=!1,strategy:o="portal",onChange:i}=e,[u,c]=(0,p.useState)(l),x=(0,p.useRef)(null),m=(0,p.useRef)(null);return(0,p.useEffect)(()=>{i&&i(u)},[u,i]),(0,d.jsx)($.Provider,{value:{isOpened:null!=r?r:u,setIsOpened:null!=r?()=>{c(r)}:c,controlRef:x,contentRef:m,strategy:o,trapFocus:n,isDOMVisible:s},children:t})};function ei(){return(ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}eo.displayName="Popover",eo.Control=en,eo.Content=es;var eu=(0,p.forwardRef)(function(e,t){return p.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:35,height:24,fill:"none",ref:t},e),o||(o=p.createElement("rect",{width:35,height:24,rx:4,fill:"#CBCED9"})),i||(i=p.createElement("path",{d:"M0 4a4 4 0 0 1 4-4h27a4 4 0 0 1 4 4v8H0V4Z",fill:"#EDEFF6"})),u||(u=p.createElement("path",{d:"M23.947 5.539 11.053 18.462M23.947 18.462 11.053 5.539",stroke:"red",strokeWidth:2,strokeLinecap:"round"})))});let ec=e=>{let{value:t}=e,[r,n]=(0,p.useState)(!1),[l,a]=(0,p.useState)(!1),s=(0,p.useMemo)(()=>{if(!t||!t.length)return;a(!1),n(!1);let e=J.oB.find(e=>{var r;return(null===(r=e[2])||void 0===r?void 0:r.toLowerCase())===(null==t?void 0:t.toLowerCase())});if(e&&e.length&&e[0])return e[0].toLowerCase()},[t,n,a]);return(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)("img",{crossOrigin:"anonymous",className:"absolute object-contain ".concat(r?"opacity-100":"opacity-0"),src:"https://countryflagsapi.com/svg/".concat(s),alt:"Иконка страны ".concat(t),onError:()=>a(!0),onLoad:()=>{n(!0),a(!1)},loading:"lazy"}),!r&&!l&&s&&(0,d.jsxs)("svg",{"aria-hidden":"true",className:"text-gray-200 animate-spin fill-[#1D2E5B]",viewBox:"0 0 100 101",fill:"none",width:20,height:20,xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(l||!s)&&(0,d.jsx)(eu,{width:35,height:24})]})};function ed(){return(ed=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ep=(0,p.forwardRef)(function(e,t){return p.createElement("svg",ed({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 9",ref:t},e),c||(c=p.createElement("path",{d:"M8.5 7.2 1.3.2A.8.8 0 0 0 .2.2c-.3.3-.3.8 0 1L8 8.8c.3.3.8.3 1.1 0l7.7-7.5.2-.6-.2-.5a.8.8 0 0 0-1.1 0l-7.2 7z"})))}),ex=r(3606);let em=e=>{let{id:t,value:r,error:n}=e,[l,a]=(0,p.useState)(!1),[s,o]=(0,p.useState)(!1),{routes:i,dispatchRoutes:u}=(0,p.useContext)(K),c=(0,p.useRef)(null),x=Q(e=>{if(c&&c.current&&l&&!c.current.contains(e.target))return a(!1)},[l,a,c]),m=(0,p.useMemo)(()=>{let e=new Set;return J.tx.forEach(t=>{e.add(t.toLowerCase()[0])}),[...Array.from(e)].sort((e,t)=>e>t?1:-1)},[]),[h,f]=(0,p.useState)(m[0]);return(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsxs)(eo,{shouldCloseOnEscape:!1,strategy:"parent",trapFocus:!0,isOpened:l,children:[(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)(eo.Control,{type:"button",className:"border-[1px] bg-white rounded px-2 py-3 truncate text-left grow uppercase font-medium text-[14px] leading-none flex items-center ".concat(n&&s?"text-[#FF0000] border-[#FF0000]":"text-[#1D2E5B] border-[#CBCED9]"," "),as:"button",ref:c,onClick:()=>{o(!0),a(e=>!e)},onFocus:()=>o(!0),onBlur:()=>o(!0),children:[(0,d.jsx)("p",{className:"pr-2 truncate",children:null!=r?r:"Выберите страну"}),(0,d.jsx)(ep,{fill:"currentColor",width:10,height:14,className:"ml-auto shrink-0"})]}),r&&(0,d.jsx)("div",{className:"border-[1px] border-l-0 rounded p-2 ".concat(n&&s?"border-[#FF0000]":"border-[#CBCED9]"),children:(0,d.jsx)("div",{className:"relative w-[35px] h-[24px] rounded overflow-hidden grid place-items-center place-content-center",children:(0,d.jsx)(ec,{value:r})})})]}),n&&s&&(0,d.jsx)("p",{className:"p-2 px-3 text-[#FF0000] bg-[#FFEFEF] rounded-b-md",children:n}),(0,d.jsx)(eo.Content,{ref:x,className:"p-0 border-[1px] w-full border-[#CBCED9] rounded-b",children:(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)("ul",{className:"grid grid-cols-5",children:m.map((e,t)=>(0,d.jsx)("li",{className:"border-[1px]",children:(0,d.jsx)("button",{className:"uppercase p-4 w-full h-full text-center text-[#1D2E5B] font-medium text-[14px] leading-none ".concat(h.toLowerCase()===e.toLowerCase()?"bg-[#EDEFF6]":"bg-white"),type:"button",onClick:()=>f(e),children:e})},t))}),(0,d.jsx)("ul",{className:"py-4 px-2 max-h-[210px] overflow-y-scroll space-y-2 text-[#444444]",children:J.tx.filter(e=>e[0].toLowerCase()===h.toLowerCase()&&!i.some(t=>t.country===e)).map((e,r)=>(0,d.jsx)("li",{children:(0,d.jsx)("button",{onClick:()=>{u({type:"UPDATE_ROUTE",payload:{id:t,country:e}}),a(!1)},type:"button",children:e})},r))})]})})]}),i.length>1&&(0,d.jsx)("button",{type:"button",className:"bg-[#EDEFF6] w-[21px] h-[21px] rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 grid place-content-center place-items-center","aria-label":"Удалить маршрут",onClick:()=>u({type:"DELETE_ROUTE",payload:{id:t}}),children:(0,d.jsx)(ex.Z,{fill:"#AFB0B5",width:9,height:9})})]})};em.displayName="Input.Routes.Countries.Select";let eh=()=>{let{routes:e,dispatchRoutes:t,errors:r}=(0,p.useContext)(K);return(0,d.jsxs)(d.Fragment,{children:[e.map(n=>{var l;let{id:a,country:s}=n,o=Array.isArray(r)?null===(l=null==r?void 0:r.find(e=>e.id===a&&"MISSING_COUNTRY"===e.type))||void 0===l?void 0:l.error:r;return(0,d.jsx)(em,{value:s,id:a,routes:e,dispatchRoutes:t,error:o},a)}),(0,d.jsxs)("button",{className:"border-[1px] border-[#e1e4f1] bg-[#EDEFF6] rounded px-2 py-3 w-full uppercase font-medium text-[#1D2E5B] text-[14px] leading-none text-left flex items-center truncate",type:"button",onClick:()=>t({type:"ADD_ROUTE",payload:{id:q(),country:null,activity:null}}),children:[(0,d.jsx)("span",{className:"pr-2 truncate",children:"Добавить страну"}),(0,d.jsx)(m,{width:14,height:14,className:"ml-auto shrink-0"})]})]})};eh.displayName="Input.Routes.Countries";let ef=e=>{let{id:t,value:r,country:n,error:l}=e,[a,s]=(0,p.useState)(!1),{dispatchRoutes:o}=(0,p.useContext)(K);return(0,d.jsxs)("label",{className:"form-routes-activity-field",children:[(0,d.jsxs)("span",{className:"form-routes-activity-field-label",children:[(0,d.jsx)("span",{className:"pr-2 truncate ".concat(l&&a?"text-[#FF0000]":""),children:n}),(0,d.jsx)("span",{className:"relative w-[35px] h-[24px] rounded overflow-hidden grid place-items-center place-content-center ml-auto shrink-0",children:(0,d.jsx)(ec,{value:n})})]}),(0,d.jsx)("textarea",{className:"rounded-md border-[1px] p-2 w-full min-h-[150px] block ".concat(l&&a?"border-[#FF0000] border-b-0 rounded-b-none text-[#FF0000]":"border-[#CBCED9]"),value:null!=r?r:"",onClick:()=>s(!0),onFocus:()=>s(!0),onBlur:()=>s(!0),onChange:e=>o({type:"UPDATE_ROUTE",payload:{id:t,activity:e.currentTarget.value}})}),l&&a&&(0,d.jsx)("span",{className:"p-2 px-3 text-[#FF0000] bg-[#FFEFEF] border-[1px] border-t-0 border-[#FF0000] rounded-b-md block",children:l})]},t)};ef.displayName="Input.Routes.Countries.Textarea";let eg=()=>{let{routes:e,errors:t}=(0,p.useContext)(K);return(0,d.jsx)("div",{className:"space-y-2 px-2",children:e.filter(e=>e.country).map(e=>{var r;let{id:n,country:l,activity:a}=e,s=Array.isArray(t)?null===(r=null==t?void 0:t.find(e=>e.id===n&&"MISSING_ACTIVITY"===e.type))||void 0===r?void 0:r.error:t;return(0,d.jsx)(ef,{value:a,error:s,id:n,country:l},n)})})};eg.displayName="Input.Routes.Activities";let ev=(e,t)=>{var r,n,l,a;let{type:s,payload:o}=t;switch(s){case"ADD_ROUTE":return[...e,{id:o.id,activity:null!==(r=o.activity)&&void 0!==r?r:null,country:null!==(n=o.country)&&void 0!==n?n:null}];case"UPDATE_ROUTE":return e.map(e=>e.id===o.id?{...e,activity:null!==(l=o.activity)&&void 0!==l?l:e.activity,country:null!==(a=o.country)&&void 0!==a?a:e.country}:e);case"DELETE_ROUTE":return e.filter(e=>e.id!==o.id);default:return e}},ey=e=>{let{children:t,state:r,errors:n,initialValue:l}=e,[a,s]=null!=r?r:[],[o,i]=(0,p.useReducer)(ev,null!=a?a:null!=l?l:[{id:q(),activity:null,country:null}]);return(0,p.useEffect)(()=>{if(null!=s)return s(o)},[o]),(0,d.jsx)(K.Provider,{value:{routes:null!=a&&null!=s?a:o,dispatchRoutes:i,errors:n},children:t})};ey.displayName="Input.Routes",ey.Countries=eh,ey.Activities=eg;let eb=e=>{let{initialValues:t,validate:r}=e,[n,l]=(0,p.useState)(t),[a,s]=(0,p.useState)({}),o=(0,p.useCallback)((e,t,n)=>{if(Object.keys(e).includes(t[0])){let l=e[t[0]];if("object"==typeof l&&t.length>1&&o(l,t.slice(1),n),1===t.length){if(r&&r[t[0]]){let a=r[t[0]](n);a?s(e=>({...e,[t[0]]:a})):s(e=>{let r={...e};return delete r[t[0]],r})}e[t[0]]=n}}},[s,r]),i=(0,p.useCallback)((e,t)=>{l(r=>{let n={...r};return o(n,e.split("."),t),n})},[l,o]),u=(0,p.useCallback)(e=>{let t=[n[e],t=>i(e,t)];return{state:t,errors:a[e]}},[n,i,a]),c=(0,p.useCallback)(e=>t=>{t.preventDefault(),t.stopPropagation(),e(n)},[n]);return{values:n,setFieldValue:i,getFieldProps:u,onSubmit:c}};function ew(){let e=eb({initialValues:{companions:1,children:!1,duration:{start:new Date().setHours(0,0,0,0),end:new Date().setHours(24,0,0,0)},routes:[{id:q(),country:null,activity:null}]},validate:{companions:e=>e<1||isNaN(e)?"Минимальное количество попутчиков должно быть не меньше 1":null,duration:e=>{let t=e.start&&e.end?S({firstDate:e.start,secondDate:e.end}):null;return!t||t<1?"Минимальная длительность поездки должна быть не меньше 1 дня":null},routes:e=>{let t=[];return e.some(e=>!e.country)&&t.push(...e.filter(e=>!e.country).map(e=>{let{id:t}=e;return{id:t,type:"MISSING_COUNTRY",error:"Необходимо выбрать хотя бы одну страну"}})),e.some(e=>!e.activity||!e.activity.trim().length)&&t.push(...e.filter(e=>!e.activity).map(e=>{let{id:t}=e;return{id:t,type:"MISSING_ACTIVITY",error:"Необходимо заполнить планы времяпровождения для данной страны"}})),t.length?t:null}}});return(0,d.jsx)("main",{children:(0,d.jsx)("form",{className:"bg-[#D4D9EB] p-5 space-y-5",onSubmit:e.onSubmit(e=>{console.log(e)}),children:(0,d.jsxs)(N,{activeStep:1,children:[(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("h2",{className:"text-[#1D2E5B] font-bold text-[24px] leading-none pr-2",children:"Добавить план:"}),(0,d.jsx)(N.Controls,{})]}),(0,d.jsxs)(N.Steps,{children:[(0,d.jsxs)(N.Step,{number:1,title:"Даты пребывания",description:"Укажите предпочтительное количество попутчиков, которых вы хотели бы позвать в поездку и ее предполагаемую длительность.",children:[(0,d.jsx)(g,{measure:"Чел.",min:1,label:"Ищу попутчиков:",...e.getFieldProps("companions")}),(0,d.jsx)(G,{...e.getFieldProps("duration")})]}),(0,d.jsxs)(ey,{...e.getFieldProps("routes"),children:[(0,d.jsx)(N.Step,{number:2,title:"Маршрут",description:"Укажите страны, которые вы хотели посетить. Это может быть одна или сразу несколько.",children:(0,d.jsx)(ey.Countries,{})}),(0,d.jsx)(N.Step,{number:3,title:"Развлечения",description:"Наконец, расскажите о своих планах времяпровождения. Можно писать в свободной форме и ставить тэги.",children:(0,d.jsx)(ey.Activities,{})})]})]})]})})})}},6705:function(e,t,r){"use strict";r.d(t,{U:function(){return n}}),r(7294);let n=e=>e}},function(e){e.O(0,[807,774,888,179],function(){return e(e.s=3207)}),_N_E=e.O()}]);