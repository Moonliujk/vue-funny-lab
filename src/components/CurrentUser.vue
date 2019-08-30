<!-- user -->
<template>
  <span>
  <slot v-bind:user="user"></slot>
</span>
</template>

<script>
export default {
  data () {
    return {
        user: {
            firstName: 'Leslie',
            lastName:  "Liu",
        }
    }
  }
}
</script>

<style lang='scss' scoped>
    span {
        color: red;
        font-size: bold;
    }
</style>
