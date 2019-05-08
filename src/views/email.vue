<template>
  <div>
    <p>email: xxxxxxxxxxxxxxxxxxxx</p>
    <button @click="handleClick">点一下</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hellow')
    }
  },
  mounted () {
    // console.log(this.$bus)
  }
}
</script>

