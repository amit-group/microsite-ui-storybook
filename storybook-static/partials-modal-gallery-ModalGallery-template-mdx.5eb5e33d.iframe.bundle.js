/*! For license information please see partials-modal-gallery-ModalGallery-template-mdx.5eb5e33d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkamit_ui_microsite_storybook=self.webpackChunkamit_ui_microsite_storybook||[]).push([[944],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tn:()=>ArgumentTable,iJ:()=>ConfigTable,QK:()=>TrackingConfigTable,t$:()=>TrackingDataTable,_4:()=>TrackingEventsTable,tt:()=>setStyles});var react=__webpack_require__("./node_modules/react/index.js");function ConfigTable({children}){return react.createElement("table",{className:"docblock-argstable w-100"},react.createElement("thead",null,react.createElement("tr",null,react.createElement("th",null,"Property"),react.createElement("th",null,"Type"),react.createElement("th",null,"Required"),react.createElement("th",null,"Default"),react.createElement("th",null,"Description"))),react.createElement("tbody",null,children))}function Code({children}){return react.createElement("code",{className:"css-1kwwth4"},children)}function TrackingDataTable(){return react.createElement(ConfigTable,null,react.createElement("tr",null,react.createElement("td",null,"action"),react.createElement("td",null,react.createElement(Code,null,"string")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null,"Custom action for event")),react.createElement("tr",null,react.createElement("td",null,"target"),react.createElement("td",null,react.createElement(Code,null,"string")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null,"Custom target for event")),react.createElement("tr",null,react.createElement("td",null,"label"),react.createElement("td",null,react.createElement(Code,null,"string")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null,"Custom label for event")),react.createElement("tr",null,react.createElement("td",null,"category"),react.createElement("td",null,react.createElement(Code,null,"string")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null,"Custom category for event")))}function TrackingEventsTable({events=[]}){return react.createElement(ConfigTable,null,events.includes("toggleClick")&&react.createElement("tr",null,react.createElement("td",null,"toggleClick"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null,"Custom for event click on toggle")),events.includes("videoPlay")&&react.createElement("tr",null,react.createElement("td",null,"videoPlay"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("videoReplay")&&react.createElement("tr",null,react.createElement("td",null,"videoReplay"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("videoPause")&&react.createElement("tr",null,react.createElement("td",null,"videoPause"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("videoSoundOff")&&react.createElement("tr",null,react.createElement("td",null,"videoSoundOff"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("videoSoundOn")&&react.createElement("tr",null,react.createElement("td",null,"videoSoundOn"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("carouselClickNext")&&react.createElement("tr",null,react.createElement("td",null,"carouselClickNext"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("carouselClickPrev")&&react.createElement("tr",null,react.createElement("td",null,"carouselClickPrev"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("carouselClickItem")&&react.createElement("tr",null,react.createElement("td",null,"carouselClickItem"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("modalClickClose")&&react.createElement("tr",null,react.createElement("td",null,"modalClickClose"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("modalClickThumb")&&react.createElement("tr",null,react.createElement("td",null,"modalClickThumb"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("playlistClickToggle")&&react.createElement("tr",null,react.createElement("td",null,"playlistClickToggle"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)),events.includes("minigameClickClose")&&react.createElement("tr",null,react.createElement("td",null,"minigameClickClose"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingData")),react.createElement("td",null),react.createElement("td",null),react.createElement("td",null)))}function TrackingConfigTable(){return react.createElement(ConfigTable,null,react.createElement("tr",null,react.createElement("td",null,"category"),react.createElement("td",null,react.createElement(Code,null,"string")),react.createElement("td",null),react.createElement("td",null,react.createElement(Code,null,"Engagement")),react.createElement("td",null,"Category for GA Event")),react.createElement("tr",null,react.createElement("td",null,"label"),react.createElement("td",null,react.createElement(Code,null,"string")),react.createElement("td",null),react.createElement("td",null,react.createElement(Code,null,"General")),react.createElement("td",null,"Label for GA Event")),react.createElement("tr",null,react.createElement("td",null,"events"),react.createElement("td",null,react.createElement(Code,null,"MicrositeTrackingEvents")),react.createElement("td",null),react.createElement("td",null,react.createElement(Code,null,"{}")),react.createElement("td",null,"Custom for each events")))}function ArgumentTable({children}){return react.createElement("table",{className:"docblock-argstable w-100"},react.createElement("thead",null,react.createElement("tr",null,react.createElement("th",null,"Argument"),react.createElement("th",null,"Type"),react.createElement("th",null,"Required"),react.createElement("th",null,"Default"),react.createElement("th",null,"Description"))),react.createElement("tbody",null,children))}function setStyles(element,styles){Object.keys(styles).forEach((key=>{element.style[key]=styles[key]}))}},"./stories/partials/modal-gallery/ModalGallery.template.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",hr:"hr"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{isTemplate:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Dx,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"source-code",children:"Source Code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"micrositemodalgallery-constructor",children:"MicrositeModalGallery Constructor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"new MicrositeModalGallery(element, config)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_utils__WEBPACK_IMPORTED_MODULE_2__.tn,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"element"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HTML Element | String"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Required"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Modal's element or selector"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"config"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MicrositeModalGalleryConfig"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Required"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Configuration for MicrositeModalGallery. "})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"micrositemodalgalleryconfig",children:"MicrositeModalGalleryConfig"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_utils__WEBPACK_IMPORTED_MODULE_2__.iJ,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"data"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MicrositeModalGalleryData[]"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Required"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Show/hide custom controls like Play, Replay, Mute/Unmute buttons"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"carouselEl"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HTMLDivElement | string"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Selector or element for carousel"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"carouselConfig"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MicrositeCarouselConfig"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Carousel's config"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"tracking"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MicrositeTrackingConfig"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"{}"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Configuration for Tracking"})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"micrositemodalgallerydata",children:"MicrositeModalGalleryData"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_utils__WEBPACK_IMPORTED_MODULE_2__.iJ,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"id"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string | number"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Required"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"ID of gallery. Used to detect folder images if don't provide images."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"title"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Required"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Title will show on ModalGallery"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"description"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Required"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Description will show on Modal Gallery"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"images"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string[]"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:["Gallery's Image URLs will generate with format ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/{id}/{1-4}.png"}),". If you put images in different folders, you must list their URLs in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"images"})," property."]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"micrositetrackingconfig",children:"MicrositeTrackingConfig"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_2__.QK,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"micrositetrackingevents",children:"MicrositeTrackingEvents"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_2__._4,{events:["modalClickThumb","modalClickClose"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"micrositetrackingdata",children:"MicrositeTrackingData"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_2__.t$,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);