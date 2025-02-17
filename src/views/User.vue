<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const loading = ref(false)
const post = ref(null)
const error = ref(null)

// watch the params of the route to fetch the data again
watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData(id) { // data id di teruskan dari watch ketika route.params.id ini adalah fungsi bawaan watch
  error.value = post.value = null
  loading.value = true
  
  try {
    // replace `getPost` with your data fetching util / API wrapper
    post.value = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json());
  console.log(post.value)
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="post">
    <div v-if="loading" class="loading"><h1>Loading...</h1></div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h1>{{ route.params.username }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>


<style scoped>


.loading {
  color: #007bff;
  font-weight: bold;
  font-size: large;
  text-align: center;
}

.error {
  color: red;
  font-weight: bold;
  text-align: center;
}

.content h2 {
  color: #ffffff;

}

.content p {
  color: #ffffff;

}
</style>

