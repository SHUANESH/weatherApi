(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{17:function(t,n,e){},18:function(t,n,e){},22:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e.n(c),i=e(9),a=e.n(i),o=(e(17),e(18),e(2)),s=e(3),u=e(4);function j(t){try{return fetch("".concat("https://api.openweathermap.org/data/2.5/weather?q=").concat(t,"&appid=").concat("796fafa4542a6bdd644408d83eda546e")).then((function(t){return t.json()})).then((function(t){return t}))}catch(n){return n}}var d,h,p,f,l=e(1),b=u.a.div(d||(d=Object(s.a)(["\nbackground-color: #b6fffa;\ndisplay: flex;\njustify-content: center;\nwidth: 100vw;\nheight:100vh;\n"]))),x=u.a.div(h||(h=Object(s.a)(["\n\nwidth: 50vw;\njustify-content: center;\nalign-items: center;\ndisplay: flex;\nflex-direction: column;\nborder-radius:5px;\n"]))),O=u.a.input(p||(p=Object(s.a)(["\nwidth: 20vw;\nborder: solid 0px;\nmargin-top:30px;\nmargin-bottom: 30px;\nfont-size: 20px;\nbox-shadow: 2px 1px 15px 4px #ffffff;\n"])));function v(){var t=Object(c.useState)(),n=Object(o.a)(t,2),e=n[0],r=n[1],i=Object(c.useState)(),a=Object(o.a)(i,2),d=a[0],h=a[1],p=Object(c.useState)(),v=Object(o.a)(p,2),g=(v[0],v[1]),w=Object(c.useState)([]),m=Object(o.a)(w,2),y=m[0],C=m[1],S=Object(c.useState)(),k=Object(o.a)(S,2),F=k[0],E=(k[1],Object(c.useState)(!1)),L=Object(o.a)(E,2),T=L[0],J=L[1],z=function(t){var n=t.target.innerText;J(n),C([]),j(n).then((function(t){return r(t)})),console.log(e)};Object(c.useEffect)((function(){(function(){try{return fetch("JsonCity.json").then((function(t){return t.json()})).then((function(t){return t}))}catch(t){console.log(t)}})().then((function(t){return g(t)}));(function(){try{return fetch("https://countriesnow.space/api/v0.1/countries/population/cities").then((function(t){return t.json()})).then((function(t){return t}))}catch(t){console.log(t)}})().then((function(t){return h(t.data)}))}),[]);var B=u.a.div(f||(f=Object(s.a)(["\ncursor: pointer;\nfont-size: 20px;\nbackground-color: yellow;\nmargin-top: 20px;\npadding: 5px;\n"])));return Object(l.jsx)(b,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"City search"}),Object(l.jsxs)(x,{children:[Object(l.jsx)("label",{htmlFor:"",children:"Enter a city name"}),Object(l.jsx)(O,{type:"text",name:"city",value:F,onChange:function(t){var n=t.target.value,e=d.filter((function(t){var e=new RegExp("^".concat(n.toLowerCase()));if(n.length>0)return t.city.toLowerCase().match(e)}));C(e)}}),null===y||void 0===y?void 0:y.map((function(t,n){return Object(l.jsx)(B,{children:Object(l.jsx)("span",{onClick:z,children:t.city})},n)})),Object(l.jsxs)("span",{children:["Selected city: ",T]}),Object(l.jsxs)("span",{children:["Temp: ",null===e||void 0===e?void 0:e.main.temp]}),Object(l.jsx)("span",{children:null===e||void 0===e?void 0:e.weather[0].description})]})]})})}var g=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(v,{})})},w=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,23)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;e(t),c(t),r(t),i(t),a(t)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),w()}},[[22,1,2]]]);
//# sourceMappingURL=main.cb433841.chunk.js.map