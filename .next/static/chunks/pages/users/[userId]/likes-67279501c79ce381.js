(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{6851:function(e,n,t){"use strict";var i=t(555),r=t(508),o=t(9026),c=t(1163),s=t(5893),a={PROFILE:" ",LIKES:"likes",EDIT:"edit"};n.Z=function(e){var n=e.currentTab,t=(0,c.useRouter)(),r=function(e){var n=t.query.userId;t.push("/users/".concat(n,"/").concat(a[e]))};return(0,s.jsxs)(u,{children:[(0,s.jsxs)(d,{children:[(0,s.jsx)(i.Typography,{variants:"body2",color:o.O.g000,children:"계정 설정"}),(0,s.jsx)(l,{isclicked:"PROFILE"===n,onClick:function(){return r("PROFILE")},children:(0,s.jsx)(i.Typography,{variants:"body2",children:"나의 프로필"})}),(0,s.jsx)(l,{isclicked:"EDIT"===n,onClick:function(){return r("EDIT")},children:(0,s.jsx)(i.Typography,{variants:"body2",children:"회원정보 수정"})})]}),(0,s.jsxs)(d,{children:[(0,s.jsx)(i.Typography,{variants:"body2",color:o.O.g000,children:"활동"}),(0,s.jsx)(l,{isclicked:"LIKES"===n,onClick:function(){return r("LIKES")},children:(0,s.jsx)(i.Typography,{variants:"body2",children:"좋아요"})})]})]})};var u=r.styled.div.withConfig({displayName:"MyPageNavigator__SubNavigator",componentId:"sc-1cmvrrq-0"})(["display:flex;flex-direction:column;width:100%;min-width:100px;max-width:200px;word-break:keep-all;"]),d=(0,r.styled)(i.Box).withConfig({displayName:"MyPageNavigator__SubNavigatorSectionBox",componentId:"sc-1cmvrrq-1"})(["display:flex;flex-direction:column;gap:4px;width:100%;"]),l=r.styled.button.withConfig({displayName:"MyPageNavigator__SubNavigatorListItem",componentId:"sc-1cmvrrq-2"})(["display:flex;flex-direction:row;justify-content:start;align-items:center;padding:8px;border-radius:4px;outline:none;border:0;background-color:",";width:100%;&:hover{cursor:pointer;}"],function(e){return e.isclicked?" rgba(0, 0, 0, 0.1)":"transparent"})},1461:function(e,n,t){"use strict";t.d(n,{y:function(){return v}});var i=t(6835),r=t(508),o=t(9026),c=t(1163),s=t(8995),a=t(555),u=t(7294),d=t(5893),l=function(e){var n=e.children,t=e.modalOutsideClick,i=e.modalRef;return(0,d.jsx)(f,{ref:i,onClick:function(e){return t(e)},children:n})},f=r.default.div.withConfig({displayName:"Modal__Wrapper",componentId:"sc-64nbua-0"})(["position:fixed;width:100vw;height:100vh;top:0;left:0;background-color:transparent;z-index:800;"]),p=t(4480),h=t(6613),g=t(6975),x=t(9583),y=t(6492),m=function(e){var n=e.token;return(0,y.a)({queryFn:function(){return fetch("/api/user",{method:"GET",headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){return console.log("call!"),e.json()}).catch(function(e){return e})},queryKey:["user","info",n],onError:function(e){console.log(e)},enabled:!!n,refetchOnWindowFocus:!1})},v=u.memo(function(e){var n=e.isLoggined,t=(0,p.FV)(h.D),r=(0,i.Z)(t,2),o=r[0],f=r[1],y=(0,c.useRouter)(),v=(0,s.Z)(),C=(0,u.useState)(!1),E=C[0],I=C[1],N=(0,u.useState)(null),O=N[0],L=N[1],P=(0,u.useState)(null),T=P[0],R=P[1],S=(0,u.useRef)(null),D=m({token:T}).data;return(0,u.useEffect)(function(){n&&!o&&R((0,g.hP)())},[n,o]),(0,u.useEffect)(function(){f(D)},[D,f]),(0,u.useEffect)(function(){n&&o&&L(o.id)},[n,o]),(0,d.jsxs)(d.Fragment,{children:[E&&(0,d.jsx)(l,{modalRef:S,modalOutsideClick:function(e){S.current===e.target&&I(!1)},children:(0,d.jsxs)(j,{children:[(0,d.jsx)(a.Box,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:8,children:(0,d.jsx)(a.Typography,{variants:"body2",children:(null==o?void 0:o.nickName)+"님"})}),(0,d.jsx)(k,{onClick:function(){return y.push("/users/".concat(O))},children:(0,d.jsx)(a.Typography,{variants:"body2",children:"마이페이지"})}),(0,d.jsx)(k,{onClick:function(){(0,g.gy)(),y.replace("/stretchings")},children:(0,d.jsx)(a.Typography,{variants:"body2",children:"로그아웃"})})]})}),(0,d.jsxs)(b,{ismobile:v,children:[(0,d.jsx)(a.Box,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100%",onClick:function(){return y.push("/stretchings")},children:(0,d.jsx)("img",{src:v?"/favicon.ico":"/logo.png",width:v?16:120,height:v?16:32,alt:""})}),(0,d.jsx)(_,{children:n?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(w,{ismobile:v,onClick:function(){return I(function(e){return!e})},children:null!=o&&o.profileUrl?(0,d.jsx)("img",{width:"100%",height:"100%",src:o.profileUrl,alt:""}):(0,d.jsx)(x.Xws,{color:"white"})})}):(0,d.jsx)(a.Box,{onClick:function(){return y.push("/login")},children:(0,d.jsx)(a.Typography,{variants:"body2",children:"로그인 | 회원가입"})})})]})]})}),b=r.styled.div.withConfig({displayName:"Navigator__Wrapper",componentId:"sc-1owchbj-0"})(["background-color:",";height:auto;padding:",";width:100%;height:",";position:sticky;top:0;box-shadow:4px 4px 8px rgba(0,0,0,0.1);z-index:300;display:flex;justify-content:space-between;align-items:center;:hover{cursor:pointer;}"],o.O.f000,function(e){return e.ismobile?"8px 16px":"16px"},function(e){return e.ismobile?"50px":"70px"}),_=r.styled.div.withConfig({displayName:"Navigator__AccountWrapper",componentId:"sc-1owchbj-1"})([""]),j=r.styled.div.withConfig({displayName:"Navigator__MyPageModal",componentId:"sc-1owchbj-2"})(["position:absolute;right:32px;top:60px;background-color:",";border:1px solid ",";box-shadow:4px 4px 4px rgba(0,0,0,0.1);border-radius:8px;width:180px;height:auto;display:flex;flex-direction:column;padding:8px;gap:4px;"],o.O.f000,o.O.g200),k=r.styled.button.withConfig({displayName:"Navigator__MyPageModalListItem",componentId:"sc-1owchbj-3"})(["display:flex;flex-direction:row;justify-content:start;align-items:center;padding:8px;border-radius:4px;outline:none;border:0;background-color:transparent;&:hover{background-color:rgba(0,0,0,0.1);cursor:pointer;}"]),w=r.styled.div.withConfig({displayName:"Navigator__ProfileWrapper",componentId:"sc-1owchbj-4"})(["width:",";height:",";border-radius:50%;overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:",";"],function(e){return e.ismobile?"30px":"40px"},function(e){return e.ismobile?"30px":"40px"},o.O.g200)},9026:function(e,n,t){"use strict";t.d(n,{O:function(){return i}});var i={r000:" #f64f59",softPrimaryColor:"#6D66AA",vividPrimaryColor:"#2A1598",f300:"#f7f7f7",f200:"#f2f2f2",f100:"#fafafa",f000:"#ffffff",g300:"#888383",g200:"#e5e5e5",g100:"#615B5B",g000:"#C4C4C4"}},6598:function(e,n,t){"use strict";t.d(n,{D_:function(){return r},fC:function(){return i},iW:function(){return o}});var i={UPPER_BODY:"상체",LOWER_BODY:"하체"},r={NECK:"목/가슴/어깨",ARM:"팔/손/손목",BACK:"등/몸통",HIP_JOINT:"고관절/둔근",CALF:"종아리/발목/발",KNEE:"무릎/허벅지"},o={RELIEF_PAIN:"통증완화",IMPROVE_POSTURE:"자세개선",RELAX_MUSCLE:"근육이완",BLOOD_CIRCULATION:"혈액순환",RELIEF_TURTLE_NECK:"거북목 완화",RELIEF_ROUND_SHOULDER:"라운드숄더 완화"}},6975:function(e,n,t){"use strict";t.d(n,{M8:function(){return r},gy:function(){return s},hP:function(){return c},zI:function(){return o}});var i=t(1955);t(1202);var r=function(e){i.Z.set("access_token",e,{secure:!0})},o=function(e){i.Z.set("refresh_token",e,{secure:!0})},c=function(){return i.Z.get("access_token")},s=function(){i.Z.remove("refresh_token",{secure:!0}),i.Z.remove("access_token",{secure:!0})}},8995:function(e,n,t){"use strict";var i=t(7294),r=t(1852);n.Z=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],o=(0,r.useMediaQuery)({query:"(max-width: 768px)"});return(0,i.useEffect)(function(){t(!!o)},[o]),n}},4660:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return g},default:function(){return x}});var i=t(508),r=t(9026),o=t(6851),c=t(555),s=t(7294),a=t(1461),u=t(6492),d=function(e){var n=e.token;return(0,u.a)({queryFn:function(){return fetch("/api/like/stretchings",{method:"GET",headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){return e.json()}).catch(function(e){return e})},queryKey:["like","list",n],onError:function(e){console.log(e)},enabled:!!n,refetchOnWindowFocus:!1})},l=t(6975),f=t(6598),p=t(1163),h=t(5893),g=!0,x=function(e){var n=e.isLoggined,t=(0,s.useState)("LIKES"),i=t[0];t[1];var u=(0,l.hP)(),g=(0,p.useRouter)(),x=d({token:u}).data,_=function(e){g.push("/stretchings/detail?id=".concat(e))};return(0,h.jsxs)(y,{children:[(0,h.jsx)(a.y,{isLoggined:"true"===n}),(0,h.jsxs)(m,{children:[(0,h.jsx)(o.Z,{currentTab:i}),(0,h.jsx)(v,{children:x&&x.stretchingList.map(function(e){return(0,h.jsxs)(b,{onClick:function(){return _(e.id)},children:[(0,h.jsx)("img",{src:e.imageUrl}),(0,h.jsx)(c.Typography,{children:e.title}),(0,h.jsxs)(c.Box,{display:"flex",justifyContent:"start",gap:4,children:[(0,h.jsx)(c.Chip,{size:"sm",children:f.fC[e.mainCategory]}),(0,h.jsx)(c.Typography,{color:r.O.g100,children:f.D_[e.subCategory]})]})]},"user-likeList-".concat(e.id))})})]})]})},y=i.styled.div.withConfig({displayName:"likes__PageWrapper",componentId:"sc-1tvye4u-0"})(["display:flex;background-color:",";height:100%;align-items:center;justify-content:center;flex-direction:column;gap:24px;"],r.O.f000),m=i.styled.div.withConfig({displayName:"likes__ContentWrapper",componentId:"sc-1tvye4u-1"})(["width:100%;padding:0 80px;display:flex;justify-content:center;align-items:start;gap:24px;"]),v=i.styled.div.withConfig({displayName:"likes__ContentArea",componentId:"sc-1tvye4u-2"})(["flex-grow:1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;:hover{cursor:pointer;}"]),b=i.styled.div.withConfig({displayName:"likes__Content",componentId:"sc-1tvye4u-3"})(["border-radius:8px;padding:8px;box-shadow:4px 4px 8px rgba(0,0,0,0.1);"])},6613:function(e,n,t){"use strict";t.d(n,{D:function(){return r}});var i=t(4480),r=(0,i.cn)({key:"userProfile",default:null});(0,i.cn)({key:"logginedCheckAtom",default:!1})},4672:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[userId]/likes",function(){return t(4660)}])}},function(e){e.O(0,[228,617,609,445,481,852,716,774,888,179],function(){return e(e.s=4672)}),_N_E=e.O()}]);