import{V as p,W as w,X as f,Y as g,u as h,b as x,j as s,C as j}from"./index-c924bf14.js";import{a as P,b as F,F as b}from"./index.esm-7946a255.js";import{I as i}from"./index-d5b7ace9.js";import{L as S}from"./styles-583c411e.js";import{F as v}from"./Flex-2ae25098.js";import"./Input-bcdb6461.js";import"./pack-sx-3cdbfbd6.js";import"./use-id-876a663b.js";import"./use-uncontrolled-69853f30.js";const d=p("ForgetPassword",async e=>{var r,a;try{const o=await w("setPassword",e);return console.log(o),o.status=="passwords.sent",o.status=="passwords.throttled",o}catch(o){f.error((a=(r=o==null?void 0:o.response)==null?void 0:r.data)==null?void 0:a.msg)}}),n={user:null},l=g({name:"ForgetPassword",initialState:n,reducers:{resetResponse(e=n){e.user=null}},extraReducers:e=>{e.addCase(d.fulfilled,(r,a)=>{r.user=a.payload,console.log(a)})}});l.actions;l.reducer;function W(){const{formatMessage:e}=h(),r=P(),{handleSubmit:a}=r,o=x(),c=F({control:r.control,name:"new_password"});r.formState.isValid;const m=t=>t===c||`${e({id:"PasswordMismatch"})}`;r.register("confirm_new_password",{required:"requiredField",validate:m});const u=t=>{o(d({...t,verification_code:localStorage.getItem("verfication-code")}))};return s.jsx(S,{children:s.jsx("div",{className:"w-full flex flex-col gap-6",children:s.jsx(b,{...r,children:s.jsxs("form",{onSubmit:a(u),children:[s.jsxs(v,{direction:"column",gap:8,className:"wellcome_wrapper",children:[s.jsx("h1",{children:e({id:"Reset-password"})}),s.jsx("p",{children:e({id:"Enter-strong-password"})})]}),s.jsx(i,{name:"new_password",label:e({id:"Password"}),placeholder:e({id:"Password"}),registerOptions:{required:{value:!0,message:"requiredField"}}}),s.jsx(i,{name:"confirm_new_password",label:e({id:"ConfirmPassword"}),placeholder:e({id:"ConfirmPassword"}),registerOptions:{required:{value:!0,message:"requiredField"}}}),s.jsx(j,{type:"submit",className:"bg-LightSeaGreen hover:bg-LightSeaGreen rounded-2xl shadow-custom-sm-green",px:32,py:16,size:"xl",children:s.jsx("span",{className:"text-Lotion font-medium",children:e({id:"Submit"})})})]})})})})}export{W as default};
