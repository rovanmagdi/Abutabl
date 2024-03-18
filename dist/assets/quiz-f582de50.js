import{r as i,a as l,t as o,d as c,j as e,G as t}from"./index-c924bf14.js";import{V as d}from"./index-bec9d724.js";import{F as r}from"./Flex-2ae25098.js";import{P as p}from"./Progress-eab5df6e.js";const x=s=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},i.createElement("path",{d:"M14.5 18.6004L9.0667 13.1671C8.42503 12.5254 8.42503 11.4754 9.0667 10.8337L14.5 5.40039",stroke:"#1F1E1E",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),m=l.section`
	position: relative;
	padding: 8px 0px 20px 0px;
	background-color: ${o.colours.PaoloVeroneseGreen};
	.wellcome_wrapper {
		color: ${o.colours.white};
		h1 {
			font-size: 32px;
			font-family: ${o.fonts.Bold};
		}
		p {
			font-size: 14px;
			font-family: ${o.fonts.Medium};
		}
	}

	.notification {
		background-color: ${o.colours.white};
		width: 38px;
		height: 38px;
		border-radius: 12px;
		border: 2px solid ${o.colours.Platinum};
	}
`;function j({title:s,route:n}){const a=c();return e.jsxs(m,{children:[e.jsxs(t,{mr:0,align:"center",justify:"space-between",children:[e.jsx(t.Col,{xs:12,md:6,children:e.jsx(r,{direction:"column",align:"flex-start",gap:8,className:"wellcome_wrapper",children:e.jsxs(r,{gap:16,align:"center",onClick:()=>{a(n)},children:[e.jsx(r,{align:"center",justify:"center",className:"notification platinum_shadow",children:e.jsx(x,{})}),s]})})}),e.jsx(t.Col,{xs:12,md:6,children:e.jsx(r,{gap:32,align:"center",children:e.jsx(p,{value:50,color:"orange"})})})]}),e.jsx(d,{})]})}const w="/assets/quiz-81d693db.svg";export{j as P,w as Q};
