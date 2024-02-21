"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[786,160,752],{8752:(e,r,n)=>{n.r(r),n.d(r,{default:()=>_});var o=n(2791),i=n(697),t=n(4294);const s={loginSection:"LoginForm_loginSection__7vrrH",registerLink:"LoginForm_registerLink__ZjN9K",loginLink:"LoginForm_loginLink__5M3-r"};var a=n(1087),l=n(3466),d=n(3746),c=n(165),u=n(3400),g=n(7196),x=n(829),p=n(8096),m=n(7107),h=n(4507),b=n(6059),f=n(6459),j=n(4420),v=n(5822),Z=n(5264),w=n(4289),y=n(7344),k=n(184);const L=(0,m.Z)({components:{MuiButton:{styleOverrides:{root:{"&:hover":{backgroundColor:"rgba(190, 219, 176, 1)",color:"rgba(22, 22, 22, 1)"}}}},MuiInputLabel:{styleOverrides:{root:{"&.Mui-focused":{color:"rgba(255, 255, 255, 0.3)"},color:"rgba(255, 255, 255, 0.3)"}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"rgba(255, 255, 255, 0.3)"},root:{["&:hover .".concat(b.Z.notchedOutline)]:{borderColor:"rgba(255, 255, 255, 0.3)"},["&.Mui-focused .".concat(b.Z.notchedOutline)]:{borderColor:"rgba(255, 255, 255, 0.3)"},color:"#fff",fontFamily:"Poppins",fontSize:"14px",fontWeight:"400"}}}}});const _=function(){const e=(0,j.I0)(),r=(0,j.v9)(w.AV),[n,m]=o.useState(!1);return(0,k.jsx)(h.Z,{theme:L,children:(0,k.jsx)("section",{className:s.loginSection,children:(0,k.jsxs)(i.Z,{sx:{mt:1,background:"rgba(21, 21, 21, 1)",borderRadius:"8px",padding:"40px","@media (max-width: 375px)":{padding:"24px 5px"}},children:[(0,k.jsx)(a.rU,{className:s.registerLink,to:"/auth/register",underline:"none",children:"Registration"}),(0,k.jsx)(a.rU,{className:s.loginLink,to:"/login",underline:"none",children:"Log In"}),(0,k.jsxs)(i.Z,{component:"form",onSubmit:async r=>{r.preventDefault();const n=r.currentTarget;try{await e((0,v.x4)({email:n.elements.email.value,password:n.elements.password.value})).unwrap(),Z.Notify.success("Welcome, ".concat(n.elements.email.value,"!")),n.reset()}catch(o){Z.Notify.failure("Login failed. Please enter correct data!")}},noValidate:!0,sx:{mt:1,display:"flex",flexDirection:"column",gap:"20px",marginTop:"30px"},children:[(0,k.jsx)(f.Z,{required:!0,id:"email",label:"Email",name:"email",variant:"outlined"}),(0,k.jsx)(i.Z,{children:(0,k.jsxs)(p.Z,{sx:{width:"345px"},variant:"outlined",children:[(0,k.jsx)(x.Z,{htmlFor:"password",required:!0,children:"Confirm a password"}),(0,k.jsx)(g.Z,{name:"password",id:"password",type:n?"text":"password",endAdornment:(0,k.jsx)(l.Z,{position:"end",children:(0,k.jsx)(u.Z,{sx:{color:"rgba(255, 255, 255, 0.3)"},"aria-label":"toggle password visibility",onClick:()=>m((e=>!e)),onMouseDown:e=>{e.preventDefault()},edge:"end",children:n?(0,k.jsx)(c.Z,{}):(0,k.jsx)(d.Z,{})})}),label:"Confirm a password",required:!0})]})}),(0,k.jsx)(t.Z,{className:s.btnRegister,variant:"text",type:"submit",sx:{mb:1,background:"rgba(190, 219, 176, 1)",color:"rgba(22, 22, 22, 1)",fontFamily:"Poppins",textTransform:"unset",width:"344px",height:"49px",marginTop:"20px"},children:"login"===r?(0,k.jsx)(y.Z,{}):(0,k.jsx)(k.Fragment,{children:"Log In Now"})})]})]})})})}},1160:(e,r,n)=>{n.r(r),n.d(r,{default:()=>C});var o=n(2791),i=n(697),t=n(4294);const s={loginSection:"RegisterForm_loginSection__-iytx",loginLink:"RegisterForm_loginLink__DuX-B",registerLink:"RegisterForm_registerLink__qhaoL"};var a=n(1087),l=n(3466),d=n(3746),c=n(165),u=n(3400),g=n(7196),x=n(829),p=n(8096),m=n(7107),h=n(4507),b=n(6059),f=n(6459),j=n(7689),v=n(4420),Z=n(5822),w=n(5264),y=n(4289),k=n(7344),L=n(184);const _=(0,m.Z)({components:{MuiButton:{styleOverrides:{root:{"&:hover":{backgroundColor:"rgba(190, 219, 176, 1)",color:"rgba(22, 22, 22, 1)"}}}},MuiInputLabel:{styleOverrides:{root:{"&.Mui-focused":{color:"rgba(255, 255, 255, 0.3)"},color:"rgba(255, 255, 255, 0.3)"}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"rgba(255, 255, 255, 0.3)"},root:{["&:hover .".concat(b.Z.notchedOutline)]:{borderColor:"rgba(255, 255, 255, 0.3)"},["&.Mui-focused .".concat(b.Z.notchedOutline)]:{borderColor:"rgba(255, 255, 255, 0.3)"},color:"#fff",fontFamily:"Poppins",fontSize:"14px",fontWeight:"400"}}}}});const C=function(){const e=(0,v.I0)(),r=(0,j.s0)(),n=(0,v.v9)(y.AV),[m,b]=o.useState(!1);return(0,L.jsx)(h.Z,{theme:_,children:(0,L.jsx)("section",{className:s.loginSection,children:(0,L.jsxs)(i.Z,{sx:{mt:1,background:"rgba(21, 21, 21, 1)",borderRadius:"8px",padding:"40px","@media (max-width: 375px)":{padding:"24px 5px"}},children:[(0,L.jsx)(a.rU,{className:s.registerLink,to:"/register",underline:"none",children:"Registration"}),(0,L.jsx)(a.rU,{className:s.loginLink,to:"/auth/login",underline:"none",children:"Log In"}),(0,L.jsxs)(i.Z,{onSubmit:async n=>{n.preventDefault();const o=n.currentTarget;try{await e((0,Z.z2)({name:o.elements.name.value,email:o.elements.email.value,password:o.elements.password.value})).unwrap(),o.reset(),w.Notify.success("Congratulations, you have successfully registered!"),r("/auth/login")}catch(i){w.Notify.failure("User already exist")}},component:"form",noValidate:!0,autoComplete:"off",sx:{mt:1,display:"flex",flexDirection:"column",gap:"20px",marginTop:"25px"},children:[(0,L.jsx)(f.Z,{name:"name",required:!0,id:"name",label:"Enter your name",variant:"outlined",autoFocus:!0}),(0,L.jsx)(f.Z,{required:!0,id:"email",label:"Enter your email",name:"email",variant:"outlined"}),(0,L.jsx)(i.Z,{children:(0,L.jsxs)(p.Z,{sx:{width:"345px"},variant:"outlined",children:[(0,L.jsx)(x.Z,{htmlFor:"password",required:!0,children:"Create a password"}),(0,L.jsx)(g.Z,{name:"password",id:"password",type:m?"text":"password",endAdornment:(0,L.jsx)(l.Z,{position:"end",children:(0,L.jsx)(u.Z,{sx:{color:"rgba(255, 255, 255, 0.3)"},"aria-label":"toggle password visibility",onClick:()=>b((e=>!e)),onMouseDown:e=>{e.preventDefault()},edge:"end",children:m?(0,L.jsx)(c.Z,{}):(0,L.jsx)(d.Z,{})})}),label:"Create a password*",required:!0})]})}),(0,L.jsx)(t.Z,{className:s.btnRegister,variant:"text",type:"submit",sx:{mb:1,background:"rgba(190, 219, 176, 1)",color:"rgba(22, 22, 22, 1)",fontFamily:"Poppins",textTransform:"unset",width:"344px",height:"49px",marginTop:"20px"},children:"register"===n?(0,L.jsx)(k.Z,{}):(0,L.jsx)(L.Fragment,{children:"Register Now"})})]})]})})})}},3786:(e,r,n)=>{n.r(r),n.d(r,{default:()=>a});n(2791);var o=n(7689),i=n(8752),t=n(1160),s=n(184);const a=function(){const{id:e}=(0,o.UO)();return(0,s.jsxs)("div",{children:["register"===e&&(0,s.jsx)(t.default,{}),"login"===e&&(0,s.jsx)(i.default,{})]})}}}]);
//# sourceMappingURL=786.a24fcf2a.chunk.js.map