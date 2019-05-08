<template>
  <div class="user-avatar-dropdown">
    <Dropdown>
      <Badge :dot="!!messageUnreadCount">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {
  name: "User",
  props: {
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss">
.user-avatar-dropdown{
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  float: right;
  .ivu-badge-dot{
    top: 16px;
  }
  .ivu-select-dropdown{
    width: auto !important;
  }
}
.ivu-avatar {
    display: inline-block;
    text-align: center;
    background: #ccc;
    color: #fff;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
}
</style>


