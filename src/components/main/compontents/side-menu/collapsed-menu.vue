<template>
  <Dropdown placement="right-start" class="collased-menu-dropdown">
    <a class="drop-menu-a" type="text">
        <Icon type="md-build" size="20" :color="textColor" />
        <span class="menu-title" v-if="!hideTitle">{{ parentItem.name }}</span>
    	  <Icon style="float: right;" v-if="!hideTitle" type="ios-arrow-forward" :size="16"/>
    </a>
    <DropdownMenu ref="dropdown" slot="list">
      <template v-for="item in parentItem.children">
        <collapsed-menu v-if="item.children && item.children.length > 0" :key="`drop-${item.name}`" :parent-item="item"></collapsed-menu>
        <DropdownItem v-else :key="`drop-${item.name}`">
          <Icon type="ios-alarm-outline" size="20" color="#000" />
          <span class="menu-title">{{item.name}}</span>
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
export default {
  name: "CollapsedMenu",
  props: {
    parentItem: {
      type: Object,
      default: () => ({})
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
    theme: String
  },
  computed: {
    textColor () {
      return this.theme === 'dark' ? '#fff' : '#495060'
    }
  }
}
</script>
<style lang="scss">
.collased-menu-dropdown {
  .ivu-select-dropdown{
    width: auto;
    text-align: left;
  }
  .collased-menu-dropdown{
    .ivu-dropdown-rel{
      padding: 7px 16px;
    }
    a.drop-menu-a{
      padding: 0;
      text-align: left;
    }
  }
}
.ivu-dropdown{
  width: 100%;

}
.collased-menu-dropdown .ivu-dropdown .ivu-dropdown-rel{
  padding: 7px 0 7px 16px;
}
.menu-collapsed .ivu-dropdown-rel{
  padding: 0;
}
a.drop-menu-a{
  color: #495060;
}
</style>


