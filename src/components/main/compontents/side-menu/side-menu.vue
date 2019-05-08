<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" active-name="1-2" theme="dark" width="auto">
      <template v-for="(item, index) in list">
        <side-menu-item v-if="item.children && item.children.length > 0" :parent-item="item" :key="`menu_${item.name}`"></side-menu-item>
        <MenuItem v-else name="item.name" :key="`menu_${item.name}`"><Icon type="ios-paper" />{{item.name}}</MenuItem>
      </template>
    </Menu>
    <div class="menu-collapsed" v-show="collapsed">
      <template v-for="(item, index) in list">
        <collapsed-menu :theme="theme" hide-title v-if="item.children && item.children.length > 0" :parent-item="item"></collapsed-menu>
        <Tooltip v-else transfer placement="right" :key="`drop-menu-${item.name}`" :content="item.name">
          <a class="drop-menu-a">
            <Icon type="ios-book" size="20" color="#fff"></Icon>
          </a>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import SideMenuItem from './side-menu-item.vue'
import CollapsedMenu from './collapsed-menu.vue'
export default {
  components: {
    SideMenuItem,
    CollapsedMenu
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      theme: 'dark',
      list: [
        {
          name: "第一",
          id: 1,
          children: [
            {
              name: "11",
              id: 11
            },
            {
              name: "12",
              id: 12,
              children: [{name: "xxx", id: 121}]
            }
          ]
        },
        {
          name: "option2",
          id: 2
        },
        {
          name: "option3",
          id: 3
        }
      ]
    }
  }
}
</script>
<style>
.menu-collapsed .ivu-tooltip, .menu-collapsed .ivu-tooltip .ivu-tooltip-rel{
  width: 100%;
}
.side-menu-wrapper a.drop-menu-a {
    display: inline-block;
    padding: 6px 15px;
    width: 100%;
    text-align: center;
    color: #495060;
}

</style>


