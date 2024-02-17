/*! peppu-bootstrap - 0.0.1 */
!function(t,e){'object'==typeof exports&&'object'==typeof module?module.exports=e():'function'==typeof define&&define.amd?define([],e):'object'==typeof exports?exports["peppu-bootstrap"]=e():t["peppu-bootstrap"]=e()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var t={d:(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0})}},e={};t.r(e),t.d(e,{default:()=>o});const a={'peppu-bootstrap':{}},o=function(t){const e={i18n:{},...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};!function(t){const e=t.DomComponents;e.addType('B-CARD',{model:{defaults:{tagName:'div',attributes:{class:'card'},components:[{type:'image',attributes:{src:'https://fakeimg.pl/600x400?text=Replace+image',alt:''}},{tagName:'div',attributes:{class:'card-body'},components:[{tagName:'h5',type:'text',attributes:{class:'card-title'},components:[{type:'textnode',content:'Card title'}]},{tagName:'p',type:'text',attributes:{class:'card-text'},components:[{type:'textnode',content:"Some quick example text to build on the card title and make up the bulk of the card's content."}]},{type:'link',attributes:{href:'#',class:'btn btn-primary'},components:[{type:'textnode',content:'Go somewhere'}]}]}],styles:"\n        .card img {\n          card-img-top\n        }\n        .card {\n          width: 18rem;\n        }\n        "}},view:{}}),e.addType('B-HERO',{model:{defaults:{tagName:'div',attributes:{class:'container col-xxl-8 px-4 py-5'},components:[{tagName:'div',attributes:{class:'row flex-lg-row-reverse align-items-center g-5 py-5'},components:[{tagName:'div',attributes:{class:'col-10 col-sm-8 col-lg-6 himg'},components:[{type:'image',attributes:{src:'https://fakeimg.pl/600x400?text=Replace+image',alt:'',class:'d-block mx-lg-auto img-fluid'}}]},{tagName:'div',attributes:{class:'col-lg-6'},components:[{tagName:'h1',type:'text',attributes:{class:'display-5 fw-bold text-body-emphasis lh-1 mb-3'},components:[{type:'textnode',content:'Responsive left-aligned hero with image'}]},{tagName:'p',type:'text',attributes:{class:'lead'},components:[{type:'textnode',content:"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."}]},{tagName:'div',attributes:{class:'d-grid gap-2 d-md-flex justify-content-md-start'},components:[{type:'B-BUTTON'}]}]}]}],styles:"\n        .himg img {\n          width: 700; \n          height: 500;\n        }\n        "}},view:{}}),e.addType('B-NAVBAR',{model:{defaults:{tagName:'div',attributes:{class:'navbar navbar-expand-lg fixed-top'},components:[{tagName:'div',attributes:{class:'container-fluid'},components:[{type:'link',attributes:{class:'navbar-brand',href:'#'},components:[{type:'image',attributes:{src:'https://fakeimg.pl/600x400?text=Replace+image'}}]},{tagName:'button',attributes:{class:'navbar-toggler',type:'button','data-bs-toggle':"collapse",'data-bs-target':"#navbarSupportedContent"},components:[{tagName:'span',attributes:{class:'navbar-toggler-icon'}}]},{tagName:'div',attributes:{class:'collapse navbar-collapse',id:'navbarSupportedContent'},components:[{tagName:'ul',attributes:{class:'navbar-nav me-auto mb-2 mb-lg-0'},components:[{tagName:'li',attributes:{class:'nav-item'},components:[{type:'link',attributes:{class:'nav-link active','aria-current':'page',href:'#'},components:[{type:'textnode',content:'Home'}]}]},{tagName:'li',attributes:{class:'nav-item'},components:[{type:'link',attributes:{class:'nav-link','aria-current':'page',href:'#'},components:[{type:'textnode',content:'Link'}]}]},{tagName:'li',attributes:{class:'nav-item dropdown'},components:[{type:'link',attributes:{class:'nav-link dropdown-toggle',id:'navbarDropdown',href:'#',role:'button','data-bs-toggle':"dropdown"},components:[{type:'textnode',content:'Dropdown'}]},{tagName:'ul',attributes:{class:'dropdown-menu','aria-labelledby':'navbarDropdown'},components:[{tagName:'li',components:[{type:'link',attributes:{class:'dropdown-item',href:'#'},components:[{type:'textnode',content:'Action'}]}]},{tagName:'li',components:[{type:'link',attributes:{class:'dropdown-item',href:'#'},components:[{type:'textnode',content:'Action'}]}]},{tagName:'li',components:[{tagName:'hr',attributes:{class:'dropdown-divider'}}]},{tagName:'li',components:[{type:'link',attributes:{class:'dropdown-item',href:'#'},components:[{type:'textnode',content:'Action'}]}]}]}]}]},{tagName:'form',attributes:{class:'d-flex'},components:[{tagName:'input',attributes:{class:'form-control me-2',type:'search',placeholder:'Search','aria-label':'Search'}},{type:'B-BUTTON'}]}]}]}],styles:"\n        .container-fluid img {\n          width: 50px; \n          height: 30px\n        }\n        "}},view:{}}),e.addType('B-BUTTON',{isComponent:t=>'BUTTON'==t.tagName,model:{defaults:{tagName:'button',attributes:{type:'button',class:'btn btn-primary'},text:'Send',traits:[{name:'text',changeProp:!0},{type:'select',name:'type',options:[{value:'button'},{value:'submit'},{value:'reset'}]}]},init(){const t=this.components(),e=1===t.length&&t.models[0],a=e&&e.is('textnode')&&e.get('content')||'',o=a||this.get('text');this.set('text',o),this.on('change:text',this.__onTextChange),o!==a&&this.__onTextChange()},__onTextChange(){this.components(this.get('text'))}},view:{}}),e.addType('B-ACCORDION',{model:{defaults:{tagName:'div',attributes:{id:'accordionExample',class:'container col-xxl-8 px-4 py-5 accordion'},components:[{tagName:'h2',type:'text',attributes:{class:'pb-2 border-bottom'},components:[{type:'textnode',content:'Accordion'}]},{tagName:'div',attributes:{class:'accordion-item'},components:[{tagName:'h2',type:'text',attributes:{class:'accordion-header',id:'headingOne'},components:[{tagName:'button',attributes:{class:'accordion-button',type:'button','data-bs-toggle':"collapse",'data-bs-target':"#collapseOne",'aria-expanded':"true",'aria-controls':"collapseOne"},components:[{type:'textnode',content:'Accordion Item #1'}]}]},{tagName:'div',attributes:{class:'accordion-collapse collapse show',id:'collapseOne','aria-labelledby':"headingOne",'data-bs-parent':"#accordionExample"},components:[{tagName:'div',type:'text',attributes:{class:'accordion-body'},components:[{tagName:'strong',components:[{type:'textnode',content:"This is the first item's accordion body."}]},{type:'textnode',content:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow"}]}]}]},{tagName:'div',attributes:{class:'accordion-item'},components:[{tagName:'h2',type:'text',attributes:{class:'accordion-header',id:'headingTwo'},components:[{tagName:'button',attributes:{class:'accordion-button',type:'button','data-bs-toggle':"collapse",'data-bs-target':"#collapseTwo",'aria-expanded':"true",'aria-controls':"collapseTwo"},components:[{type:'textnode',content:'Accordion Item #1'}]}]},{tagName:'div',attributes:{class:'accordion-collapse collapse show',id:'collapseTwo','aria-labelledby':"headingTwo",'data-bs-parent':"#accordionExample"},components:[{tagName:'div',type:'text',attributes:{class:'accordion-body'},components:[{tagName:'strong',components:[{type:'textnode',content:"This is the second item's accordion body."}]},{type:'textnode',content:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow"}]}]}]}]}},view:{}}),e.addType('B-FOOTER-PT',{model:{defaults:{tagName:'div',attributes:{class:'col-6 col-md-2 mb-3'},components:[{tagName:'h5',type:'text',components:[{type:'textnode',content:'Section'}]},{tagName:'ul',attributes:{class:'nav flex-column'},components:[{tagName:'li',attributes:{class:'nav-item mb-2'},components:[{type:'link',attributes:{href:'#',class:'nav-link p-0 text-body-secondary'},components:[{type:'textnode',content:'Home'}]}]},{tagName:'li',attributes:{class:'nav-item mb-2'},components:[{type:'link',attributes:{href:'#',class:'nav-link p-0 text-body-secondary'},components:[{type:'textnode',content:'Features'}]}]},{tagName:'li',attributes:{class:'nav-item mb-2'},components:[{type:'link',attributes:{href:'#',class:'nav-link p-0 text-body-secondary'},components:[{type:'textnode',content:'Pricing'}]}]},{tagName:'li',attributes:{class:'nav-item mb-2'},components:[{type:'link',attributes:{href:'#',class:'nav-link p-0 text-body-secondary'},components:[{type:'textnode',content:'FAQs'}]}]},{tagName:'li',attributes:{class:'nav-item mb-2'},components:[{type:'link',attributes:{href:'#',class:'nav-link p-0 text-body-secondary'},components:[{type:'textnode',content:'About'}]}]}]}]}},view:{}}),e.addType('B-FOOTER',{model:{defaults:{tagName:'footer',attributes:{class:'container py-5'},components:[{tagName:'div',attributes:{class:'row'},components:[{type:'B-FOOTER-PT'},{type:'B-FOOTER-PT'},{type:'B-FOOTER-PT'},{tagName:'div',attributes:{class:'col-md-5 offset-md-1 mb-3'},components:[{tagName:'form',components:[{tagName:'h5',type:'text',components:[{type:'textnode',content:'Subscribe to our newsletter'}]},{tagName:'p',type:'text',components:[{type:'textnode',content:"Monthly digest of what's new and exciting from us."}]},{tagName:'div',attributes:{class:'d-flex flex-column flex-sm-row w-100 gap-2'},components:[{tagName:'label',type:'text',attributes:{class:'visually-hidden',for:'newsletter1'},components:[{type:'textnode',content:"Email address"}]},{tagName:'input',attributes:{class:'form-control',id:'newsletter1',type:'text',placeholder:'Email address'},components:[{type:'textnode',content:"Email address"}]},{type:'B-BUTTON'}]}]}]},{tagName:'div',attributes:{class:'d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'},components:[{tagName:'p',type:'text',components:[{type:'textnode',content:"&copy; 2023 Company, Inc. All rights reserved."}]},{tagName:'div',attributes:{class:'list-unstyled d-flex'},components:[{tagName:'li',attributes:{class:'ms-3'}}]}]}]}]}},view:{}}),e.addType('B-FEATURES-PT',{model:{defaults:{tagName:'div',attributes:{class:'col d-flex align-items-start'},components:[{tagName:'div',attributes:{class:'icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'},components:[{type:'image',attributes:{class:'bi square'}}]},{tagName:'div',components:[{tagName:'h3',type:'text',attributes:{class:'fs-2 text-body-emphasis'},components:[{type:'textnode',content:'Featured title'}]},{tagName:'p',type:'text',components:[{type:'textnode',content:"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."}]},{type:'link',attributes:{href:'#',class:'btn btn-primary'},components:[{type:'textnode',content:'Primary button'}]}]}],styles:"\n        .square {\n          width: 100px; \n          height: 100px;\n        }\n        "}},view:{}}),e.addType('B-FEATURES',{model:{defaults:{tagName:'div',attributes:{id:'hanging-icons',class:'container px-4 py-5'},components:[{tagName:'h2',type:'text',attributes:{class:'pb-2 border-bottom'},components:[{type:'textnode',content:'Features'}]},{tagName:'div',attributes:{class:'row g-4 py-5 row-cols-1 row-cols-lg-3'},components:[{type:'B-FEATURES-PT'},{type:'B-FEATURES-PT'},{type:'B-FEATURES-PT'}]}]}},view:{}}),e.addType('B-CAROUSEL',{model:{defaults:{tagName:'div',attributes:{class:'carousel slide mb-6',id:'myCarousel','data-bs-ride':"carousel"},components:[{tagName:'div',attributes:{class:'carousel-indicators'},components:[{tagName:'button',attributes:{class:'active',type:'button','data-bs-target':"#myCarousel",'data-bs-slide-to':'0','aria-current':"true",'aria-label':"Slide 1"}},{tagName:'button',attributes:{type:'button','data-bs-target':"#myCarousel",'data-bs-slide-to':'1','aria-label':"Slide 2"}},{tagName:'button',attributes:{type:'button','data-bs-target':"#myCarousel",'data-bs-slide-to':'2','aria-label':"Slide 3"}}]},{tagName:'div',attributes:{class:'carousel-inner'},components:[{tagName:'div',attributes:{class:'carousel-item active cactive'},components:[{type:'image',attributes:{src:'https://fakeimg.pl/1024x400/141111/141111',alt:'',class:'bd-placeholder-img'}},{tagName:'div',attributes:{class:'container'},components:[{tagName:'div',attributes:{class:'carousel-caption text-start'},components:[{tagName:'h1',type:'text',components:[{type:'textnode',content:'Example headline.'}]},{tagName:'p',type:'text',attributes:{class:'opacity-75'},components:[{type:'textnode',content:'Some representative placeholder content for the first slide of the carousel.'}]},{tagName:'p',type:'text',components:[{type:'link',attributes:{href:'#',class:'btn btn-lg btn-primary'},components:[{type:'textnode',content:'Sign up today'}]}]}]}]}]},{tagName:'div',attributes:{class:'carousel-item citem'},components:[{type:'image',attributes:{src:'https://fakeimg.pl/1024x400/141111/141111',alt:'',class:'bd-placeholder-img'}},{tagName:'div',attributes:{class:'container'},components:[{tagName:'div',attributes:{class:'carousel-caption text-start'},components:[{tagName:'h1',type:'text',components:[{type:'textnode',content:'Example headline.'}]},{tagName:'p',type:'text',attributes:{class:'opacity-75'},components:[{type:'textnode',content:'Some representative placeholder content for the first slide of the carousel.'}]},{tagName:'p',type:'text',components:[{type:'link',attributes:{href:'#',class:'btn btn-lg btn-primary'},components:[{type:'textnode',content:'Sign up today'}]}]}]}]}]},{tagName:'div',attributes:{class:'carousel-item cactive'},components:[{type:'image',attributes:{src:'https://fakeimg.pl/1024x400/141111/141111',alt:'',class:'bd-placeholder-img'}},{tagName:'div',attributes:{class:'container'},components:[{tagName:'div',attributes:{class:'carousel-caption text-start'},components:[{tagName:'h1',type:'text',components:[{type:'textnode',content:'Example headline.'}]},{tagName:'p',type:'text',attributes:{class:'opacity-75'},components:[{type:'textnode',content:'Some representative placeholder content for the first slide of the carousel.'}]},{tagName:'p',type:'text',components:[{type:'link',attributes:{href:'#',class:'btn btn-lg btn-primary'},components:[{type:'textnode',content:'Sign up today'}]}]}]}]}]},{tagName:'button',attributes:{class:'carousel-control-prev','data-bs-target':"#myCarousel",type:'button','data-bs-slide':"prev"},components:[{tagName:'span',attributes:{class:'carousel-control-prev-icon','aria-hidden':"true"}},{tagName:'span',type:'text',attributes:{class:'visually-hidden'},components:[{type:'textnode',content:'Previous'}]}]},{tagName:'button',attributes:{class:'carousel-control-next','data-bs-target':"#myCarousel",type:'button','data-bs-slide':"next"},components:[{tagName:'span',attributes:{class:'carousel-control-next-icon','aria-hidden':"true"}},{tagName:'span',type:'text',attributes:{class:'visually-hidden'},components:[{type:'textnode',content:'Next'}]}]}]}],styles:"\n        .cactive {\n          height: 32em;\n        }\n\n        .cactive img {\n          width:100%; \n          height: 100%;\n        }\n\n        .citem {\n          height: 32em;\n        }\n        "}},view:{}}),e.addType('B-PRICING-PT',{model:{defaults:{tagName:'div',attributes:{class:'col'},components:[{tagName:'div',attributes:{class:'card mb-4 rounded-3 shadow-sm'},components:[{tagName:'div',attributes:{class:'card-header py-3'},components:[{tagName:'h4',type:'text',attributes:{class:'my-0 fw-normal'},components:[{type:'textnode',content:'Pro'}]}]},{tagName:'div',attributes:{class:'card-body'},components:[{tagName:'h1',type:'text',attributes:{class:'card-title pricing-card-title'},components:[{type:'textnode',content:'$15'},{tagName:'small',type:'text',attributes:{class:'text-body-secondary fw-light'},components:[{type:'textnode',content:'/mo'}]}]},{tagName:'ul',attributes:{class:'list-unstyled mt-3 mb-4'},components:[{tagName:'li',components:[{type:'textnode',content:'20 users included'}]},{tagName:'li',components:[{type:'textnode',content:'10 GB of storage'}]},{tagName:'li',components:[{type:'textnode',content:'Priority email support'}]},{tagName:'li',components:[{type:'textnode',content:'Help center access'}]}]},{tagName:'button',type:'button',attributes:{class:'w-100 btn btn-lg btn-primary'},components:[{type:'textnode',content:'Sign up for free'}]}]}]}]}}}),e.addType('B-PRICING',{model:{defaults:{tagName:'div',attributes:{class:'container col-sm-8 px-4 py-5'},components:[{tagName:'h2',type:'text',attributes:{class:'pb-2 border-bottom'},components:[{type:'textnode',content:'Pricing'}]},{tagName:'div',attributes:{class:'row row-cols-1 row-cols-md-3 mb-3 text-center'},components:[{type:'B-PRICING-PT'},{type:'B-PRICING-PT'},{type:'B-PRICING-PT'}]}]}},view:{}})}(t),function(t){const e=t.BlockManager;e.add('Navbar',{label:'Navbar',category:'Bootstrap Component',media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z\"/></svg>",content:{type:'B-NAVBAR'}}),e.add('Accordion',{label:'Accordion',category:'Bootstrap Component',media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z\"/></svg>",content:{type:'B-ACCORDION'}}),e.add('B-CARD',{label:'Card',category:'Bootstrap Card',media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z\"/></svg>",content:{type:'B-CARD'}}),e.add('Footer',{label:'Footer',category:'Bootstrap Component',media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z\"/></svg>",content:{type:'B-FOOTER'}}),e.add('Pricing',{label:'Pricing',category:'Bootstrap Component',content:{type:'B-PRICING'},media:"\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z\"/></svg>\n    "}),e.add('Features',{label:'Features',category:'Bootstrap Component',media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z\"/></svg>",content:{type:'B-FEATURES'}}),e.add('Hero',{label:'Hero',category:'Bootstrap Component',media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z\"/></svg>",content:{type:'B-HERO'}}),e.add('Button',{label:'Button',category:'Bootstrap Component',content:{type:'B-BUTTON'},media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/></svg>"}),e.add('Carousel',{label:'Carousel',category:'Bootstrap Animation',media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d=\"M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z\"/></svg>",content:{type:'B-CAROUSEL'}})}(t),t.I18n&&t.I18n.addMessages({en:a,...e.i18n})};return e})()));
//# sourceMappingURL=index.js.map