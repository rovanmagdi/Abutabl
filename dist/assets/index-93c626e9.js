import{f as F,b as P,d as _,c as $,r as S,a0 as T,j as e,a1 as k,s as C,a2 as E,a3 as z,B as v,T as t,C as N}from"./index-c924bf14.js";import{Q as B,P as L}from"./quiz-f582de50.js";import{L as G}from"./index-77f2515b.js";import{F as I}from"./Flex-2ae25098.js";import"./index-bec9d724.js";import"./Progress-eab5df6e.js";import"./get-floating-position-f131c67d.js";import"./use-id-876a663b.js";import"./pack-sx-3cdbfbd6.js";const R="/assets/code-fb82ec6e.svg",q="/assets/time-0bee980e.svg",y="/assets/date-2a7766a0.svg",H="/assets/background_quiz-ae2561ce.svg";function Y(){var n,o,c,x,g,d,u,h,p,j,b,f,D,w;const{idQuiz:l}=F(),i=P(),m=_(),a=$(s=>s.QuizReducer);S.useEffect(()=>{i(T(l))},[i]);const r=[{image:B,title:(o=(n=a==null?void 0:a.gamesDetailstData)==null?void 0:n.quize)==null?void 0:o.title_en,label:e.jsx(e.Fragment,{children:" Title"})},{image:k,title:`${(x=(c=a==null?void 0:a.gamesDetailstData)==null?void 0:c.quize)==null?void 0:x.score_to_pass} Points`,label:e.jsx(e.Fragment,{children:" for each question"})},{image:y,title:`${(d=(g=a==null?void 0:a.gamesDetailstData)==null?void 0:g.quize)==null?void 0:d.start_date}`,label:e.jsx(e.Fragment,{children:" Start Date"})},{image:y,title:`${(h=(u=a==null?void 0:a.gamesDetailstData)==null?void 0:u.quize)==null?void 0:h.due_date}`,label:e.jsx(e.Fragment,{children:" End Date"})},{image:q,title:`${(j=(p=a==null?void 0:a.gamesDetailstData)==null?void 0:p.quize)==null?void 0:j.time_limit}`,label:e.jsx(e.Fragment,{children:" Time Limit"})},{image:q,title:`${(f=(b=a==null?void 0:a.gamesDetailstData)==null?void 0:b.quize)==null?void 0:f.type_time}`,label:e.jsx(e.Fragment,{children:"Type Time "})},{image:R,title:`${(w=(D=a==null?void 0:a.gamesDetailstData)==null?void 0:D.quize)==null?void 0:w.code}`,label:e.jsx(e.Fragment,{children:"Code"})}];return e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"",route:"/learn"}),e.jsxs("div",{className:"bg-PaoloVeroneseGreen transition-all flex flex-col justify-start items-center relative w-full h-[680px]",children:[e.jsx("img",{src:C,className:"h-[0px] ",alt:"shapes"}),e.jsx("img",{src:E,alt:"logo",width:250,className:" md:block md:absolute bottom-0 right-0"}),e.jsxs("div",{className:"w-full h-[85vh] md:p-0 flex justify-center relative",children:[e.jsx("img",{src:z,className:"absolute",alt:""}),e.jsxs(v,{children:[e.jsx("img",{src:H,alt:"",className:"m-auto w-[100px] h-[100px]"}),e.jsx("div",{className:"border border-Platinum bg-white  p-5 md:p-10 flex flex-col justify-start items-center gap-6  rounded-[25px] shadow-custom-sm mx-2 ",children:a!=null&&a.loading?e.jsx(e.Fragment,{children:e.jsx(G,{})}):e.jsxs(e.Fragment,{children:[e.jsx(t,{className:"font-bold text-lg text-DavysGrey",children:"Interesting quiz awaits you"}),e.jsx(t,{className:"text-gray",children:"Play quizzes and get points to reach the next level"}),e.jsx(I,{className:"gap-5 m-5 flex-wrap",children:r==null?void 0:r.map(s=>e.jsxs(v,{className:"border border-Platinum rounded-[15px]  flex flex-col justify-start items-center mw-[100px] h-[130px] m-auto p-5 w-[130px]",children:[e.jsx("img",{src:`${s.image}`}),e.jsx(t,{className:"font-medium text-l",children:s.title}),e.jsx(t,{className:"text-gray text-xs",children:s.label})]}))}),e.jsx(N,{type:"submit",className:"bg-Sunglow hover:bg-Sunglow rounded-[15px] shadow-custom-sm-warning w-[100%]",onClick:()=>{m(`/learn/quiz/${l}`)},children:"Start quiz"}),e.jsx(N,{type:"submit",className:"text-EerieBlack border-Platinum hover:bg-white rounded-[15px] shadow-custom-sm w-[100%]",onClick:()=>{m("/learn")},children:"Skip"})]})})]})]})]})]})}export{Y as default};
