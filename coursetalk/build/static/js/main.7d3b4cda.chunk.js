(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),i=n(2),s=n(3),u=n(5),l=n(4),h=n(6),d=n(1),m=(r.Component,n(7)),f=n.n(m),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={currentUser:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;new f.a.ChatManager({instanceLocator:"v1:us1:3b31d86f-e2f8-4671-92e2-3a0e2d460298",userId:this.props.currentUsername,tokenProvider:new f.a.TokenProvider({url:"http://localhost:3001/authenticate"})}).connect().then(function(t){e.setState({currentUser:t})}).catch(function(e){return console.error("error",e)})}},{key:"render",value:function(){var e={container:{height:"100vh",display:"flex",flexDirection:"column"},chatContainer:{display:"flex",flex:1},whosOnlineListContainer:{width:"300px",flex:"none",padding:20,backgroundColor:"#2c303b",color:"white"},chatListContainer:{padding:20,width:"85%",display:"flex",flexDirection:"column"}};return a.a.createElement("div",{style:e.container},a.a.createElement("div",{style:e.chatContainer},a.a.createElement("aside",{style:e.whosOnlineListContainer},a.a.createElement("h2",null,"Who's online PLACEHOLDER")),a.a.createElement("section",{style:e.chatListContainer},a.a.createElement("h2",null,"Chat PLACEHOLDER"))))}}]),t}(r.Component),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={currentUsername:"",currentScreen:"WhatIsYourUsernameScreen"},e.onUsernameSubmitted=e.onUsernameSubmitted.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onUsernameSubmitted",value:function(e){var t=this;fetch("http://localhost:3001/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e})}).then(function(n){t.setState({currentUsername:e,currentScreen:"ChatScreen"})}).catch(function(e){return console.error("error",e)})}},{key:"render",value:function(){return a.a.createElement(p,{currentUsername:this.state.currentUsername})}}]),t}(r.Component);n(16);o.a.render(a.a.createElement(b,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.7d3b4cda.chunk.js.map