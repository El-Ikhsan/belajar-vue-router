<script setup>

</script>

<template>
<h1>Nested Views</h1>
  <p>
    <router-link to="/users2/2">/users/2</router-link>
    <br />
    <router-link to="/users2/1/Profil"
      >/users/1/profile</router-link
    >
    <br />
    <router-link to="/users2/12/Contact">/users/12/posts</router-link>
  </p>
  <router-view></router-view>
</template>

<style scoped>
* {
    background-color: rgb(23, 75, 66);
    color: rgb(253, 253, 253)969;
}
</style>