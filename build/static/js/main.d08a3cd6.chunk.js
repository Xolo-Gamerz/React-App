(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),o=t.n(r),c=(t(9),t(1));t(10);function m(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("a",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",href:"/"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle mx-3",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",href:"/"},"Links"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},e.drop1)),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},e.drop2)),l.a.createElement("li",null,l.a.createElement("hr",{className:"dropdown-divider"})),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},e.drop3))))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",id:"mode"}))))))}function i(e){var a=Object(n.useState)(),t=Object(c.a)(a,2),r=t[0],o=t[1],m=Object(n.useState)(),i=Object(c.a)(m,2),d=i[0],s=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"colorProp"},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"form-control",className:"form-label"}),l.a.createElement("textarea",{onChange:function(e){o(e.target.value),s(e.target.value)},value:d,className:"form-control ",id:"box",rows:"8"}),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(){o(r.toUpperCase())}},"CONVERT TO UPPERCASE"),l.a.createElement("button",{className:"btn btn-primary my-3 mx-3",onClick:function(){o(r.toLowerCase())}},"CONVERT TO LOWERCASE"),l.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(){var e=["!","#","$","%","&"],a=Math.floor(Math.random()*e.length.toString(36)),t=e[a],n=Math.random().toString(36).substring(2,7)+Math.random().toString(36).substring(2,3).toUpperCase()+Math.floor(10*Math.random()).toString(8)+t;o(n)}},"PASSWORD GENERATOR"),l.a.createElement("button",{className:"btn btn-primary my-3 mx-3 ",onClick:function(){s("")}},"CLEAR PREVIEW AREA"),l.a.createElement("button",{className:"btn btn-primary my-3 ",onClick:function(){o("")}},"CLEAR TEXT AREA"))),l.a.createElement("div",null,l.a.createElement("div",{className:"my-3"},l.a.createElement("h2",{id:"previewColor"},"PREVIEW-OUTPUT")),l.a.createElement("div",{className:"form-floating my-3 border border-info"},l.a.createElement("textarea",{className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea",rows:"20",resize:"none",value:r,readOnly:!0}))))}var d=function(){var e=Object(n.useState)("light"),a=Object(c.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"REACT",drop1:"Node.js",drop2:"React.js",drop3:"Javascript",mode:t,toggleMode:function(){"light"===t?(r("dark"),document.body.style.backgroundColor="black",document.getElementById("colorProp").style.color="white",document.getElementById("previewColor").style.color="white",document.getElementById("mode").innerText="Disable Dark Mode"):(r("light"),document.body.style.backgroundColor="white",document.getElementById("colorProp").style.color="black",document.getElementById("previewColor").style.color="black",document.getElementById("mode").innerText="Enable Dark Mode")}}),l.a.createElement("div",{className:"container"},l.a.createElement(i,{heading:"ENTER TEXT BELOW"})),l.a.createElement("div",{className:"container my-3"}))},s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,o=a.getTTFB;t(e),n(e),l(e),r(e),o(e)}))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),s()}],[[4,1,2]]]);
//# sourceMappingURL=main.d08a3cd6.chunk.js.map