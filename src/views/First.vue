<template>
    <h2>First</h2>
    <h2>User {{ id }}</h2>
  </template>

<script setup>
const {id}  = defineProps(['id']);
</script>