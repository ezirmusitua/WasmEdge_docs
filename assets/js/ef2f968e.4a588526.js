"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7314],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:2},i="4.2 Access OS services",o={unversionedId:"rust/os",id:"rust/os",title:"4.2 Access OS services",description:"The WASI (WebAssembly Systems Interface) standard is designed to allow WebAssembly applications to access operating system services.",source:"@site/docs/rust/os.md",sourceDirName:"rust",slug:"/rust/os",permalink:"/docs/rust/os",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rust/os.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4.1 Hello world",permalink:"/docs/rust/hello_world"},next:{title:"4.3 HTTP services",permalink:"/docs/category/43-http-services"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Random numbers",id:"random-numbers",level:2},{value:"Printing and debugging from Rust",id:"printing-and-debugging-from-rust",level:2},{value:"Arguments and environment variables",id:"arguments-and-environment-variables",level:2},{value:"Reading and writing files",id:"reading-and-writing-files",level:2},{value:"A main() app",id:"a-main-app",level:2},{value:"Functions",id:"functions",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"42-access-os-services"},"4.2 Access OS services"),(0,r.kt)("p",null,"The WASI (WebAssembly Systems Interface) standard is designed to allow WebAssembly applications to access operating system services.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," target in the Rust compiler supports WASI.\nIn this section, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/tree/master/cli/wasi"},"an example project")," to show how to use Rust standard APIs to access operating system services."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WasmEdge installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")," installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasm32-wasi")," target of the Rust toolchain  added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To add, run ",(0,r.kt)("inlineCode",{parentName:"li"},"rustup target add wasm32-wasi")," after installed Rust. ")))),(0,r.kt)("h2",{id:"random-numbers"},"Random numbers"),(0,r.kt)("p",null,"The WebAssembly VM is a pure software construct. It does not have a hardware entropy source for random numbers. That's why WASI defines a function for WebAssembly programs to call its host operating system to get a random seed. As a Rust developer, all you need is to use the popular (de facto standard) ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"getrandom")," crates. With the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," compiler backend, these crates generate the correct WASI calls in the WebAssembly bytecode. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," dependencies are as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nrand = "0.7.3"\ngetrandom = "0.1.14"\n')),(0,r.kt)("p",null,"The Rust code to get random number from WebAssembly is this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use rand::prelude::*;\n\npub fn get_random_i32() -> i32 {\n  let x: i32 = random();\n  return x;\n}\n\npub fn get_random_bytes() -> Vec<u8> {\n  let mut rng = thread_rng();\n  let mut arr = [0u8; 128];\n  rng.fill(&mut arr[..]);\n  return arr.to_vec();\n}\n")),(0,r.kt)("h2",{id:"printing-and-debugging-from-rust"},"Printing and debugging from Rust"),(0,r.kt)("p",null,"The Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"println!")," marco just works in WASI. The statements print to the ",(0,r.kt)("inlineCode",{parentName:"p"},"STDOUT")," of the process that runs the WasmEdge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn echo(content: &str) -> String {\n  println!("Printed from wasi: {}", content);\n  return content.to_string();\n}\n')),(0,r.kt)("h2",{id:"arguments-and-environment-variables"},"Arguments and environment variables"),(0,r.kt)("p",null,"It is possible to pass CLI arguments to and access OS environment variables in a WasmEdge application.\nThey are just ",(0,r.kt)("inlineCode",{parentName:"p"},"env::args()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"env::vars()")," arrays in Rust."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::env;\n\npub fn print_env() {\n  println!("The env vars are as follows.");\n  for (key, value) in env::vars() {\n    println!("{}: {}", key, value);\n  }\n\n  println!("The args are as follows.");\n  for argument in env::args() {\n    println!("{}", argument);\n  }\n}\n')),(0,r.kt)("h2",{id:"reading-and-writing-files"},"Reading and writing files"),(0,r.kt)("p",null,"WASI allows your Rust functions to access the host computer's file system through the standard Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"std::fs")," API.\nIn the Rust program, you operate on files through a relative path. The relative path's root is specified when you start the WasmEdge runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs;\nuse std::fs::File;\nuse std::io::{Write, Read};\n\npub fn create_file(path: &str, content: &str) {\n  let mut output = File::create(path).unwrap();\n  output.write_all(content.as_bytes()).unwrap();\n}\n\npub fn read_file(path: &str) -> String {\n  let mut f = File::open(path).unwrap();\n  let mut s = String::new();\n  match f.read_to_string(&mut s) {\n    Ok(_) => s,\n    Err(e) => e.to_string(),\n  }\n}\n\npub fn del_file(path: &str) {\n  fs::remove_file(path).expect("Unable to delete");\n}\n')),(0,r.kt)("h2",{id:"a-main-app"},"A main() app"),(0,r.kt)("p",null,"With a ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function, the Rust program can be compiled into a standalone WebAssembly program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n  println!("Random number: {}", get_random_i32());\n  println!("Random bytes: {:?}", get_random_bytes());\n  println!("{}", echo("This is from a main function"));\n  print_env();\n  create_file("tmp.txt", "This is in a file");\n  println!("File content is {}", read_file("tmp.txt"));\n  del_file("tmp.txt");\n}\n')),(0,r.kt)("p",null,"Use the command below to compile ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/tree/master/cli/wasi"},"the Rust project"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,r.kt)("p",null,"To run it in ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge"),", do the following. The ",(0,r.kt)("inlineCode",{parentName:"p"},"--dir")," option maps the current directory of the command shell to the file system current directory inside the WebAssembly app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. target/wasm32-wasi/release/wasi.wasm hello\nRandom number: -68634548\nRandom bytes: [87, 117, 194, 122, 74, 189, 29, 1, 113, 26, 90, 6, 151, 20, 11, 169, 131, 212, 161, 220, 216, 190, 77, 234, 30, 10, 159, 7, 14, 89, 81, 111, 247, 136, 39, 195, 83, 90, 153, 225, 66, 16, 150, 217, 137, 172, 216, 203, 251, 37, 4, 27, 32, 57, 76, 237, 99, 147, 24, 175, 208, 157, 3, 220, 46, 224, 199, 153, 144, 96, 120, 89, 160, 38, 171, 239, 87, 218, 41, 184, 220, 78, 157, 57, 229, 198, 222, 72, 219, 118, 237, 27, 229, 28, 51, 116, 88, 101, 40, 139, 160, 51, 156, 102, 66, 233, 101, 50, 131, 9, 253, 186, 73, 148, 85, 36, 155, 254, 168, 202, 23, 96, 181, 99, 120, 136, 28, 147]\nThis is from a main function\nThe env vars are as follows.\n... ...\nThe args are as follows.\ntarget/wasm32-wasi/release/wasi.wasm\nhello\nFile content is This is in a file\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"As ",(0,r.kt)("a",{parentName:"p",href:"/docs/rust/hello_world#a-simple-function"},"we have seen"),", you can create WebAssembly functions in a Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," project. You can also use WASI functions in those functions.\nHowever, an important caveat is that, without a ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function, you will need to explicitly call a helper function to initialize environment for WASI functions to work properly."),(0,r.kt)("p",null,"In the Rust program, add a helper crate in Cargo.toml so that the WASI initialization code can be applied to your exported public library functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\n... ...\nwasmedge-wasi-helper = "=0.2.0"\n')),(0,r.kt)("p",null,"In the Rust function, we need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"_initialize()")," before we access any arguments and environment variables or operate any files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn print_env() -> i32 {\n  _initialize();\n  ... ...\n}\n\npub fn create_file(path: &str, content: &str) -> String {\n  _initialize();\n  ... ...\n}\n\npub fn read_file(path: &str) -> String {\n  _initialize();\n  ... ...\n}\n\npub fn del_file(path: &str) -> String {\n  _initialize();\n  ... ...\n}\n")))}c.isMDXComponent=!0}}]);