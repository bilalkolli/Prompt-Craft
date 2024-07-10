<template>
    <navbar></navbar>
    <div class="prompt">
      <h1>{{  prompt.title }}</h1>
      <div class="prompt-display">
        <h2>Prompt details :</h2>
        <p>Model - ChatGPT</p>
        <p>created by @{{  prompt.author }}</p>
        <h3>Prompt :</h3>
        <p class="description">{{ prompt.description }}</p>
      </div>
    </div>
    <div class="commentaire">
    </div>
    <Footer></Footer>
  </template>
  
<script setup>
import { useRoute } from 'vue-router'
import navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'

const route = useRoute()
const {data:prompt} = await useFetch((`/api/get-prompts-by-id/${route.params.id}`))
</script>

<style scoped>
.prompt,.commentaire {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
img {
  border-radius: 10px;
}
.description {
  max-width: 600px;
}
h1 {
  max-width: 600px;
  margin: 50px 0px;
  text-align: center;
}
h3,h2 {
  font-size: 24px;
}
p {
  font-size: 18px;
}
h2,p,h3 {
  margin-bottom: 10px;
}
.prompt-display {
  border: 2.5px solid black;
  padding: 30px;
  margin: 20px;
  border-radius: 10px;
}
</style>