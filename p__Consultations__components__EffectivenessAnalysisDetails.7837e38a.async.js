"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9584],{14836:function(Ge,Y,t){t.r(Y),t.d(Y,{default:function(){return vt}});var re=t(97857),c=t.n(re),se=t(15009),T=t.n(se),ie=t(99289),A=t.n(ie),E=t(5574),R=t.n(E),z=t(68400),o=t.n(z),O=t(71471),H=t(15746),I=t(74330),x=t(67294),L=t(29557),Q=t(96460),K=t(14195),V=t(3023),$=t(75358),J=t(69427),G=t(99331),l=t(5405),u=t(80854),d=t(66419),e=t(85893),q,W,r,s,i,f,a=l.default.div(q||(q=o()([`
  background: white;
  border: 1px solid `,`;
  padding: 16px;
  border-radius: 10px;
  width: 260px;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`])),d.Gj.border),h=l.default.div(W||(W=o()([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`]))),Z=l.default.span(r||(r=o()([`
  font-size: 16px;
  font-weight: 600;
`]))),We=l.default.span(s||(s=o()([`
  padding: 2px 10px;
  font-weight: 700;
  border-radius: 4px;
  color: `,`;
  background: `,`15;
  border: 1px solid `,`40;
`])),function(m){return m.$color},function(m){return m.$color},function(m){return m.$color}),Ze=l.default.div(i||(i=o()([`
  font-size: 12px;
  color: `,`;
  margin-bottom: 4px;

  b {
    color: `,`;
  }
`])),d.Gj.textSecondary,d.Gj.darkText),ze=l.default.img(f||(f=o()([`
  width: 100%;
  height: 120px;
  object-fit: cover;
  background: #262626;
  border-radius: 6px;
  margin-top: 8px;
`]))),de=function(g){var p=g.active,v=g.payload;if(!p||!v||!v.length)return null;var j=v[0].payload,D=d.Zj.find(function(ae){return ae.key===j.emotionKey})||d.Zj[6],M=(0,d.XC)(j.attention),_=j.second,F=j.interval?Number(j.interval):15,P=_+F,U="".concat((0,d.mr)(_)," - ").concat((0,d.mr)(P));return(0,e.jsxs)(a,{children:[(0,e.jsxs)(h,{children:[(0,e.jsxs)(Z,{children:[D.icon," ",(0,e.jsx)(u.FormattedMessage,{id:D.labelId})]}),(0,e.jsxs)(We,{$color:M,children:[j.attention,"%"]})]}),(0,e.jsxs)(Ze,{children:[(0,e.jsx)(u.FormattedMessage,{id:"time_segment"}),": ",(0,e.jsx)("b",{children:U})]}),j.screen_path&&(0,e.jsx)(ze,{src:j.screen_path,alt:"preview"})]})},ce,Ie=l.default.div(ce||(ce=o()([`
  font-size: 26px;
  text-align: center;
`]))),Ke=function(g){var p=g.cx,v=g.payload;if(p===void 0||!v)return null;var j=d.Zj.find(function(D){return D.key===v.emotionKey})||d.Zj.find(function(D){return D.key===d.aU.NEUTRAL});return(0,e.jsx)("foreignObject",{x:p-15,y:30,width:30,height:40,children:(0,e.jsx)(Ie,{title:v.emotionKey,children:j.icon})},"".concat(p,"-").concat(v.time))},Ue=Ke,me,pe,fe,he,ve,Be=O.Z.Text,Ne=l.default.div(me||(me=o()([`
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
`]))),Xe=l.default.div(pe||(pe=o()([`
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
`])),function(m){return m.$height}),je=(0,l.default)(Be)(ve||(ve=o()([`
  font-size: 16px;
`]))),ee=45,Ye=function(g){var p=g.chartData,v=g.loading,j=g.chartWidth,D=g.resolution,M=(0,x.useCallback)(function(_,F){return p.length===0?null:(0,e.jsx)("linearGradient",{id:_,x1:"0",y1:"0",x2:"1",y2:"0",children:p.map(function(P,U){return(0,e.jsx)("stop",{offset:"".concat(U/(p.length-1)*100,"%"),stopColor:(0,d.XC)(P.attention),stopOpacity:F?.4:1},"".concat(_,"-").concat(P.time))})})},[p]);return(0,e.jsx)(H.Z,{span:24,children:(0,e.jsx)(I.Z,{spinning:v,children:(0,e.jsx)(Ne,{children:(0,e.jsxs)(Xe,{$width:j,children:[(0,e.jsx)(ge,{$paddingLeft:ee,children:(0,e.jsx)(je,{strong:!0,children:(0,e.jsx)(u.FormattedMessage,{id:"listeners_engagement"})})}),(0,e.jsx)(xe,{$height:380,children:(0,e.jsx)(L.h,{children:(0,e.jsxs)(Q.T,{data:p,margin:{top:10,right:30,left:0,bottom:20},children:[(0,e.jsxs)("defs",{children:[M("dynamicFill",!0),M("dynamicStroke",!1)]}),(0,e.jsx)(K.q,{strokeDasharray:"3 3",vertical:!1,stroke:"#f0f0f0"}),(0,e.jsx)(V.K,{dataKey:"time",axisLine:{stroke:d.Gj.border},tick:{fontSize:12},dy:10,interval:D>=300?0:"preserveStartEnd"}),(0,e.jsx)($.B,{width:ee,domain:[0,100],ticks:[0,50,100],tickFormatter:function(F){return"".concat(F,"%")},axisLine:!1,tickLine:!1,tick:{fontSize:11}}),(0,e.jsx)(J.u,{content:(0,e.jsx)(de,{}),cursor:{stroke:"#40a9ff",strokeWidth:1.5}}),(0,e.jsx)(G.uN,{type:"monotone",dataKey:"attention",stroke:"url(#dynamicStroke)",strokeWidth:3,fill:"url(#dynamicFill)",isAnimationActive:!1})]})})}),(0,e.jsx)(ge,{$paddingLeft:ee,style:{marginTop:60},children:(0,e.jsx)(je,{strong:!0,children:(0,e.jsx)(u.FormattedMessage,{id:"detected_emotions"})})}),(0,e.jsx)(xe,{$height:250,children:(0,e.jsx)(L.h,{children:(0,e.jsxs)(Q.T,{data:p,margin:{top:0,right:30,left:0,bottom:100},children:[(0,e.jsx)(V.K,{dataKey:"time",axisLine:{stroke:d.Gj.border},tickLine:!1,tick:{fontSize:12},dy:10,interval:D>=300?0:"preserveStartEnd"}),(0,e.jsx)($.B,{width:ee,axisLine:!1,tick:!1,tickLine:!1,domain:[0,100]}),(0,e.jsx)(J.u,{content:(0,e.jsx)(de,{})}),(0,e.jsx)(G.uN,{type:"monotone",dataKey:"max_emotion_percentage_val",stroke:"none",fill:"none",isAnimationActive:!1,dot:(0,e.jsx)(Ue,{})})]})})})]})})})})},He=Ye,Qe=t(69753),Ve=t(14726),te=t(78957),ye,be,Te,Je=O.Z.Text,qe=(0,l.default)(Ve.ZP)(ye||(ye=o()([`
  border-radius: 8px;
`]))),et=(0,l.default)(Je)(be||(be=o()([`
  font-size: 13px;
  margin-left: 4px;
`]))),tt=l.default.b(Te||(Te=o()([`
  color: `,`;
`])),d.Gj.darkText),nt=function(g){var p=g.url,v=g.expirationTime;return p?(0,e.jsxs)(te.Z,{size:"middle",children:[(0,e.jsx)(qe,{type:"primary",icon:(0,e.jsx)(Qe.Z,{}),size:"large",onClick:function(){return window.open(p,"_blank")},children:(0,e.jsx)(u.FormattedMessage,{id:"download_recording"})}),v&&(0,e.jsx)(et,{type:"secondary",children:(0,e.jsx)(u.FormattedMessage,{id:"recording_available_until",values:{time:(0,e.jsx)(tt,{children:(0,d.xL)(Number(v))})}})})]},"download-section"):null},at=nt,we=t(51490),rt=t(74453),st=t(4393),Ae=t(2453),Ce=t(74656),Ee,De,Me,_e,Se,Oe,Fe,Pe,ne=O.Z.Text,it=l.default.div(Ee||(Ee=o()([`
  padding: 0;
  min-height: 100vh;
`]))),ot=(0,l.default)(st.Z)(De||(De=o()([`
  background: transparent;
  box-shadow: none;
`]))),lt=(0,l.default)(H.Z)(Me||(Me=o()([`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`]))),ut=(0,l.default)(ne)(_e||(_e=o()([`
  font-size: 24px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 6px;
  color: `,`;
  background: `,`;
  border: 1px solid `,`;
  white-space: nowrap;
`])),function(m){return m.color},function(m){return"".concat(m.color,"33")},function(m){return m.color}),dt=(0,l.default)(ne)(Se||(Se=o()([`
  max-width: 250px;
`]))),ct=(0,l.default)(te.Z)(Oe||(Oe=o()([`
  background: `,`;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid `,`;
`])),d.Gj.white,d.Gj.border),mt=(0,l.default)(ne)(Fe||(Fe=o()([`
  font-size: 13px;
`]))),pt=(0,l.default)(ne)(Pe||(Pe=o()([`
  font-size: 16px;
`]))),ft=[{value:15,label:(0,e.jsx)(u.FormattedMessage,{id:"time.seconds",values:{value:15}})},{value:30,label:(0,e.jsx)(u.FormattedMessage,{id:"time.seconds",values:{value:30}})},{value:60,label:(0,e.jsx)(u.FormattedMessage,{id:"time.minutes",values:{value:1}})},{value:300,label:(0,e.jsx)(u.FormattedMessage,{id:"time.minutes",values:{value:5}})}],ht=function(){var g=(0,u.useParams)(),p=g.modelId,v=g.id,j=(0,x.useState)(15),D=R()(j,2),M=D[0],_=D[1],F=(0,x.useState)(!1),P=R()(F,2),U=P[0],ae=P[1],gt=(0,x.useState)(null),ke=R()(gt,2),n=ke[0],xt=ke[1],jt=(0,x.useState)([]),Re=R()(jt,2),B=Re[0],Le=Re[1],oe=(0,u.useSelectedRoutes)(),yt=(0,x.useMemo)(function(){return(0,d.XC)(n!=null&&n.rating?n.rating:0)},[n==null?void 0:n.rating]),bt=(0,x.useMemo)(function(){return(0,d.CR)(n!=null&&n.rating?n.rating:0)},[n==null?void 0:n.rating]);console.log(yt,"color");var S=(0,x.useMemo)(function(){var C,k=(C=oe[oe.length-1])===null||C===void 0?void 0:C.route;return k==null?void 0:k.modelType},[oe]),Tt=(0,x.useMemo)(function(){return[{title:(0,e.jsx)(u.FormattedMessage,{id:S==="webinar"?"menu.Courses":"other_activities"})},{title:(0,e.jsx)(u.Link,{to:S==="webinar"?"/courses/webinars/list":"/other/consultations",children:(0,e.jsx)(u.FormattedMessage,{id:S==="webinar"?"webinars":"consultations"})})},{title:(n==null?void 0:n.model_name)||(0,e.jsx)(u.FormattedMessage,{id:"details"})}]},[S,n]),$e=(0,x.useMemo)(function(){return M<=30?85:150},[M]);(0,x.useEffect)(function(){var C=function(){var k=A()(T()().mark(function N(){var w;return T()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!(!S||!p||!v)){y.next=2;break}return y.abrupt("return");case 2:return y.prev=2,y.next=5,(0,we.Mg)(S,p,v);case 5:w=y.sent,w!=null&&w.success&&xt(w.data),y.next=12;break;case 9:y.prev=9,y.t0=y.catch(2),Ae.ZP.error("Error fetching meta data");case 12:case"end":return y.stop()}},N,null,[[2,9]])}));return function(){return k.apply(this,arguments)}}();C()},[S,p,v]),(0,x.useEffect)(function(){var C=function(){var k=A()(T()().mark(function N(){var w,le,y;return T()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(n!=null&&n.id){b.next=2;break}return b.abrupt("return");case 2:return ae(!0),b.prev=3,b.next=6,(0,we.vu)(n.id,{interval:M});case 6:w=b.sent,w!=null&&w.success&&w.data&&w.data.length>0?(le=new Date(w.data[0].window_start).getTime(),y=w.data.map(function(X){var At=new Date(X.window_start).getTime(),ue=Math.floor((At-le)/1e3);return c()(c()({},X),{},{second:ue,interval:M,time:"".concat(Math.floor(ue/60),":").concat((ue%60).toString().padStart(2,"0")),attention:Math.round(parseFloat(X.attention)*100)||0,max_emotion_percentage_val:Math.round(parseFloat(X.max_emotion_percentage)*100)||0,emotionKey:X.max_emotion||d.aU.NEUTRAL})}),Le(y)):Le([]),b.next=14;break;case 10:b.prev=10,b.t0=b.catch(3),console.error(b.t0),Ae.ZP.error("Error fetching chart data");case 14:return b.prev=14,ae(!1),b.finish(14);case 17:case"end":return b.stop()}},N,null,[[3,10,14,17]])}));return function(){return k.apply(this,arguments)}}();C()},[n==null?void 0:n.id,M]);var wt=(0,x.useMemo)(function(){var C=B.length*$e;return B.length>5?"".concat(C,"px"):"100%"},[B.length,$e]);return(0,e.jsx)(rt._z,{header:{breadcrumb:{items:Tt},title:n==null?void 0:n.model_name,extra:[(0,e.jsx)(at,{url:n==null?void 0:n.url,expirationTime:n==null?void 0:n.url_expiration_time_millis},"download")]},children:(0,e.jsx)(it,{children:(0,e.jsxs)(ot,{bordered:!1,children:[(0,e.jsxs)(lt,{span:24,children:[(0,e.jsxs)(te.Z,{direction:"vertical",size:8,children:[(0,e.jsx)(pt,{strong:!0,children:(0,e.jsx)(u.FormattedMessage,{id:"engagement_rating"})}),(0,e.jsxs)(te.Z,{size:"large",children:[(0,e.jsx)(ut,{color:bt,children:(0,d.A6)((n==null?void 0:n.rating)||0)}),(0,e.jsx)(dt,{type:"secondary",children:(0,e.jsx)(u.FormattedMessage,{id:"ai_analysis_average",values:{modelType:(0,e.jsx)(u.FormattedMessage,{id:S==="webinar"?"webinarFragment":"consultationFragment"})}})})]})]}),(0,e.jsxs)(ct,{align:"center",children:[(0,e.jsxs)(mt,{children:[(0,e.jsx)(u.FormattedMessage,{id:"resolution"}),":"]}),(0,e.jsx)(Ce.default,{value:M,onChange:_,style:{width:100},variant:"borderless",children:ft.map(function(C){return(0,e.jsx)(Ce.default.Option,{value:C.value,children:C.label},C.value)})})]})]}),B&&(0,e.jsx)(He,{chartData:B,loading:U,chartWidth:wt,resolution:M})]})})})},vt=ht},51490:function(Ge,Y,t){t.d(Y,{FS:function(){return l},MP:function(){return V},Mg:function(){return d},SQ:function(){return Q},YG:function(){return J},YS:function(){return o},hR:function(){return x},hW:function(){return H},sL:function(){return R},vu:function(){return q}});var re=t(15009),c=t.n(re),se=t(97857),T=t.n(se),ie=t(99289),A=t.n(ie),E=t(80854);function R(r,s){return z.apply(this,arguments)}function z(){return z=A()(c()().mark(function r(s,i){return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/api/admin/consultations",T()({method:"GET",useCache:!1,params:s},i||{})));case 1:case"end":return a.stop()}},r)})),z.apply(this,arguments)}function o(r,s){return O.apply(this,arguments)}function O(){return O=A()(c()().mark(function r(s,i){return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/api/admin/consultations",T()({method:"POST",headers:{"Content-Type":"application/json"},data:s},i||{})));case 1:case"end":return a.stop()}},r)})),O.apply(this,arguments)}function H(r,s){return I.apply(this,arguments)}function I(){return I=A()(c()().mark(function r(s,i){return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/api/admin/consultations/".concat(s),T()({method:"GET",useCache:!1},i||{})));case 1:case"end":return a.stop()}},r)})),I.apply(this,arguments)}function x(r,s,i){return L.apply(this,arguments)}function L(){return L=A()(c()().mark(function r(s,i,f){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,E.request)("/api/admin/consultations/".concat(s),T()({method:"PUT",headers:{"Content-Type":"application/json"},data:i},f||{})));case 1:case"end":return h.stop()}},r)})),L.apply(this,arguments)}function Q(r,s){return K.apply(this,arguments)}function K(){return K=A()(c()().mark(function r(s,i){return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/api/admin/consultations/".concat(s),T()({method:"DELETE",useCache:!1},i||{})));case 1:case"end":return a.stop()}},r)})),K.apply(this,arguments)}function V(r,s){return $.apply(this,arguments)}function $(){return $=A()(c()().mark(function r(s,i){return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/api/admin/consultations/".concat(s,"/schedule"),T()({method:"GET",useCache:!1},i||{})));case 1:case"end":return a.stop()}},r)})),$.apply(this,arguments)}function J(r,s,i){return G.apply(this,arguments)}function G(){return G=A()(c()().mark(function r(s,i,f){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,E.request)("/api/admin/consultations/change-term/".concat(s),T()({method:"POST",headers:{"Content-Type":"application/json"},data:{executed_at:i}},f||{})));case 1:case"end":return h.stop()}},r)})),G.apply(this,arguments)}function l(r,s){return u.apply(this,arguments)}function u(){return u=A()(c()().mark(function r(s,i){return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/api/admin/recommender/terms/".concat(s),{method:"GET",params:i}));case 1:case"end":return a.stop()}},r)})),u.apply(this,arguments)}function d(r,s,i,f){return e.apply(this,arguments)}function e(){return e=A()(c()().mark(function r(s,i,f,a){return c()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",(0,E.request)("/api/admin/recommender/analytics/".concat(s,"/").concat(i,"/").concat(f),T()({method:"GET"},a||{})));case 1:case"end":return Z.stop()}},r)})),e.apply(this,arguments)}function q(r,s,i){return W.apply(this,arguments)}function W(){return W=A()(c()().mark(function r(s,i,f){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,E.request)("/api/admin/recommender/analytics/aggregated-frames/".concat(s),T()({method:"GET",params:i},f||{})));case 1:case"end":return h.stop()}},r)})),W.apply(this,arguments)}}}]);

//# sourceMappingURL=p__Consultations__components__EffectivenessAnalysisDetails.7837e38a.async.js.map