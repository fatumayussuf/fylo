"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3408],{74931:function(e,t,n){n.d(t,{g:function(){return l}});var r=n(51835),c=n(26131),a=n(99446),i=n(4074),o=n(70978);let u=(e,t)=>e.reduce((e,t)=>{let[n,r]=t;return null===r?e.filter(e=>{let[t]=e;return t!==n}):e.some(e=>{let[t,c]=e;return t===n&&c===r})?e:e.filter(e=>{let[t]=e;return t!==n}).concat([[n,r]])},t),l=()=>{let e=(0,c.K$)();return(0,r.kJ)(t=>{let{set:n,get:r}=t;return t=>{let l,s;let{customTerm:h,isSearchByImage:d,isAdvancedSearch:f}=t||{},v=i.U.get(),g=(0,a.n)(h),m=(0,a.n)(r(c.gA)),p=null;if(n(c.hX,!1),h&&n(c.gA,g),d&&v){let{imageFile:e,searchType:t}=v;p="1",l=e,s=t,n(c.gA,c.FILTERS_CONFIG.term.defaultValue)}f||n(c.OC,null),n(c.Fp,p),n(o.nd,l),n(o.hD,s),n(o.E2,void 0);let w=[["format",r(c.ln)],["type",r(c.Hh)],["license",r(c.O8)],["aiGenerated",r(c.Sh)],["term",g||m],["author",null],["img",r(c.Fp)],["country_code",r(c.OC)]],x=r(c.eo),_=u(w,x),y=(0,c.oq)(_,x);n(c.eo,y),e(y)}},[e])}},28066:function(e,t,n){n.d(t,{T:function(){return c}});let r={vector:"vector",photo:"photo",video:"video",psd:"psd",icon:"icon",mockup:"mockups"},c=e=>e&&r[e]||"na"},21639:function(e,t,n){n.d(t,{TJ:function(){return r.T},Fl:function(){return i},lJ:function(){return o},fD:function(){return u.f},TH:function(){return l},RP:function(){return x},gi:function(){return _},eS:function(){return j},nF:function(){return b.n}});var r=n(28066),c=n(62168),a=n(52983);let i=e=>{let t=(0,c.PN)();return(0,a.useCallback)(function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"click";t({event:"ga4event",interaction_type:n,campaign_name:"no_campaign",...e})},[e,t])},o=()=>{let e=(0,c.PN)();return(0,a.useCallback)(t=>{e({event:"ga4event",event_name:"dropdown_filter",filter_name:t})},[e])};var u=n(48936);let l=e=>{let t=(0,c.PN)();return(0,a.useCallback)(n=>{t({event:"ga4event",event_name:"file_download",...e.category&&{category:e.category},location:e.location||"resource_detail",...e,...n&&{file_extension:n.trim()},...e.file_extension&&!n&&{file_extension:e.file_extension.replace("\r","").replace(" ","")}})},[e,t])};n(50374);var s=n(44840),h=n(87539),d=n(30997),f=n(2482),v=n(71409),g=n(12297),m=n(83648),p=n(35904);let w=e=>{let t=(0,v.ZK)(),n=(0,h.A)(),r=(0,s.D)(),c=(0,d.N)();return(0,a.useMemo)(()=>n&&c?{event:"ga4event",event_name:"page_view",content_type:"video",page_code:"200-ok",country:c,page_lang:t,user_id:(null==r?void 0:r.id)||void 0,user_type:(null==r?void 0:r.user_type_fr)||"anonymous",...e}:null,[n,c,t,null==r?void 0:r.id,null==r?void 0:r.user_type_fr,e])},x=(e,t)=>{let n=(0,c.PN)(),r=(0,a.useRef)(null),i=w(e),{asPath:o}=(0,m.useRouter)();(0,a.useEffect)(()=>{if(!i)return;let e={...i,page_location:window.location.href},c={...e,asPath:o,page_location:(0,f.f)(e.page_location)};t&&!t(c)||(0,g.vZ)(c,r.current)||(r.current=c,n(e),p.J.add())},[o,i,t,n])},_=()=>{let e=(0,c.PN)();return(0,a.useCallback)((t,n)=>{e({event:"ga4event",event_name:"search_by_image".concat(t?"_".concat(t):""),search_logic_applied:"search_by_image",...n})},[e])},y=e=>{let{component:t,placement:n,position:r}=e;return t&&({mktcopy:"banner_pagination_search_result",popup:"pop_up",stockbanner:"pop_up_right_corner"})[t]||n&&({404:"banner_search_result_404",srp:"banner_".concat("bottom"===r?"bottom":"top","_search_result"),idp:"banner_resource_detail"})[n]||""},M=e=>({"Adobe Stock":"adobe",Shutterstock:"shutterstock",SquareSpace:"squarespace",iStock:"istock"})[e]||"",j=e=>{let t=(0,c.PN)(),{component:n,placement:r,position:i,sponsorName:o,action:u,element:l}=e||{};return(0,a.useCallback)(()=>{o&&t({event:"ga4event",event_name:"affiliate",action:"go_".concat(M(o)),interaction_type:u||"onload",location:y({component:n,placement:r,position:i,sponsorName:o}),...l&&{type:l}})},[o,u,l,n,r,t,i])};var b=n(66316)},48936:function(e,t,n){n.d(t,{f:function(){return a}});var r=n(62168),c=n(52983);let a=e=>{let t=(0,r.PN)();return(0,c.useCallback)(function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"click",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t({event:"ga4event",interaction_type:n,...r&&{link_url:r},...e})},[e,t])}},66316:function(e,t,n){n.d(t,{n:function(){return d}});var r=n(62168),c=n(44840),a=n(87539),i=n(12297),o=n(52983),u=n(34862),l=n(53525),s=n(83941),h=n(28066);let d=e=>{let t=(0,a.A)(),n=(0,c.D)(),d=(0,u.f)("type"),f=(0,r.PN)(),v=(0,o.useRef)(),g=(0,u.f)("format"),m=(0,l.t)(),{type:p}=(0,s.n)(),w="upload"===p?"search_by_image":"search_by_image_thumbnail";(0,o.useEffect)(()=>{if(!t||(0,i.vZ)(e,v.current))return;v.current=e;let{term:r,total:c,page:a}=e;f({event:"ga4event",event_name:"view_search_results",content_group:"search",content_group2:(0,h.T)(d),search_term:r,search_total_results:c,page_location:window.location.href,q_page:a,q_format:m?w:g,q_type:d,user_id:(null==n?void 0:n.id)||void 0,search_logic_applied:m?"search_by_image":"search"})},[f,e,t,null==n?void 0:n.id,d,g,m,w])}},35904:function(e,t,n){n.d(t,{J:function(){return c}});let r="navigation/history",c=(()=>{let e=0,t=new Set,n=e=>{t.forEach(t=>t(e))};return{add:()=>{let t=e+1;sessionStorage.setItem(r,t.toString()),e=t,n(t)},get:()=>(e||(e=parseInt(sessionStorage.getItem(r)||"0",10)),e),subscribe:e=>(t.add(e),()=>{t.delete(e)})}})()},13281:function(e,t,n){n.d(t,{DM:function(){return l},HJ:function(){return r},Ns:function(){return f},S$:function(){return d},a0:function(){return s},ab:function(){return i},c0:function(){return c},eD:function(){return a},ih:function(){return h},r4:function(){return o},uJ:function(){return u}});let r=["image/jpeg","image/jpg","image/png"],c=1220,a=224,i=60,o=62914560,u=.5,l=["JPG","PNG"],s="searchByImageData",h=["vector","psd","ai","icon","photo"],d={"image/jpeg":"jpg","image/jpg":"jpg","image/png":"png"},f=["img.freepik.com","cdn-icons-png.freepik.com"]},26778:function(e,t,n){n.d(t,{jE:function(){return d.jE},ZM:function(){return d.ZM},oS:function(){return c},iC:function(){return o},tm:function(){return u.t},qZ:function(){return l.q},nn:function(){return s.n},z6:function(){return h.z}});var r=n(52983);let c=e=>{let[t,n]=(0,r.useState)(!1);return(0,r.useMemo)(()=>({isDragging:t,onDragOver:e=>{e.preventDefault(),n(!0)},onDragLeave:e=>{e.preventDefault(),n(!1)},onDrop:t=>{if(t.preventDefault(),t.dataTransfer){var r;e("dropping",null===(r=t.dataTransfer.files)||void 0===r?void 0:r[0])}n(!1)}}),[t,e])};var a=n(51835),i=n(70978);let o=e=>{let t=!e||(null==e?void 0:e.match(/photo|ai|psd|vector/)),[n,c]=(0,a.FV)(i.bd),o=(0,r.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),!n&&e.dataTransfer&&"Files"===e.dataTransfer.types[0]&&c(!0)},[n,c]);(0,r.useEffect)(()=>{if(t)return window.addEventListener("dragenter",o),()=>{window.removeEventListener("dragenter",o)}},[t,o])};var u=n(53525),l=n(38746),s=n(83941),h=n(1379),d=n(21302)},61146:function(e,t,n){n.d(t,{I:function(){return a},h:function(){return c}});var r=n(1850);let c=r.z.enum(["photo","vector","psd","ai","icon","mockup"]),a=r.z.object({imageFile:r.z.object({imageBase64:r.z.string(),imageType:r.z.string()}),searchType:r.z.enum(["upload","similar"])})},4074:function(e,t,n){n.d(t,{U:function(){return a}});var r=n(13281),c=n(61146);let a={get:()=>{try{let e=localStorage.getItem(r.a0);if(!e)return null;return c.I.parse(JSON.parse(e))}catch(e){return null}},set:(e,t)=>localStorage.setItem(r.a0,JSON.stringify({imageFile:e,searchType:t})),remove:()=>localStorage.removeItem(r.a0)}},70978:function(e,t,n){n.d(t,{E2:function(){return i},bd:function(){return c},hD:function(){return o},nd:function(){return a}});var r=n(51835);let c=(0,r.cn)({key:"searchByImageModalState",default:!1}),a=(0,r.cn)({key:"searchByImageImageFile",default:void 0}),i=(0,r.cn)({key:"searchByImageTerm",default:void 0}),o=(0,r.cn)({key:"searchByImageType",default:void 0})},53525:function(e,t,n){n.d(t,{t:function(){return c}});var r=n(26131);let c=()=>"1"===(0,r.fU)("img")},38746:function(e,t,n){n.d(t,{q:function(){return s}});var r=n(91177),c=n(32748),a=n(52983),i=n(21639),o=n(13281),u=n(4074),l=n(21302);let s=()=>{let[e,t]=(0,a.useState)(null),[n,s]=(0,a.useState)(null),h=(0,i.gi)(),{t:d}=(0,c.$G)("common"),f=(0,a.useCallback)(async(e,n,c,a)=>{s(null);let i=(0,l.ZM)(n);if(i){h("error",{type:i.error,file_extension:(null==n?void 0:n.type)||"unknown"});let e=d(i.string,"dimension"===i.error?{size:(0,r.R)(o.r4)}:{format1:o.DM[0],format2:o.DM[1]});return s(e),a&&a(e),!1}if(!n)return!1;let f=await (0,l.jE)(n),v=(0,l.ku)(f);if(v){h("error",{type:"error",file_extension:n.type});let e=d(v,{dimX:o.c0,dimY:o.eD});return s(e),a&&a(e),!1}t(URL.createObjectURL(n));let g=(0,l.NS)(f),m=await (0,l.zy)(f,g),{src:p,format:w}=(0,l.Eu)(m,n.type);return!!p&&!!w&&(u.U.set({imageBase64:p,imageType:w},e),c&&c(),!0)},[h,d]);return(0,a.useMemo)(()=>({error:n,fileSrc:e,processFile:f}),[n,f,e])}},83941:function(e,t,n){n.d(t,{n:function(){return i}});var r=n(52983),c=n(51835),a=n(70978);let i=()=>{let e=(0,c.sJ)(a.E2),t=(0,c.sJ)(a.hD),n=(0,c.sJ)(a.nd);return(0,r.useMemo)(()=>({term:e,type:t,imageFile:n}),[e,t,n])}},1379:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(22932),c=n(52983),a=n(74931),i=n(51362),o=n(38746),u=n(21302);let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=(0,a.g)(),{processFile:s}=(0,o.q)(),{onShowToast:h}=(0,i.p)();return(0,c.useCallback)(async()=>{let{origin:c,pathname:a}=new URL(e),i=(0,r.N)(t,n)?"h=224":"size=626",o="".concat(c).concat(a,"?").concat(i,"&ext=jpg");(0,u.D4)(o,async e=>{e&&await s("similar",e,()=>{l({isSearchByImage:!0})},e=>{h({type:"danger",message:e})})})},[e,t,n,s,l,h])}},21302:function(e,t,n){n.d(t,{zy:function(){return r},jE:function(){return c},NS:function(){return i},Eu:function(){return o},D4:function(){return u},ZM:function(){return l},ku:function(){return s}});let r=async(e,t)=>{let r=await n.e(1981).then(n.t.bind(n,21981,23)).then(e=>e.default);return await r().resize(e,t,{unsharpAmount:80,unsharpRadius:.6,unsharpThreshold:2}),t},c=e=>new Promise((t,n)=>{let r=new Image;r.src=URL.createObjectURL(e),r.onload=()=>{t(r)},r.onerror=n});var a=n(13281);let i=e=>{let t=document.createElement("canvas"),n=a.eD,r=a.eD;if(e.width!==e.height){let t=Math.min(e.width,e.height)/a.eD;n=Math.round(e.width/t),r=Math.round(e.height/t),e.width>e.height?(n=Math.min(n,a.c0),r=Math.round(e.height/e.width*n)):(r=Math.min(r,a.c0),n=Math.round(e.width/e.height*r))}return t.width=n,t.height=r,t},o=(e,t)=>({src:e.toDataURL(t,a.uJ).replace("data:".concat(t,";base64,"),""),format:t}),u=(e,t)=>{let n=new URL(e);if(a.Ns.includes(n.hostname)){let n=new XMLHttpRequest;n.onload=function(){let e=n.response;t(new File([e],"image.".concat(a.S$[e.type]||"jpg"),{type:e.type}))},n.open("GET",e),n.responseType="blob",n.send()}},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.r4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.HJ;return e&&n.includes(e.type)?e.size>t?{string:"tooBig",error:"dimension"}:void 0:{string:"formatUnsuported",error:"format"}},s=e=>{if(e.width<a.eD||e.height<a.eD)return"errorDimensionImage"}},35947:function(e,t,n){n.d(t,{t:function(){return r}});let r=(0,n(52983).createContext)(null)},55970:function(e,t,n){n.d(t,{Q:function(){return a}});var r=n(52983),c=n(35947);let a=()=>(0,r.useContext)(c.t)},20256:function(e,t,n){n.d(t,{Y4:function(){return r.Y},fb:function(){return i},g9:function(){return u.g},mS:function(){return l.m},yV:function(){return h},O5:function(){return m},aZ:function(){return s.a},ug:function(){return p.u}});var r=n(97589),c=n(52983),a=n(81531);let i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{fromView:r,position:i,fromElement:u,track:l,uuid:s}=n,h=(0,a.Q)();return(0,c.useMemo)(()=>{let n=h(e)||{},c=o(n={...n,...r&&{fromView:r},...i&&{position:i},...l&&{track:l},...u&&{from_element:u},...s&&{uuid:s}});if(0===Object.keys(c).length)return t;let a=new URLSearchParams(c);return"".concat(t,"#").concat(a.toString())},[h,e,r,i,l,u,s,t])},o=e=>{if(!e)return{};let t={};for(let n in e)void 0!==e[n]&&null!==e[n]&&(t[n]="".concat(e[n]));return t};var u=n(3785),l=n(55662);n(79142);var s=n(93054);let h=()=>(0,s.a)({page:1,total:0});var d=n(51835),f=n(26131),v=n(98944);let g={photo:"regular",vector:"regular",ai:"regular",psd:"psd"},m=()=>{let e=(0,d.sJ)((0,f.af)("term"))||"";return(0,c.useCallback)((t,n,r)=>{let c="send&event&click-".concat(n).concat(e?"&".concat(e):"","&").concat(t).concat(r?"&".concat(g[r]):"");(0,v.O)(c)},[e])};var p=n(38006);n(83648)},97589:function(e,t,n){n.d(t,{Y:function(){return a}});var r=n(26131);let c=["term","format","type","page"],a=()=>(0,r.oh)().filter(e=>{let[t]=e;return!c.includes(t)}).reduce((e,t)=>{let[n,r]=t,c=e[n];return c?Array.isArray(c)?c.push(r):e[n]=[c,r]:e[n]=r,e},{})},33794:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(83648),c=n(52983);let a=()=>{let{asPath:e}=(0,r.useRouter)(),[,t]=-1!=e.indexOf("#")?e.split("#"):e.split("?"),n=new URLSearchParams((null==t?void 0:t.split("?")[0])||""),a=n.get("term")||n.get("query"),i=n.get("from_view")||n.get("fromView")||"detail",o=n.get("position")||"1",u=n.get("page")||"1",l=n.get("track"),s=n.get("uuid");return(0,c.useMemo)(()=>({fromView:i,term:a,position:parseInt(o,10),page:parseInt(u,10),track:l,uuid:s}),[a,i,o,u,l,s])}},3785:function(e,t,n){n.d(t,{g:function(){return a}});var r=n(26131),c=n(26778);let a=()=>{var e;let t=(0,r.fU)("term"),n=(0,r.fU)("sort"),a=null!==(e=(0,r.fU)("format"))&&void 0!==e?e:"search",o=(0,c.tm)(),{type:u}=(0,c.nn)();return a===r.FILTERS_VALUES.format.author?"author":o?"image_search".concat("similar"===u?"_similar":""):"search"!==a||t?a:i(n)},i=e=>e&&"relevance"!==e?e:"popular"},55662:function(e,t,n){n.d(t,{m:function(){return l}});var r=n(83272),c=n(16103),a=n(71409),i=n(52983),o=n(41381),u=n(79142);let l=()=>{let e=(0,a.ZK)(),t=(0,r.I)(),n=(0,c.H)(),l=(0,u.r)();return(0,i.useCallback)(r=>{let{resourceId:c,isResourcePremium:a,resourceType:i,downloadType:u="download"}=r,{fromView:s,page:h,position:d,uuid:f}=l(c);o.s.send("download",{language:e,id:"".concat(c),resourcePremium:a?"1":"0",format:s||"detail",resourceType:i,...h&&{page:"".concat(h)},...void 0!==d&&{position:"".concat(d)},...u&&{downloadType:u},...t&&{userid:"".concat(t),userPremium:n?"1":"0"},...f&&{uuid:f}})},[l,e,t,n])}},79142:function(e,t,n){n.d(t,{r:function(){return i}});var r=n(52983),c=n(33794),a=n(81531);let i=()=>{let e=(0,a.Q)(),t=(0,c.H)();return(0,r.useCallback)(n=>{let r=e(n);return r?{...r,fromView:"thumbnail_".concat(r.fromView),uuid:r.uuid}:{...t}},[e,t])}},93054:function(e,t,n){n.d(t,{a:function(){return s}});var r=n(52983),c=n(26131),a=n(97589),i=n(3785);let o=e=>{var t,n;let{page:o,total:l,items:s=[],track:h}=e,d=null!==(t=(0,c.fU)("term"))&&void 0!==t?t:"",f=(0,i.g)(),v=(0,a.Y)(),g=null!==(n=(0,c.fU)("type"))&&void 0!==n?n:"global",m=s.filter(u).map(e=>e.id);return(0,r.useMemo)(()=>({fromView:f,term:d,page:o,total:l,resourceType:g,track:h,filters:v,guessPayload:m}),[f,d,o,l,g,h,v,m])},u=e=>"pixel"in e&&e.pixel&&e.pixel.endsWith("_gp");var l=n(38006);let s=e=>{let t=o(e),n=(0,l.u)(t);return{trackerParams:t,uuidSearchTracker:n}}},38006:function(e,t,n){n.d(t,{u:function(){return v}});var r=n(87539),c=n(83272),a=n(16103),i=n(37538),o=n(71409),u=n(12297),l=n(52983),s=n(41381),h=n(33794),d=n(83053);let f=()=>{let e=(0,h.H)();return e.uuid?e.uuid:(0,d.L)()},v=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=(0,o.ZK)(),h=(0,r.A)(),d=(0,c.I)(),v=(0,a.H)(),m=(0,l.useRef)(null),p=f(),w=(0,l.useRef)(p);return(0,l.useEffect)(()=>{if(!h||t&&(0,u.vZ)(m.current,e))return;m.current=e,w.current=p;let{fromView:r,term:c,page:a,total:o,resourceType:l,track:f,filters:x,guessPayload:_}=e,y=JSON.stringify(x),M=g(_);s.s.send("search",{language:n,format:r,page:"".concat(a),searchResults:"".concat(o),vertical:l,...c&&{term:c},...d&&{userid:"".concat(d),userPremium:v?"1":"0"},...y&&{filters:y},...f&&{track:f},uuid:w.current,...M&&{gp:M}}),i.K.set(w.current)},[n,d,v,e,t,p,h]),w.current},g=e=>{if(Array.isArray(e)&&0!==e.length)return e.join(",")}},81531:function(e,t,n){n.d(t,{Q:function(){return a}});var r=n(52983),c=n(55970);let a=()=>{let e=(0,c.Q)();return(0,r.useCallback)(t=>{if(!e)return null;let{fromView:n,page:r,items:c,uuid:a}=e,i=c.findIndex(e=>{let{id:n}=e;return t===n});return{fromView:n,...r&&{page:r},...i>-1&&{position:i},...a&&{uuid:a}}},[e])}},98944:function(e,t,n){n.d(t,{O:function(){return r}});let r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://www.freepik.com/_ga?";e&&(new Image().src="".concat(t).concat(e,"&r=").concat(Math.random()))}},4439:function(e,t,n){n.d(t,{bu:function(){return o},OA:function(){return c.O},Y4:function(){return r.Y4},fb:function(){return r.fb},g9:function(){return r.g9},mS:function(){return r.mS},yV:function(){return r.yV},O5:function(){return r.O5},aZ:function(){return r.aZ},ug:function(){return r.ug}});var r=n(20256),c=n(98944),a=n(35947),i=n(97458);let o=e=>{let{children:t,...n}=e;return(0,i.jsx)(a.t.Provider,{value:n,children:t})};n(41381)},41381:function(e,t,n){n.d(t,{s:function(){return c}});var r=n(72118);let c=(()=>{let e={search:"/search.gif",download:"/download.gif"},t={track:"",ga_client_id:r.Z.get("_ga")||"nn"},n=e=>{let n=new URLSearchParams({...t,...e}).toString();return"".concat(n,"&r=").concat(Math.random())},c=async e=>{new Image().src=e};return{send:(t,r)=>{c("".concat(e[t],"?").concat(n(r)))}}})()},83053:function(e,t,n){n.d(t,{L:function(){return c}});let r=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}),c=()=>null===crypto||"function"!=typeof crypto.randomUUID?r():crypto.randomUUID()},42679:function(e,t,n){n.d(t,{O:function(){return o}});var r=n(97458),c=n(78364),a=n(88711);n(41495);var i="_d9qd7y1";let o={Rect:e=>{let{width:t="full",height:n="100",borderRadius:o="md",marginTop:u="0",marginRight:l="0",marginBottom:s="0",marginLeft:h="0",aspectRatio:d,style:f,className:v,...g}=e;return(0,r.jsx)(a.x,{...g,width:t,height:n,borderRadius:o,marginTop:u,marginRight:l,marginBottom:s,marginLeft:h,aspectRatio:d,style:f,className:(0,c.Z)(i,v)})},Circle:e=>{let{size:t="full",marginTop:n="0",marginRight:c="0",marginBottom:o="0",marginLeft:u="0",style:l,...s}=e;return(0,r.jsx)(a.x,{...s,width:t,height:t,borderRadius:"full",marginTop:n,marginRight:c,marginBottom:o,marginLeft:u,className:i,style:l})}}},20109:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("g",{clipPath:"url(#ai-filter_svg__a)",children:(0,r.jsx)("path",{d:"M346.844 354V227c0-13.81 11.185-25 24.989-25s24.989 11.19 24.989 25v127c0 13.81-11.185 25-24.989 25s-24.989-11.19-24.989-25m-107.951 1v-49h-73.967v49c0 13.81-11.185 25-24.989 25s-24.989-11.19-24.989-25V219.5c0-47.97 39.013-87 86.961-87s86.961 39.03 86.961 87V355c0 13.81-11.185 25-24.988 25-13.804 0-24.989-11.19-24.989-25m0-99v-36.5c0-20.4-16.593-37-36.984-37-20.39 0-36.983 16.6-36.983 37V256zM367.295 93.95l28.947 12.77a17.76 17.76 0 0 1 9.086 9.09l12.764 28.96c6.227 14.14 26.278 14.14 32.506 0l12.764-28.96a17.76 17.76 0 0 1 9.086-9.09l28.947-12.77c14.133-6.23 14.133-26.29 0-32.52l-28.947-12.77a17.76 17.76 0 0 1-9.086-9.09l-12.764-28.96c-6.228-14.14-26.279-14.14-32.506 0l-12.764 28.96a17.76 17.76 0 0 1-9.086 9.09l-28.947 12.77c-14.134 6.23-14.134 26.29 0 32.52M486.781 203c-13.803 0-24.988 11.19-24.988 25v199c0 19.3-15.693 35-34.985 35H84.962c-9.356 0-18.142-3.65-24.749-10.26-6.607-6.62-10.245-15.42-10.235-24.77l.34-342C50.337 65.69 66.03 50 85.301 50h196.571c13.804 0 24.989-11.19 24.989-25S295.677 0 281.873 0H85.302C38.502 0 .39 38.09.34 84.92l-.34 342c-.02 22.72 8.806 44.08 24.859 60.16s37.393 24.93 60.103 24.93h341.846c46.849 0 84.962-38.13 84.962-85v-199c0-13.81-11.185-25-24.989-25z"})}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"ai-filter_svg__a",children:(0,r.jsx)("path",{d:"M0 0h512v512H0z"})})})]})},8490:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M446.5 36h-283c-35.8 0-65 29.2-65 65v33h-33c-35.8 0-65 29.2-65 65v212c0 35.8 29.2 65 65 65h283c35.8 0 65-29.2 65-65v-33h33c35.8 0 65-29.2 65-65V101c0-35.8-29.2-65-65-65m-283 50h283c8.3 0 15 6.7 15 15v212.5l-55.3-56c-4.7-4.8-11.1-7.4-17.8-7.4s-13.1 2.7-17.8 7.5l-25 25.6-95.3-95.7c-4.7-4.7-11.1-7.4-17.7-7.4s-13 2.6-17.7 7.3l-66.3 66.3V101c-.1-8.3 6.6-15 14.9-15m200 325c0 8.3-6.7 15-15 15h-283c-8.3 0-15-6.7-15-15V199c0-8.3 6.7-15 15-15h33v129.5c0 .8 0 1.5.1 2.3 1.5 34.6 30 62.2 64.9 62.2h200z"}),(0,r.jsx)("circle",{cx:361.5,cy:166,r:30})]})},21481:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M388 191H26c-35.841 0-65 29.159-65 65v282c0 35.841 29.159 65 65 65h362c35.841 0 65-29.159 65-65V256c0-35.841-29.159-65-65-65M26 241h362c8.271 0 15 6.729 15 15v35H11v-35c0-8.271 6.729-15 15-15m362 312H26c-8.271 0-15-6.729-15-15V341h392v197c0 8.271-6.729 15-15 15"}),(0,r.jsx)("path",{d:"M81 453c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30m60 0c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30"})]})},13061:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M438 403c-13.808 0-25 11.193-25 25v134c0 19.299-15.701 35-35 35H36c-19.299 0-35-15.701-35-35V428c0-13.807-11.193-25-25-25s-25 11.193-25 25v134c0 46.869 38.131 85 85 85h342c46.869 0 85-38.131 85-85V428c0-13.807-11.192-25-25-25"}),(0,r.jsx)("path",{d:"M189.322 530.678a25.004 25.004 0 0 0 35.356 0l84.853-84.853c9.763-9.763 9.763-25.592 0-35.355s-25.592-9.763-35.355 0L232 452.645V172c0-13.807-11.193-25-25-25s-25 11.193-25 25v280.645l-42.175-42.175c-9.764-9.763-25.592-9.763-35.355 0s-9.763 25.592 0 35.355z"})]})},26989:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"m256 275.6-92.3-92.3c-9.8-9.8-25.6-9.8-35.4 0s-9.8 25.6 0 35.4l110 110c4.9 4.9 11.3 7.3 17.7 7.3s12.8-2.4 17.7-7.3l110-110c9.8-9.8 9.8-25.6 0-35.4s-25.6-9.8-35.4 0z"})})},29851:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M255.942 576.103c-21.39-21.39-21.253-56.154.409-77.373 20.605-20.183 53.738-20.703 74.94-1.149A54.8 54.8 0 0 1 340 507.855a54.8 54.8 0 0 1 8.709-10.274c21.202-19.554 54.336-19.034 74.94 1.149 21.663 21.219 21.799 55.984.409 77.373l-71.825 71.825c-6.763 6.763-17.728 6.762-24.49-.002z"}),(0,r.jsx)("path",{d:"M227.653 604.384c-9.125-9.125-16.143-19.78-20.828-31.384H25.658c9.907-74.383 63.38-137.724 136.791-158.682a25.001 25.001 0 0 0 5.533-45.75c-29.595-16.9-47.981-48.538-47.981-82.568 0-52.383 42.617-95 95-95s95 42.617 95 95c0 34.03-18.386 65.668-47.981 82.568a25.001 25.001 0 0 0 5.533 45.75c27.689 7.905 52.539 21.842 73.287 40.124 18.517-9.991 39.604-13.326 59.831-10.058-21.319-25.702-47.914-46.813-77.588-61.778 23.392-26.23 36.918-60.534 36.918-96.606 0-79.953-65.047-145-145-145s-145 65.047-145 145c0 36.072 13.526 70.376 36.919 96.606-32.416 16.349-61.178 40.012-83.377 69.005C-8.867 493.942-25.999 544.563-25.999 598c0 13.808 11.192 25 25 25h247.263z"})]})},64357:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M462.998 325.742c0-75.526-59.998-149.797-148.419-149.797-38.906 0-75.989 13.503-104.409 39.715a153 153 0 0 0-3.17 3.009 155 155 0 0 0-3.17-3.009c-28.42-26.212-65.503-39.715-104.409-39.715-88.421 0-148.419 74.271-148.419 149.797 0 40.557 15.467 78.684 44.143 107.36l-.002-.002L161.01 599.011c12.276 12.28 28.6 19.043 45.964 19.044h.005l.022-.001.022.001h.005c17.364-.001 33.688-6.765 45.964-19.044l165.867-165.912-.002.002c28.674-28.675 44.141-66.803 44.141-107.359M383.5 397.746l-.002.002L217.63 563.66a14.9 14.9 0 0 1-10.607 4.395h-.001l-.022-.001-.022.001h-.001a14.9 14.9 0 0 1-10.607-4.395L30.503 397.749l-.002-.002C11.337 378.583 1.002 353.104 1.002 326c0-54.451 44.665-100.246 100.747-100.246 24.43 0 48.756 9.003 68.184 26.66 15.735 14.301 17.818 30.356 37.068 30.356s21.333-16.055 37.068-30.356c19.427-17.658 43.753-26.66 68.184-26.66C368.335 225.754 413 271.549 413 326c-.001 27.104-10.337 52.583-29.5 71.746"})})},25967:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M460.072 547.76 413 459.265V243.5c0-35.841-29.159-65-65-65H66c-35.841 0-65 29.159-65 65v215.765l-47.072 88.495A25 25 0 0 0-49 559.5v31c0 13.808 11.193 25 25 25h462c13.807 0 25-11.192 25-25v-31c0-4.094-1.005-8.126-2.928-11.74M257 540.5H157c-13.807 0-25-11.192-25-25s11.193-25 25-25h100c13.807 0 25 11.192 25 25s-11.193 25-25 25m106-100H51v-197c0-8.271 6.729-15 15-15h282c8.271 0 15 6.729 15 15z"})})},56354:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"m455.5 359.2-152-48c-8.9-2.8-18.6-.4-25.2 6.2s-9 16.3-6.2 25.2l48 152c3.3 10.4 12.9 17.5 23.8 17.5h.4c11-.2 20.7-7.5 23.7-18.2l19.2-67.6 67.6-19.2c10.6-3 18-12.6 18.2-23.7s-6.9-20.9-17.5-24.2"}),(0,r.jsx)("path",{d:"M487 9H327c-13.8 0-25 11.2-25 25 0 24.8-20.2 45-45 45s-45-20.2-45-45c0-13.8-11.2-25-25-25H25C11.2 9 0 20.2 0 34v127c0 13.8 11.2 25 25 25h45v250c0 35.4 28.5 64.3 63.7 65h136.1L254 451H135c-8.3 0-15-6.7-15-15V161c0-13.8-11.2-25-25-25H50V59h115.3c11 40.3 47.9 70 91.7 70s80.7-29.7 91.7-70H462v77h-45c-13.8 0-25 11.2-25 25v125.7l50 15.8V186h45c13.8 0 25-11.2 25-25V34c0-13.8-11.2-25-25-25"}),(0,r.jsx)("path",{d:"M327 277c13.8 0 25-11.2 25-25v-30c0-13.8-11.2-25-25-25h-30c-13.8 0-25 11.2-25 25s11.2 25 25 25h5v5c0 13.8 11.2 25 25 25M215 197h-30c-13.8 0-25 11.2-25 25v30c0 13.8 11.2 25 25 25s25-11.2 25-25v-5h5c13.8 0 25-11.2 25-25s-11.2-25-25-25M185 311c-13.8 0-25 11.2-25 25v30c0 13.8 11.2 25 25 25h29c13.8 0 25-11.2 25-25s-11.2-25-25-25h-4v-5c0-13.8-11.2-25-25-25"})]})},86686:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"m226.644 397-92.322 92.322c-9.763 9.763-9.763 25.592 0 35.355s25.592 9.763 35.355 0l110-110C284.559 409.797 287 403.398 287 397s-2.441-12.796-7.322-17.678l-110-110c-9.764-9.763-25.592-9.763-35.355 0s-9.763 25.592 0 35.355z"})})},54077:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M388 191H26c-35.841 0-65 29.159-65 65v281.995q0 .623.031 1.246C-38.302 574.509-9.425 603 26 603h362c35.841 0 65-29.159 65-65V256c0-35.841-29.159-65-65-65M26 241h362c8.271 0 15 6.729 15 15v282a14.9 14.9 0 0 1-1.386 6.258l-75.936-75.936c-9.764-9.763-25.592-9.763-35.355 0L257 501.645 139.678 384.322c-9.764-9.763-25.592-9.763-35.355 0L11 477.645V256c0-8.271 6.729-15 15-15"}),(0,r.jsx)("path",{d:"M293 401c27.57 0 50-22.43 50-50s-22.43-50-50-50-50 22.43-50 50 22.43 50 50 50"})]})},47e3:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 15 14","aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"m11.038 11.276-.3 1.072a1.73 1.73 0 0 1-2.128 1.196l-6.85-1.92a1.72 1.72 0 0 1-1.038-.816 1.72 1.72 0 0 1-.157-1.312l1.49-5.319c.094-.333.28-.615.522-.828v4.037l-.693 2.471a.358.358 0 0 0 .246.45l6.85 1.92a.36.36 0 0 0 .441-.248l.197-.703zM14.5 8.391V3.14c0-.838-.68-1.518-1.519-1.518H8.324A1.52 1.52 0 0 0 6.883.583H5.434c-.838 0-1.518.68-1.518 1.519V8.39c0 .838.68 1.518 1.518 1.518h7.547c.839 0 1.519-.68 1.519-1.518M6.883 1.95a.15.15 0 0 1 .15.15v.205c0 .378.307.684.685.684h5.263a.15.15 0 0 1 .151.151v5.25a.15.15 0 0 1-.15.15H5.434a.15.15 0 0 1-.151-.15V2.1a.15.15 0 0 1 .15-.15z"})})},11029:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M77.001 422h199.644l-42.175 42.175c-9.763 9.763-9.763 25.592 0 35.355s25.592 9.762 35.355 0l84.853-84.853a25.004 25.004 0 0 0 0-35.355l-84.852-84.852c-9.763-9.762-25.592-9.763-35.355 0s-9.763 25.592 0 35.355L276.646 372H77.001c-13.807 0-25 11.193-25 25-.001 13.807 11.193 25 25 25"})})},94669:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M448.178 602.822 316.426 471.071c26.355-33.88 42.074-76.422 42.074-122.571 0-110.28-89.72-200-200-200s-200 89.72-200 200 89.72 200 200 200c46.149 0 88.691-15.719 122.571-42.074l131.751 131.751c4.882 4.882 11.28 7.323 17.678 7.323s12.796-2.441 17.678-7.322c9.762-9.763 9.762-25.593 0-35.356M8.5 348.5c0-82.71 67.29-150 150-150s150 67.29 150 150-67.29 150-150 150-150-67.29-150-150"})})},65738:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M19.802 3.414 18.7.914c-.538-1.219-2.269-1.219-2.806 0l-1.102 2.5a1.53 1.53 0 0 1-.784.784l-2.5 1.102c-1.22.538-1.22 2.269 0 2.806l2.5 1.102c.35.154.63.434.784.784l1.102 2.5c.537 1.22 2.268 1.22 2.806 0l1.102-2.5c.154-.35.434-.63.784-.784l2.5-1.102c1.219-.537 1.219-2.268 0-2.806l-2.5-1.102a1.53 1.53 0 0 1-.784-.784M5.442 9.52l.74 1.678c.103.235.291.423.526.527l1.677.74c.82.36.82 1.522 0 1.883l-1.677.74a1.03 1.03 0 0 0-.527.526l-.74 1.678c-.36.819-1.522.819-1.883 0l-.74-1.678a1.03 1.03 0 0 0-.526-.526l-1.678-.74c-.819-.36-.819-1.523 0-1.884l1.678-.74c.235-.103.423-.291.526-.526l.74-1.678c.36-.818 1.523-.818 1.884 0m8.925 7.574.608 1.382c.086.193.24.348.434.433l1.382.61a.848.848 0 0 1 0 1.55l-1.382.61a.85.85 0 0 0-.434.433l-.608 1.381a.848.848 0 0 1-1.551 0l-.61-1.381a.85.85 0 0 0-.433-.434l-1.381-.609a.848.848 0 0 1 0-1.55l1.381-.61a.85.85 0 0 0 .434-.433l.609-1.382a.848.848 0 0 1 1.55 0z"})})},13666:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M462 133.7v-.1c0-.5-.1-1-.1-1.5 0-.1 0-.3-.1-.4-.1-.5-.2-1.1-.3-1.6s-.2-1.1-.4-1.6c0-.1-.1-.3-.1-.4-.1-.5-.3-1-.5-1.4v-.1l-.6-1.5c-.1-.1-.1-.3-.2-.4-.2-.4-.4-.9-.6-1.3 0-.1-.1-.1-.1-.2-.2-.5-.5-.9-.8-1.4-.1-.1-.2-.3-.2-.4-.3-.4-.5-.8-.8-1.2l-.1-.1c-.3-.4-.7-.9-1-1.3l-.3-.3c-.4-.4-.7-.8-1.1-1.2l-100-100c-.4-.4-.8-.8-1.2-1.1l-.3-.3c-.4-.3-.8-.7-1.3-1-.1 0-.1-.1-.2-.1-.4-.3-.8-.6-1.2-.8-.1-.1-.3-.2-.4-.3-.4-.3-.9-.5-1.3-.8-.1 0-.2-.1-.2-.1l-1.2-.6c-.1-.1-.3-.1-.4-.2-.5-.2-1-.4-1.4-.6-.1 0-.1 0-.2-.1-.4-.2-.9-.3-1.4-.4-.1 0-.3-.1-.4-.1-.5-.1-1-.3-1.5-.4h-.1c-.5-.1-1-.2-1.5-.2-.2 0-.3 0-.5-.1-.5-.1-1-.1-1.4-.1H115c-35.8 0-65 29.2-65 65v362c0 35.8 29.2 65 65 65h282c35.8 0 65-29.2 65-65V133.7M397 452H115c-8.3 0-15-6.7-15-15V75c0-8.3 6.7-15 15-15h197v75c0 13.8 11.2 25 25 25h75v277c0 8.3-6.7 15-15 15"}),(0,r.jsx)("path",{d:"M337 210H175c-13.8 0-25 11.2-25 25v142c0 13.8 11.2 25 25 25h162c13.8 0 25-11.2 25-25V235c0-13.8-11.2-25-25-25m-25 142H200v-92h112zM176 160h61c13.8 0 25-11.2 25-25s-11.2-25-25-25h-61c-13.8 0-25 11.2-25 25s11.2 25 25 25"})]})},58553:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"m256 236.4 92.3 92.3c9.8 9.8 25.6 9.8 35.4 0s9.8-25.6 0-35.4l-110-110c-4.9-4.9-11.3-7.3-17.7-7.3s-12.8 2.4-17.7 7.3l-110 110c-9.8 9.8-9.8 25.6 0 35.4s25.6 9.8 35.4 0z"})})},82881:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M393.77 166h-61.54c-24.388 0-44.23 19.842-44.23 44.23v4.27h-37.5c-13.808 0-25 11.192-25 25s11.192 25 25 25H288v7.27c0 24.389 19.842 44.23 44.23 44.23H338v36c0 13.808 11.192 25 25 25s25-11.192 25-25v-36h5.77c24.389 0 44.23-19.842 44.23-44.23v-61.54c0-24.388-19.842-44.23-44.23-44.23M388 266h-50v-50h50zm5.77 212H388v-36c0-13.808-11.192-25-25-25s-25 11.192-25 25v36h-5.77c-24.389 0-44.23 19.842-44.23 44.23v7.27h-37.5c-13.808 0-25 11.192-25 25s11.192 25 25 25H288v4.27c0 24.389 19.842 44.23 44.23 44.23h61.539c24.389 0 44.23-19.842 44.23-44.23v-61.54C438 497.842 418.158 478 393.77 478M388 578h-50v-50h50zM160.5 214.5H126v-4.27c0-24.388-19.842-44.23-44.23-44.23H20.23C-4.158 166-24 185.842-24 210.23v61.539C-24 296.158-4.158 316 20.23 316H23v36c0 13.808 11.192 25 25 25s25-11.192 25-25v-36h8.77c24.389 0 44.23-19.842 44.23-44.23v-7.27h34.5c13.808 0 25-11.192 25-25s-11.192-25-25-25M76 266H26v-50h50zm84.5 263.5H126v-7.27c0-24.389-19.842-44.23-44.23-44.23H73v-36c0-13.808-11.192-25-25-25s-25 11.192-25 25v36h-2.77C-4.158 478-24 497.842-24 522.23v61.539C-24 608.158-4.158 628 20.23 628h61.539c24.389 0 44.23-19.842 44.23-44.23v-4.27h34.5c13.808 0 25-11.192 25-25s-11.191-25-24.999-25M76 578H26v-50h50z"})})},68278:function(e,t,n){var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 12",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M17.276 2.052a.87.87 0 0 0-.802-.109l-3.431 1.216v-.85A2.29 2.29 0 0 0 10.758.023H2.636A2.29 2.29 0 0 0 .351 2.31V9.69a2.29 2.29 0 0 0 2.285 2.286h8.122a2.29 2.29 0 0 0 2.285-2.286v-.83l3.431 1.22a.884.884 0 0 0 1.174-.83V2.774a.88.88 0 0 0-.373-.721m-5.991 7.64a.527.527 0 0 1-.527.527H2.636a.527.527 0 0 1-.527-.528V2.31c0-.292.236-.528.527-.528h8.122c.291 0 .527.236.527.528zm4.605-1.685-2.798-.994a.3.3 0 0 0-.05-.015V5.023c.018-.004.032-.01.05-.014l2.798-.995z"})})},19938:function(e,t,n){n.d(t,{m:function(){return a},a:function(){return i.a}});var r=n(52983);let c=e=>"string"==typeof e?()=>e:e,a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=(0,r.useRef)(c(e));return(0,r.useEffect)(()=>{n.current=c(e)},[e]),(0,r.useCallback)(async()=>{try{let e=await n.current();await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>t(!1),3e3)}catch(e){t(!1)}},[t])};var i=n(66287)},91177:function(e,t,n){n.d(t,{R:function(){return r}});let r=e=>{let t=Math.floor(Math.log(e)/Math.log(1024)),n=e/Math.pow(1024,t),r=n%1==0?n:n.toFixed(t>1?2:0);return"".concat(r," ").concat(["bytes","KB","MB","GB","TB"][t])}},22932:function(e,t,n){n.d(t,{N:function(){return r}});let r=(e,t)=>Math.max(e,t)/Math.min(e,t)>=2},76843:function(e,t,n){n.d(t,{D:function(){return a}});let r=(e,t,n)=>{if(["DE","NL","BR"].includes(e.toUpperCase())){let r=t>=1e4;return new Intl.NumberFormat(e,{style:"decimal",useGrouping:r,...n}).format(t)}return"ES"===e.toUpperCase()&&t>=1e4?new Intl.NumberFormat("FR",{style:"decimal",...n}).format(t):new Intl.NumberFormat(e,{style:"decimal",...n}).format(t)};var c=n(30997);let a=e=>{let t=(0,c.N)();return{onFormatNumber:n=>t?r(t,n,e):n.toString()}}}}]);