import{o as a,v as Q,x as s,r as X,p as Y,e as p,K as wr,U as Pr,q as $r,Z as S,I as Cr,a as Sr,t as l,j as b}from"./index-c924bf14.js";import{u as Ir,s as Or}from"./index.esm-7946a255.js";import{I as M}from"./Input-bcdb6461.js";import{u as jr}from"./use-id-876a663b.js";import{u as kr}from"./use-uncontrolled-69853f30.js";var zr=Object.defineProperty,Er=Object.defineProperties,Nr=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Vr=Object.prototype.hasOwnProperty,Tr=Object.prototype.propertyIsEnumerable,Z=(r,e,o)=>e in r?zr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,T=(r,e)=>{for(var o in e||(e={}))Vr.call(e,o)&&Z(r,o,e[o]);if(B)for(var o of B(e))Tr.call(e,o)&&Z(r,o,e[o]);return r},G=(r,e)=>Er(r,Nr(e));const Rr=["subtle","filled","outline","light","default","transparent","gradient"],I={xs:a(18),sm:a(22),md:a(28),lg:a(34),xl:a(44)};function Lr({variant:r,theme:e,color:o,gradient:t}){const n=e.fn.variant({color:o,variant:r,gradient:t});return r==="gradient"?{border:0,backgroundImage:n.background,color:n.color,"&:hover":e.fn.hover({backgroundSize:"200%"})}:Rr.includes(r)?T({border:`${a(1)} solid ${n.border}`,backgroundColor:n.background,color:n.color},e.fn.hover({backgroundColor:n.hover})):null}var Ar=Q((r,{radius:e,color:o,gradient:t},{variant:n,size:i})=>({root:G(T({position:"relative",borderRadius:r.fn.radius(e),padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",height:s({size:i,sizes:I}),minHeight:s({size:i,sizes:I}),width:s({size:i,sizes:I}),minWidth:s({size:i,sizes:I})},Lr({variant:n,theme:r,color:o,gradient:t})),{"&:active":r.activeStyles,"& [data-action-icon-loader]":{maxWidth:"70%"},"&:disabled, &[data-disabled]":{color:r.colors.gray[r.colorScheme==="dark"?6:4],cursor:"not-allowed",backgroundColor:n==="transparent"?void 0:r.fn.themeColor("gray",r.colorScheme==="dark"?8:1),borderColor:n==="transparent"?void 0:r.fn.themeColor("gray",r.colorScheme==="dark"?8:1),backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":G(T({content:'""'},r.fn.cover(a(-1))),{backgroundColor:r.colorScheme==="dark"?r.fn.rgba(r.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:r.fn.radius(e),cursor:"not-allowed"})}})}));const Dr=Ar;var Wr=Object.defineProperty,j=Object.getOwnPropertySymbols,rr=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,q=(r,e,o)=>e in r?Wr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,H=(r,e)=>{for(var o in e||(e={}))rr.call(e,o)&&q(r,o,e[o]);if(j)for(var o of j(e))er.call(e,o)&&q(r,o,e[o]);return r},Mr=(r,e)=>{var o={};for(var t in r)rr.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&j)for(var t of j(r))e.indexOf(t)<0&&er.call(r,t)&&(o[t]=r[t]);return o};const Br={color:"gray",size:"md",variant:"subtle"},or=X.forwardRef((r,e)=>{const o=Y("ActionIcon",Br,r),{className:t,color:n,children:i,radius:m,size:_,variant:v,gradient:x,disabled:c,loaderProps:u,loading:y,unstyled:d,__staticSelector:h}=o,f=Mr(o,["className","color","children","radius","size","variant","gradient","disabled","loaderProps","loading","unstyled","__staticSelector"]),{classes:g,cx:w,theme:P}=Dr({radius:m,color:n,gradient:x},{name:["ActionIcon",h],unstyled:d,size:_,variant:v}),z=p.createElement(wr,H({color:P.fn.variant({color:n,variant:v}).color,size:"100%","data-action-icon-loader":!0},u));return p.createElement(Pr,H({className:w(g.root,t),ref:e,disabled:c,"data-disabled":c||void 0,"data-loading":y||void 0,unstyled:d},f),y?z:i)});or.displayName="@mantine/core/ActionIcon";const Zr=$r(or),Gr=({reveal:r,size:e})=>p.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:e,height:e}},p.createElement("path",{d:r?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}));var qr=Object.defineProperty,Hr=Object.defineProperties,Ur=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Kr=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable,K=(r,e,o)=>e in r?qr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,V=(r,e)=>{for(var o in e||(e={}))Kr.call(e,o)&&K(r,o,e[o]);if(U)for(var o of U(e))Fr.call(e,o)&&K(r,o,e[o]);return r},F=(r,e)=>Hr(r,Ur(e)),Jr=Q((r,{rightSectionWidth:e},{size:o})=>({visibilityToggle:{},input:{position:"relative",overflow:"hidden"},innerInput:F(V(V({},r.fn.fontStyles()),r.fn.cover(0)),{backgroundColor:"transparent",border:`${a(1)} solid transparent`,borderLeftWidth:0,borderRightWidth:0,boxSizing:"border-box",display:"block",width:`calc(100% - ${a(e)})`,paddingLeft:`calc(${s({size:o,sizes:S})}  / 3)`,fontSize:s({size:o,sizes:r.fontSizes}),height:`calc(${s({size:o,sizes:S})} - ${a(2)})`,lineHeight:`calc(${s({size:o,sizes:S})} - ${a(4)})`,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,"&::-ms-reveal, &::-ms-clear":{display:"none"},"&:focus":{outline:0},"&:disabled":{cursor:"not-allowed",pointerEvents:"none",backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[1],color:r.colors.dark[2],opacity:.6,"&::placeholder":{color:r.colors.dark[2]}},"&::placeholder":F(V({},r.fn.placeholderStyles()),{opacity:1}),"&[data-invalid]":{color:r.fn.variant({variant:"filled",color:"red"}).background,"&::placeholder":{opacity:1,color:r.fn.variant({variant:"filled",color:"red"}).background}},"&[data-with-icon]":{paddingLeft:s({size:o,sizes:S})}})}));const Qr=Jr;var Xr=Object.defineProperty,Yr=Object.defineProperties,re=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,tr=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable,J=(r,e,o)=>e in r?Xr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,O=(r,e)=>{for(var o in e||(e={}))tr.call(e,o)&&J(r,o,e[o]);if(k)for(var o of k(e))ar.call(e,o)&&J(r,o,e[o]);return r},ee=(r,e)=>Yr(r,re(e)),oe=(r,e)=>{var o={};for(var t in r)tr.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&k)for(var t of k(r))e.indexOf(t)<0&&ar.call(r,t)&&(o[t]=r[t]);return o};const te={xs:a(22),sm:a(26),md:a(28),lg:a(32),xl:a(40)},ae={xs:a(12),sm:a(15),md:a(17),lg:a(19),xl:a(21)},ne={xs:a(28),sm:a(32),md:a(34),lg:a(44),xl:a(54)},ie={size:"sm",toggleTabIndex:-1,visibilityToggleIcon:Gr,__staticSelector:"PasswordInput"},nr=X.forwardRef((r,e)=>{const o=Y("PasswordInput",ie,r),{radius:t,disabled:n,size:i,toggleTabIndex:m,className:_,id:v,label:x,error:c,required:u,style:y,icon:d,description:h,wrapperProps:f,classNames:g,styles:w,variant:P,visibilityToggleIcon:z,__staticSelector:R,sx:ir,labelProps:lr,descriptionProps:sr,errorProps:cr,unstyled:$,visibilityToggleLabel:L,withAsterisk:dr,inputContainer:pr,iconWidth:ur,inputWrapperOrder:fr,visible:gr,defaultVisible:br,onVisibilityChange:vr}=o,yr=oe(o,["radius","disabled","size","toggleTabIndex","className","id","label","error","required","style","icon","description","wrapperProps","classNames","styles","variant","visibilityToggleIcon","__staticSelector","sx","labelProps","descriptionProps","errorProps","unstyled","visibilityToggleLabel","withAsterisk","inputContainer","iconWidth","inputWrapperOrder","visible","defaultVisible","onVisibilityChange"]),A=s({size:i,sizes:ne}),{classes:E}=Qr({rightSectionWidth:A},{name:"PasswordInput",classNames:g,styles:w,unstyled:$,size:i,variant:P}),D=jr(v),{systemStyles:mr,rest:_r}=Cr(yr),[N,xr]=kr({value:gr,defaultValue:br,finalValue:!1,onChange:vr}),W=()=>xr(!N),hr=p.createElement(Zr,{className:E.visibilityToggle,tabIndex:m,radius:t,size:s({size:i,sizes:te}),"aria-hidden":!L,"aria-label":L,unstyled:$,onMouseDown:C=>{C.preventDefault(),W()},onKeyDown:C=>{C.key===" "&&(C.preventDefault(),W())}},p.createElement(z,{reveal:N,size:s({size:i,sizes:ae})}));return p.createElement(M.Wrapper,O(O({required:u,id:D,label:x,error:c,description:h,size:i,className:_,style:y,classNames:g,styles:w,__staticSelector:R,sx:ir,errorProps:cr,descriptionProps:sr,labelProps:lr,unstyled:$,withAsterisk:dr,inputWrapperOrder:fr,inputContainer:pr,variant:P},mr),f),p.createElement(M,{component:"div",error:c,icon:d,size:i,classNames:ee(O({},g),{input:E.input}),styles:w,radius:t,disabled:n,__staticSelector:R,rightSectionWidth:A,rightSection:!n&&hr,variant:P,unstyled:$,iconWidth:ur},p.createElement("input",O({type:N?"text":"password",required:u,"data-invalid":!!c||void 0,"data-with-icon":!!d||void 0,className:E.innerInput,disabled:n,id:D,ref:e},_r))))});nr.displayName="@mantine/core/PasswordInput";const le=Sr.div`
	margin-bottom: ${l.space_size};
	.mantine-PasswordInput-input {
		border: none;
		border-radius: 16px;

	}
	label {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border: 1px solid ${l.colours.BrightGray};
		height: 60px;
		border-radius: 16px;
		box-shadow: 0px 4px 0px 0px ${l.colours.Platinum};
		-webkit-box-shadow: 0px 4px 0px 0px ${l.colours.Platinum};
		-moz-box-shadow: 0px 4px 0px 0px ${l.colours.Platinum};
		.mantine-Input-icon {
			width: 40px;
			height: 20px;
			border-right: 1px solid #f0eeed;
		}
		p {
			font-family: ${l.fonts.Regular};
			font-weight: 400;
			font-size: 12px;
			color: ${l.colours["Spanish Gray"]};
			visibility: ${r=>r.islabelVisible?"visible":"hidden"};
			left: 55px;
			width: fit-content;
			top: 5px;
			span {
				color: ${l.colours.error};
			}
		}
		input {
			width: 100%;
			font-family: ${l.fonts.Bold};
			font-size: 14px;
			font-weight: 500;
			color: rgb(0, 0, 0);
			border: none;
			outline: none;
		
			
			margin-bottom: 9px;
			&::placeholder {
				color: ${l.colours.BrightGray};
			}
			&:-webkit-autofill,
			:-webkit-autofill:focus {
				transition: background-color 0s 600000s, color 0s 600000s;
			}
			&:disabled,
			&:read-only {
				background-color: ${l.colours.BrightGray};
				color: ${l.colours.SpanishGray};
				opacity: 0.6;
				cursor: not-allowed;
			}
			&[data-with-icon] {
				padding-left: 55px;
				padding-right: 55px;
			}
		}
		&.disabled {
			background-color: ${l.colours.BrightGray};
		}
		&:lang(ar) {
			direction: rtl;
			p{
				right: 55px;
				left: unset;
			}
		}
	}
	& > p {
		color: ${l.colours.error};
		margin-top: 8px;
		font-size: 12px;
		font-family: ${l.fonts.Medium};
	}
`;function fe({icon:r,name:e,registerOptions:o,placeholder:t,label:n,labelVisibility:i=!0,className:m,disabled:_,defaultValue:v,value:x,onChange:c}){const{register:u,formState:y}=Ir(),{errors:d}=y,h=f=>{const g={...u&&{...u(`${e}`,o)}};Object.keys(g).length!==0&&g.onChange(f),c&&c(f)};return b.jsxs(le,{islabelVisible:i,className:m,children:[b.jsxs("label",{className:`${_?"disabled":""}`,children:[n&&b.jsxs("p",{children:[n,typeof(o==null?void 0:o.required)=="object"&&(o==null?void 0:o.required.value)]}),b.jsx(nr,{icon:r,placeholder:t,...u(e,o),value:x,onChange:h,defaultValue:v})]}),!!d&&!!d[e]&&b.jsx("div",{className:"ErrorMessageStyle",children:b.jsx(Or,{errors:d,name:e,render:({message:f})=>b.jsx("p",{children:f})})})]})}export{Zr as A,fe as I};
