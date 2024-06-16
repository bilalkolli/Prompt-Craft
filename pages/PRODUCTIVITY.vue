<template>
    <navbar></navbar>
    <div class="grid-container">
      <div v-if="prompts.length" class="grid">
        <NuxtLink to="CreatePrompt" class="CreatePrompt">
        <p>ADD A PROMPT !</p>
        </NuxtLink>
        <div v-for="prompt in prompts" :key="prompt.id">
          <PromptsComponents :prompt="prompt">
          </PromptsComponents>
        </div>
      </div>
      <div v-else>
        <span>Chargement des prompts...</span>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue'
  import navbar from '~/layouts/Navbar.vue'
  import Footer from '~/layouts/Footer.vue'
  import PromptsComponents from '~/components/PromptsComponents.vue'
  import { fetchPrompts } from '~/composables/usePrompts.js'
  
  const prompts = ref([]);
  
  onBeforeMount(async () => {
    try {
      prompts.value = await fetchPrompts('Productivity', '/api/get-all-prompts')
    } catch (error) {
      console.error('Erreur lors de la récupération des prompts :', error)
    }
  })
  </script>

<style scoped>
p {
  font-weight: 600;
  font-size: 18px;
}
</style>