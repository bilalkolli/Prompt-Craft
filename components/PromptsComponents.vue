<template>
  <div id="PromptComponent">
    <NuxtLink :to="`/prompt/${prompt.id}`" >
      <p>{{ prompt.title }}</p>
      <p class="author">
        <i>Created by @{{ prompt.author }}</i>
      </p>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
prompt: {
  type: Object
}
})
</script>

<style scoped>
a {
text-decoration: none;
color: black
}
.author {
margin-top: 5px;
opacity: 0.7
}
</style>