(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lff"}},[a("q-header",{attrs:{elevated:""}},[a("div",{staticClass:"row no-wrap shadow-1"},[a("q-toolbar",{staticClass:"col-8 bg-primary"},[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"home","aria-label":"Menu"},on:{click:function(e){return t.goBack()}}}),a("q-toolbar-title",[t._v("\n        remind\n      ")])],1),a("q-toolbar",{staticClass:"col-4 bg-red text-white"},[a("q-tabs",{attrs:{align:"center"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"tab1",label:"Emergency!"},on:{click:function(e){return t.goEmergency()}}})],1)],1)],1)]),a("q-page-container",[a("router-view")],1),a("q-footer")],1)},o=[],r={name:"MyLayout",data:function(){return{leftDrawerOpen:!1}},methods:{goBack:function(){this.$router.push("/")},goEmergency:function(){this.$router.push("/emergency")}}},s=r,c=a("2877"),l=a("fe09"),i=Object(c["a"])(s,n,o,!1,null,null,null);e["default"]=i.exports;i.options.components=Object.assign({QLayout:l["m"],QHeader:l["g"],QToolbar:l["u"],QBtn:l["a"],QToolbarTitle:l["v"],QTabs:l["t"],QTab:l["s"],QPageContainer:l["p"],QFooter:l["f"]},i.options.components||{})}}]);