<template>
  <div class="header-bar">
    <side-trigger @on-change="handleCollpasedChange" :collapsed="collapsed"></side-trigger>
    <custom-bread-crumb></custom-bread-crumb>
    <div class="custom-content-con">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import SideTrigger from './side-trigger'
import CustomBreadCrumb from './custom-bread-crumb'
export default {
  name: "HeaderBar",
  components: {
    SideTrigger,
    CustomBreadCrumb
  },
  props: {
    collapsed: Boolean
  },
  methods: {
    handleCollpasedChange (state) {
      this.$emit('on-coll-change', state)
    }
  }
}
</script>
<style lang="scss">
.header-bar{
  width: 100%;
  height: 100%;
  position: relative;
  .custom-content-con{
    float: right;
    height: auto;
    padding-right: 20px;
    line-height: 64px;
  }
}
</style>

