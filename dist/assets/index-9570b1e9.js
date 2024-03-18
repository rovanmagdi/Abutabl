import{r as l,a as m,t as r,u as b,j as s,G as f,c as w,b as k,d as y,D as N,T as t,B as a,C as $}from"./index-c924bf14.js";import{M as E}from"./index-cd5ba9e5.js";import{a as M,b as C}from"./index-09cb77df.js";import{E as v}from"./index-6bd99f8d.js";import{L}from"./index-77f2515b.js";import{F as i}from"./Flex-2ae25098.js";import"./styles-6f1fc804.js";import"./use-id-876a663b.js";import"./get-styles-ref-1f22bf7e.js";import"./pack-sx-3cdbfbd6.js";import"./get-floating-position-f131c67d.js";import"./use-uncontrolled-69853f30.js";import"./Input-bcdb6461.js";import"./index-bec9d724.js";const B=o=>l.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},l.createElement("path",{d:"M5.83325 30V11.6666C5.83325 4.99998 7.49992 3.33331 14.1666 3.33331H25.8333C32.4999 3.33331 34.1666 4.99998 34.1666 11.6666V28.3333C34.1666 28.5666 34.1666 28.8 34.1499 29.0333",stroke:"#1F1E1E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M10.5833 25H34.1666V30.8333C34.1666 34.05 31.5499 36.6667 28.3333 36.6667H11.6666C8.44992 36.6667 5.83325 34.05 5.83325 30.8333V29.75C5.83325 27.1333 7.96659 25 10.5833 25Z",stroke:"#1F1E1E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.3333 11.6667H26.6666",stroke:"#292D32",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.3333 17.5H21.6666",stroke:"#292D32",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),F="/assets/man-e79207bc.svg",H=m.div`
	.courses_info {
		font-family: ${r.fonts.Bold};
		h3 {
			font-weight: 700;
			color: ${r.colours.EerieBlack};
		}
		span.count {
			width: 41px;
			height: 35px;
			border: 1px solid ${r.colours.BrightGray};
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${r.colours.Lotion};
			font-family: ${r.fonts.Medium};
			font-weight: 500;
		}
	}
	.filter_container {
		font-family: ${r.fonts.Medium};
		p {
			font-weight: 500;
			font-size: 13px;
		}
	}
	div[aria-haspopup='menu'] {
		height: 32px;
		padding: 12px 16px;
		cursor: pointer;
		background-color: ${r.colours.Sunglow};
		color: ${r.colours.EerieBlack};
		font-weight: 400;
		font-size: 13px;
		border-radius: 12px;
		box-shadow: 0px 4px 0px 0px ${r.colours.Marigold};
		-webkit-box-shadow: 0px 4px 0px 0px ${r.colours.Marigold};
		-moz-box-shadow: 0px 4px 0px 0px ${r.colours.Marigold};
		h4 {
			line-height: 43px;
			margin-bottom: 4px;
		}
	}
	.mantine-Menu-dropdown {
		font-family: ${r.fonts.Regular};
		font-weight: 400;
		border-radius: 17px;
		padding: 0;
		.mantine-Text-root {
			background-color: ${r.colours.BrightGray};
			color: ${r.colours["Grey-body"]};
			padding: 9px 24px;
			border-top-right-radius: 16px;
			border-top-left-radius: 16px;
			font-weight: 400;
			font-size: 12px;
		}
		button {
			padding: 10px 12px;
			font-size: 14px;
			font-weight: 500;
			color: ${r.colours["Grey-body"]};
		}
	}
`;function _({length:o}){const{formatMessage:d}=b();return s.jsx(H,{children:s.jsx(f,{children:s.jsx(f.Col,{xs:6,children:s.jsx(i,{align:"center",gap:16,className:"courses_info",children:s.jsx("h3",{children:d({id:"Assigments"})})})})})})}function K(){var c,x,p,h;const o=w(n=>n.todoReducer),d=k(),j=y();return l.useEffect(()=>{d(N())},[]),s.jsxs(s.Fragment,{children:[s.jsx(M,{}),s.jsx(E,{header:s.jsx(_,{}),children:s.jsxs(s.Fragment,{children:[(o==null?void 0:o.loading)&&s.jsx(C,{children:s.jsx(L,{})}),((x=(c=o==null?void 0:o.todoListData)==null?void 0:c.allAssigns)==null?void 0:x.length)==0?s.jsx(v,{}):s.jsxs(s.Fragment,{children:[" ",(h=(p=o==null?void 0:o.todoListData)==null?void 0:p.allAssigns)==null?void 0:h.map(n=>{var u,g;return s.jsx(s.Fragment,{children:((u=n==null?void 0:n.data)==null?void 0:u.length)!==0&&s.jsxs(i,{className:"align-center flex-wrap ",children:[s.jsx(t,{className:"mb-3 font-bold",children:n==null?void 0:n.date}),(g=n==null?void 0:n.data)==null?void 0:g.map(e=>s.jsxs(a,{className:"border border-Platinum rounded-xl w-[100%] p-5 flex  justify-between mb-5",children:[s.jsxs(i,{children:[s.jsxs(a,{className:"bg-Cultured p-10 rounded-xl",children:[s.jsx(t,{className:"bg-New absolute top-3 right-3 text-sm px-3 text-TextNew",children:e==null?void 0:e.status}),s.jsx(B,{})]}),s.jsxs(a,{className:"mx-5 gap-4 flex flex-col ",children:[s.jsxs(a,{children:[s.jsx(t,{className:"text-LightSeaGreen",children:e==null?void 0:e.type}),s.jsx(t,{children:e==null?void 0:e.subject_name})]}),s.jsxs(a,{children:[s.jsx(t,{className:"text-gray text-sm pl-1",children:"Assigned by:"}),s.jsxs(t,{className:"flex pt-3",children:[" ",s.jsx("img",{src:F,width:30,className:"pr-1"}),e==null?void 0:e.by]})]})]})]}),s.jsxs(a,{className:"mt-3",children:[s.jsxs(t,{className:"text-xs",children:[s.jsx("span",{className:"text-gray",children:"Due: "}),e==null?void 0:e.date]}),s.jsx($,{type:"submit",className:" bg-Sunglow  rounded-[15px] shadow-custom-sm-warning  hover:bg-Warning text-black mt-5",onClick:()=>{e.type=="subjects",j(`/learn/${e==null?void 0:e.subject_id}`)},children:"View Assignment"})," "]})]}))]})})})]})]})})]})}export{K as default};
