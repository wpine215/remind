(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2178b7"],{c6d2:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",[t("q-btn",{attrs:{color:"primary",label:"Get Picture"},on:{click:a.captureImage}}),t("img",{attrs:{src:a.imageSrc}})],1)},i=[],c={name:"PageReminders",data:function(){return{imageSrc:""}},methods:{captureImage:function(){var a=this;navigator.camera.getPicture((function(e){a.imageSrc="data:image/jpeg;base64,".concat(e)}),(function(){a.$q.notify("Could not access device camera.")}),{quality:50,destinationType:navigator.camera.DestinationType.DATA_URL,encodingType:navigator.camera.EncodingType.JPEG,MEDIATYPE:navigator.camera.MediaType.PICTURE,sourceType:navigator.camera.PictureSourceType.CAMERA,mediaType:navigator.camera.MediaType.PICTURE,cameraDirection:navigator.camera.Direction.BACK,targetWidth:300,targetHeight:400})}}},r=c,o=t("a6c2"),s=t("fb5e"),g=Object(o["a"])(r,n,i,!1,null,null,null);e["default"]=g.exports;g.options.components=Object.assign({QPage:s["o"],QBtn:s["a"]},g.options.components||{})}}]);