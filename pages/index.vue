<template>
    <navbar></navbar>
    <div class="index">
        <NuxtLink to="CreatePrompt">
            <span>Add your own prompt !</span>
        </NuxtLink>
        <h1>AI Prompts for <strong>Business</strong>, <strong>Marketing</strong>, and <strong>Productivity</strong></h1>
        <h2>Prompt-Craft is an open-source platform that empowers creativity and productivity.</h2>
        <h3>Access 18 initial prompts and countless user-generated prompts for free !</h3>
        <NuxtLink class="lienpricing" to="/BUSINESS"> INTERESTED ! </NuxtLink>
    </div>
    <Footer></Footer>
</template>

<script setup>
import navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'
</script>

<style scoped>
.index {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    align-items: center
}
h1 {
    font-size: 3.7em;
    margin: 45px 5px 35px 5px;
    padding: 0px 20px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    max-width: 900px;
    text-align: center;
    line-height: 60px;
    letter-spacing:  -1.5px;
    animation: 0.2s myAnim
}
h2,h3 {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    opacity: 0.8;
    text-align: center;
    max-width: 850px;
    font-size: 1.25rem;
    line-height: 30px;
    animation: 0.3s myAnim
}
.lienpricing{
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
span {
    color: #395BC7;
    border: 1px solid #395BC7;
    border-radius: 25px;
    padding: 5px 7px;
    font-weight: 600;
}
strong {color:#395BC7}
.flechedubas { margin-left: 15px }
@keyframes myAnim {
	0% {
		opacity: 0;
		transform: translateY(50px)
	}

	100% {
		opacity: 1;
		transform: translateY(0)
	}
}
@media screen and (max-width: 794px){
    h1 {
        font-size: 3em;
    }
}
@media screen and (max-width: 653px){
    .index {
        margin-bottom: 0px;
    }
}
@media screen and (max-width: 476px){
    h1 {
        font-size: 2.6em;
    }
}
</style>