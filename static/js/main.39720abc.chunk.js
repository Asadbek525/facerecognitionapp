(this.webpackJsonpfacerecognitionapp=this.webpackJsonpfacerecognitionapp||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n(10),c=n(49),a=n.n(c),l=(n(106),n(95)),r=n(96),b=n(100),o=n(99),m=(n(107),function(e){var t=e.route,n=(e.signInClick,e.signOutClick),s=e.registerClick;return"signin"===t?Object(i.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(i.jsx)("p",{onClick:s,className:"dim link pointer white pa3 f4",children:"Register"})}):"home"===t?Object(i.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(i.jsx)("p",{onClick:n,className:"dim link pointer white pa3 f4",children:"Sign Out"})}):Object(i.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(i.jsx)("p",{onClick:n,className:"dim link pointer white pa3 f4",children:"Sign In"})})}),d=(n(108),function(e){var t=e.Link,n=e.box;return Object(i.jsx)("div",{className:"center ma",children:Object(i.jsxs)("div",{id:"div_img",className:"relative mt3",children:[Object(i.jsx)("img",{alt:"",id:"face_img",width:"500px",height:"auto",src:t}),Object(i.jsx)("div",{className:"bounding_box absolute ma2",style:{top:n.from_top,right:n.from_right,left:n.from_left,bottom:n.from_bottom}})]})})}),h=n(97),j=n.n(h),u=n.p+"static/media/brain.593c41bf.png",p=(n(109),function(){return Object(i.jsx)("div",{className:"ml5",children:Object(i.jsx)(j.a,{className:"Tilt shadow-5 pa4 br2",options:{max:55},style:{height:120,width:120},children:Object(i.jsxs)("div",{className:"Tilt-inner",children:[" ",Object(i.jsx)("img",{src:u,alt:"logo"})," "]})})})}),g=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"white f3",children:"Asadbek, your current rank is ..."}),Object(i.jsx)("div",{className:"white f1",children:"#5"})]})},f=function(e){var t=e.OnInputChange,n=e.OnClick;return Object(i.jsx)("div",{className:"pa4-l",children:Object(i.jsx)("div",{className:"mw7 bg-black-50 center pa4 br2-ns ba b--black-10",children:Object(i.jsx)("div",{className:"cf bn ma0 pa0",children:Object(i.jsxs)("div",{className:"cf",children:[Object(i.jsx)("label",{className:"clip",htmlFor:"email-address",children:"Email Address"}),Object(i.jsx)("input",{onChange:t,className:"f6 f5-l outline-0 input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns",placeholder:"Enter your image url",type:"text",id:"url"}),Object(i.jsx)("button",{onClick:n,className:"f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns",children:"Detect"})]})})})})},O=n(98),x=n.n(O),k=n(50),v=n.n(k),w=function(e){var t=e.signInClick;return Object(i.jsx)("div",{className:"shadow-5 narrow ba b--black-10 pa4 dib",children:Object(i.jsxs)("form",{className:"db center ph4",children:[Object(i.jsx)("legend",{className:"f1 center fw6 ph0 mh0",children:"Sign In"}),Object(i.jsxs)("div",{className:"mv3",children:[Object(i.jsx)("label",{className:"db center pa2 f3",htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{className:"db center w5 hover-bg-black hover-white outline-0 pa2",name:"email",type:"email"})]}),Object(i.jsxs)("div",{className:"mv3",children:[Object(i.jsx)("label",{className:"db center pa2 f3",htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{className:"db center w5 pa2 hover-bg-black hover-white outline-0",name:"password",type:"password"})]}),Object(i.jsx)("input",{onClick:t,className:"db center pointer pa2 mv4 bg-transparent br3 ba bw1 b--black black hover-white hover-bg-black grow outline-0",type:"submit",value:"Sign in"})]})})},N=function(e){var t=e.signInClick;e.signOutClick;return Object(i.jsx)("div",{className:"shadow-5 ba b--black-10 pa3 dib",children:Object(i.jsxs)("form",{className:"db center ph5",children:[Object(i.jsx)("legend",{className:"f2 center fw6 pt3 mh0",children:"Register"}),Object(i.jsxs)("div",{className:"mv2",children:[Object(i.jsx)("label",{className:"db center pa2 f3",htmlFor:"name",children:"Name"}),Object(i.jsx)("input",{className:"db center w5 hover-bg-black hover-white outline-0 pa2",name:"name",type:"text"})]}),Object(i.jsxs)("div",{className:"mv2",children:[Object(i.jsx)("label",{className:"db center pa2 f3",htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{className:"db center w5 hover-bg-black hover-white outline-0 pa2",name:"email",type:"email"})]}),Object(i.jsxs)("div",{className:"mv2",children:[Object(i.jsx)("label",{className:"db center pa2 f3",htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{className:"db center w5 pa2 hover-bg-black hover-white outline-0",name:"password",type:"password"})]}),Object(i.jsx)("input",{onClick:t,className:"db center pointer pa2 mt2 bg-transparent br3 ba bw1 b--black black hover-white hover-bg-black grow outline-0",type:"submit",value:"Sign Up"})]})})},C=new v.a.App({apiKey:"20c74c40ee924c9ea8c1658f7782a796"}),y=function(e){Object(b.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).bounding_box=function(e){return e.rawData.outputs[0].data.regions[0].region_info.bounding_box},e.calculate=function(e){var t=document.getElementById("face_img"),n=document.getElementById("div_img").offsetWidth,i=t.height,s=t.width;return{from_top:Number(e.top_row)*i,from_right:(n-s)/2+Number(1-e.right_col)*s,from_bottom:Number(1-e.bottom_row)*i,from_left:(n-s)/2+Number(e.left_col)*s}},e.OnInputChange=function(t){e.setState({link:t.target.value})},e.OnClick=function(){e.setState({imgLink:e.state.link}),C.models.predict(v.a.FACE_EMBED_MODEL,e.state.link).then((function(t){var n=e.calculate(e.bounding_box(t));e.setState({box:n})}),(function(e){console.log(e)}))},e.signInClick=function(){e.setState({route:"home"})},e.signOutClick=function(){e.setState({route:"signin"})},e.registerClick=function(){e.setState({route:"signup"})},e.state={imgLink:"",link:"",box:{},route:"signin"},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(x.a,{className:"particles",params:{particles:{number:{value:150},size:{value:3}}}}),Object(i.jsx)(m,{signOutClick:this.signOutClick,registerClick:this.registerClick,signInClick:this.signInClick,route:this.state.route}),"signin"===this.state.route?Object(i.jsx)(w,{registerClick:this.registerClick,signInClick:this.signInClick}):"signup"===this.state.route?Object(i.jsx)(N,{signInClick:this.signInClick,signOutClick:this.signOutClick}):Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{}),Object(i.jsx)(g,{}),Object(i.jsx)(f,{OnInputChange:this.OnInputChange,OnClick:this.OnClick}),Object(i.jsx)(d,{box:this.state.box,Link:this.state.imgLink.toString()})]})]})}}]),n}(s.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,380)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};n(378);a.a.render(Object(i.jsx)(y,{}),document.getElementById("root")),_()}},[[379,1,2]]]);
//# sourceMappingURL=main.39720abc.chunk.js.map