import{v as be,r as s,e as h,a as l,t as a,u as ye,j as i,G as k}from"./index-c924bf14.js";import{D as Ie,a as De,g as Se,S as E,b as je,c as ke}from"./index-cd5ba9e5.js";import{I as U}from"./Input-bcdb6461.js";import{g as Ee,c as ze,b as Fe}from"./get-floating-position-f131c67d.js";import{u as Me}from"./use-uncontrolled-69853f30.js";import{V as Ve}from"./index-bec9d724.js";import{F as b}from"./Flex-2ae25098.js";function Ne({data:e,limit:t,value:r,filter:o}){const c=[];for(let p=0;p<e.length&&(o(r,e[p])&&c.push(e[p]),!(c.length>=t));p+=1);return c}var Re=be(()=>({wrapper:{position:"relative"}}));const Le=Re;var Ge=Object.defineProperty,Be=Object.defineProperties,qe=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))X.call(t,r)&&W(e,r,t[r]);if(y)for(var r of y(t))J.call(t,r)&&W(e,r,t[r]);return e},Q=(e,t)=>Be(e,qe(t)),Ye=(e,t)=>{var r={};for(var o in e)X.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&y)for(var o of y(e))t.indexOf(o)<0&&J.call(e,o)&&(r[o]=e[o]);return r};function Ke(e,t){return t.value.toLowerCase().trim().includes(e.toLowerCase().trim())}const He={required:!1,size:"sm",shadow:"sm",limit:5,itemComponent:Ie,transitionProps:{transition:"fade",duration:0},initiallyOpened:!1,filter:Ke,switchDirectionOnFlip:!1,zIndex:Ee("popover"),dropdownPosition:"flip",maxDropdownHeight:"auto",positionDependencies:[]},T=s.forwardRef((e,t)=>{const r=De("Autocomplete",He,e),{inputProps:o,wrapperProps:c,shadow:p,data:I,limit:D,value:S,defaultValue:Z,onChange:_,unstyled:F,itemComponent:$,onItemSubmit:v,onKeyDown:M,onFocus:V,onBlur:N,onClick:R,transitionProps:ee,initiallyOpened:te,classNames:x,styles:w,filter:oe,nothingFound:L,onDropdownClose:ne,onDropdownOpen:re,withinPortal:ae,switchDirectionOnFlip:ie,zIndex:se,dropdownPosition:le,maxDropdownHeight:ce,dropdownComponent:pe,positionDependencies:de,readOnly:G,hoverOnSearchChange:B}=r,ue=Ye(r,["inputProps","wrapperProps","shadow","data","limit","value","defaultValue","onChange","unstyled","itemComponent","onItemSubmit","onKeyDown","onFocus","onBlur","onClick","transitionProps","initiallyOpened","classNames","styles","filter","nothingFound","onDropdownClose","onDropdownOpen","withinPortal","switchDirectionOnFlip","zIndex","dropdownPosition","maxDropdownHeight","dropdownComponent","positionDependencies","readOnly","hoverOnSearchChange"]),{classes:fe}=Le(null,{classNames:x,styles:w,name:"Autocomplete",unstyled:F}),[C,he]=s.useState(te),[m,g]=s.useState(-1),[q,me]=s.useState("column"),ge=s.useRef(null),[xe,Y]=s.useState(!1),[O,j]=Me({value:S,defaultValue:Z,finalValue:"",onChange:_}),d=n=>{he(n);const A=n?re:ne;typeof A=="function"&&A()};ze(()=>{g(B&&O?0:-1)},[O,B]);const we=n=>{j(n.value),typeof v=="function"&&v(n),d(!1)},Ae=I.map(n=>typeof n=="string"?{value:n}:n),u=Se({data:Ne({data:Ae,value:O,limit:D,filter:oe})}),ve=n=>{if(xe)return;typeof M=="function"&&M(n);const A=q==="column",K=()=>{g(f=>f<u.length-1?f+1:f)},H=()=>{g(f=>f>0?f-1:f)};switch(n.key){case"ArrowUp":{n.preventDefault(),A?H():K();break}case"ArrowDown":{n.preventDefault(),A?K():H();break}case"Enter":{u[m]&&C&&(n.preventDefault(),j(u[m].value),typeof v=="function"&&v(u[m]),d(!1));break}case"Escape":C&&(n.preventDefault(),d(!1))}},Ce=n=>{typeof V=="function"&&V(n),d(!0)},Oe=n=>{typeof N=="function"&&N(n),d(!1)},Pe=n=>{typeof R=="function"&&R(n),d(!0)},P=C&&(u.length>0||u.length===0&&!!L);return h.createElement(U.Wrapper,Q(z({},c),{__staticSelector:"Autocomplete"}),h.createElement(E,{opened:P,transitionProps:ee,shadow:"sm",withinPortal:ae,__staticSelector:"Autocomplete",onDirectionChange:me,switchDirectionOnFlip:ie,zIndex:se,dropdownPosition:le,positionDependencies:de,classNames:x,styles:w,unstyled:F,readOnly:G,variant:o.variant},h.createElement(E.Target,null,h.createElement("div",{className:fe.wrapper,"aria-controls":o.id,onMouseLeave:()=>g(-1),tabIndex:-1},h.createElement(U,Q(z(z({type:"search",autoComplete:"off"},o),ue),{readOnly:G,"data-mantine-stop-propagation":C,ref:Fe(t,ge),onKeyDown:ve,classNames:x,styles:w,__staticSelector:"Autocomplete",value:O,onChange:n=>{j(n.currentTarget.value),d(!0)},onFocus:Ce,onBlur:Oe,onClick:Pe,onCompositionStart:()=>Y(!0),onCompositionEnd:()=>Y(!1),role:"combobox","aria-haspopup":"listbox","aria-owns":P?`${o.id}-items`:null,"aria-expanded":P,"aria-autocomplete":"list","aria-controls":P?`${o.id}-items`:null,"aria-activedescendant":m>=0?`${o.id}-${m}`:null})))),h.createElement(E.Dropdown,{component:pe||je,maxHeight:ce,direction:q,id:o.id,__staticSelector:"Autocomplete",classNames:x,styles:w},h.createElement(ke,{data:u,hovered:m,classNames:x,styles:w,uuid:o.id,__staticSelector:"Autocomplete",onItemHover:g,onItemSelect:we,itemComponent:$,size:o.size,nothingFound:L,variant:o.variant}))))});T.displayName="@mantine/core/Autocomplete";const rt=l.div`
	// border: 1px solid green;
`;l.div`
	// border: 1px solid red;
	border-radius: 36px;
`;l.span`
	display: flex;
	padding: 8px 16px;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	background: white;
	border-radius: 40px;
	border: 1px solid #eee;
`;const at=l.div`
	border-radius: 20px;
	border: 2px solid ${a.colours.Platinum};
	box-shadow: 0px 6px 0px 0px ${a.colours.Platinum};
	padding: 24px;
	// height:320px
`,it=l.div`
	padding: 24px;
	height:180px
`,st=l.div`
	width: 100%;
`,lt=l.h4`
	font-family: ${a.fonts.Medium};
	font-size: 18px;
	line-height: normal;
`,ct=l.p`
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	color: ${a.colours.black};
	opacity: 0.5;
	font-family: ${a.fonts.Regular};
	`;l.div`
	width: 100%;
	`;const pt=l.span`
	font-family: ${a.fonts.Regular};
	color: ${a.colours.black};
	opacity: 0.5;
	font-size: 14px;
	font-weight: 400;
`,Ue="data:image/png;base64,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",We=e=>s.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M10.0167 2.42578C7.25841 2.42578 5.01674 4.66745 5.01674 7.42578V9.83411C5.01674 10.3424 4.80007 11.1174 4.54174 11.5508L3.58341 13.1424C2.99174 14.1258 3.40007 15.2174 4.48341 15.5841C8.07507 16.7841 11.9501 16.7841 15.5417 15.5841C16.5501 15.2508 16.9917 14.0591 16.4417 13.1424L15.4834 11.5508C15.2334 11.1174 15.0167 10.3424 15.0167 9.83411V7.42578C15.0167 4.67578 12.7667 2.42578 10.0167 2.42578Z",stroke:"#1F1E1E",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round"}),s.createElement("path",{d:"M11.5584 2.66719C11.3001 2.59219 11.0334 2.53385 10.7584 2.50052C9.95843 2.40052 9.19176 2.45885 8.4751 2.66719C8.71676 2.05052 9.31676 1.61719 10.0168 1.61719C10.7168 1.61719 11.3168 2.05052 11.5584 2.66719Z",stroke:"#1F1E1E",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M12.5166 15.8828C12.5166 17.2578 11.3916 18.3828 10.0166 18.3828C9.33327 18.3828 8.69993 18.0995 8.24993 17.6495C7.79993 17.1995 7.5166 16.5661 7.5166 15.8828",stroke:"#1F1E1E",strokeWidth:1.5,strokeMiterlimit:10})),Qe=l.div`
	flex: 1;
	.search_wrapper {
		padding: 3px;
		border-radius: 16px;
		background-color: ${a.colours.white};
		input {
			font-family: ${a.fonts.Medium};
			border: none;
			color: ${a.colours.CharlestonGreen};
			::placeholder {
				color: ${a.colours.SpanishGray};
			}
		}
		svg {
			path {
				stroke: ${a.colours.CharlestonGreen};
			}
			&.active {
				cursor: pointer;
				pointer-events: auto;
				path {
					stroke: ${a.colours.LightSeaGreen};
				}
			}
		}
	}
`,Xe=e=>s.createElement("svg",{width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M7.98002 1.14001C4.41604 1.14001 1.52002 4.03603 1.52002 7.60002C1.52002 11.164 4.41604 14.06 7.98002 14.06C9.39018 14.06 10.6935 13.6058 11.7563 12.8369L16.7556 17.8244L17.8244 16.7556L12.8844 11.8038C13.8552 10.6727 14.44 9.20463 14.44 7.60002C14.44 4.03603 11.544 1.14001 7.98002 1.14001ZM7.98002 1.90001C11.1328 1.90001 13.68 4.4472 13.68 7.60002C13.68 10.7528 11.1328 13.3 7.98002 13.3C4.82721 13.3 2.28002 10.7528 2.28002 7.60002C2.28002 4.4472 4.82721 1.90001 7.98002 1.90001Z",fill:"black"}));function Je({placeholder:e,className:t,data:r}){const{formatMessage:o}=ye(),[c,p]=s.useState(""),I=S=>{p(S)},D=()=>{console.log("Search:",c)};return i.jsx(Qe,{children:i.jsx("div",{className:`search_wrapper ${t||""}`,children:i.jsx(T,{data:r,rightSection:i.jsx(Xe,{onClick:D,className:`${c?"active":""}`}),value:c,onChange:I,placeholder:o({id:e})})})})}const Te=l.section`
	 position: relative;
	background-color: ${a.colours.PaoloVeroneseGreen};
	padding: 8px 0px 20px 0px;
	.wellcome_wrapper {
		color: ${a.colours.white};
		h1 {
			font-size: 25px;
			font-family: ${a.fonts.Bold};
		}
		p {
			font-size: 12px;
			font-family: ${a.fonts.Medium};
		}
	}
	.search_wrapper {
		border: 2px solid ${a.colours.Platinum};
	}
	.notification {
		background-color: ${a.colours.white};
		width: 38px;
		height: 38px;
		border-radius: 12px;
		border: 2px solid ${a.colours.Platinum};
	}
`;function dt(){var e;return i.jsxs(Te,{children:[i.jsxs(k,{mr:0,align:"center",justify:"space-between",children:[i.jsx(k.Col,{xs:12,md:6,children:i.jsxs(b,{direction:"column",align:"flex-start",gap:8,className:"wellcome_wrapper",children:[i.jsxs(b,{gap:16,align:"center",children:[i.jsxs("h1",{children:["Hi, ",(e=JSON.parse(localStorage.getItem("user_info")))==null?void 0:e.name]}),i.jsx("img",{src:Ue})]}),i.jsx("p",{children:"Let’s Learn something new today!"})]})}),i.jsx(k.Col,{xs:12,md:6,children:i.jsxs(b,{gap:32,align:"center",children:[i.jsx(Je,{className:"platinum_shadow",placeholder:"search",data:["test"]}),i.jsx(b,{align:"center",justify:"center",className:"notification platinum_shadow",children:i.jsx(We,{})})]})})]}),i.jsx(Ve,{})]})}export{at as C,st as D,it as I,pt as P,lt as T,ct as U,dt as a,rt as b};
