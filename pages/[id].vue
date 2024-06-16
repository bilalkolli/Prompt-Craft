<template>
    <navbar></navbar>
    <div v-if="prompt">
    <div class="prompt">
      <h1>{{  prompt.data?.title }}</h1>
      <div class="prompt-display">
        <h2>Prompt details :</h2>
        <p>Model - ChatGPT</p>
        <p>created by @{{  prompt.data?.author }}</p>
        <h3>Prompt :</h3>
        <p class="description">{{ prompt.data?.description }}</p>
      </div>
    </div>
    <div class="commentaire">
    </div>
    </div>
    <div v-else>
      <p>Chargement du prompt...</p>
    </div>
    <Footer></Footer>
  </template>
  
<script setup>
import { useRoute } from 'vue-router'
import navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'

const route = useRoute()
const prompt = ref([])

onBeforeMount(async () => {
    prompt.value = await useFetch(`/api/get-prompts-by-id/${route.params.id}`)
})
</script>

<style scoped>
.prompt {
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