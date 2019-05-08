<template>
<!-- <div>
  <MenuItem name="1-1">
      <Icon type="ios-navigate"></Icon>
      <span>Option 1</span>
  </MenuItem>
  <MenuItem name="1-2">
        <Icon type="ios-navigate"></Icon>
      <span>Option 2</span>
  </MenuItem>
  <MenuItem name="1-3">
        <Icon type="ios-navigate"></Icon>
      <span>Option 3</span>
  </MenuItem>
  <Submenu name="3">
      <template slot="title">
          <Icon type="ios-stats" />
          统计分析
      </template>
        <MenuItem name="3-1">新增和启动</MenuItem>
        <MenuItem name="3-2">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
        <MenuItem name="3-4">用户留存</MenuItem>
        <MenuItem name="3-5">流失用户</MenuItem>
  </Submenu>
  </div> -->
  <Submenu :name="parentItem.id">
      <template slot="title">
          <Icon type="ios-stats" />
          {{parentItem.name}}
      </template>
      <template v-for="(item, index) in parentItem.children">
        <side-menu-item v-if="item.children && item.children.length > 0" :parent-item="item"></side-menu-item>
        <MenuItem v-else name="item.name"><Icon type="ios-paper" />{{item.name}}</MenuItem>
      </template>
  </Submenu>
</template>
<script>
export default {
  name: 'SideMenuItem',
  props: {
    parentItem: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
