<template>
    <a
      :href="href"
      @click="handleClick"
      :class="{ active: isActive, 'exact-active': isExactActive }"
    >
      <slot></slot>
    </a>
  </template>
  
  <script setup>
  import { useLink } from 'vue-router';
  
  const props = defineProps({
    to: {
      type: [String, Object],
      required: true,
    },
    confirm: {
      type: Boolean,
      default: false,
    },
  });
  
  const { href, isActive, isExactActive, navigate } = useLink(props);
  
  const handleClick = (event) => {
    if (props.confirm && !window.confirm('Are you sure you want to leave this page?')) {
      event.preventDefault();
    } else {
      navigate(event);
    }
  };
  </script>
  
  <style scoped>
  .active {
    font-weight: bold;
  }
  .exact-active {
    color: red;
  }
  </style>