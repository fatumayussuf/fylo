"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9260],{47661:function(n,t,e){e.d(t,{I7:function(){return s},IF:function(){return o},Jk:function(){return i},LV:function(){return r},gE:function(){return u},qH:function(){return a}}),e(19401),e(63807),e(52242);var r="_1286nb12xw _1286nb132w _1286nb12tk _1286nb12u8 _1286nb15p2 _1286nb12re _1286nb18e _1286nb18z",a="_nwt8663 _1286nb11w2 _1286nb11he _1286nb123e _1286nb128e _1286nb12de _1286nb12iq _1286nb14fw _1286nb14gw _1286nb14hw _1286nb14iw _1286nb14kk _1286nb14lw _1286nb14n8 _1286nb14ok _1286nb18d _1286nb13gq _1286nb12o8 _1286nb16ft _1286nb152e _1286nb152j _1286nb14rw",o="_1286nb14g2 _1286nb14h2 _1286nb14i2 _1286nb14j2 _1286nb14t2 _1286nb18d",i="_nwt8661 _1286nb12o2 _1286nb16ft",u="_1286nb12y8 _1286nb1338 _1286nb18w _1286nb12tk _1286nb12u8 _1286nb1m",s="_1286nb18w _1286nb12tk _1286nb11bq _1286nb19q _1286nb13vq"},84875:function(n,t,e){e.d(t,{H:function(){return r}});let r=n=>a(n)?n:{href:n},a=n=>"object"==typeof n&&"href"in n},88676:function(n,t,e){e.d(t,{k:function(){return m}});var r=e(97458),a=e(66287),o=e(88711),i=e(14136),u=e(92901),s=e(19477),c=e(8305),d=e.n(c),l=e(32748),_=e(67132),b=e(84875),f=e(47661);let m=n=>{let{nextHref:t}=n,{href:e,as:c}=(0,b.H)(t),m=(0,a.a)("mdMax"),{t:g}=(0,l.$G)("common");return(0,r.jsx)(_.pI,{popupOrigin:"page-button",children:n=>(0,r.jsx)(d(),{href:e,as:c,passHref:!0,legacyBehavior:!0,children:(0,r.jsxs)(i.gg,{as:"a",title:g("nextPage"),size:m?"xs":"sm",square:m,className:f.IF,onClick:n,"data-cy":"pagination-next","data-testid":"pagination-next",children:[(0,r.jsx)(o.x,{as:"span",marginRight:"10",display:{default:"none",md:"block"},children:g("nextPage")}),(0,r.jsx)(u.J,{as:s.Z})]})})})}},98181:function(n,t,e){e.d(t,{B:function(){return r}});let r=(0,e(52983).createContext)({})},46635:function(n,t,e){e.d(t,{n:function(){return _},o:function(){return v}});var r=e(97458),a=e(44840),o=e(83272),i=e(16103),u=e(30997),s=e(59190),c=e(71409),d=e(52983),l=e(98181);let _=n=>{let{children:t,searchTrackingCode:e,vertical:_,page:b}=n,f=(0,o.I)(),m=(0,i.H)(),g=(0,a.D)(),p=(0,u.N)(),v=(0,c.ZK)(),[w,h]=(0,d.useState)("");(0,d.useEffect)(()=>{"undefined"!=typeof navigator&&h((0,s.qs)())},[]);let x=(0,d.useMemo)(()=>({searchTrackingCode:e,vertical:_,page:b,userId:null!=f?f:void 0,isUserPremium:m,userData:null!=g?g:void 0,country:null!=p?p:void 0,language:v,browser:w}),[w,p,b,m,v,e,g,f,_]);return(0,r.jsx)(l.B.Provider,{value:x,children:t})};var b=e(87539),f=e(42011),m=e(64456),g=e(53390);let p={premium:"P",nonPremium:"R"},v=(n,t)=>{let e=(0,f.d)(),r=(0,o.I)(),a=(0,i.H)(),u=(0,b.A)(),s=(0,m.I)(),{searchTrackingCode:c}=(0,g.i)(),l=(0,d.useMemo)(()=>{let n=new URLSearchParams;if(u&&e){let t=p[a?"premium":"nonPremium"];n.append("uid","".concat(t).concat(r))}return u&&s&&n.append("ga",s),c&&n.append("semt",c),t&&Object.keys(t).forEach(e=>n.append(e,t[e])),n.toString()},[t,s,u,e,a,c,r]);return"".concat(n).concat(l?"?".concat(l):"")}},53390:function(n,t,e){e.d(t,{i:function(){return o}});var r=e(52983),a=e(98181);let o=()=>(0,r.useContext)(a.B)},49683:function(n,t,e){e.d(t,{z:function(){return s}});var r=e(72118),a=e(52983),o=e(53390),i=e(98944);let u={photo:"regular",vector:"regular",psd:"regular",icon:"icon",template:"template",mockup:"mockup",video:"video"},s=n=>{let{uuid:t="",id:e,type:s,premium:c,position:d}=n,{searchTrackingCode:l,vertical:_,page:b,userId:f,isUserPremium:m,userData:g,country:p,language:v,browser:w}=(0,o.i)();return(0,a.useCallback)(()=>{var n,a,o,h,x;let k={partner:"data",event_at:Date.now().toString(),...t&&{uuid:t},ga_client_id:null!==(n=r.Z.get("_ga"))&&void 0!==n?n:"",user_id:null!==(a=null==f?void 0:f.toString())&&void 0!==a?a:"0",is_premium_user:m?"1":"0",user_type:null!==(o=null==g?void 0:g.user_type_fr)&&void 0!==o?o:"anonymous",item_id:e.toString(),is_premium_item:c?"1":"0",...p&&{country_iso_code:p},...v&&{language_iso_code:v},page:null!==(h=null==b?void 0:b.toString())&&void 0!==h?h:"1",position:d.toString(),item_supertype:null!==(x=u[s])&&void 0!==x?x:s,vertical:null!=_?_:s,...w&&{user_agent:encodeURIComponent(w)},...l&&{track:l}},y=new URLSearchParams(k),j="send&event&".concat(y.toString());(0,i.O)(j)},[w,p,e,m,v,b,d,c,l,s,null==g?void 0:g.user_type_fr,f,t,_])}},6414:function(n,t,e){var r=e(97458);t.Z=n=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...n,children:(0,r.jsx)("path",{d:"M486.2 50.2c-9.6-3.8-20.5-1.3-27.5 6.2l-98.2 125.5-83-161.1C273 13.2 264.9 8.5 256 8.5s-17.1 4.7-21.5 12.3l-83 161.1L53.3 56.5c-7-7.5-17.9-10-27.5-6.2C16.3 54 10 63.2 10 73.5v333c0 35.8 29.2 65 65 65h362c35.8 0 65-29.2 65-65v-333c0-10.3-6.3-19.5-15.8-23.3"})})},97137:function(n,t,e){var r=e(97458);t.Z=n=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...n,children:(0,r.jsx)("path",{d:"M269.2 438.4c-100.6 0-182.4-81.8-182.4-182.4S168.6 73.6 269.2 73.6c61.1 0 117.9 30.4 151.8 81.3 7.7 11.5 4.6 27-6.9 34.7s-27 4.6-34.7-6.9c-24.6-37-65.9-59.1-110.2-59.1-73 0-132.4 59.4-132.4 132.4s59.4 132.4 132.4 132.4c44.4 0 85.6-22.1 110.2-59.1 7.7-11.5 23.2-14.6 34.7-6.9s14.6 23.2 6.9 34.7c-33.9 50.9-90.7 81.3-151.8 81.3"})})},83425:function(n,t,e){e.d(t,{M:function(){return r}});let r=async n=>{let{optionId:t}=n,e=await fetch("/api/video/download?optionId=".concat(t));return e.ok?{success:!0,data:await e.json()}:429===e.status?{success:!1,data:"DOWNLOAD_LIMIT_REACHED",metadata:"/download-limit"}:403===e.status?{success:!1,data:"FORBIDDEN"}:401===e.status||405===e.status?{success:!1,data:"AUTHENTICATION_ERROR"}:404===e.status?{success:!1,data:"NOT_FOUND"}:{success:!1,data:"UNKNOWN_ERROR"}}},69080:function(n,t,e){e.d(t,{MQ:function(){return r.M},yX:function(){return a}});var r=e(83425);let a=async()=>{let n=await fetch("/api/user/downloads/limit");return n.ok?{success:!0,data:await n.json()}:401===n.status||403===n.status||405===n.status?{success:!1,data:"AUTHENTICATION_ERROR"}:404===n.status?{success:!1,data:"NOT_FOUND"}:{success:!1,data:"UNKNOWN_ERROR"}};var o=e(1850);o.z.object({data:o.z.object({filename:o.z.string(),url:o.z.string(),today_downloads:o.z.number(),download_limit:o.z.number()}).transform(n=>{let{download_limit:t,today_downloads:e,...r}=n;return{todayDownloads:e,downloadLimit:t,...r}})}),o.z.object({data:o.z.object({current:o.z.number(),limit:o.z.number()})}).transform(n=>{let{data:t}=n;return t})},42852:function(n,t,e){e.d(t,{J:function(){return u}});var r=e(52983),a=e(51835),o=e(69080),i=e(95815);let u=()=>{let n=(0,a.Zl)(i.P$);return(0,r.useCallback)(async()=>{let{success:t,data:e}=await (0,o.yX)();if(!t)throw Error("Error fetching user download info");let r={downloads:(null==e?void 0:e.current)||0,limit:(null==e?void 0:e.limit)||0};return n(r),r},[n])}},59190:function(n,t,e){e.d(t,{G6:function(){return a},qs:function(){return o},vU:function(){return r}});let r=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,a=!!/^((?!chrome|android).)*safari/i.test(navigator.userAgent),o=()=>navigator.userAgent.toLowerCase()||""}}]);