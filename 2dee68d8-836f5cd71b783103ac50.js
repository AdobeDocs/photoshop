"use strict";(self.webpackChunkphotoshop=self.webpackChunkphotoshop||[]).push([[206],{91515:function(e,t,n){var r=n(42982),i=n(4942),l=(n(38559),n(15007)),o=n(1597),a=n(64983),s=n(86029),d=n(26777),u=n(158),v=n(42075),p=n(23576),c=n(69679),h=n(56013),m=n(24149),f=n(48261),g=n(31160),b=n(21183),y=n(45553),x=n(47029),Z=n(60325),w=n(1931),P=n(19900);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){for(var t=e.childrenArray,n=e.query,r=e.hasSideNav,i=[],o=null,a=null,s=function(){var e=t[0],s=0;Object.keys(P.a).forEach((function(d){var v;(null==e||null===(v=e.props)||void 0===v?void 0:v.mdxType)===d&&function(){s++;var d=[];if((e.props.slots||e.props.repeat)&&function(){for(var n=Math.max(parseInt(e.props.repeat)||1,1),r=function(r){d=d.concat((e.props.slots||"element").split(",").map((function(e,i){return[""+e.trim()+(1===n?"":r),t[d.length+i+1]]})))},i=0;i<n;i++)r(i)}(),d.length){s+=d.length;var v=Object.fromEntries(d);"Variant"===e.props.mdxType&&(v.query=n),"Hero"===e.props.mdxType&&r&&(v.width="calc("+u.Av+" - "+u.dP+");");var p=(0,l.cloneElement)(e,j({},v));"Hero"===e.props.mdxType?o=o||p:"Resources"===e.props.mdxType?a=a||p:i.push(p)}else i.push(e)}()})),0===s&&(s++,i.push(e)),t=t.splice(s)};t.length;)s();return{filteredChildren:i,heroChild:o,resourcesChild:a}},q={name:"13fp5r9",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200)"},A={name:"4zleql",styles:"display:block"},D={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},k={name:"zjik7",styles:"display:flex"},z={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=function(e){var t,n=e.children,i=e.pageContext,O=e.query,S=(0,l.useContext)(d.Z),M=S.hasSideNav,N=S.siteMetadata,E=S.location,T=S.allSitePage,L=S.allMdx,B=S.allGithub,X=S.allGithubContributors,G=void 0===i,H=l.Children.toArray(n);if(G||"none"===(null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.layout)){var Y=C({childrenArray:(0,Z.L)(H),query:O,hasSideNav:M}).filteredChildren;return G?(0,s.tZ)(a.MDXProvider,null,Y):(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},Y,(0,s.tZ)(v.$,{hasSideNav:M}))}var _,J,K,R,$,I,V,F,Q,U,W,ee,te,ne,re,ie,le,oe,ae,se=(0,u.kR)(null==E?void 0:E.pathname,null==N?void 0:N.subPages),de=(0,u.P4)(null==E?void 0:E.pathname,null==N?void 0:N.subPages),ue=(0,u.sl)(null==E?void 0:E.pathname,null==N?void 0:N.subPages),ve=ue.nextPage,pe=ue.previousPage,ce=null==i||null===(_=i.frontmatter)||void 0===_?void 0:_.contributor_name,he=null==i||null===(J=i.frontmatter)||void 0===J?void 0:J.contributor_link,me=null==i||null===(K=i.frontmatter)||void 0===K?void 0:K.edition,fe=null==T?void 0:T.nodes.find((function(e){var t=e.path;return(0,o.dq)(t)===(null==E?void 0:E.pathname)})),ge=null!==(R=null==fe?void 0:fe.component)&&void 0!==R?R:"",be=null==L?void 0:L.nodes.find((function(e){return e.fileAbsolutePath===ge})),ye=null!==($=null==be?void 0:be.tableOfContents)&&void 0!==$?$:{},xe=null==B?void 0:B.nodes[0],Ze=xe.repository,we=xe.default_branch,Pe=xe.root,Oe=null==X?void 0:X.nodes.find((function(e){return e.path===ge})),je=null!==(I=null==Oe?void 0:Oe.contributors)&&void 0!==I?I:[],Ce=ge.replace(/.*\/src\/pages\//g,""),qe=void 0!==(null==i||null===(V=i.frontmatter)||void 0===V?void 0:V.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof qe)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");var Ae=N.home,De=(0,u.A6)(E.pathname),ke=(0,u.Gh)(null==N?void 0:N.pages),ze=(0,u.Yx)(De,ke),Se=(0,u.xH)(De,ze),Me=(0,u.Lh)(null==E?void 0:E.pathname,null==N?void 0:N.subPages),Ne=[];if(Me.length)for(var Ee=Me[Me.length-1].level+1,Te=function(e){var t=Me.filter((function(t){return t.level===e}));t.length&&Ne.push(t.pop())},Le=0;Le<Ee;Le++)Te(Le);var Be=!1;null!=i&&null!==(F=i.frontmatter)&&void 0!==F&&F.jsDoc&&(Be=!0,H=(0,Z.L)(H));var Xe=C({childrenArray:H,hasSideNav:M}),Ge=Xe.filteredChildren,He=Xe.heroChild,Ye=Xe.resourcesChild,_e=null===He,Je=null!==He&&(!He.props.variant||"default"===He.props.variant),Ke=null!==He&&He.props.variant&&"default"!==He.props.variant,Re=null==ye||null===(Q=ye.items)||void 0===Q||null===(U=Q[0])||void 0===U?void 0:U.items,$e=!He&&(M||Be)&&Re&&(Re.length>1||1===Re.length&&(null===(W=Re[0])||void 0===W||null===(ee=W.items)||void 0===ee?void 0:ee.length)>1||(null===(te=Re[0])||void 0===te?void 0:te.title)),Ie=(null==se?void 0:se.pathname)===(null==de||null===(ne=de[0])||void 0===ne?void 0:ne.pathname),Ve=[];return $e&&Ve.push((0,u.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),M&&Ve.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},(0,s.tZ)("main",{css:z},He&&He,(0,s.tZ)("div",{css:(0,s.iv)(Ke?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",Je&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:k},(0,s.tZ)("div",{css:(0,s.iv)("width:",Ke?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(12,Ve),";@media screen and (max-width: ",u.Av,"){width:100%;}")},_e&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!qe&&ze&&(0,s.tZ)("div",{css:D},!0!==(null==Ae?void 0:Ae.hidden)&&null!=Ae&&Ae.title&&null!=Ae&&Ae.href?(0,s.tZ)(m.O,{pages:[u.JK,Ae,j(j({},ze),{},{href:(0,o.dq)(ze.href)}),Se&&j(j({},Se),{},{href:(0,o.dq)(Se.href)})].concat((0,r.Z)(Ne.map((function(e){return j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))}):(0,s.tZ)(m.O,{pages:[u.JK,(null==N||null===(re=N.pages)||void 0===re?void 0:re.length)>1?j(j({},null==N||null===(ie=N.pages)||void 0===ie?void 0:ie[0]),{},{href:(0,o.dq)(null==N||null===(le=N.pages)||void 0===le||null===(oe=le[0])||void 0===oe?void 0:oe.href)}):null,j(j({},ze),{},{href:(0,o.dq)(ze.href)}),Se&&j(j({},Se),{},{href:(0,o.dq)(Se.href)})].concat((0,r.Z)(Ne.map((function(e){return e.title===(null==ze?void 0:ze.title)&&e.href===(null==ze?void 0:ze.href)?null:j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(h.X,{repository:Ze,branch:we,root:Pe,pagePath:Ce}))),(0,s.tZ)("div",{css:A},me&&(0,s.tZ)(g.c,{name:me}),he&&(0,s.tZ)(f.x,{name:ce,link:he})),Ge,_e&&Ie&&(0,s.tZ)(y.x,{pages:de}),_e&&(0,s.tZ)(x.m,{nextPage:ve,previousPage:pe}),!Ke&&(0,s.tZ)("div",{css:q},(0,s.tZ)("div",null,(0,s.tZ)(p.T,{repository:Ze,branch:we,root:Pe,pagePath:Ce,contributors:je,externalContributors:null==i||null===(ae=i.frontmatter)||void 0===ae?void 0:ae.contributors,date:je[0]?new Date(je[0].date).toLocaleDateString():(new Date).toLocaleDateString()})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(c.x,null)))),$e&&(0,s.tZ)(b.m,{tableOfContents:ye}),Ye&&Ye)),(0,s.tZ)(v.$,{hasSideNav:M})))}}}]);
//# sourceMappingURL=2dee68d8-836f5cd71b783103ac50.js.map