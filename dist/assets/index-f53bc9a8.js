import{r as d,f as te,R as s,e as p,c as oe,i as F,B as he,x as Oe,u as Ee,C as xe,D as z,E as C,F as Pe,l as Se,j as o,H as Ie,o as Ne}from"./index-5d5ec1ef.js";import{a as ke,F as De}from"./index.esm-6e92d71d.js";import{I as Ae,F as je}from"./form-validations-3ee69304.js";import{I as ze}from"./index-7be2cd90.js";import{L as Ce}from"./styles-9a165280.js";import{F as Re}from"./Flex-c84a7c1e.js";import{I as G}from"./Input-01935b11.js";import{u as Me,a as Fe}from"./use-uncontrolled-72af9c2e.js";import{g as R}from"./get-styles-ref-1f22bf7e.js";const se=d.createContext(null),Ge=se.Provider,Le=()=>d.useContext(se);var Ve=Object.defineProperty,I=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,H=(e,r,a)=>r in e?Ve(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,T=(e,r)=>{for(var a in r||(r={}))ne.call(r,a)&&H(e,a,r[a]);if(I)for(var a of I(r))le.call(r,a)&&H(e,a,r[a]);return e},Ze=(e,r)=>{var a={};for(var t in e)ne.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&I)for(var t of I(e))r.indexOf(t)<0&&le.call(e,t)&&(a[t]=e[t]);return a};const We={size:"sm"},ie=d.forwardRef((e,r)=>{const a=te("CheckboxGroup",We,e),{children:t,value:m,defaultValue:l,onChange:i,size:n,wrapperProps:c}=a,g=Ze(a,["children","value","defaultValue","onChange","size","wrapperProps"]),[f,h]=Me({value:m,defaultValue:l,finalValue:[],onChange:i}),w=v=>{const b=v.currentTarget.value;h(f.includes(b)?f.filter(O=>O!==b):[...f,b])};return s.createElement(Ge,{value:{value:f,onChange:w,size:n}},s.createElement(G.Wrapper,T(T({labelElement:"div",size:n,__staticSelector:"CheckboxGroup",ref:r},c),g),t))});ie.displayName="@mantine/core/CheckboxGroup";var Ue=Object.defineProperty,N=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,Y=(e,r,a)=>r in e?Ue(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,k=(e,r)=>{for(var a in r||(r={}))ce.call(r,a)&&Y(e,a,r[a]);if(N)for(var a of N(r))de.call(r,a)&&Y(e,a,r[a]);return e},pe=(e,r)=>{var a={};for(var t in e)ce.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&N)for(var t of N(e))r.indexOf(t)<0&&de.call(e,t)&&(a[t]=e[t]);return a};function Qe(e){const r=e,{width:a,height:t,style:m}=r,l=pe(r,["width","height","style"]);return s.createElement("svg",k({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:k({width:a,height:t},m)},l),s.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function Be(e){var r=e,{indeterminate:a}=r,t=pe(r,["indeterminate"]);return a?s.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},t),s.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):s.createElement(Qe,k({},t))}var _e=Object.defineProperty,He=Object.defineProperties,Te=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,q=(e,r,a)=>r in e?_e(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,K=(e,r)=>{for(var a in r||(r={}))Ye.call(r,a)&&q(e,a,r[a]);if(J)for(var a of J(r))Je.call(r,a)&&q(e,a,r[a]);return e},X=(e,r)=>He(e,Te(r));const qe={xs:p(16),sm:p(20),md:p(24),lg:p(30),xl:p(36)};var Ke=oe((e,{radius:r,color:a,transitionDuration:t,labelPosition:m,error:l,indeterminate:i},{size:n})=>{const c=F({size:n,sizes:qe}),g=e.fn.variant({variant:"filled",color:a});return{icon:X(K({},e.fn.cover()),{ref:R("icon"),color:i?"inherit":e.white,transform:i?"none":`translateY(${p(5)}) scale(0.5)`,opacity:i?1:0,transitionProperty:"opacity, transform",transitionTimingFunction:"ease",transitionDuration:`${t}ms`,pointerEvents:"none",width:"60%",position:"absolute",zIndex:1,margin:"auto","@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}}),inner:{position:"relative",width:c,height:c,order:m==="left"?2:1},input:X(K({},e.fn.focusStyles()),{appearance:"none",backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.white,border:`${p(1)} solid ${l?e.fn.variant({variant:"filled",color:"red"}).background:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[4]}`,width:c,height:c,borderRadius:e.fn.radius(r),padding:0,display:"block",margin:0,transition:`border-color ${t}ms ease, background-color ${t}ms ease`,cursor:e.cursorType,"&:checked":{backgroundColor:g.background,borderColor:g.background,[`& + .${R("icon")}`]:{opacity:1,color:e.white,transform:"translateY(0) scale(1)"}},"&:disabled":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],borderColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[3],cursor:"not-allowed",pointerEvents:"none",[`& + .${R("icon")}`]:{color:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[5]}}})}});const Xe=Ke;var $e=Object.defineProperty,er=Object.defineProperties,rr=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,ar=Object.prototype.hasOwnProperty,tr=Object.prototype.propertyIsEnumerable,ee=(e,r,a)=>r in e?$e(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,or=(e,r)=>{for(var a in r||(r={}))ar.call(r,a)&&ee(e,a,r[a]);if($)for(var a of $(r))tr.call(r,a)&&ee(e,a,r[a]);return e},sr=(e,r)=>er(e,rr(r));const M={xs:p(16),sm:p(20),md:p(24),lg:p(30),xl:p(36)};var nr=oe((e,{labelPosition:r},{size:a})=>({root:{},body:{display:"flex","&:has(input:disabled) label":{color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[5]}},labelWrapper:sr(or({},e.fn.fontStyles()),{display:"inline-flex",flexDirection:"column",WebkitTapHighlightColor:"transparent",fontSize:a in M?F({size:a,sizes:e.fontSizes}):void 0,lineHeight:a in M?F({size:a,sizes:M}):void 0,color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,cursor:e.cursorType,order:r==="left"?1:2}),description:{marginTop:`calc(${e.spacing.xs} / 2)`,[r==="left"?"paddingRight":"paddingLeft"]:e.spacing.sm},error:{marginTop:`calc(${e.spacing.xs} / 2)`,[r==="left"?"paddingRight":"paddingLeft"]:e.spacing.sm},label:{cursor:e.cursorType,[r==="left"?"paddingRight":"paddingLeft"]:e.spacing.sm,"&:disabled, &[data-disabled]":{color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[5]}}}));const lr=nr;var ir=Object.defineProperty,D=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,re=(e,r,a)=>r in e?ir(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,cr=(e,r)=>{for(var a in r||(r={}))me.call(r,a)&&re(e,a,r[a]);if(D)for(var a of D(r))ge.call(r,a)&&re(e,a,r[a]);return e},dr=(e,r)=>{var a={};for(var t in e)me.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&D)for(var t of D(e))r.indexOf(t)<0&&ge.call(e,t)&&(a[t]=e[t]);return a};const fe=d.forwardRef((e,r)=>{var a=e,{__staticSelector:t,className:m,classNames:l,styles:i,unstyled:n,children:c,label:g,description:f,id:h,disabled:w,error:v,size:b,labelPosition:O,variant:E}=a,x=dr(a,["__staticSelector","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition","variant"]);const{classes:u,cx:P}=lr({labelPosition:O},{name:t,styles:i,classNames:l,unstyled:n,variant:E,size:b});return s.createElement(he,cr({className:P(u.root,m),ref:r},x),s.createElement("div",{className:P(u.body)},c,s.createElement("div",{className:u.labelWrapper},g&&s.createElement("label",{className:u.label,"data-disabled":w||void 0,htmlFor:h},g),f&&s.createElement(G.Description,{className:u.description},f),v&&v!=="boolean"&&s.createElement(G.Error,{className:u.error},v))))});fe.displayName="@mantine/core/InlineInput";var pr=Object.defineProperty,A=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(e,r,a)=>r in e?pr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,S=(e,r)=>{for(var a in r||(r={}))ue.call(r,a)&&ae(e,a,r[a]);if(A)for(var a of A(r))ve.call(r,a)&&ae(e,a,r[a]);return e},mr=(e,r)=>{var a={};for(var t in e)ue.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&A)for(var t of A(e))r.indexOf(t)<0&&ve.call(e,t)&&(a[t]=e[t]);return a};const gr={size:"sm",transitionDuration:100,icon:Be,labelPosition:"right"},L=d.forwardRef((e,r)=>{const a=te("Checkbox",gr,e),{className:t,style:m,sx:l,checked:i,disabled:n,color:c,label:g,indeterminate:f,id:h,size:w,radius:v,wrapperProps:b,children:O,classNames:E,styles:x,transitionDuration:u,icon:P,unstyled:V,labelPosition:Z,description:be,error:W,variant:U}=a,ye=mr(a,["className","style","sx","checked","disabled","color","label","indeterminate","id","size","radius","wrapperProps","children","classNames","styles","transitionDuration","icon","unstyled","labelPosition","description","error","variant"]),y=Le(),Q=Fe(h),{systemStyles:we,rest:B}=Oe(ye),{classes:j}=Xe({radius:v,color:c,transitionDuration:u,labelPosition:Z,error:!!W,indeterminate:f},{name:"Checkbox",classNames:E,styles:x,unstyled:V,variant:U,size:(y==null?void 0:y.size)||w}),_=y?{checked:y.value.includes(B.value),onChange:y.onChange}:{};return s.createElement(fe,S(S({className:t,sx:l,style:m,id:Q,size:(y==null?void 0:y.size)||w,labelPosition:Z,label:g,description:be,error:W,disabled:n,__staticSelector:"Checkbox",classNames:E,styles:x,unstyled:V,"data-checked":_.checked||void 0,variant:U},we),b),s.createElement("div",{className:j.inner},s.createElement("input",S(S({id:Q,ref:r,type:"checkbox",className:j.input,checked:i,disabled:n},B),_)),s.createElement(P,{indeterminate:f,className:j.icon})))});L.displayName="@mantine/core/Checkbox";L.Group=ie;const fr="/assets/translate-green-7b7d017e.svg",ur=e=>d.createElement("svg",{width:142,height:49,viewBox:"0 0 142 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},d.createElement("rect",{y:.5,width:142,height:48,fill:"url(#pattern0)"}),d.createElement("defs",null,d.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},d.createElement("use",{xlinkHref:"#image0_871_6109",transform:"matrix(0.00489896 0 0 0.0144928 -0.00704225 0)"})),d.createElement("image",{id:"image0_871_6109",width:207,height:69,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAABFCAYAAADtqrLhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlEMDE4MUNEMUQzRjExRUFBMzlGOEQyRjRGMjgzNjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlEMDE4MUNFMUQzRjExRUFBMzlGOEQyRjRGMjgzNjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUQwMTgxQ0IxRDNGMTFFQUEzOUY4RDJGNEYyODM2MUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUQwMTgxQ0MxRDNGMTFFQUEzOUY4RDJGNEYyODM2MUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4POxYAAAARPUlEQVR42uxdCXRcVRm+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"})));function Sr(){const{formatMessage:e}=Ee(),r=xe(),a=ke(),{handleSubmit:t}=a,m=g=>{console.log(g),r("verify")},l=z.get(C.LanguageAdded),[i,n]=Pe(Se),c=()=>{i==="ar"&&(n("en"),z.set(C.LanguageAdded,"en")),i==="en"&&(n("ar"),z.set(C.LanguageAdded,"ar"))};return d.useEffect(()=>{l&&n(l)},[l,n]),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex flex-col md:flex-row gap-3 justify-between items-center w-full",children:[o.jsx(ur,{}),o.jsxs("button",{onClick:c,className:"flex justify-center items-center gap-2 text-sm text-LightSeaGreen font-medium",children:[o.jsx("img",{src:fr,alt:"translate"}),e({id:"Switch-to"})]})]}),o.jsx(Ce,{children:o.jsx("div",{className:"w-full",children:o.jsx(De,{...a,children:o.jsxs("form",{onSubmit:t(m),children:[o.jsxs(Re,{direction:"column",gap:8,className:"wellcome_wrapper",children:[o.jsx("h1",{children:e({id:"Welcome-back"})}),o.jsx("h3",{children:e({id:"Login-and-learn"})})]}),o.jsx(Ae,{name:"StudentCode",label:e({id:"StudentCode"}),placeholder:e({id:"StudentCode"}),registerOptions:{required:{value:!0,message:"requiredField"},pattern:{value:je.numbersOnly,message:e({id:"numberOnly"})}}}),o.jsx(ze,{name:"Password",label:e({id:"Password"}),placeholder:e({id:"Password"}),registerOptions:{required:{value:!0,message:"requiredField"}}}),o.jsxs("div",{className:"text-sm flex justify-between items-center",children:[o.jsx(L,{label:e({id:"Remember-me"})}),o.jsx(Ie,{to:"reset-password",className:"text-LightSeaGreen font-medium",children:e({id:"Forget-password"})})]}),o.jsx(Ne,{type:"submit",className:"bg-LightSeaGreen hover:bg-LightSeaGreen rounded-2xl shadow-custom-sm-green",px:32,py:16,size:"xl",children:o.jsx("span",{className:"text-Lotion font-medium",children:e({id:"Login"})})})]})})})})]})}export{Sr as default};
