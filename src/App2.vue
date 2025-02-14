<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToUserProfile = () => {
    router.push({name: "Profil", params: {id: 100}});
}
const navigateToContact = () => {
    router.push({name: "contact", params: {id: 200}});
}
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
  <div>
    <h1>Programatic Navigation</h1>
    <button @click="navigateToContact">Go to Contact</button>
    <button @click="navigateToUserProfile">Go to User Profile</button>
  </div>
  <div>
  <router-link :to="{name: 'Page1'}">Page1</router-link>
  <router-link :to="{name: 'Page2'}">Page2</router-link>
  <br/>
  <router-view name="a"></router-view>
  <br/>
  <router-view name="b"></router-view>
  </div>
</template>

<style scoped>

* {
    background-color: rgb(23, 75, 66);
    color: rgb(253, 253, 253);
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>