import{r as x,p as te,e as s,o as d,v as oe,x as V,B as xe,I as he,u as we,d as Oe,b as Pe,M as I,N as L,P as Se,l as $e,j as o,L as je,C as ke,Q as Ee}from"./index-c924bf14.js";import{a as Ce,F as Ne}from"./index.esm-7946a255.js";import{I as Ie,F as Le}from"./form-validations-0d55b678.js";import{I as Re}from"./index-d5b7ace9.js";import{L as ze}from"./styles-583c411e.js";import{S as Ve}from"./logo-aboutabl-dark 2-34ff2b19.js";import{L as De}from"./index-77f2515b.js";import{F as Fe}from"./Flex-2ae25098.js";import{I as D}from"./Input-bcdb6461.js";import{u as Ge}from"./use-uncontrolled-69853f30.js";import{g as R}from"./get-styles-ref-1f22bf7e.js";import{u as Te}from"./use-id-876a663b.js";import"./pack-sx-3cdbfbd6.js";const se=x.createContext(null),Ae=se.Provider,We=()=>x.useContext(se);var Be=Object.defineProperty,$=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,Y=(e,r,a)=>r in e?Be(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,H=(e,r)=>{for(var a in r||(r={}))ne.call(r,a)&&Y(e,a,r[a]);if($)for(var a of $(r))le.call(r,a)&&Y(e,a,r[a]);return e},Me=(e,r)=>{var a={};for(var t in e)ne.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&$)for(var t of $(e))r.indexOf(t)<0&&le.call(e,t)&&(a[t]=e[t]);return a};const qe={size:"sm"},ie=x.forwardRef((e,r)=>{const a=te("CheckboxGroup",qe,e),{children:t,value:i,defaultValue:p,onChange:f,size:u,wrapperProps:l}=a,c=Me(a,["children","value","defaultValue","onChange","size","wrapperProps"]),[n,_]=Ge({value:i,defaultValue:p,finalValue:[],onChange:f}),g=m=>{const b=m.currentTarget.value;_(n.includes(b)?n.filter(h=>h!==b):[...n,b])};return s.createElement(Ae,{value:{value:n,onChange:g,size:u}},s.createElement(D.Wrapper,H(H({labelElement:"div",size:u,__staticSelector:"CheckboxGroup",ref:r},l),c),t))});ie.displayName="@mantine/core/CheckboxGroup";var Ye=Object.defineProperty,j=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,K=(e,r,a)=>r in e?Ye(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,k=(e,r)=>{for(var a in r||(r={}))ce.call(r,a)&&K(e,a,r[a]);if(j)for(var a of j(r))de.call(r,a)&&K(e,a,r[a]);return e},pe=(e,r)=>{var a={};for(var t in e)ce.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&j)for(var t of j(e))r.indexOf(t)<0&&de.call(e,t)&&(a[t]=e[t]);return a};function He(e){const r=e,{width:a,height:t,style:i}=r,p=pe(r,["width","height","style"]);return s.createElement("svg",k({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:k({width:a,height:t},i)},p),s.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function Ke(e){var r=e,{indeterminate:a}=r,t=pe(r,["indeterminate"]);return a?s.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},t),s.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):s.createElement(He,k({},t))}var Ue=Object.defineProperty,Qe=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Q=(e,r,a)=>r in e?Ue(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,X=(e,r)=>{for(var a in r||(r={}))Je.call(r,a)&&Q(e,a,r[a]);if(U)for(var a of U(r))Ze.call(r,a)&&Q(e,a,r[a]);return e},J=(e,r)=>Qe(e,Xe(r));const er={xs:d(16),sm:d(20),md:d(24),lg:d(30),xl:d(36)};var rr=oe((e,{radius:r,color:a,transitionDuration:t,labelPosition:i,error:p,indeterminate:f},{size:u})=>{const l=V({size:u,sizes:er}),c=e.fn.variant({variant:"filled",color:a});return{icon:J(X({},e.fn.cover()),{ref:R("icon"),color:f?"inherit":e.white,transform:f?"none":`translateY(${d(5)}) scale(0.5)`,opacity:f?1:0,transitionProperty:"opacity, transform",transitionTimingFunction:"ease",transitionDuration:`${t}ms`,pointerEvents:"none",width:"60%",position:"absolute",zIndex:1,margin:"auto","@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}}),inner:{position:"relative",width:l,height:l,order:i==="left"?2:1},input:J(X({},e.fn.focusStyles()),{appearance:"none",backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.white,border:`${d(1)} solid ${p?e.fn.variant({variant:"filled",color:"red"}).background:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[4]}`,width:l,height:l,borderRadius:e.fn.radius(r),padding:0,display:"block",margin:0,transition:`border-color ${t}ms ease, background-color ${t}ms ease`,cursor:e.cursorType,"&:checked":{backgroundColor:c.background,borderColor:c.background,[`& + .${R("icon")}`]:{opacity:1,color:e.white,transform:"translateY(0) scale(1)"}},"&:disabled":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],borderColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[3],cursor:"not-allowed",pointerEvents:"none",[`& + .${R("icon")}`]:{color:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[5]}}})}});const ar=rr;var tr=Object.defineProperty,or=Object.defineProperties,sr=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,nr=Object.prototype.hasOwnProperty,lr=Object.prototype.propertyIsEnumerable,ee=(e,r,a)=>r in e?tr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,ir=(e,r)=>{for(var a in r||(r={}))nr.call(r,a)&&ee(e,a,r[a]);if(Z)for(var a of Z(r))lr.call(r,a)&&ee(e,a,r[a]);return e},cr=(e,r)=>or(e,sr(r));const z={xs:d(16),sm:d(20),md:d(24),lg:d(30),xl:d(36)};var dr=oe((e,{labelPosition:r},{size:a})=>({root:{},body:{display:"flex","&:has(input:disabled) label":{color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[5]}},labelWrapper:cr(ir({},e.fn.fontStyles()),{display:"inline-flex",flexDirection:"column",WebkitTapHighlightColor:"transparent",fontSize:a in z?V({size:a,sizes:e.fontSizes}):void 0,lineHeight:a in z?V({size:a,sizes:z}):void 0,color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,cursor:e.cursorType,order:r==="left"?1:2}),description:{marginTop:`calc(${e.spacing.xs} / 2)`,[r==="left"?"paddingRight":"paddingLeft"]:e.spacing.sm},error:{marginTop:`calc(${e.spacing.xs} / 2)`,[r==="left"?"paddingRight":"paddingLeft"]:e.spacing.sm},label:{cursor:e.cursorType,[r==="left"?"paddingRight":"paddingLeft"]:e.spacing.sm,"&:disabled, &[data-disabled]":{color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[5]}}}));const pr=dr;var fr=Object.defineProperty,E=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,re=(e,r,a)=>r in e?fr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,ur=(e,r)=>{for(var a in r||(r={}))fe.call(r,a)&&re(e,a,r[a]);if(E)for(var a of E(r))ue.call(r,a)&&re(e,a,r[a]);return e},mr=(e,r)=>{var a={};for(var t in e)fe.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&E)for(var t of E(e))r.indexOf(t)<0&&ue.call(e,t)&&(a[t]=e[t]);return a};const me=x.forwardRef((e,r)=>{var a=e,{__staticSelector:t,className:i,classNames:p,styles:f,unstyled:u,children:l,label:c,description:n,id:_,disabled:g,error:m,size:b,labelPosition:h,variant:w}=a,O=mr(a,["__staticSelector","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition","variant"]);const{classes:v,cx:P}=pr({labelPosition:h},{name:t,styles:f,classNames:p,unstyled:u,variant:w,size:b});return s.createElement(xe,ur({className:P(v.root,i),ref:r},O),s.createElement("div",{className:P(v.body)},l,s.createElement("div",{className:v.labelWrapper},c&&s.createElement("label",{className:v.label,"data-disabled":g||void 0,htmlFor:_},c),n&&s.createElement(D.Description,{className:v.description},n),m&&m!=="boolean"&&s.createElement(D.Error,{className:v.error},m))))});me.displayName="@mantine/core/InlineInput";var gr=Object.defineProperty,C=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(e,r,a)=>r in e?gr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,S=(e,r)=>{for(var a in r||(r={}))ge.call(r,a)&&ae(e,a,r[a]);if(C)for(var a of C(r))ve.call(r,a)&&ae(e,a,r[a]);return e},vr=(e,r)=>{var a={};for(var t in e)ge.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&C)for(var t of C(e))r.indexOf(t)<0&&ve.call(e,t)&&(a[t]=e[t]);return a};const _r={size:"sm",transitionDuration:100,icon:Ke,labelPosition:"right"},F=x.forwardRef((e,r)=>{const a=te("Checkbox",_r,e),{className:t,style:i,sx:p,checked:f,disabled:u,color:l,label:c,indeterminate:n,id:_,size:g,radius:m,wrapperProps:b,children:h,classNames:w,styles:O,transitionDuration:v,icon:P,unstyled:G,labelPosition:T,description:_e,error:A,variant:W}=a,be=vr(a,["className","style","sx","checked","disabled","color","label","indeterminate","id","size","radius","wrapperProps","children","classNames","styles","transitionDuration","icon","unstyled","labelPosition","description","error","variant"]),y=We(),B=Te(_),{systemStyles:ye,rest:M}=he(be),{classes:N}=ar({radius:m,color:l,transitionDuration:v,labelPosition:T,error:!!A,indeterminate:n},{name:"Checkbox",classNames:w,styles:O,unstyled:G,variant:W,size:(y==null?void 0:y.size)||g}),q=y?{checked:y.value.includes(M.value),onChange:y.onChange}:{};return s.createElement(me,S(S({className:t,sx:p,style:i,id:B,size:(y==null?void 0:y.size)||g,labelPosition:T,label:c,description:_e,error:A,disabled:u,__staticSelector:"Checkbox",classNames:w,styles:O,unstyled:G,"data-checked":q.checked||void 0,variant:W},ye),b),s.createElement("div",{className:N.inner},s.createElement("input",S(S({id:B,ref:r,type:"checkbox",className:N.input,checked:f,disabled:u},M),q)),s.createElement(P,{indeterminate:n,className:N.icon})))});F.displayName="@mantine/core/Checkbox";F.Group=ie;const br="/assets/translate-green-b856aeb0.svg";function Ir(){const{formatMessage:e}=we(),r=Oe(),[a,t]=x.useState(!1),i=Ce(),{handleSubmit:p}=i,f=Pe(),u=async g=>{t(!0);const m=await f(Ee(g));console.log(m,"result"),t(!1),localStorage.getItem("api_token")&&localStorage.getItem("api_token")!=null&&r("/learn")},l=I.get(L.LanguageAdded),[c,n]=Se($e),_=()=>{c==="ar"&&(n("en"),I.set(L.LanguageAdded,"en")),c==="en"&&(n("ar"),I.set(L.LanguageAdded,"ar"))};return x.useEffect(()=>{l&&n(l)},[l,n]),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex flex-col md:flex-row gap-3 justify-between items-center w-full",children:[o.jsx(Ve,{width:100}),o.jsxs("button",{onClick:_,className:"flex justify-center items-center gap-2 text-sm text-LightSeaGreen font-medium",children:[o.jsx("img",{src:br,alt:"translate"}),e({id:"Switch-to"})]})]}),o.jsx(ze,{children:o.jsx("div",{className:"w-full",children:o.jsx(Ne,{...i,children:o.jsxs("form",{onSubmit:p(u),children:[o.jsxs(Fe,{direction:"column",gap:8,className:"wellcome_wrapper",children:[o.jsx("h1",{children:e({id:"Welcome-back"})}),o.jsx("h3",{children:e({id:"Login-and-learn"})})]}),o.jsx(Ie,{name:"code",label:e({id:"StudentCode"}),placeholder:e({id:"StudentCode"}),registerOptions:{required:{value:!0,message:"requiredField"},pattern:{value:Le.numbersOnly,message:e({id:"numberOnly"})}},defaultValue:"332211"}),o.jsx(Re,{name:"password",label:e({id:"Password"}),placeholder:e({id:"Password"}),registerOptions:{required:{value:!0,message:"requiredField"}},defaultValue:"123456789"}),o.jsxs("div",{className:"text-sm flex justify-between items-center",children:[o.jsx(F,{label:e({id:"Remember-me"})}),o.jsx(je,{to:"verifyEmail",className:"text-LightSeaGreen font-medium",children:e({id:"Forget-password"})})]}),o.jsx(ke,{type:"submit",className:"bg-LightSeaGreen hover:bg-LightSeaGreen rounded-2xl shadow-custom-sm-green",px:32,py:16,size:"xl",children:a?o.jsx("div",{children:o.jsx(De,{})}):o.jsx("span",{className:"text-Lotion font-medium",children:e({id:"Login"})})})]})})})})]})}export{Ir as default};
