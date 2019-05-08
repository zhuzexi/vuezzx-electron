<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: '14px'}">
      <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
        <Icon type="ios-checkbox" style="margin-right: 4px;" size="12" />
        {{ item.meat.title }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'CustomBreadCrumb',
  data () {
    return {
      list: [
        {
          name: "home",
          to: "/",
          meat: {
            title: "首页"
          }
        },
        {
          name: "about",
          // to: "/about",
          meat: {
            title: "关于"
          }
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.custom-bread-crumb{
  display: inline-block;
  vertical-align: top;
  margin-left: 30px;
}
span.ivu-breadcrumb-item-link{
  color: #ccc
}
</style>


