"use strict";(self.webpackChunkphotoshop=self.webpackChunkphotoshop||[]).push([[233],{65480:function(e,o,s){s.d(o,{Z:function(){return M}});var l=s(15785),a=s(15007),t=s(95223),n=s(75900),r=s.n(n),i=s(62802),c=s.n(i),d=s(95083),p=s.n(d),u=s(32956),m=s(68457),g=s(53971),v=s(3135),f=s(52078),y=s(24808),w=s(48788),h=s(23766),b=s(47549),x=s(65034),C=s(11490);var Z={name:"1a50hjl",styles:"border:none;padding:0;font-family:'adobe-clean';background:transparent;color:var(--spectrum-global-color-gray-800);text-decoration:underline;cursor:pointer;&:hover{color:var(--spectrum-global-color-gray-900);}"},k={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},N={name:"wwrf8h",styles:"display:flex;flex-direction:column;gap:8px;width:80%"},D={name:"1swkvfk",styles:"padding:0;font-family:'adobe-clean';border:none;background:transparent;margin-left:10px;cursor:pointer;text-decoration:underline;color:rgb(0, 84, 182);&:hover{color:rgb(2, 101, 220);}"},S={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},z={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},P={name:"ti75j2",styles:"margin:0"},L={name:"a29rn1",styles:"display:flex;text-align:center;align-items:center;gap:10px"},B={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},j={name:"1xg43bt",styles:"display:flex;gap:20px;align-items:baseline"},A={name:"6apepd",styles:"display:flex;flex-direction:column;gap:48px"};const M=e=>{var o,s;let{formData:n,response:i,handleRestart:d}=e;const{getCredentialData:E,selectedOrganization:I}=(0,a.useContext)(x.Z),U=E,{0:F,1:H}=(0,a.useState)(),{0:O,1:R}=(0,a.useState)(""),T={},_={label:"products",productList:[]};null==U||null===(o=U[M])||void 0===o||o.children.forEach((e=>{let{type:o,props:s}=e;var a,t;(T[o]=s,s.children&&o===h._)&&(null==s||null===(a=s.children)||void 0===a||a.forEach((e=>{let{type:o,props:s}=e;T[o]=s})));o===v.bi&&null!=s&&s.children&&(t=_.productList).push.apply(t,(0,l.Z)([].concat(s.children).map((e=>{let{props:{label:o,icon:s}}=e;return{label:o,icon:s}}))))}));const J=null==_?void 0:_.productList;(0,a.useEffect)((()=>{n.Downloads&&W("/console/api/organizations/"+(null==I?void 0:I.id)+"/projects/"+i.projectId+"/workspaces/"+i.workspaceId+"/download",n.Download,n.zipUrl)}),[]);const G=null==U?void 0:U[M],W=async function(e,o,s){void 0===o&&(o="download"),H(!0);try{var l,a,t,n,r;const i=await p().getBinaryContent(s),d=new Uint8Array(i).buffer,m=new(c());await m.loadAsync(d);const g={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===(l=window.adobeIMS)||void 0===l||null===(a=l.getTokenFromStorage())||void 0===a?void 0:a.token),"x-api-key":null===(t=window)||void 0===t||null===(n=t.adobeIMS)||void 0===n||null===(r=n.adobeIdData)||void 0===r?void 0:r.client_id}},v=await fetch(e,g);if(200===v.status){const e=await v.json();m.file("credential.json",JSON.stringify(e));const s=await m.generateAsync({type:"blob"});(0,u.saveAs)(s,o+".zip")}else console.error("Failed to fetch additional data. Response status:",v.status)}catch(i){console.error("An error occurred:",i)}finally{H(!1)}};return(0,t.tZ)("div",{className:r()(null==G?void 0:G.className),css:A},(0,t.tZ)("div",{className:r()(null==G?void 0:G.className),css:(0,t.iv)("display:flex;flex-direction:column;gap:16px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width: ",m.xU,") and (max-width: ",m.Ey,"){padding:0;width:100%;}","")},(0,t.tZ)("div",{css:j},(null==G?void 0:G.title)&&(0,t.tZ)("h2",{className:"spectrum-Heading spectrum-Heading--sizeL",css:B},null==G?void 0:G.title),F&&(0,t.tZ)("div",{css:L},(0,t.tZ)("div",{className:"spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate spectrum-ProgressCircle--small"},(0,t.tZ)("div",{className:"spectrum-ProgressCircle-track"}),(0,t.tZ)("div",{className:"spectrum-ProgressCircle-fills"},(0,t.tZ)("div",{className:"spectrum-ProgressCircle-fillMask1"},(0,t.tZ)("div",{className:"spectrum-ProgressCircle-fillSubMask1"},(0,t.tZ)("div",{className:"spectrum-ProgressCircle-fill"}))),(0,t.tZ)("div",{className:"spectrum-ProgressCircle-fillMask2"},(0,t.tZ)("div",{className:"spectrum-ProgressCircle-fillSubMask2"},(0,t.tZ)("div",{className:"spectrum-ProgressCircle-fill"}))))),(0,t.tZ)("p",{css:P},"Downloading..."))),n.Downloads&&(null==G?void 0:G.paragraph)&&(0,t.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeL",css:z},null==G?void 0:G.paragraph),n.Downloads&&(0,t.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:S},"Download not working?",(0,t.tZ)("button",{css:D,onClick:()=>W("/console/api/organizations/"+(null==I?void 0:I.id)+"/projects/"+i.projectId+"/workspaces/"+i.workspaceId+"/download",n.Download,n.zipUrl)},"Restart download"))),(0,t.tZ)("div",{css:(0,t.iv)("display:flex;gap:35px;@media screen and (min-width: ",m.xU,") and (max-width: ",m.Ey,"){flex-direction:column;padding-left:0;}","")},(0,t.tZ)("div",{css:(0,t.iv)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width: ",m.xU,") and (max-width: ",m.Ey,"){width:100%;}","")},(0,t.tZ)(C.W,{credentialName:n.CredentialName,productList:J,ProductComponent:v.bi,AccessTokenComponent:y.J,DevConsoleLinkComponent:w.A,ClientDetailsComponent:h._,allowedOriginsDetails:n.AllowedOrigins,organizationName:I,response:i,nextButtonLink:null==G?void 0:G.nextStepsHref,nextButtonLabel:null==G?void 0:G.nextStepsLabel,devConsoleLink:null==G?void 0:G.devConsoleDirection,developerConsoleManage:null==G?void 0:G.developerConsoleManage,myCredentialFields:T}),(0,t.tZ)("div",{css:N},(0,t.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:k},"Need another credential"),(0,t.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS"},(0,t.tZ)("button",{onClick:d,css:Z},"Restart and create a new credential")))),null!=G&&G.children?(0,t.tZ)(b.c,{sideContent:null===(s=T[f.v])||void 0===s?void 0:s.children,SideComp:f.v}):null),O&&(0,t.tZ)(g.F,{variant:"success",message:"Copied to clipboard",disable:1e3,customDisableFunction:R}))}}}]);
//# sourceMappingURL=862bb76f-3d7e46a98544322169f9.js.map