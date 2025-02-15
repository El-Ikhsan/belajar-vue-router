<template>
    <div class="user">
      <h2>User {{ id }}</h2>
      <router-view></router-view>
    </div>
</template>

<script setup>

const {id}  = defineProps(['id']);
</script>