"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9584],{14836:function(We,Y,t){t.r(Y),t.d(Y,{default:function(){return gt}});var re=t(97857),u=t.n(re),se=t(15009),b=t.n(se),ie=t(99289),w=t.n(ie),C=t(5574),L=t.n(C),z=t(68400),o=t.n(z),S=t(71471),H=t(15746),I=t(74330),T=t(67294),R=t(29557),Q=t(96460),K=t(14195),V=t(3023),$=t(75358),J=t(69427),G=t(99331),l=t(5405),d=t(80854),c=t(66419),e=t(85893),q,W,a,r,i,f,n=l.default.div(q||(q=o()([`
  background: white;
  border: 1px solid `,`;
  padding: 16px;
  border-radius: 10px;
  width: 260px;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`])),c.Gj.border),h=l.default.div(W||(W=o()([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`]))),Z=l.default.span(a||(a=o()([`
  font-size: 16px;
  font-weight: 600;
`]))),Ze=l.default.span(r||(r=o()([`
  padding: 2px 10px;
  font-weight: 700;
  border-radius: 4px;
  color: `,`;
  background: `,`15;
  border: 1px solid `,`40;
`])),function(m){return m.$color},function(m){return m.$color},function(m){return m.$color}),ze=l.default.div(i||(i=o()([`
  font-size: 12px;
  color: `,`;
  margin-bottom: 4px;

  b {
    color: `,`;
  }
`])),c.Gj.textSecondary,c.Gj.darkText),Ie=l.default.img(f||(f=o()([`
  width: 100%;
  height: 120px;
  object-fit: cover;
  background: #262626;
  border-radius: 6px;
  margin-top: 8px;
`]))),de=function(g){var p=g.active,v=g.payload;if(!p||!v||!v.length)return null;var x=v[0].payload,D=c.Zj.find(function(ae){return ae.key===x.emotionKey})||c.Zj[6],M=(0,c.XC)(x.attention),_=x.second,O=x.interval?Number(x.interval):15,P=_+O,U="".concat((0,c.mr)(_)," - ").concat((0,c.mr)(P));return(0,e.jsxs)(n,{children:[(0,e.jsxs)(h,{children:[(0,e.jsxs)(Z,{children:[D.icon," ",(0,e.jsx)(d.FormattedMessage,{id:D.labelId})]}),(0,e.jsxs)(Ze,{$color:M,children:[x.attention,"%"]})]}),(0,e.jsxs)(ze,{children:[(0,e.jsx)(d.FormattedMessage,{id:"time_segment"}),": ",(0,e.jsx)("b",{children:U})]}),x.screen_path&&(0,e.jsx)(Ie,{src:x.screen_path,alt:"preview"})]})},ce,Ke=l.default.div(ce||(ce=o()([`
  font-size: 26px;
  text-align: center;
`]))),Ue=function(g){var p=g.cx,v=g.payload;if(p===void 0||!v)return null;var x=c.Zj.find(function(D){return D.key===v.emotionKey})||c.Zj.find(function(D){return D.key===c.aU.NEUTRAL});return(0,e.jsx)("foreignObject",{x:p-15,y:30,width:30,height:40,children:(0,e.jsx)(Ke,{title:v.emotionKey,children:x.icon})},"".concat(p,"-").concat(v.time))},Be=Ue,me,pe,fe,he,ve,Ne=S.Z.Text,Xe=l.default.div(me||(me=o()([`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: transparent;
  touch-action: pan-x;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e8e8e8;
    border-radius: 4px;
  }
`]))),Ye=l.default.div(pe||(pe=o()([`
  width: `,`;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 100px 0;
`])),function(m){return m.$width}),ge=l.default.div(fe||(fe=o()([`
  margin-bottom: 16px;
  padding-left: `,`px;
`])),function(m){return m.$paddingLeft}),xe=l.default.div(he||(he=o()([`
  height: `,`px;
  width: 100%;
  position: relative;
`])),function(m){return m.$height}),je=(0,l.default)(Ne)(ve||(ve=o()([`
  font-size: 16px;
`]))),ee=45,He=function(g){var p=g.chartData,v=g.loading,x=g.chartWidth,D=g.resolution,M=(0,T.useCallback)(function(_,O){return p.length===0?null:(0,e.jsx)("linearGradient",{id:_,x1:"0",y1:"0",x2:"1",y2:"0",children:p.map(function(P,U){return(0,e.jsx)("stop",{offset:"".concat(U/(p.length-1)*100,"%"),stopColor:(0,c.XC)(P.attention),stopOpacity:O?.4:1},"".concat(_,"-").concat(P.time))})})},[p]);return(0,e.jsx)(H.Z,{span:24,children:(0,e.jsx)(I.Z,{spinning:v,children:(0,e.jsx)(Xe,{children:(0,e.jsxs)(Ye,{$width:x,children:[(0,e.jsx)(ge,{$paddingLeft:ee,children:(0,e.jsx)(je,{strong:!0,children:(0,e.jsx)(d.FormattedMessage,{id:"listeners_engagement"})})}),(0,e.jsx)(xe,{$height:380,children:(0,e.jsx)(R.h,{children:(0,e.jsxs)(Q.T,{data:p,margin:{top:10,right:30,left:0,bottom:20},children:[(0,e.jsxs)("defs",{children:[M("dynamicFill",!0),M("dynamicStroke",!1)]}),(0,e.jsx)(K.q,{strokeDasharray:"3 3",vertical:!1,stroke:"#f0f0f0"}),(0,e.jsx)(V.K,{dataKey:"time",axisLine:{stroke:c.Gj.border},tick:{fontSize:12},dy:10,interval:D>=300?0:"preserveStartEnd"}),(0,e.jsx)($.B,{width:ee,domain:[0,100],ticks:[0,50,100],tickFormatter:function(O){return"".concat(O,"%")},axisLine:!1,tickLine:!1,tick:{fontSize:11}}),(0,e.jsx)(J.u,{content:(0,e.jsx)(de,{}),cursor:{stroke:"#40a9ff",strokeWidth:1.5}}),(0,e.jsx)(G.uN,{type:"monotone",dataKey:"attention",stroke:"url(#dynamicStroke)",strokeWidth:3,fill:"url(#dynamicFill)",isAnimationActive:!1})]})})}),(0,e.jsx)(ge,{$paddingLeft:ee,style:{marginTop:60},children:(0,e.jsx)(je,{strong:!0,children:(0,e.jsx)(d.FormattedMessage,{id:"detected_emotions"})})}),(0,e.jsx)(xe,{$height:250,children:(0,e.jsx)(R.h,{children:(0,e.jsxs)(Q.T,{data:p,margin:{top:0,right:30,left:0,bottom:100},children:[(0,e.jsx)(V.K,{dataKey:"time",axisLine:{stroke:c.Gj.border},tickLine:!1,tick:{fontSize:12},dy:10,interval:D>=300?0:"preserveStartEnd"}),(0,e.jsx)($.B,{width:ee,axisLine:!1,tick:!1,tickLine:!1,domain:[0,100]}),(0,e.jsx)(J.u,{content:(0,e.jsx)(de,{})}),(0,e.jsx)(G.uN,{type:"monotone",dataKey:"max_emotion_percentage_val",stroke:"none",fill:"none",isAnimationActive:!1,dot:(0,e.jsx)(Be,{})})]})})})]})})})})},Qe=He,Ve=t(69753),Je=t(14726),te=t(78957),ye,be,Te,qe=S.Z.Text,et=(0,l.default)(Je.ZP)(ye||(ye=o()([`
  border-radius: 8px;
`]))),tt=(0,l.default)(qe)(be||(be=o()([`
  font-size: 13px;
  margin-left: 4px;
`]))),nt=l.default.b(Te||(Te=o()([`
  color: `,`;
`])),c.Gj.darkText),at=function(g){var p=g.url,v=g.expirationTime;return p?(0,e.jsxs)(te.Z,{size:"middle",children:[(0,e.jsx)(et,{type:"primary",icon:(0,e.jsx)(Ve.Z,{}),size:"large",onClick:function(){return window.open(p,"_blank")},children:(0,e.jsx)(d.FormattedMessage,{id:"download_recording"})}),v&&(0,e.jsx)(tt,{type:"secondary",children:(0,e.jsx)(d.FormattedMessage,{id:"recording_available_until",values:{time:(0,e.jsx)(nt,{children:(0,c.xL)(Number(v))})}})})]},"download-section"):null},rt=at,Ae=t(51490),st=t(74453),it=t(4393),we=t(2453),Ee=t(74656),Ce,De,Me,_e,Se,Oe,Pe,ke,ne=S.Z.Text,ot=l.default.div(Ce||(Ce=o()([`
  padding: 0;
  min-height: 100vh;
`]))),lt=(0,l.default)(it.Z)(De||(De=o()([`
  background: transparent;
  box-shadow: none;
`]))),ut=(0,l.default)(H.Z)(Me||(Me=o()([`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`]))),dt=(0,l.default)(ne)(_e||(_e=o()([`
  font-size: 24px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 6px;
  color: `,`;
  background: `,`;
  border: 1px solid `,`;
  white-space: nowrap;
`])),function(m){return m.color},function(m){return"".concat(m.color,"33")},function(m){return m.color}),ct=(0,l.default)(ne)(Se||(Se=o()([`
  max-width: 250px;
`]))),mt=(0,l.default)(te.Z)(Oe||(Oe=o()([`
  background: `,`;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid `,`;
`])),c.Gj.white,c.Gj.border),pt=(0,l.default)(ne)(Pe||(Pe=o()([`
  font-size: 13px;
`]))),ft=(0,l.default)(ne)(ke||(ke=o()([`
  font-size: 16px;
`]))),ht=[{value:15,label:(0,e.jsx)(d.FormattedMessage,{id:"time.seconds",values:{value:15}})},{value:30,label:(0,e.jsx)(d.FormattedMessage,{id:"time.seconds",values:{value:30}})},{value:60,label:(0,e.jsx)(d.FormattedMessage,{id:"time.minutes",values:{value:1}})},{value:300,label:(0,e.jsx)(d.FormattedMessage,{id:"time.minutes",values:{value:5}})}],vt=function(){var g=(0,d.useParams)(),p=g.modelId,v=g.id,x=(0,T.useState)(15),D=L()(x,2),M=D[0],_=D[1],O=(0,T.useState)(!1),P=L()(O,2),U=P[0],ae=P[1],xt=(0,T.useState)(null),Fe=L()(xt,2),s=Fe[0],jt=Fe[1],yt=(0,T.useState)([]),Le=L()(yt,2),B=Le[0],Re=Le[1],oe=(0,d.useSelectedRoutes)(),$e=(0,T.useMemo)(function(){return(0,c.XC)(s!=null&&s.rating?s.rating:0)},[s==null?void 0:s.rating]);console.log($e,"color");var k=(0,T.useMemo)(function(){var E,F=(E=oe[oe.length-1])===null||E===void 0?void 0:E.route;return F==null?void 0:F.modelType},[oe]),bt=(0,T.useMemo)(function(){return[{title:(0,e.jsx)(d.FormattedMessage,{id:k==="webinar"?"menu.Courses":"other_activities"})},{title:(0,e.jsx)(d.Link,{to:k==="webinar"?"/courses/webinars/list":"/other/consultations",children:(0,e.jsx)(d.FormattedMessage,{id:k==="webinar"?"webinars":"consultations"})})},{title:(s==null?void 0:s.model_name)||(0,e.jsx)(d.FormattedMessage,{id:"details"})}]},[k,s]),Ge=(0,T.useMemo)(function(){return M<=30?85:150},[M]);(0,T.useEffect)(function(){var E=function(){var F=w()(b()().mark(function N(){var A;return b()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(!(!k||!p||!v)){j.next=2;break}return j.abrupt("return");case 2:return j.prev=2,j.next=5,(0,Ae.Mg)(k,p,v);case 5:A=j.sent,A!=null&&A.success&&jt(A.data),j.next=12;break;case 9:j.prev=9,j.t0=j.catch(2),we.ZP.error("Error fetching meta data");case 12:case"end":return j.stop()}},N,null,[[2,9]])}));return function(){return F.apply(this,arguments)}}();E()},[k,p,v]),(0,T.useEffect)(function(){var E=function(){var F=w()(b()().mark(function N(){var A,le,j;return b()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(s!=null&&s.id){y.next=2;break}return y.abrupt("return");case 2:return ae(!0),y.prev=3,y.next=6,(0,Ae.vu)(s.id,{interval:M});case 6:A=y.sent,A!=null&&A.success&&A.data&&A.data.length>0?(le=new Date(A.data[0].window_start).getTime(),j=A.data.map(function(X){var At=new Date(X.window_start).getTime(),ue=Math.floor((At-le)/1e3);return u()(u()({},X),{},{second:ue,interval:M,time:"".concat(Math.floor(ue/60),":").concat((ue%60).toString().padStart(2,"0")),attention:Math.round(parseFloat(X.attention)*100)||0,max_emotion_percentage_val:Math.round(parseFloat(X.max_emotion_percentage)*100)||0,emotionKey:X.max_emotion||c.aU.NEUTRAL})}),Re(j)):Re([]),y.next=14;break;case 10:y.prev=10,y.t0=y.catch(3),console.error(y.t0),we.ZP.error("Error fetching chart data");case 14:return y.prev=14,ae(!1),y.finish(14);case 17:case"end":return y.stop()}},N,null,[[3,10,14,17]])}));return function(){return F.apply(this,arguments)}}();E()},[s==null?void 0:s.id,M]);var Tt=(0,T.useMemo)(function(){var E=B.length*Ge;return B.length>5?"".concat(E,"px"):"100%"},[B.length,Ge]);return(0,e.jsx)(st._z,{header:{breadcrumb:{items:bt},title:s==null?void 0:s.model_name,extra:[(0,e.jsx)(rt,{url:s==null?void 0:s.url,expirationTime:s==null?void 0:s.url_expiration_time_millis},"download")]},children:(0,e.jsx)(ot,{children:(0,e.jsxs)(lt,{bordered:!1,children:[(0,e.jsxs)(ut,{span:24,children:[(0,e.jsxs)(te.Z,{direction:"vertical",size:8,children:[(0,e.jsx)(ft,{strong:!0,children:(0,e.jsx)(d.FormattedMessage,{id:"engagement_rating"})}),(0,e.jsxs)(te.Z,{size:"large",children:[(0,e.jsx)(dt,{color:$e,children:(0,c.A6)((s==null?void 0:s.rating)||0)}),(0,e.jsx)(ct,{type:"secondary",children:(0,e.jsx)(d.FormattedMessage,{id:"ai_analysis_average"})})]})]}),(0,e.jsxs)(mt,{align:"center",children:[(0,e.jsxs)(pt,{children:[(0,e.jsx)(d.FormattedMessage,{id:"resolution"}),":"]}),(0,e.jsx)(Ee.default,{value:M,onChange:_,style:{width:100},variant:"borderless",children:ht.map(function(E){return(0,e.jsx)(Ee.default.Option,{value:E.value,children:E.label},E.value)})})]})]}),B&&(0,e.jsx)(Qe,{chartData:B,loading:U,chartWidth:Tt,resolution:M})]})})})},gt=vt},51490:function(We,Y,t){t.d(Y,{FS:function(){return l},MP:function(){return V},Mg:function(){return c},SQ:function(){return Q},YG:function(){return J},YS:function(){return o},hR:function(){return T},hW:function(){return H},sL:function(){return L},vu:function(){return q}});var re=t(15009),u=t.n(re),se=t(97857),b=t.n(se),ie=t(99289),w=t.n(ie),C=t(80854);function L(a,r){return z.apply(this,arguments)}function z(){return z=w()(u()().mark(function a(r,i){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,C.request)("/api/admin/consultations",b()({method:"GET",useCache:!1,params:r},i||{})));case 1:case"end":return n.stop()}},a)})),z.apply(this,arguments)}function o(a,r){return S.apply(this,arguments)}function S(){return S=w()(u()().mark(function a(r,i){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,C.request)("/api/admin/consultations",b()({method:"POST",headers:{"Content-Type":"application/json"},data:r},i||{})));case 1:case"end":return n.stop()}},a)})),S.apply(this,arguments)}function H(a,r){return I.apply(this,arguments)}function I(){return I=w()(u()().mark(function a(r,i){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(r),b()({method:"GET",useCache:!1},i||{})));case 1:case"end":return n.stop()}},a)})),I.apply(this,arguments)}function T(a,r,i){return R.apply(this,arguments)}function R(){return R=w()(u()().mark(function a(r,i,f){return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(r),b()({method:"PUT",headers:{"Content-Type":"application/json"},data:i},f||{})));case 1:case"end":return h.stop()}},a)})),R.apply(this,arguments)}function Q(a,r){return K.apply(this,arguments)}function K(){return K=w()(u()().mark(function a(r,i){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(r),b()({method:"DELETE",useCache:!1},i||{})));case 1:case"end":return n.stop()}},a)})),K.apply(this,arguments)}function V(a,r){return $.apply(this,arguments)}function $(){return $=w()(u()().mark(function a(r,i){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(r,"/schedule"),b()({method:"GET",useCache:!1},i||{})));case 1:case"end":return n.stop()}},a)})),$.apply(this,arguments)}function J(a,r,i){return G.apply(this,arguments)}function G(){return G=w()(u()().mark(function a(r,i,f){return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,C.request)("/api/admin/consultations/change-term/".concat(r),b()({method:"POST",headers:{"Content-Type":"application/json"},data:{executed_at:i}},f||{})));case 1:case"end":return h.stop()}},a)})),G.apply(this,arguments)}function l(a,r){return d.apply(this,arguments)}function d(){return d=w()(u()().mark(function a(r,i){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,C.request)("/api/admin/recommender/terms/".concat(r),{method:"GET",params:i}));case 1:case"end":return n.stop()}},a)})),d.apply(this,arguments)}function c(a,r,i,f){return e.apply(this,arguments)}function e(){return e=w()(u()().mark(function a(r,i,f,n){return u()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",(0,C.request)("/api/admin/recommender/analytics/".concat(r,"/").concat(i,"/").concat(f),b()({method:"GET"},n||{})));case 1:case"end":return Z.stop()}},a)})),e.apply(this,arguments)}function q(a,r,i){return W.apply(this,arguments)}function W(){return W=w()(u()().mark(function a(r,i,f){return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,C.request)("/api/admin/recommender/analytics/aggregated-frames/".concat(r),b()({method:"GET",params:i},f||{})));case 1:case"end":return h.stop()}},a)})),W.apply(this,arguments)}}}]);

//# sourceMappingURL=p__Consultations__components__EffectivenessAnalysisDetails.db29b194.async.js.map