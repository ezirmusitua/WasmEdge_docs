"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||a;return n?o.createElement(g,s(s({ref:t},d),{},{components:n})):o.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},s="2.3 Component Model and Third Party Extensions",i={unversionedId:"wasmedge/component_model",id:"wasmedge/component_model",title:"2.3 Component Model and Third Party Extensions",description:"The component model for Wasm would dramatically improve Wasm module\u2019s reusability and composability. It will allow better access from one Wasm module to other modules and systems, including the operating system APIs (eg, networking).",source:"@site/docs/wasmedge/component_model.md",sourceDirName:"wasmedge",slug:"/wasmedge/component_model",permalink:"/docs/wasmedge/component_model",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wasmedge/component_model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2.2.2 WasmEdge extensions",permalink:"/docs/wasmedge/extensions/unique_extensions"},next:{title:"Building and running WasmEdge apps",permalink:"/docs/category/building-and-running-wasmedge-apps"}},l={},m=[],d={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"23-component-model-and-third-party-extensions"},"2.3 Component Model and Third Party Extensions"),(0,r.kt)("p",null,"The component model for Wasm would dramatically improve Wasm module\u2019s reusability and composability. It will allow better access from one Wasm module to other modules and systems, including the operating system APIs (eg, networking). "),(0,r.kt)("p",null,"WasmEdge is already committed to supporting and implementing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/component-model"},"the component model proposal"),". See the related issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/issues/1892"},"here"),"."),(0,r.kt)("p",null,"After the support for component model is done, WasmEdge could be integrated by Spin and Spiderlightning."))}c.isMDXComponent=!0}}]);