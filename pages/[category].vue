<template>
  <navbar></navbar>
  <div class="grid-container">
    <div class="grid">
      <NuxtLink to="CreatePrompt" class="CreatePrompt">
      <p>ADD A PROMPT !</p>
      </NuxtLink>
      <div v-for="prompt in prompts" :key="prompt.id">
        <PromptsComponents :prompt="prompt">
        </PromptsComponents>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'
import PromptsComponents from '~/components/PromptsComponents.vue'

const route = useRoute()
const {data:prompts} = await useFetch((`/api/get-prompts-by-category/${route.params.category}`))
</script>

<style scoped>
p {
font-weight: 600;
font-size: 18px
}
</style>