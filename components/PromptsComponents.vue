<template>
    <div v-if="prompt" id="PromptComponent">
      <NuxtLink :to="`/${prompt.id}`" >
        <p>{{ prompt.title }}</p>
        <p class="author"><i>Created by @{{ prompt.author }}</i></p>
      </NuxtLink>
    </div>
    <div v-else>
      <p>Erreur : prompt non disponible</p>
    </div>
  </template>
  
<script setup>
defineProps({
  prompt: {
    type: Object,
  }
})
</script>
  
<style scoped>
#PromptComponent {
  max-width: 290px;
  border-radius: 5px;
  align-items: center;
  padding: 15px 10px;
  border: black 1px solid;
  margin: 50px
}
#PromptComponent:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.3)
}
a {
  text-decoration: none;
  color: black
}
.author {
  margin-top: 5px;
  opacity: 0.7
}
</style>