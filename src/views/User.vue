<script>
export default {
  async beforeRouteUpdate(to, from) {
    console.log('Route berubah dari:', from.path, 'ke:', to.path);
    // this.userData = await fetchUser(to.params.id)
  },
}
</script>

<template>
    <div>
      <!-- The current route is accessible as $route in the template -->
      User {{ $route.params.username }} is number {{ $route.params.id }}
    </div>
  </template>

<style scoped>

</style>