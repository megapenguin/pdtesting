(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){},319:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(0),r=n.n(a),i=n(19),s=n.n(i),o=(n(168),n(169),n(56)),l=n(328),j=n(326),u=n(68),b=n(46),d=n(324),h=n(323),O=n(69),f=n.n(O),m=n(325),x=n(327),p=n(54);var v=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],i=n[1],s=m.a.useForm(),j=Object(o.a)(s,1)[0],u=Object(a.useState)(!1),b=Object(o.a)(u,2),d=(b[0],b[1]),h=Object(a.useState)(!1),O=Object(o.a)(h,2),v=(O[0],O[1]),g=function(){i(!1)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(p.a,{type:"primary",onClick:function(){i(!0),console.log(e.info)},children:"Reserve"}),Object(c.jsx)(x.a,{title:"Reserve Slot",visible:r,onOk:function(){i(!1)},onCancel:g,footer:[Object(c.jsx)(p.a,{className:"modal-button",onClick:g,children:"Cancel"},"back"),Object(c.jsx)(p.a,{form:"myForm",className:"modal-button",htmlType:"submit",type:"primary",children:"Ok"})],children:Object(c.jsx)(m.a,{layout:"vertical",name:"basic",form:j,initialValues:{remember:!0},onFinish:function(t){d(!0),v(!1),f.a.post("/transactions/create_transaction",{providerId:e.info.id,userId:"3",vehiclePlatenumber:t.platenumber,parkingStart:"00:00:00",parkingEnd:"00:00:00"}).then((function(e){setTimeout((function(){i(!1),d(!1)}),2e3),x.a.success({content:"Successfully Reserved a slot"})})).catch((function(e){return console.log(e)}))},onFinishFailed:function(e){x.a.error({content:"Platenumber is not entered"}),setTimeout((function(){i(!0),d(!1)}),2e3)},id:"myForm",children:Object(c.jsx)(m.a.Item,{label:"Please Enter Platenumber:",name:"platenumber",rules:[{required:!0,message:"Please input vehicle platenumber"}],children:Object(c.jsx)(l.a,{})})})})]})},g=l.a.Search,S=j.a.Title;var y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){f.a.get("/providers/").then((function(e){var t=e.data;r(t)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsx)("div",{className:"loginCard",children:Object(c.jsx)(u.a,{type:"flex",justify:"center",align:"middle",style:{minHeight:"80vh"},children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(d.a,{title:Object(c.jsx)(S,{level:3,children:"Search ParkingLot"}),className:"loginCardStyle",children:[Object(c.jsx)(u.a,{children:Object(c.jsx)(g,{placeholder:"Enter Barangay",onSearch:function(e){f.a.post("/providers/search_parkinglot",{value:e}).then((function(e){var t=e.data;r(t)}))},enterButton:!0})}),n.map((function(e,t){return Object(c.jsxs)(u.a,{justify:"space-between",children:[Object(c.jsx)(h.a,{orientation:"left"}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(S,{level:4,children:e.parkingLotName}),Object(c.jsxs)(u.a,{children:["Location: ",e.parkingLotLocation]})," ",Object(c.jsxs)(u.a,{children:["Status: ",e.parkingLotStatus]})]}),Object(c.jsx)(b.a,{children:Object(c.jsx)(v,{info:e})})]},t)}))]})})})})};var k=n(329);k.a.Header,k.a.Content,k.a.Footer,k.a.Sider;var F=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)("h1",{children:"LOADING"}),children:Object(c.jsx)(y,{})})})};var C=function(){return Object(c.jsx)(F,{})},L=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,330)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(317),n(318);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),L()}},[[319,1,2]]]);
//# sourceMappingURL=main.c2424202.chunk.js.map