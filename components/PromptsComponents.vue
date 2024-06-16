<template>
    <div v-if="prompt" id="PromptComponent" class="custom">
      <NuxtLink :to="`/${prompt.id}`" >
        <p>{{ prompt.title }}</p>
      </NuxtLink>
    </div>
    <div v-else>
      <p>Erreur : prompt non disponible</p>
    </div>
  </template>
  
<script setup>
const props = defineProps({
  prompt: {
    type: Object,
    required: true
  }
})
</script>
  
<style scoped>
.custom {
  max-width: 290px;
  height: 220px;
  border-radius: 10px;
  margin: 50px;
  background-image: url("https://assets.promptbase.com/DALLE_IMAGES%2Fo7WhfyO2YCCRvD8UZVQi%2Fresized%2F1680885658302_500x500.webp?alt=media&token=1f0dca2e-f155-4f52-8f11-ff3198c685c3");
  background-position: top;
}
a {
  text-decoration: none;
  color: white;
}
p {
  padding: 10px;
  font-weight: 600;
  background-color: black;
  max-height: 88px;
  opacity: 0.8;
  border-radius: 10px;
}
#PromptComponent {
  border-radius: 10px;
}
</style>