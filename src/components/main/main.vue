<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider ref="side1" hide-trigger collapsible :collapsed="isCollapsed" :collapsed-width="78" v-model="isCollapsed">
        <side-menu :collapsed="isCollapsed">
          <div class="logo">这是一个logo</div>
        </side-menu>
      </Sider>
      <Layout>
        <Header class="header-con">
          <header-bar @on-coll-change="handleCollapsedChange" :collapsed="isCollapsed">
            <user :message-unread-count="messageUnreadCount"></user>
          </header-bar>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          这是main
          <router-view/>
          <!-- <keep-alive>
            <!-- keep-alive 缓存组件
            <router-view/>
          </keep-alive> -->
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from './compontents/side-menu'
import HeaderBar from './compontents/header-bar'
import User from './compontents/user'
export default {
  data() {
    return {
      messageUnreadCount: 3,
      isCollapsed: false//false是菜单栏展开，true菜单栏收缩
    };
  },
  components: {
    SideMenu,
    HeaderBar,
    User
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    handleCollapsedChange (state) {
      this.isCollapsed = state
    }
  }
};
</script>
<style>
html,
body,
#app,
.layout-wrapper,
.layout-outer {
  height: 100%;
}
</style>

<style lang='scss'>
.logo{
  width: 100%;
  height: 64px;
  background: yellow;
  text-align: center;
  line-height: 64px;
  color: #000;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

}
.layout-wrapper .header-con{
  background: #fff;
  padding: 0 20px;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}

</style>

