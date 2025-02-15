<template>
  <div>Profile</div>
  <h2>Haloo User {{ id }}</h2>
</template>

<script setup>

const {id}  = defineProps(['id']);
</script>