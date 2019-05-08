<template>
  <div>
    <p>AShow:{{ count }}</p>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

