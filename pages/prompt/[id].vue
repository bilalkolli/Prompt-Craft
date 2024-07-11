<template>
    <navbar></navbar>
    <div class="prompt">
      <h1 v-if="pending" class="loadingtitle"></h1>
      <h1 v-else>{{  prompt.title }}</h1>
      <div class="prompt-display">
        <h2>Prompt details :</h2>
        <p>Model - ChatGPT</p>
        <p v-if="pending" class="loadingauthor"></p>
        <p v-else>created by @{{  prompt.author }}</p>
        <h3>Prompt :</h3>
        <p v-if="pending" class="loadingdescription"></p>
        <p v-else class="description">{{ prompt.description }}</p>
      </div>
      <button @click="Copyprompt">{{ button_phrase }}</button>
    </div>
    <div class="commentaire">
    </div>
    <Footer></Footer>
  </template>
  
<script setup>
import { useRoute } from 'vue-router'
import navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'

const button_phrase = ref('Copy this prompt !')
const route = useRoute()
const {pending,data:prompt} = await useFetch(`/api/get-prompts-by-id/${route.params.id}`,{lazy:true})

const Copyprompt = () => {
  navigator.clipboard.writeText(prompt.value.description)
  button_phrase.value = 'Paste it in CHATGPT !'
}
</script>

<style scoped>
.prompt,.commentaire {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center
}
img {
  border-radius: 10px
}
.description {
  max-width: 600px
}
h1 {
  max-width: 600px;
  margin: 50px 0px;
  text-align: center
}
h3,h2 {
  font-size: 24px
}
p {
  font-size: 18px
}
h2,p,h3 {
  margin-bottom: 10px
}
.prompt-display {
  border: 2.5px solid black;
  padding: 30px;
  margin: 20px;
  border-radius: 10px
}
.loadingtitle,.loadingauthor,.loadingdescription {
  background-color: rgba(0, 0, 0, 0.11);
  animation: animation-c7515d 1.5s ease-in-out 0.5s infinite;
  width: 500px;
  height: 30px;
  border-radius: 10px
}
.loadingtitle {
  height: 70px
}
.loadingdescription {
  height: 300px
}
button {
  padding: 7px 25px;
    margin: 30px 0px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    color: #1E1F24;
    background-color:  #BDD1FF;
    animation: 0.2s myAnim;
    cursor: pointer;
}
</style>