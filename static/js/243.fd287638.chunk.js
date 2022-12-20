"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[243],{2243:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var i,r,a,s,o,l,x,c,d,u=t(885),p=t(6377),h=t(2791),m=t(6747),f=t(7195),v=t(6151),g=t(5218),Z=t(3329),j=function(n){var e=n.name,t=void 0===e?"":e,i=n.number,r=void 0===i?"":i,a=n.btnText,s=n.onSubmit,o=(0,h.useState)(t),l=(0,u.Z)(o,2),x=l[0],c=l[1],d=(0,h.useState)(r),p=(0,u.Z)(d,2),j=p[0],b=p[1],w=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"name":c(i);break;case"number":b(i);break;default:return}};return(0,Z.jsxs)(m.Z,{component:"form",sx:{display:"flex",flexDirection:"column",gap:"10px",maxWidth:"360px",width:"100%",p:"10px"},autoComplete:"off",onSubmit:function(n){n.preventDefault();var e=n.target,t=e.elements.name.value.trim(),i=e.elements.number.value.trim();if(""===t||""===i)return g.ZP.error("Fill all fields");s({name:t,number:i}),c(""),b(""),e.reset()},children:[(0,Z.jsx)(f.Z,{label:"Name",name:"name",type:"name",size:"small",onChange:w,value:x,sx:{width:"100%"}}),(0,Z.jsx)(f.Z,{label:"Number",name:"number",type:"phone",size:"small",onChange:w,value:j,sx:{width:"100%"}}),(0,Z.jsx)(v.Z,{sx:{width:"120px",mx:"auto"},type:"submit",variant:"outlined",size:"small",children:a})]})},b=function(n){var e=n.toggleModal,t=(0,p.Tn)(),i=(0,u.Z)(t,1)[0],r=(0,p.Jx)().data;return(0,Z.jsx)(j,{onSubmit:function(n){if(r.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))return alert("".concat(n.name," is already in contacts."));i(n),g.ZP.success("You add new contact."),e()},btnText:"Add contact"})},w=t(5048),C=function(n){return n.filter},y=t(168),z=t(6088),k=z.Z.li(i||(i=(0,y.Z)(["\n  display: flex;\n  min-width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n  &:hover {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n"]))),M=z.Z.p(r||(r=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]))),S=z.Z.div(a||(a=(0,y.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99;\n"]))),L=z.Z.div(s||(s=(0,y.Z)(["\nposition: relative;\n  width: auto;\n  padding: 24px;\n  background-color: white;\n"]))),A=function(n){var e=n.children,t=n.toggleModal,i=(0,p.Jx)().data;(0,h.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,Z.jsxs)(S,{onClick:function(n){n.currentTarget===n.target&&t()},children:[(0,Z.jsx)(L,{children:(0,Z.jsx)(m.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:"360px"},children:i&&e})}),(0,Z.jsx)(g.x7,{position:"top-right",reverseOrder:!0})]})},T=t(7247),D=t(1286),E=t(3400),V=t(5126),W=t(501),H=t(1413),J=t(5861),O=t(4687),P=t.n(O),F=t(9823),I=function(n){var e=n.toggleModal,t=n.id,i=(0,p.wv)(),r=(0,u.Z)(i,1)[0],a=(0,p.Jx)().data,s=a.filter((function(n){return n.id===t})),o=a.map((function(n){return n.name.toLowerCase()})),l=function(){var n=(0,J.Z)(P().mark((function n(i){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o.includes(i.name.toLowerCase())){n.next=4;break}return e(),g.ZP.error("".concat(i.name," is already in contacts.")),n.abrupt("return");case 4:return n.prev=4,n.next=7,r((0,H.Z)({id:t},i));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(4),console.log(n.t0);case 12:e();case 13:case"end":return n.stop()}}),n,null,[[4,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsxs)(m.Z,{children:[(0,Z.jsx)(j,{name:s[0].name,number:s[0].number,onSubmit:l,btnText:"Save"}),(0,Z.jsx)(v.Z,{sx:{position:"absolute",top:"5px",right:"5px",p:"0",minWidth:"0"},onClick:e,children:(0,Z.jsx)(F.Z,{fontSize:"small"})})]})},N=function(n){var e=n.name,t=n.number,i=n.id,r=(0,h.useState)(!1),a=(0,u.Z)(r,2),s=a[0],o=a[1],l=(0,p.Nt)(),x=(0,u.Z)(l,2),c=x[0],d=x[1].isLoading,f=function(){return o((function(n){return!n}))};return(0,Z.jsxs)(k,{children:[(0,Z.jsxs)(m.Z,{sx:{textAlign:"start"},children:[(0,Z.jsxs)(M,{children:[(0,Z.jsx)(W.Z,{sx:{width:"20px",height:"20px"}}),e]}),(0,Z.jsxs)(M,{children:[(0,Z.jsx)(V.Z,{sx:{width:"20px",height:"20px"}})," ",t]})]}),(0,Z.jsxs)(m.Z,{sx:{display:"flex",gap:"5px"},children:[(0,Z.jsx)(E.Z,{"aria-label":"edit",size:"small",onClick:f,disabled:d,children:(0,Z.jsx)(D.Z,{})}),(0,Z.jsx)(E.Z,{"aria-label":"delete",size:"small",onClick:function(){return c(i)},disabled:d,children:(0,Z.jsx)(T.Z,{})})]}),s&&(0,Z.jsx)(A,{toggleModal:f,children:(0,Z.jsx)(I,{id:i,toggleModal:f})})]})},_=z.Z.ul(o||(o=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 350px;\n  padding: 12px;\n\n  @media (max-width: 480px) {\n    align-items: center;\n  }\n"]))),Y=(z.Z.p(l||(l=(0,y.Z)(["\n  text-align: center;\n"]))),z.Z.p(x||(x=(0,y.Z)(["\n  font-size: 20px;\n  color: #1976d2;\n  font-weight: 600;\n  margin-top: 40px;\n"])))),q=function(){var n=(0,p.Jx)().data,e=(0,w.v9)(C),t=n?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):[];return(0,Z.jsx)(Z.Fragment,{children:0===(null===n||void 0===n?void 0:n.length)?(0,Z.jsx)(Y,{children:"No contacts"}):(0,Z.jsx)(_,{children:t.map((function(n){var e=n.id,t=n.name,i=n.number;return(0,Z.jsx)(N,{id:e,name:t,number:i},e)}))})})},B=t(1634),G=z.Z.h3(c||(c=(0,y.Z)(["\n  color: #1976d2;\n"]))),K=t(5193),Q=function(){var n=(0,w.v9)(C),e=(0,w.I0)(),t=(0,K.Z)("(max-width:480px)");return(0,Z.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",gap:"10px",maxWidth:"360px",p:"".concat(!t&&"10px")},children:[!t&&(0,Z.jsx)(G,{children:"Find contacts by name"}),(0,Z.jsx)(f.Z,{placeholder:"Enter name to find...",name:"text",type:"text",size:"small",value:n,onChange:function(n){e((0,B.T)(n.currentTarget.value))},sx:{width:"100%"}})]})},R=t(992),U=z.Z.h2(d||(d=(0,y.Z)(["\n  color: #1976d2;\n  /* padding: 12px; */\n"]))),X=t(8141),$=function(){var n=(0,p.Jx)({count:5},{refetchOnMountOrArgChange:!0}),e=n.data,t=n.error,i=n.isFetching,r=(0,h.useState)(!1),a=(0,u.Z)(r,2),s=a[0],o=a[1],l=function(){return o((function(n){return!n}))},x=(0,K.Z)("(max-width:480px)");return(0,Z.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"space-between",flexDirection:"".concat(x&&"column")},children:[(0,Z.jsxs)(m.Z,{sx:{textAlign:"center",minWidth:"400px",padding:"12px"},children:[x&&(0,Z.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Z.jsx)(U,{children:"Contacts"}),(0,Z.jsx)(Q,{}),(0,Z.jsx)(v.Z,{onClick:l,children:(0,Z.jsx)(X.Z,{})}),s&&(0,Z.jsxs)(A,{toggleModal:l,children:[(0,Z.jsx)(b,{toggleModal:l}),(0,Z.jsx)(v.Z,{sx:{position:"absolute",top:"5px",right:"5px",p:"0",minWidth:"0"},onClick:l,children:(0,Z.jsx)(F.Z,{fontSize:"small"})})]})]}),e&&(0,Z.jsx)(q,{}),i&&!t&&(0,Z.jsx)(R.a,{})]}),(0,Z.jsxs)(m.Z,{sx:{display:"grid",gap:"40px",textAlign:"center",minWidth:"400px"},children:[!x&&(0,Z.jsx)(b,{}),!x&&(0,Z.jsx)(Q,{})]}),(0,Z.jsx)(g.x7,{position:"top-right",reverseOrder:!0})]})}},8141:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(3329),s=(0,r.default)((0,a.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");e.Z=s},9823:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(3329),s=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");e.Z=s},7247:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(3329),s=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=s},1286:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(3329),s=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=s},501:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(3329),s=(0,r.default)((0,a.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");e.Z=s},5126:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),a=t(3329),s=(0,r.default)((0,a.jsx)("path",{d:"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"}),"PhoneAndroid");e.Z=s}}]);
//# sourceMappingURL=243.fd287638.chunk.js.map