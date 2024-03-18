import{o as a,v as C,x as s,r as j,p as E,e as h,B as W,T as B,a as c,t as m}from"./index-c924bf14.js";const n={xs:a(1),sm:a(2),md:a(3),lg:a(4),xl:a(5)};function d(r,e){const o=r.fn.variant({variant:"outline",color:e}).border;return typeof e=="string"&&(e in r.colors||e.split(".")[0]in r.colors)?o:e===void 0?r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[4]:e}var M=C((r,{color:e},{size:o,variant:t})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:a(1),borderTop:`${s({size:o,sizes:n})} ${t} ${d(r,e)}`,marginRight:r.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${s({size:o,sizes:n})} ${t} ${d(r,e)}`,marginLeft:r.spacing.xs}},labelDefaultStyles:{color:e==="dark"?r.colors.dark[1]:r.fn.themeColor(e,r.colorScheme==="dark"?5:r.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:a(s({size:o,sizes:n})),borderTopColor:d(r,e),borderTopStyle:t,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:a(s({size:o,sizes:n})),borderLeftColor:d(r,e),borderLeftStyle:t}}));const R=M;var I=Object.defineProperty,V=Object.defineProperties,G=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,x=(r,e,o)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,y=(r,e)=>{for(var o in e||(e={}))_.call(e,o)&&x(r,o,e[o]);if(p)for(var o of p(e))P.call(e,o)&&x(r,o,e[o]);return r},H=(r,e)=>V(r,G(e)),q=(r,e)=>{var o={};for(var t in r)_.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&p)for(var t of p(r))e.indexOf(t)<0&&P.call(r,t)&&(o[t]=r[t]);return o};const A={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},F=j.forwardRef((r,e)=>{const o=E("Divider",A,r),{className:t,color:w,orientation:f,size:S,label:b,labelPosition:O,labelProps:i,variant:D,styles:z,classNames:$,unstyled:L}=o,N=q(o,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:l,cx:g}=R({color:w},{classNames:$,styles:z,unstyled:L,name:"Divider",variant:D,size:S}),T=f==="vertical",u=f==="horizontal",v=!!b&&u,k=!(i!=null&&i.color);return h.createElement(W,y({ref:e,className:g(l.root,{[l.vertical]:T,[l.horizontal]:u,[l.withLabel]:v},t),role:"separator"},N),v&&h.createElement(B,H(y({},i),{size:(i==null?void 0:i.size)||"xs",mt:a(2),className:g(l.label,l[O],{[l.labelDefaultStyles]:k})}),b))});F.displayName="@mantine/core/Divider";const K=c.div`
	margin-top: 11px;
	height: 88vh;
	width: 100%;
	display: inline-block;
	display: flex;
	flex-direction: column;
	margin: 40px;
`,Q=c.div`
	width: 100%;
	background-color: ${m.colours.BrightGray};
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	height: 60px;
	line-height: 60px;
	padding: 0 32px;
	border-bottom: 1px solid #fcfcfc;
`,U=c.div`
	width: 100%;
	height: auto;
	padding: 32px;
	overflow: auto;
	background-color: ${m.colours.white};
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;

	&.no_header {
		min-height: calc(100% - 136px);
		padding: 0;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
	}
`;export{F as D,K as M,Q as a,U as b};
