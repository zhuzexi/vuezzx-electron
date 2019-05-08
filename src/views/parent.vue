<
import { nextTick } from 'q';
<template>
  <div>
     这是一个父组件
    <router-view></router-view>
    <div class="bm-view" id="allmap"></div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      center: {lng: 106.5507137149, lat: 29.5647048135},
      zoom: 15
    }
  },
  mounted () {
    // this.createMap()
  },
  methods: {
    handler ({BMap, map}) {
      this.center.lng = 106.5507137149
      this.center.lat = 29.5647048135
      this.zoom = 15
    },
    createMap (){
      var map = new BMap.Map("allmap",{mapType: BMAP_NORMAL_MAP});      //设置卫星图为底图
      //var point = new BMap.Point(101.55497, 25.040961);    // 创建点坐标
      var point = new BMap.Point(106.55071,29.56470);
      map.centerAndZoom(point,11);
      // 初始化地图,设置中心点坐标和地图级别。
      // var marker = new BMap.Marker(point);
      // map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));//2D图，卫星图控件
      map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT})); //放大缩小控件，默认放在左上角。
      map.enableScrollWheelZoom();                  // 启用滚轮放大缩小。
      //map.enableKeyboard();
      var mapStyle={  style : "midnight" }
map.setMapStyle(mapStyle);
    }
  }
}
</script>
<style>
.bm-view {
  width: 100%;
  height: 500px;
}
</style>
