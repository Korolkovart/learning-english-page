(this["webpackJsonptesting-page"]=this["webpackJsonptesting-page"]||[]).push([[0],{26:function(e,t,c){e.exports={wrap:"Header_wrap__3iHwd",img:"Header_img__3vqP8",over:"Header_over__3Urjz",text:"Header_text__11AE4"}},38:function(e,t,c){},39:function(e,t,c){},4:function(e,t,c){e.exports={wrapper:"Form1_wrapper__2GNHx",info:"Form1_info__2ZFqU",info__text:"Form1_info__text__189Gk",list:"Form1_list__DLdgI",link:"Form1_link__3wQAT",button:"Form1_button__3hgw2"}},46:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(15),r=c.n(a),i=(c(38),c(5)),o=(c(39),c.p+"static/media/vegan.f33e5a7d.jpeg"),l=c(26),j=c.n(l),d=c(1),u=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:j.a.wrap,children:[Object(d.jsx)("img",{className:j.a.img,src:o,alt:"Vegetarian picture"}),Object(d.jsx)("span",{className:j.a.text,children:"Testing page"})]})})},h=c.p+"static/media/vegan_story.efe025a0.mp3",b=(c(18),c(23),c(8)),O=c.n(b),p=function(e){var t=e.duration,s=e.curTime,n=e.onTimeUpdate,a=c(18);c(23);var r=s/t*100;function i(e){return a.duration(e,"seconds").format("mm:ss",{trim:!1})}function o(e){var c=e.pageX,s=document.getElementById("progress-js"),n=s.getBoundingClientRect().left+window.scrollX,a=s.offsetWidth;return t/a*(c-n)}return Object(d.jsxs)("div",{className:O.a.progress,children:[Object(d.jsx)("span",{className:O.a.progress__time,children:i(s)}),Object(d.jsx)("div",{id:"progress-js",className:O.a.progress__line,style:{background:"linear-gradient(to right, black ".concat(r,"%, grey 0)")},onMouseDown:function(e){return function(e){n(o(e));var t=function(e){n(o(e))};document.addEventListener("mousemove",t),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",t)}))}(e)},children:Object(d.jsx)("span",{className:O.a.progress__knob,style:{left:"".concat(r-2,"%")}})}),Object(d.jsx)("span",{className:O.a.progress__time,children:i(t)})]})},m=function(){c(18);c(23);var e=Object(s.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(),o=Object(i.a)(r,2),l=o[0],j=o[1],u=Object(s.useState)(),b=Object(i.a)(u,2),m=b[0],x=b[1],A=Object(s.useState)(!1),f=Object(i.a)(A,2),_=f[0],g=f[1];return Object(s.useEffect)((function(){var e=document.getElementById("audio"),t=function(){a(e.duration),j(e.currentTime)},c=function(){return j(e.currentTime)};return e.addEventListener("loadeddata",t),e.addEventListener("timeupdate",c),m&&m!==l&&(e.currentTime=m,x(null)),function(){e.removeEventListener("loadeddata",t),e.removeEventListener("timeupdate",c)}})),Object(d.jsx)("div",{className:O.a.wrapper,children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:O.a.text,children:"Play the audio - Listening"}),Object(d.jsxs)("div",{className:O.a.playerWrapper,children:[Object(d.jsxs)("audio",{id:"audio",className:O.a.player,children:[Object(d.jsx)("source",{src:h,type:"audio/mpeg"}),"Your browser does not support the ",Object(d.jsx)("code",{children:"audio"})," element."]}),Object(d.jsx)("button",{className:O.a.btn,onClick:function(){g(!_),_?_&&document.getElementById("audio").pause():document.getElementById("audio").play()},children:_?Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAE0QAABNEBWGKhvwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABWSURBVDiN7ZOxCQAgEAMPt7BwGt3K3WwcwgEc5G0UXq2+szAQCIFcF0SEZSABDSiAV72fXQPitjkAFZDprPqs+qo3jl3BmC+AWR/wAW8CujFfbzTfeQDzYFoRgV+JlQAAAABJRU5ErkJggg==",className:O.a.pauseBtn,alt:"Button: Pause"}):Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAvQAAAL0BHVrG+gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACHSURBVDiNvdOhDcIAEIXhLyAwCEQN1SR4GIBtugKMwAokbMEYrcWiUCQQRBWmGM4Sek14yS/vF+/uxihxwRI1Wj2zRvehxR7TrCC4osIoKwgabIYIghMWQwQdXjigyAqCO7aYZAXBGbOfWv6WjOCBHVZ48qcS02tMH1L6lFPPVOKGI+Z9BuEN9ylqQ6EL+1EAAAAASUVORK5CYII=",className:O.a.playBtn,alt:"Button: Play"})}),Object(d.jsx)(p,{curTime:l,duration:n,onTimeUpdate:function(e){return x(e)}})]})]})})},x=c(62),A=c(65),f=Object(x.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"},input:{color:"red"}}}})),_="black",g="green",k="red",w=function(e){var t=e.prop,c=e.check,n=e.show,a=e.clear,r=e.setCheck,o=f(),l=Object(s.useState)(""),j=Object(i.a)(l,2),u=j[0],h=j[1],b=Object(s.useState)(_),O=Object(i.a)(b,2),p=O[0],m=O[1],x=Object(s.useState)(t),w=Object(i.a)(x,1)[0];return Object(s.useEffect)((function(){switch(c){case!1:m(_);break;case!0===c&&w===u.toLowerCase():m(g);break;case!0===c&&w!==u.toLowerCase():m(k)}}),[c]),Object(s.useEffect)((function(){!0===a&&(h(""),r(!1))}),[a]),Object(s.useEffect)((function(){!0===n&&(h(t),r(!0))}),[n]),Object(d.jsx)("form",{className:o.root,noValidate:!0,autoComplete:"off",children:Object(d.jsx)(A.a,{style:{color:p},id:"standard-basic",onChange:function(e){return h(e.target.value)},value:u})})},N=c(64),v=c(4),E=c.n(v),C=Object(x.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),y=function(){var e=C(),t="yes",c="15 years ago",n="security guard",a="journalism",r="2 weeks",o="yes",l="mohandas gandhi",j="diet for a new america",u=Object(s.useState)(),h=Object(i.a)(u,2),b=h[0],O=h[1],p=Object(s.useState)(!1),m=Object(i.a)(p,2),x=m[0],A=m[1],f=Object(s.useState)(!1),_=Object(i.a)(f,2),g=_[0],k=_[1];return Object(s.useEffect)((function(){O()}),[b]),Object(s.useEffect)((function(){A()}),[x]),Object(s.useEffect)((function(){k()}),[g]),Object(d.jsxs)("div",{className:E.a.wrapper,children:[Object(d.jsx)("h2",{children:"Question 1 \u2013 4"}),Object(d.jsx)("div",{className:E.a.info,children:Object(d.jsxs)("p",{className:E.a.info__text,children:["Play \u25ba and Listen the audio, complete the notes below by"," ",Object(d.jsx)("strong",{children:"filling the gaps."})," Write"," ",Object(d.jsx)("strong",{children:"no more than four words and/or a number"})," for each answer."]})}),Object(d.jsxs)("ul",{className:E.a.list,children:[Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"Spontaneous english podcast about vegetarianism"})}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"The author tells his story"})}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"Did the author eat meet before?"})}),Object(d.jsxs)("li",{className:E.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:t,check:b,setCheck:O,clear:x,show:g})]}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"When did the author become a vegetarian?"})}),Object(d.jsxs)("li",{className:E.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:c,check:b,setCheck:O,clear:x,show:g})]}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"First job"})}),Object(d.jsxs)("li",{className:E.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:n,check:b,setCheck:O,clear:x,show:g})]}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"First education"})}),Object(d.jsxs)("li",{className:E.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:a,check:b,setCheck:O,clear:x,show:g})]}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"How long did the author work on cheaken plant?"})}),Object(d.jsxs)("li",{className:E.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:r,check:b,setCheck:O,clear:x,show:g})]}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"Did the author lead healthy lifestyle?"})}),Object(d.jsxs)("li",{className:E.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:o,check:b,setCheck:O,clear:x,show:g})]}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"Whose biography did the author read?"})}),Object(d.jsxs)("li",{className:E.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:l,check:b,setCheck:O,clear:x,show:g})]}),Object(d.jsx)("li",{className:E.a.link,children:Object(d.jsx)("p",{children:"What is recommended to read?"})}),Object(d.jsxs)("li",{className:E.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:j,check:b,setCheck:O,clear:x,show:g})]})]}),Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(){return O(!0)},children:"Check"}),Object(d.jsx)(N.a,{onClick:function(){return k(!0)},children:"Show"}),Object(d.jsx)(N.a,{onClick:function(){return A(!0)},children:"Clear"})]})]})},B=c(9),S=c.n(B),F=Object(x.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),I=function(){var e=F(),t="yes",c="15 years ago",n="security guard",a=Object(s.useState)(),r=Object(i.a)(a,2),o=r[0],l=r[1],j=Object(s.useState)(!1),u=Object(i.a)(j,2),h=u[0],b=u[1],O=Object(s.useState)(!1),p=Object(i.a)(O,2),m=p[0],x=p[1];return Object(s.useEffect)((function(){l()}),[o]),Object(s.useEffect)((function(){b()}),[h]),Object(s.useEffect)((function(){x()}),[m]),Object(d.jsxs)("div",{className:S.a.wrapper,children:[Object(d.jsx)("h2",{children:"Question 1 \u2013 3"}),Object(d.jsx)("div",{className:S.a.info,children:Object(d.jsxs)("p",{className:S.a.info__text,children:["Play \u25ba and Listen the audio, complete the notes below by"," ",Object(d.jsx)("strong",{children:"filling the gaps."})," Write"," ",Object(d.jsx)("strong",{children:"no more than three words and/or a number"})," for each answer."]})}),Object(d.jsxs)("ul",{className:S.a.list,children:[Object(d.jsx)("li",{className:S.a.link,children:Object(d.jsx)("p",{children:"Spontaneous english podcast about vegetarianism"})}),Object(d.jsx)("li",{className:S.a.link,children:Object(d.jsx)("p",{children:"The author tells his story"})}),Object(d.jsx)("li",{className:S.a.link,children:Object(d.jsx)("p",{children:"Did the author eat meet before?"})}),Object(d.jsxs)("li",{className:S.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:t,check:o,setCheck:l,clear:h,show:m})]}),Object(d.jsx)("li",{className:S.a.link,children:Object(d.jsx)("p",{children:"When did the author become a vegetarian?"})}),Object(d.jsxs)("li",{className:S.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:c,check:o,setCheck:l,clear:h,show:m})]}),Object(d.jsx)("li",{className:S.a.link,children:Object(d.jsx)("p",{children:"First job"})}),Object(d.jsxs)("li",{className:S.a.link,children:[Object(d.jsx)("span",{children:"Enter Your answer :"}),Object(d.jsx)(w,{prop:n,check:o,setCheck:l,clear:h,show:m})]})]}),Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(){return l(!0)},children:"Check"}),Object(d.jsx)(N.a,{onClick:function(){return x(!0)},children:"Show"}),Object(d.jsx)(N.a,{onClick:function(){return b(!0)},children:"Clear"})]})]})};var Q=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(u,{}),Object(d.jsx)(m,{className:"audio"}),Object(d.jsxs)("div",{className:"partBtn",children:[Object(d.jsx)("button",{className:"btn",onClick:function(){return n(!0)},children:"Part One"}),Object(d.jsx)("button",{className:"btn",onClick:function(){return n(!1)},children:"Part Two"})]}),c?Object(d.jsx)(y,{}):Object(d.jsx)(I,{})]})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root"))},8:function(e,t,c){e.exports={wrapper:"Audio_wrapper__3z9oU",text:"Audio_text__1uvkE",playerWrapper:"Audio_playerWrapper__MQUfm",btn:"Audio_btn__3geOB",playBtn:"Audio_playBtn__3vxxN",progress:"Audio_progress__1cWXm",progress__time:"Audio_progress__time__S1YK2",progress__line:"Audio_progress__line__aACQ5",progress__knob:"Audio_progress__knob__1ih-n"}},9:function(e,t,c){e.exports={wrapper:"Form2_wrapper__1f_SA",info:"Form2_info__Sq-Ib",info__text:"Form2_info__text__2bASE",list:"Form2_list__16toS",link:"Form2_link__1mfGK",button:"Form2_button__3x4Mb"}}},[[46,1,2]]]);
//# sourceMappingURL=main.0e79ea35.chunk.js.map