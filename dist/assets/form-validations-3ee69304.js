import{s as j,t as o,j as r}from"./index-5d5ec1ef.js";import{u as A,s as I}from"./index.esm-6e92d71d.js";import{I as k}from"./Input-01935b11.js";const z=j.div`
	margin-bottom: ${o.space_size};
	label {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border: 1px solid ${o.colours.BrightGray};
		height: 72px;
		border-radius: 16px;
		box-shadow: 0px 4px 0px 0px ${o.colours.Platinum};
		-webkit-box-shadow: 0px 4px 0px 0px ${o.colours.Platinum};
		-moz-box-shadow: 0px 4px 0px 0px ${o.colours.Platinum};
		.mantine-Input-icon {
			width: 40px;
			height: 40px;
			border-right: 1px solid #f0eeed;
		}
		p {
			font-family: ${o.fonts.Regular};
			font-weight: 400;
			font-size: 12px;
			color: ${o.colours["Spanish Gray"]};
			visibility: ${s=>s.islabelVisible?"visible":"hidden"};
			left: 55px;
			width: fit-content;
			top: 5px;
			span {
				color: ${o.colours.error};
			}
		}
		input {
			width: 100%;
			font-family: ${o.fonts.Bold};
			font-size: 14px;
			font-weight: 500;
			color: rgb(0, 0, 0);
			border: none;
			outline: none;
			margin-bottom: 9px;
			&::placeholder {
				color: ${o.colours.BrightGray};
			}
			&:-webkit-autofill,
			:-webkit-autofill:focus {
				transition: background-color 0s 600000s, color 0s 600000s;
			}
			&:disabled,
			&:read-only {
				background-color: ${o.colours.BrightGray};
				color: ${o.colours.SpanishGray};
				opacity: 0.6;
				cursor: not-allowed;
			}
			&[data-with-icon] {
				padding-left: 55px;
			}
		}
		&.disabled {
			background-color: ${o.colours.BrightGray};
		}
	}
	& > p {
		color: ${o.colours.error};
		margin-top: 8px;
		font-size: 12px;
		font-family: ${o.fonts.Medium};
	}
`;function R({icon:s,name:t,registerOptions:l,type:p="text",placeholder:x,label:i,readonly:h,labelVisibility:f=!0,className:b,disabled:u,min:$,max:m,value:y,defaultValue:g,onChange:c}){const{register:n,formState:w}=A(),{errors:a}=w,F=e=>{const d={...n&&{...n(`${t}`,l)}};Object.keys(d).length!==0&&d.onChange(e),c&&c(e)};return r.jsxs(z,{islabelVisible:f,className:b,children:[r.jsxs("label",{className:`${u?"disabled":""}`,children:[i&&r.jsxs("p",{children:[i,typeof(l==null?void 0:l.required)=="object"&&(l==null?void 0:l.required.value)]}),r.jsx(k,{icon:s,type:p,placeholder:x,...n(t,l),readOnly:h,disabled:u,min:$,max:m,value:y,defaultValue:g,onChange:F})]}),!!a&&!!a[t]&&r.jsx("div",{className:"ErrorMessageStyle",children:r.jsx(I,{errors:a,name:t,render:({message:e})=>r.jsx("p",{children:e})})})]})}const S={textOnly:/^[A-Za-z\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\s]+$/g,textEnglishOnly:/^[A-Za-z\s]+$/g,textArabicOnly:/^[\u0621-\u064A\u0660-\u0669 ]+$/g,numbersOnly:/^[0-9]*$/g,phone:/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/i,password:/^.{4,12}$/g,nationalID:/^[0-9]{10}$/g,otpNumber:/^[0-9]{4}$/,email:/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})$/g,url:/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/g};export{S as F,R as I};
