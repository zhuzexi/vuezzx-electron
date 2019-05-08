<template>
    <a
      @click="handleChange"
      type="text"
      :class="['sider-trigger-a', collapsed ? 'collapsed' : '']"
    >
      <Icon type="md-menu" size="26" />
    </a>
</template>
<script>
export default {
  name: "SideTrigger",
  props: {
    collapsed: Boolean
  },
  methods: {
    handleChange () {
      this.$emit('on-change', !this.collapsed)
    }
  }
}
</script>
<style lang="scss">
.sider-trigger-a {
    padding: 6px;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    color: #5c6b77;
    margin-top: 12px;
  i{
    vertical-align: top;
  }
}
.sider-trigger-a.collapsed i{
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sider-trigger-a.collapsed i, .sider-trigger-a i {
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease,-webkit-transform .2s ease;
}
</style>


