<template>
  <navbar></navbar>
  <div class="login">
    <h1>Prompt Creation</h1>
      <article>
          <form v-on:submit.prevent action="#" method="post">
              <label for="Name"><p>Name</p></label>
              <input v-model="name" type="text" name="Name" placeholder="Enter your name">

              <label for="Title"><p>Title</p></label>
              <input v-model="title" type="text" name="Title" placeholder="Enter your prompt title">

              <label for="description"><p>Description</p></label>
              <input v-model="description" type="text" name="description" placeholder="Enter your prompt">

              <label for="category"><p>Category</p></label>
              <input v-model="category" type="text" name="category" placeholder="Enter Business,Productivity or Marketing">

              <button type="submit"  @click.prevent="Post_Prompt">ADD A PROMPT </button>
          </form>
      </article>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'
import { formPrompt } from '~/composables/formPrompt.ts'


const name = ref(null)
const title = ref(null)
const description = ref(null)
const category = ref(null)

const Post_Prompt = async () => {
    if (name.value && title.value && description.value && category.value) {
      await formPrompt(name.value,title.value,description.value,category.value)
    }
    else {
    alert('All fields must have been fields.')
      }
}
</script>


<style scoped>
.login {
  display: flex;
  flex-direction: column;   
  align-items: center;
  justify-content: center;
  height: 85vh
}
form {
  display: flex;
  flex-direction: column
}
label {
  padding: 5px 10px;
  width: 320px
}
input {
  height: 28px;
  padding: 15px 10px;
  border: 1px #B9BBC6 solid;
  border-radius: 5px;
  margin-bottom: 20px
}
button {
  padding: 7px 25px;
  margin-top: 11px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  background-color: #BDD1FF;
  cursor: pointer
}
h1 {
  margin-bottom: 20px;
}
</style>
