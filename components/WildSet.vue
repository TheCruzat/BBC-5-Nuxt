<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "WildSet"
}
</script>

<style scoped lang="scss">
  div {
    display: flex;
    flex-wrap: wrap;
  }
</style>
