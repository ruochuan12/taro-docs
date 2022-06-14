"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51019],{79874:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(b,p(p({ref:t},i),{},{components:r})):n.createElement(b,p({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4019:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={title:"\u4f9d\u8d56\u9884\u52a0\u8f7d"},l=void 0,c={unversionedId:"prebundle",id:"prebundle",title:"\u4f9d\u8d56\u9884\u52a0\u8f7d",description:"\u7248\u672c\u8981\u6c42 3.5+",source:"@site/docs/prebundle.md",sourceDirName:".",slug:"/prebundle",permalink:"/taro-docs/en/docs/next/prebundle",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/prebundle.md",tags:[],version:"current",frontMatter:{title:"\u4f9d\u8d56\u9884\u52a0\u8f7d"},sidebar:"docs",previous:{title:"\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56",permalink:"/taro-docs/en/docs/next/mini-split-chunks-plugin"},next:{title:"Taro Uses Native Modules",permalink:"/taro-docs/en/docs/next/hybrid"}},u={},i=[{value:"\u5f00\u542f PreBundle \u914d\u7f6e",id:"\u5f00\u542f-prebundle-\u914d\u7f6e",level:2},{value:"\u7279\u6027\u5b9e\u73b0",id:"\u7279\u6027\u5b9e\u73b0",level:2},{value:"\u63d0\u901f\u6548\u679c",id:"\u63d0\u901f\u6548\u679c",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],s={toc:i};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u7248\u672c\u8981\u6c42 3.5+")),(0,n.kt)("p",null,"\u7f16\u8bd1\u4f18\u5316\u6709\u5f88\u591a\u53ef\u4f9b\u9009\u62e9\u7684\u65b9\u6848\uff0c\u901a\u8fc7 webpack5 \u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u5f88\u591a\u6709\u610f\u601d\u7684\u7279\u6027\uff0c\u800c\u4f9d\u8d56\u9884\u52a0\u8f7d\u5c31\u662f\u5176\u4e2d\u4e4b\u4e00\u3002\u53d7 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://umijs.org/zh-CN/docs/mfsu"}),"UmiJS mfsu")," \u7279\u6027\u7684\u542f\u53d1\uff0c\u53ef\u4ee5\u9884\u5148\u628a\u9879\u76ee\u7684 node_modules \u4f9d\u8d56\u6253\u5305\u4e3a\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u6a21\u5757\u8054\u90a6\uff08Module Federation\uff09")," remote \u5e94\u7528\uff0c\u518d\u6b21\u7f16\u8bd1\u65f6 Webpack \u5219\u65e0\u9700\u518d\u5bf9\u4f9d\u8d56\u8fdb\u884c\u7f16\u8bd1\uff0c\u4ece\u800c\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6\u3002"),(0,n.kt)("h2",o({},{id:"\u5f00\u542f-prebundle-\u914d\u7f6e"}),"\u5f00\u542f PreBundle \u914d\u7f6e"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5f88\u591a\u5927\u578b\u9879\u76ee\u7f16\u8bd1\u662f\u975e\u5e38\u8017\u65f6\u7684\u4e8b\u60c5\uff0c\u5f88\u591a\u7ec6\u5c0f\u7684\u53d8\u66f4\u90fd\u9700\u8981\u5168\u91cf\u7f16\u8bd1\u4f1a\u5e26\u6765\u5f88\u9ad8\u7684\u635f\u8017\u3002\u901a\u8fc7\u4f9d\u8d56\u9884\u7f16\u8bd1\u8df3\u8fc7\u90e8\u5206\u7f16\u8bd1\uff0c\u5f00\u53d1\u73af\u5883\u70ed\u66f4\u65b0\u5360\u7528\u5185\u5b58\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\uff0c\u70ed\u66f4\u65b0\u6240\u9700\u65f6\u95f4\u4e5f\u5c06\u5927\u5e45\u51cf\u5c11\uff1b\u751f\u4ea7\u6a21\u5f0f\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d0\u524d\u7f16\u8bd1\u4f9d\u8d56\uff0c\u5927\u5e45\u63d0\u5347\u90e8\u7f72\u6548\u7387\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/next/config-detail#compilerprebundle"}),"compiler.prebundle")," \u914d\u7f6e\u5f00\u542f\u4f9d\u8d56\u9884\u7f16\u8bd1\u7279\u6027\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"/** config/index.js */\nconst config = {\n  compiler: {\n    type: 'webpack5',\n    // \u4ec5 webpack5 \u652f\u6301\u4f9d\u8d56\u9884\u7f16\u8bd1\u914d\u7f6e\n    prebundle: {\n      enable: true\n    }\n  }\n}\n")),(0,n.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cTaro \u9075\u5faa Webpack ",(0,n.kt)("strong",{parentName:"p"},"\u201c\u7f16\u8bd1\u5b89\u5168\u6bd4\u7f16\u8bd1\u901f\u5ea6\u91cd\u8981\u201d")," \u7684\u7406\u5ff5\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b Taro \u5e76\u4e0d\u4f1a\u542f\u7528\u4f9d\u8d56\u9884\u7f16\u8bd1\uff0c\u867d\u7136\u6211\u4eec\u76f8\u4fe1\u4f9d\u8d56\u9884\u7f16\u8bd1\u53ef\u4ee5\u5e26\u7ed9\u5f00\u53d1\u8005\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u4f46\u7f16\u8bd1\u5b89\u5168\u4ecd\u7136\u662f\u9700\u8981\u8003\u8651\u7684\u91cd\u8981\u56e0\u7d20\u3002"),(0,n.kt)("h2",o({},{id:"\u7279\u6027\u5b9e\u73b0"}),"\u7279\u6027\u5b9e\u73b0"),(0,n.kt)("p",null,"\u4f9d\u8d56\u9884\u7f16\u8bd1\u53ef\u4ee5\u5206\u4e3a\u4e09\u6b65\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6536\u96c6\u4f9d\u8d56"),(0,n.kt)("li",{parentName:"ol"},"\u6253\u5305\u4f9d\u8d56"),(0,n.kt)("li",{parentName:"ol"},"\u6253\u5305 Module Federation Remote \u5e94\u7528")),(0,n.kt)("p",null,"Taro \u53c2\u8003 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://cn.vitejs.dev/"}),"Vite")," \u4f7f\u7528\u4e86 esbuild \u6536\u96c6\u7528\u6237\u4f7f\u7528\u5230\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u5e76\u5206\u522b\u8fdb\u884c\u6253\u5305\u3002\u6253\u5305\u540e\u7684\u6a21\u5757\u4f1a\u4f5c\u4e3a Webpack \u7684 entry\uff0c\u6700\u7ec8\u6253\u5305\u4e3a\u6a21\u5757\u8054\u90a6 Remote \u5e94\u7528\uff0c\u4f9b\u4e3b\u5e94\u7528\uff08Host\uff09\u6d88\u8d39\u3002\u5b9e\u73b0\u7ec6\u8282\u8bf7\u53c2\u8003 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/discussions/11533"}),"RFC \u6587\u6863"),"\u3002"),(0,n.kt)("p",null,"Taro \u4f1a\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u7684 dev \u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u5f00\u542f\u4f9d\u8d56\u9884\u7f16\u8bd1\u529f\u80fd\u3002\u9996\u6b21\u7f16\u8bd1\u65f6\uff0c\u56e0\u4e3a\u4f7f\u7528\u4e86 esbuild \u6253\u5305\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u6240\u4ee5\u4f1a\u6bd4\u666e\u901a\u7f16\u8bd1\u7a0d\u5feb\u3002\u4e8c\u6b21\u7f16\u8bd1\u65f6\uff0cTaro \u80fd\u76f4\u63a5\u590d\u7528 Remote App\uff0cWebpack \u53ea\u9700\u7f16\u8bd1\u4e1a\u52a1\u4ee3\u7801\uff0c\u56e0\u6b64\u6839\u636e\u4e0d\u540c\u9879\u76ee\u4f1a\u6709\u4e0d\u540c\u7684\u7f16\u8bd1\u63d0\u901f\u6548\u679c\u3002"),(0,n.kt)("p",null,"\u4f9d\u8d56\u9884\u7f16\u8bd1\u7684\u6d41\u7a0b\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/cjj-pub-images/prebundle.png",alt:"https://storage.360buyimg.com/cjj-pub-images/prebundle.png"}))),(0,n.kt)("h2",o({},{id:"\u63d0\u901f\u6548\u679c"}),"\u63d0\u901f\u6548\u679c"),(0,n.kt)("p",null,"\u4ee5 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/jdf2e/nutui/tree/next/src/sites/mobile-taro/vue"}),"NutUI \u7ec4\u4ef6\u793a\u4f8b\u5e93"),"\u4e3a\u4f8b\uff0c\u5206\u522b\u6d4b\u8bd5 dev \u4e0e prod \u73af\u5883\u4e0b\u7f16\u8bd1\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u7f16\u8bd1\u63d0\u901f\u6548\u679c\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://storage.jd.com/cjj-pub-images/compile-speed_dev.png",alt:"compile-speed_dev"}))),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://storage.jd.com/cjj-pub-images/compile-speed_prod.png",alt:"compile-speed_prod"}))),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728 dev \u73af\u5883\u4e0b\u56e0\u4e3a Taro \u9ed8\u8ba4\u5f00\u542f\u4e86\u4f9d\u8d56\u9884\u7f16\u8bd1\uff0c\u56e0\u6b64 Webpack5 \u9996\u6b21\u7f16\u8bd1\u901f\u5ea6\u6bd4 Webpack4 \u7a0d\u5feb\u3002\u800c prod \u73af\u5883\u6ca1\u6709\u9ed8\u8ba4\u5f00\u542f\u4f9d\u8d56\u9884\u7f16\u8bd1\uff0c\u56e0\u6b64\u4e24\u8005\u901f\u5ea6\u76f8\u5f53\uff08\u800c\u4e14 Webpack5 \u9700\u8981\u5199\u5165\u7f13\u5b58\uff0c\u53ef\u80fd\u4f1a\u6bd4 Webpack4 \u7a0d\u6162\uff09\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u65e0\u8bba\u662f dev \u8fd8\u662f prod \u73af\u5883\uff0c\u5728\u5b8c\u5168\u547d\u4e2d\u7f13\u5b58\u7684\u6700\u4f18\u60c5\u51b5\u4e0b\uff0cWebpack5 \u7684\u7f16\u8bd1\u901f\u5ea6\u90fd\u80fd\u5f97\u5230\u6781\u5927\u63d0\u5347\u3002\u5373\u4f7f\u662f\u4fee\u6539\u6e90\u7801\u5bfc\u81f4\u4e86\u90e8\u5206\u7f13\u5b58\u5931\u6548\u65f6\uff0c\u7f16\u8bd1\u901f\u5ea6\u4ecd\u7136\u6bd4\u9996\u6b21\u7f16\u8bd1\u5feb\u5f97\u591a\u3002")),(0,n.kt)("h2",o({},{id:"\u6ce8\u610f\u4e8b\u9879"}),"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("p",null,"\u76ee\u524d\u8be5\u7279\u6027\u4ec5\u652f\u6301 h5 \u548c\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\uff0c\u540e\u7eed\u4f1a\u62c6\u5206\u51fa\u6765 webpack5 \u63d2\u4ef6\u4f9b\u975e Taro \u9879\u76ee\u4f7f\u7528\u3002"))}d.isMDXComponent=!0}}]);