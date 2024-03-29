(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{400:function(e,t,r){e.exports=r.p+"img/store-logo-light.8aebfe0.png"},431:function(e,t,r){"use strict";var n=r(341),o=r(142),l=r(352),c=r(7),m=(r(52),r(21),{name:"DemoAsyncImage",props:{imageId:{type:Number},size:{type:String,default:"200"},height:{type:String,default:"200"},contain:{type:Boolean,default:!0}},data:function(){return{imageSrc:""}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e.imageId){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$axios.$get("/w/image/".concat(e.imageId,"?size=").concat(e.size));case 4:r=t.sent,e.imageSrc=r;case 6:case"end":return t.stop()}}),t)})))()}}),d=r(4),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;return t(n.a,e._g(e._b({attrs:{src:e.imageSrc,height:e.height,contain:e.contain},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t(l.a,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t(o.a,{attrs:{indeterminate:"",color:"grey darken-5"}})],1)]},proxy:!0}])},"v-img",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},540:function(e,t,r){"use strict";var n=r(360),o=r(356),l=r(405),c=r(142),m=r(352),d=(r(31),r(47),{name:"AlbumList",props:{members:{type:Array,default:[]}}}),f=r(4),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",[e.members.length<1?t("h1",[e._v("Loading ... "),t(c.a,{attrs:{indeterminate:"",color:"grey darken-5"}})],1):t("h1",[e._v("List of Albums")]),t(m.a,e._l(e.members,(function(r,c){return t(l.a,{key:r.id,attrs:{cols:"4"}},[t(n.a,[t(o.d,[t("nuxt-link",{attrs:{to:{name:e.$route.path.slice(1),query:{cat:r.title.split(":")[1]}}}},[e._v(e._s(r.title.split(":")[1]))])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.a=component.exports},541:function(e,t,r){"use strict";var n=r(339),o=r(360),l=r(757),c=r(758),m=r(405),d=r(720),f=r(719),h=r(338),y=r(341),v=r(352),w=r(434),_=r(399),k=r(393),x={name:"AlbumPhotos",components:{"async-img":r(431).a},props:{title:{type:String,default:"Album Title"},members:{type:Array,default:[{id:123}]}},data:function(){return{showCarousels:!1}}},C=r(4),component=Object(C.a)(x,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(e._s(e.title))]),t(v.a,e._l(e.members,(function(r,n){return t(m.a,{key:r.id,staticClass:"d-flex child-flex"},[t(f.a,{scopedSlots:e._u([{key:"default",fn:function(n){var l=n.hover;return[t(o.a,{class:{"on-hover":l},attrs:{elevation:l?16:2}},[t("async-img",{attrs:{imageId:r.id,size:"250",height:"250",contain:"false"},on:{click:function(t){t.stopPropagation(),e.showCarousels=!0}}})],1)]}}],null,!0)})],1)})),1),t(d.a,{attrs:{fullscreen:"","hide-overlay":""},model:{value:e.showCarousels,callback:function(t){e.showCarousels=t},expression:"showCarousels"}},[t(o.a,[t(_.a,{attrs:{flat:"",color:"primary",dark:""}},[t(y.a,{attrs:{src:r(400),contain:"","max-width":"100",width:"100%"}}),t(k.a,[e._v("Album Carousel: "+e._s(e.title))]),t(w.a),t(n.a,{attrs:{icon:"",dark:""},on:{click:function(t){e.showCarousels=!1}}},[t(h.a,[e._v("mdi-close")])],1)],1),t(l.a,{attrs:{height:"800",dark:"true",cycle:"true",interval:"6000",progress:"true"}},e._l(e.members,(function(e,r){return t(c.a,{key:r},[t("async-img",{attrs:{imageId:e.id,size:"800",height:"800"}})],1)})),1)],1)],1)],1)}),[],!1,null,"6d7c6b63",null);t.a=component.exports},728:function(e,t,r){"use strict";r.r(t);var n=r(339),o=r(385),l=r(540),c=r(541),m={name:"UserAlbum",layout:"store",auth:!0,components:{"album-list":l.a,"album-photos":c.a},data:function(){return{members:[],wContinue:null,loading:!1}},watch:{$route:function(e,t){this.members=[],this.wContinue=null,this.loadMembers()}},mounted:function(){this.loadMembers()},updated:function(){this.$vuetify.goTo(9999)},methods:{loadMembers:function(){var e=this,option={method:"get",url:e.$route.query&&e.$route.query.cat?"/w/album/"+e.$route.query.cat:"/w/album",params:{limit:10,user:e.$auth.user.email}};e.wContinue&&(option.params.continue=e.wContinue),e.$axios.request(option).then((function(t){null===e.wContinue?e.members=t.data.items:e.members=e.members.concat(t.data.items),e.wContinue=t.data.hasOwnProperty("continue")?t.data.continue:null,e.loading=!1}))},loadMoreMembers:function(){this.loading=!0,this.loadMembers()},albumHref:function(title){return"/demo?cat="+title}}},d=r(4),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;return t(o.a,{ref:"container"},[e.$route.query.cat?t("album-photos",{attrs:{title:e.$route.query.cat,members:e.members}}):t("album-list",{attrs:{members:e.members}}),e.wContinue?t(n.a,{attrs:{loading:e.loading,disabled:e.loading,block:"",color:"primary"},on:{click:e.loadMoreMembers}},[e._v("Load More")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);