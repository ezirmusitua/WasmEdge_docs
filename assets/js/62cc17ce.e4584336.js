"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8376],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:1},o="2.1 WasmEdge Features",i={unversionedId:"wasmedge/features",id:"wasmedge/features",title:"2.1 WasmEdge Features",description:"WasmEdg (project under CNCF) is a lightweight, high-performance, and extensible WebAssembly runtime.",source:"@site/docs/wasmedge/features.md",sourceDirName:"wasmedge",slug:"/wasmedge/features",permalink:"/book/docs/wasmedge/features",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wasmedge/features.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What is WasmEdge",permalink:"/book/docs/category/what-is-wasmedge"},next:{title:"2.2 WasmEdge Extensions",permalink:"/book/docs/category/22-wasmedge-extensions"}},l={},u=[{value:"High Performance",id:"high-performance",level:2},{value:"Cloud-native Extensions",id:"cloud-native-extensions",level:2},{value:"JavaScript Support",id:"javascript-support",level:2},{value:"Cloud native orchestration",id:"cloud-native-orchestration",level:2},{value:"Cross Platform",id:"cross-platform",level:2},{value:"Easy extensible",id:"easy-extensible",level:2},{value:"Easy to Embed into a Host Application",id:"easy-to-embed-into-a-host-application",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"21-wasmedge-features"},"2.1 WasmEdge Features"),(0,n.kt)("p",null,"WasmEdg (project under CNCF) is a lightweight, high-performance, and extensible WebAssembly runtime."),(0,n.kt)("h2",{id:"high-performance"},"High Performance"),(0,n.kt)("p",null,"Through ",(0,n.kt)("a",{parentName:"p",href:"/book/docs/build-and-run/aot"},"the AoT compilier"),", WasmEdge is the fastest WebAssembly runtime on the market."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2010.07115"},"A Lightweight Design for High-performance Serverless Computing"),", published on IEEE Software, Jan 2021. ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2010.07115"},"https://arxiv.org/abs/2010.07115")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.infoq.com/articles/arm-vs-x86-cloud-performance/"},"Performance Analysis for Arm vs. x86 CPUs in the Cloud"),", published on infoQ.com, Jan 2021. ",(0,n.kt)("a",{parentName:"li",href:"https://www.infoq.com/articles/arm-vs-x86-cloud-performance/"},"https://www.infoq.com/articles/arm-vs-x86-cloud-performance/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.suborbital.dev/suborbital-wasmedge"},"WasmEdge is the fastest WebAssembly Runtime in Suborbital Reactr test suite"),", Dec 2021")),(0,n.kt)("h2",{id:"cloud-native-extensions"},"Cloud-native Extensions"),(0,n.kt)("p",null,"Besides WASI and the standard WebAssembly proposal, WasmEdge has some cloud-native extensions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"non-blocking network sockets and web services with Rust, C, and JavaScript SDK"),(0,n.kt)("li",{parentName:"ul"},"MySQL-based database driver"),(0,n.kt)("li",{parentName:"ul"},"Key value store"),(0,n.kt)("li",{parentName:"ul"},"Gas meter for resource limitation"),(0,n.kt)("li",{parentName:"ul"},"WasmEdge-bindgen for complex para passing"),(0,n.kt)("li",{parentName:"ul"},"AI inference with TensorFlow Lite, Pytorch, and OpenVINO")),(0,n.kt)("h2",{id:"javascript-support"},"JavaScript Support"),(0,n.kt)("p",null,"Through the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"WasmEdge-Quickjs")," project, WasmEdge could run a JavaScript program, lowering the bar for developing a Wasm app."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ES6 module and std API support"),(0,n.kt)("li",{parentName:"ul"},"NPM module support"),(0,n.kt)("li",{parentName:"ul"},"Native JS API in Rust"),(0,n.kt)("li",{parentName:"ul"},"Node.js API Support"),(0,n.kt)("li",{parentName:"ul"},"Async networking"),(0,n.kt)("li",{parentName:"ul"},"Fetch API"),(0,n.kt)("li",{parentName:"ul"},"React SSR")),(0,n.kt)("h2",{id:"cloud-native-orchestration"},"Cloud native orchestration"),(0,n.kt)("p",null,"WasmEdge could be seamlessly integrated with the existing cloud-native infra."),(0,n.kt)("p",null,'There are several options to manage Wasm apps as "containers" under Kubernetes. All options will give you a Kubernetes cluster that runs Linux containers and WasmWasm containers side by side. '),(0,n.kt)("p",null,"Option #1 is to ",(0,n.kt)("a",{parentName:"p",href:"/book/docs/deploy/crun"},"use an OCI runtime crun")," (the C version of runc \u2014 mainly supported by Red Hat). crun decides whether an OCI image is WasmWasm or Linux based on image annotations. If the image is annotated as wasm32, crun will bypass the Linux container setup and just use WasmEdge to run it. Based on crun, we can get the entire Kubernetes stack CRI-O, containerd, Podman, kind, micro k8s, and k8s to work with Wasm images. "),(0,n.kt)("p",null,"Option #2 is to ",(0,n.kt)("a",{parentName:"p",href:"/book/docs/deploy/containerd"},'use a containerd-shim to start Wasm "containers" via runwasi'),". Basically, containerd could look at the image's target platform. It uses runwasi if the image is wasm32 and runc if it is x86 / arm. This is the approach behind Docker + Wasm."),(0,n.kt)("h2",{id:"cross-platform"},"Cross Platform"),(0,n.kt)("p",null,"Wasm is Portable. The compiled wasm file could run on different hardware and platforms without any changes."),(0,n.kt)("p",null,"WasmEdge supports a wide range of operating systems and hardware platforms. It allows WebAssembly applications to be truly portable across platforms. It runs on Linux-like systems and microkernels such as the ",(0,n.kt)("inlineCode",{parentName:"p"},"seL4")," real-time system."),(0,n.kt)("p",null,"WasmEdge now supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Linux (x86_64 and aarch64)"),(0,n.kt)("li",{parentName:"ul"},"MacOS (x86_64 and M1)"),(0,n.kt)("li",{parentName:"ul"},"Windows"),(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"seL4"),(0,n.kt)("li",{parentName:"ul"},"OpenWrt"),(0,n.kt)("li",{parentName:"ul"},"OpenHarmony"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi"),(0,n.kt)("li",{parentName:"ul"},"RISC-V (WIP)")),(0,n.kt)("h2",{id:"easy-extensible"},"Easy extensible"),(0,n.kt)("p",null,"It is easy to build customized WasmEdge runtimes with native host functions in C, Go, and Rust."),(0,n.kt)("p",null,"Or you could build your own plugins for WasmEdge in C++, C, or Rust (WIP)."),(0,n.kt)("h2",{id:"easy-to-embed-into-a-host-application"},"Easy to Embed into a Host Application"),(0,n.kt)("p",null,"Embedded runtime is the classical use case for WasmEdge. You could embed WasmEdge functions in C, Go, Rust, Node.js Java (WIP), and Python (WIP) host applications."))}m.isMDXComponent=!0}}]);