(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c78d360e"],{"0dd6":function(n,e,t){},"135b":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n   这是一个父组件\n  "),t("router-view"),t("div",{staticClass:"bm-view",attrs:{id:"allmap"}})],1)},o=[],l={data:function(){return{center:{lng:106.5507137149,lat:29.5647048135},zoom:15}},mounted:function(){},methods:{handler:function(n){n.BMap,n.map;this.center.lng=106.5507137149,this.center.lat=29.5647048135,this.zoom=15},createMap:function(){var n=new BMap.Map("allmap",{mapType:BMAP_NORMAL_MAP}),e=new BMap.Point(106.55071,29.5647);n.centerAndZoom(e,11),n.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),n.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT})),n.enableScrollWheelZoom();var t={style:"midnight"};n.setMapStyle(t)}}},r=l,i=(t("e9a4"),t("2877")),c=Object(i["a"])(r,a,o,!1,null,null,null);c.options.__file="parent.vue";e["default"]=c.exports},e9a4:function(n,e,t){"use strict";var a=t("0dd6"),o=t.n(a);o.a}}]);
//# sourceMappingURL=chunk-c78d360e.2ddadaa5.js.map