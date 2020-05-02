(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/profilePicture.14597274.jpg"},19:function(e,a,t){e.exports=t.p+"static/media/Resume.9309b3a7.pdf"},20:function(e,a,t){e.exports=t(39)},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),o=t.n(l),c=(t(25),t(7)),m=t(5);t(26);var i=function(){var e=Object(m.f)();return r.a.createElement("nav",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 topNav shadow-sm"},r.a.createElement("div",{className:"my-0 mr-md-auto name"},r.a.createElement("div",{className:"innerCutout"},r.a.createElement("p",{className:"nameP"}," Benjamin Malkmus "))),r.a.createElement("div",{className:"my-2 my-md-0 mr-md-3 navbar-expand",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/react-portfolio/about",className:"/about"===e.pathname?"nav-link active header-link":"nav-link header-link"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/react-portfolio/portfolio",className:"/portfolio"===e.pathname?"nav-link active header-link":"nav-link header-link"},"Portfolio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/react-portfolio/contact",className:"/contact"===e.pathname?"nav-link active header-link":"nav-link header-link"},"Contact")))))},s=(t(32),t(18)),u=t.n(s);var p=function(){return r.a.createElement("div",{className:"container contextMe"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"About Me"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12 img-contain"},r.a.createElement("img",{src:u.a,className:"d-block m-auto profilePic",alt:"profile"})),r.a.createElement("div",{className:"col-md-9 col-sm-12"},r.a.createElement("p",null,"My name is Benjamin Malkmus and I am an aspiring web developer. I\u2019m based out of Bellevue, WA and have lived in the surrounding Seattle area for three years now. I have spent the last 15 years in the hospitality industry. It has given me hands on experience on working with clients to make sure that my services are completed 100% to the client\u2019s expectations."),r.a.createElement("p",null,"My friends would describe me as someone who always tries to find the positives of every problem given in life. They would also describe me as someone who doesn\u2019t stress out when under pressure and still knows how to find time to have fun with every situation. When not working, you can find me outside by a body of water or watching some type of sport live or on television."))))};t(33);var d=function(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useRef)();return r.a.createElement("div",{className:"container contextCont"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{id:"contTitle"},"Contact"))),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group",id:"subjectName"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"formname",ref:e,placeholder:"Joe Dirt"})),r.a.createElement("div",{className:"form-group",id:"subjectAdd"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"formemail",ref:t,placeholder:"joedirte@hemi.com"})),r.a.createElement("div",{className:"form-group",id:"mailBody"},r.a.createElement("label",null,"Message"),r.a.createElement("textarea",{className:"form-control",id:"formmessage",ref:a,rows:"6"}))),r.a.createElement("button",{className:"btn btn-primary contact-button",id:"submitMail",type:"submit",onClick:function(n){n.preventDefault();var r=e.current.value+"  "+t.current.value,l=a.current.value;window.location.href="mailto:benjamin.malkmus@outlook.com?subject="+r+"&body="+l,e.current.value="",a.current.value="",t.current.value=""}},"Submit"))},f=t(9);t(34);var h=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};t(35);var v=function(e){var a=e.name,t=e.deployed,n=e.repo,l=e.imagePath,o=e.btnClick;return r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"card-contain"},r.a.createElement("div",{onClick:o,"data-value":"back",className:"BTN"},r.a.createElement("p",{"data-value":"back"}," << ")),r.a.createElement("div",{className:"projectContent"},r.a.createElement("img",{className:"screenshot",src:l,alt:a}),r.a.createElement("p",{className:"links"},"Deployed:",r.a.createElement("a",{className:"links",target:"_blank",rel:"noopener noreferrer",href:t},t)),r.a.createElement("p",{className:"links"},"Github:",r.a.createElement("a",{className:"links",target:"_blank",rel:"noopener noreferrer",href:n},n))),r.a.createElement("div",{onClick:o,"data-value":"forward",className:"BTN"},r.a.createElement("p",{"data-value":"forward"}," >> "))))},b={projects:[{name:"Bootleg Cooking",deployed:"https://arcane-escarpment-28279.herokuapp.com/",repo:"https://github.com/rnyang-16/Project_2",imgPath:"".concat("/react-portfolio","/images/main.png")},{name:"Park & Dinner",deployed:"https://github.com/bmalkmus/getOutsideApp",repo:"https://bmalkmus.github.io/getOutsideApp/",imgPath:"".concat("/react-portfolio","/images/ParkApp.png")},{name:"Workday Planner",deployed:"https://bmalkmus.github.io/dailyPlanner/",repo:"https://github.com/bmalkmus/dailyPlanner",imgPath:"".concat("/react-portfolio","/images/WorkdayPlan.png")},{name:"Weather App",deployed:"https://bmalkmus.github.io/WeatherApp/",repo:"https://github.com/bmalkmus/WeatherApp",imgPath:"".concat("/react-portfolio","/images/WeatherApp.png")},{name:"Eat Da Burger",deployed:"https://burger23eater.herokuapp.com/",repo:"https://github.com/bmalkmus/burger",imgPath:"".concat("/react-portfolio","/images/Burger_App.png")},{name:"Coding Quiz",deployed:"https://bmalkmus.github.io/codingQuiz/",repo:"https://github.com/bmalkmus/codingQuiz",imgPath:"".concat("/react-portfolio","/images/Quiz.png")}]};var E=function(){var e=Object(n.useState)({}),a=Object(f.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)([]),c=Object(f.a)(o,2),m=c[0],i=c[1],s=Object(n.useState)(0),u=Object(f.a)(s,2),p=u[0],d=u[1];return Object(n.useEffect)((function(){!function(){var e={projects:b};console.log(e.projects.projects),e=e.projects.projects,i(e),l(e[0])}()}),[]),r.a.createElement("div",{className:"context"},r.a.createElement("h1",{className:"text-center portTitle"}," Portfolio"),r.a.createElement(h,null,r.a.createElement(v,{name:t.name,repo:t.repo,deployed:t.deployed,imagePath:t.imgPath,btnClick:function(e){"forward"===e.target.dataset.value?function(e){e>=m.length&&(e=0),l(m[e]),d(e)}(p+1):function(e){e<0&&(e=m.length-1),l(m[e]),d(e)}(p-1)}})))};t(36);var g=function(e){return r.a.createElement("div",{className:"context-wrapper"},e.children)},k=(t(37),t(19)),N=t.n(k);var y=function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"footer23"},r.a.createElement("a",{className:"Github",href:"https://github.com/bmalkmus",target:"_blank",rel:"noreferrer noopener"},"GitHub"),r.a.createElement("a",{className:"LinkedIn",href:"https://linkedin.com/in/bmalkmus23",target:"_blank",rel:"noreferrer noopener"},"LinkedIn"),r.a.createElement("a",{className:"resume",href:N.a,target:"_blank",rel:"noreferrer noopener"},"Resume")),r.a.createElement("p",{className:"footer23"},"\xa9 Copyright 2019 "))};t(38);var w=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};var j=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(w,null,r.a.createElement(i,null),r.a.createElement(g,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:["/","/react-portfolio/","/react-portfolio/about"]},r.a.createElement(p,null)),r.a.createElement(m.a,{exact:!0,path:"/react-portfolio/portfolio"},r.a.createElement(E,null)),r.a.createElement(m.a,{exact:!0,path:"/react-portfolio/contact"},r.a.createElement(d,null)),r.a.createElement(m.a,null,r.a.createElement(p,null)))),r.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.b76f858f.chunk.js.map