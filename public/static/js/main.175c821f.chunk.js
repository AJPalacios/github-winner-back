(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(211)},114:function(e,t,a){},116:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),l=a.n(s),o=(a(114),a(23)),c=a(24),u=a(26),i=a(25),m=a(27),h=(a(116),a(223)),g=a(217),p=a(218),w=a(212),E=a(222),O=a(41),f=a.n(O),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,userOne:"",userTwo:""},a.handleChangeOne=function(e){e.target.name;var t=e.target.value;a.setState({userOne:t})},a.handleChangeTwo=function(e){e.target.name;var t=e.target.value;a.setState({userTwo:t})},a.getUser=function(e){var t="https://api.github.com/users/".concat(a.state.userOne,"/repos"),n="https://api.github.com/users/".concat(a.state.userTwo,"/repos");e.preventDefault(),a.setState({loading:!0}),f.a.all([f.a.get(t),f.a.get(n)]).then(f.a.spread(function(e,t){a.setState({loading:!1}),localStorage.setItem("GithubUserOne",a.state.userOne),localStorage.setItem("GithubUserTwo",a.state.userTwo),localStorage.setItem("userOne",JSON.stringify(e.data)),localStorage.setItem("userTwo",JSON.stringify(t.data)),a.props.history.push("/stats")}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Github Winner!"),r.a.createElement("h2",null,"Ingresa dos usernames"),r.a.createElement("form",{onSubmit:this.getUser},r.a.createElement(p.a,{name:"usernameOne",type:"text",placeholder:"username one",onChange:this.handleChangeOne}),r.a.createElement(p.a,{name:"usernameTwo",type:"text",placeholder:"username two",onChange:this.handleChangeTwo}),r.a.createElement(w.a,{type:"primary",htmlType:"submit"},"GO!")))}}]),t}(n.Component),d=Object(E.a)(b),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null)))}}]),t}(n.Component),y=a(210),S=a(219),k=a(220),T=a(213),j=a(214),N=a(216),I=a(215),_=y.a.TabPane,x=S.a.Meta,C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={usernameOne:"",usernameTwo:"",userOneData:[],userTwoData:[],starsOne:0,starsTwo:0,winner:0,winnerUser:""},a.getWinner=function(e){console.log("clickkkkk!!");var t=JSON.parse(localStorage.getItem("userOne")),n=JSON.parse(localStorage.getItem("userTwo")),r=localStorage.getItem("GithubUserOne"),s=localStorage.getItem("GithubUserTwo"),l=[],o=[];t.forEach(function(e){l.push(e.stargazers_count)}),n.forEach(function(e){o.push(e.stargazers_count)}),console.log(o);var c=Math.max.apply(null,l),u=Math.max.apply(null,o);a.setState({starsOne:c,starsTwo:u}),c>u&&a.setState({winner:c,winnerUser:r}),u>c&&a.setState({winner:u,winnerUser:s})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("userOne")),t=JSON.parse(localStorage.getItem("userTwo")),a=localStorage.getItem("GithubUserOne"),n=localStorage.getItem("GithubUserTwo");console.log(a),this.setState({usernameOne:a,usernameTwo:n,userOneData:e,userTwoData:t}),this.getWinner()}},{key:"render",value:function(){var e=this,t=r.a.createElement(w.a,{type:"primary",onClick:function(){k.a.success("The winner is ".concat(e.state.winnerUser," have ").concat(e.state.winner," stars"))}},"Get the Winner!");return r.a.createElement("div",null,r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("h3",{className:"title is-1"},"Stats"),r.a.createElement(I.a,{className:"subtitle is-2 navbar-item Width",to:"/"},"Back")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"notification"},r.a.createElement(y.a,{tabBarExtraContent:t},r.a.createElement(_,{tab:this.state.usernameOne,key:"1"},r.a.createElement(T.a,{gutter:18},this.state.userOneData.sort(function(e,t){return t.stargazers_count-e.stargazers_count}).map(function(e,t){return r.a.createElement(j.a,{key:t,className:"gutter-row",span:6},r.a.createElement("div",{className:"gutter-box"},r.a.createElement(S.a,{className:"Margin",key:t,title:e.owner.login,extra:r.a.createElement("p",null,"Stars ",e.stargazers_count),style:{width:300}},r.a.createElement(x,{avatar:r.a.createElement("a",{href:e.owner.html_url},r.a.createElement(N.a,{src:e.owner.avatar_url})),title:r.a.createElement("a",{href:e.html_url,target:"blank"},e.name),description:null!=e.language?e.language:"Sin lenguaje"}))))}))),r.a.createElement(_,{tab:this.state.usernameTwo,key:"2"},r.a.createElement(T.a,{gutter:18},this.state.userTwoData.sort(function(e,t){return t.stargazers_count-e.stargazers_count}).map(function(e,t){return r.a.createElement(j.a,{key:t,className:"gutter-row",span:6},r.a.createElement("div",{className:"gutter-box"},r.a.createElement(S.a,{className:"Margin",key:t,title:e.owner.login,extra:r.a.createElement("p",null,"Stars ",e.stargazers_count),style:{width:300}},r.a.createElement(x,{avatar:r.a.createElement("a",{href:e.owner.html_url},r.a.createElement(N.a,{src:e.owner.avatar_url})),title:r.a.createElement("a",{href:e.html_url,target:"blank"},e.name),description:e.language}))))})))))))}}]),t}(n.Component),U=function(){return r.a.createElement(h.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:v}),r.a.createElement(g.a,{path:"/stats",component:C}))},G=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(U,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(221);a(206),a(208);l.a.render(r.a.createElement(function(){return r.a.createElement(z.a,null,r.a.createElement(G,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,2,1]]]);
//# sourceMappingURL=main.175c821f.chunk.js.map