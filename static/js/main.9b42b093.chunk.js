(this.webpackJsonplxper=this.webpackJsonplxper||[]).push([[0],{124:function(e,t,r){"use strict";r.r(t);var n=r(14),a=r(0),c=r(12),s=r.n(c),o=r(161),u=r(162),i=r(56),j=r(84),O=Object(j.a)({palette:{primary:{main:"#2196f3"},secondary:{main:"#f50057"},error:{main:i.a.A400},background:{default:"#fff"}}}),b=r(32),l=r(41),d=r(83),p=r(86),f=r(76),h=r(23),x=r(38),v=r(37),L=v.LOGIN_REQUEST,E=v.LOGIN_SUCCESS,S=v.LOGIN_FAILURE,m={isLoading:!1,token:"",isAuth:!1,error:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0});case E:return localStorage.setItem("token",t.data.jwt),Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,token:t.data.jwt,isAuth:!0});case S:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,error:t.error});default:return e}},_=function(e){return Object(h.c)({router:Object(l.b)(e),auth:I})},w=r(22),g=r.n(w),k=r(81),N=r.n(k),U=r(43),y=r.n(U),C=r(25),G=r(82),R=r(37),A=g.a.mark(D),T=g.a.mark(W),F=g.a.mark(J),Q=function(){var e=Object(G.a)(g.a.mark((function e(t){var r,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("auth/".concat(t));case 2:return r=e.sent,n={headers:{"Content-Type":"application/json",Auth:r.data.jwt}},e.t0=console,e.next=7,y.a.get("auth",n);case 7:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.abrupt("return",r.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function D(e){var t;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(C.b)(Q,e.data);case 3:return t=r.sent,console.log(t),r.next=7,Object(C.d)({type:R.LOGIN_SUCCESS,data:t.data});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),console.error(r.t0),r.next=14,Object(C.d)({type:R.LOGIN_FAILURE,error:r.t0.response});case 14:case"end":return r.stop()}}),A,null,[[0,9]])}function W(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.e)(R.LOGIN_REQUEST,D);case 2:case"end":return e.stop()}}),T)}function J(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.c)(W)]);case 2:case"end":return e.stop()}}),F)}var X=g.a.mark(q);function q(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.c)(J)]);case 2:case"end":return e.stop()}}),X)}N.a.config(),y.a.defaults.baseURL="https://interview.lxper.ai";var z=Object(d.a)(),M=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,h.d),P=Object(p.a)(),V=[P,Object(f.a)(z)],B=Object(h.e)(_(z),{},M(h.a.apply(void 0,V)));P.run(q);var H=B,K=r(85),Y=r(166),Z=r(158),$=r(125),ee=r(159),te=r(163),re=r(160),ne=r(164),ae=function(){var e=Object(b.d)(),t=Object(b.e)((function(e){return e.auth})).isAuth,r=Object(a.useState)(""),c=Object(K.a)(r,2),s=c[0],o=c[1],u=Object(a.useCallback)((function(e){o(e.target.value)}),[]),i=Object(a.useCallback)((function(){e({type:R.LOGIN_REQUEST,data:s})}),[e,s]);return Object(n.jsxs)(Y.a,{open:!t,maxWidth:"xs",fullWidth:!0,children:[Object(n.jsx)(Z.a,{disableTypography:!0,children:Object(n.jsx)($.a,{variant:"subtitle2",children:"\ubc1c\uae09 \ubc1b\uc740 \uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})}),Object(n.jsx)(ee.a,{children:Object(n.jsx)(te.a,{variant:"outlined",label:"ID",size:"small",fullWidth:!0,autoFocus:!0,onChange:u})}),Object(n.jsx)(re.a,{children:Object(n.jsx)(ne.a,{color:"primary",onClick:i,children:"Login"})})]})},ce=Object(a.memo)(ae),se=function(){return Object(n.jsx)(ce,{})},oe=Object(a.memo)(se),ue=function(){return Object(n.jsx)(b.a,{store:H,children:Object(n.jsx)(l.a,{history:z,children:Object(n.jsx)(oe,{})})})},ie=Object(a.memo)(ue);s.a.render(Object(n.jsxs)(o.a,{theme:O,children:[Object(n.jsx)(u.a,{}),Object(n.jsx)(ie,{})]}),document.querySelector("#root"))},37:function(e,t,r){"use strict";r.r(t),r.d(t,"LOGIN_REQUEST",(function(){return n})),r.d(t,"LOGIN_SUCCESS",(function(){return a})),r.d(t,"LOGIN_FAILURE",(function(){return c}));var n="LOGIN_REQUEST",a="LOGIN_SUCCESS",c="LOGIN_FAILURE"}},[[124,1,2]]]);
//# sourceMappingURL=main.9b42b093.chunk.js.map