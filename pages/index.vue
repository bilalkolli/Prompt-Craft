<template>
    <navbar></navbar>
    <div class="index">
        <h1>AI Prompts for <strong>Business</strong>, <strong>Marketing</strong>, and <strong>Productivity</strong></h1>
        <h2>18 initial prompts and user-generated prompts for free !</h2>
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
    align-items: center
}
h1 {
    font-size: 3.7em;
    padding: 20px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    max-width: 900px;
    text-align: center;
    line-height: 60px;
    letter-spacing:  -1.5px;
    animation: 0.2s myAnim
}
h2 {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    opacity: 0.7;
    text-align: center;
    animation: 0.3s myAnim
}
h3 {
    font-size: 52px;
    font-family: "Onest", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
    text-align: center;
    margin-top: 35px
}
.lien {
    font-weight: 600;
    padding: 5px 25px;
    border-radius: 15px;
    background-color: #BDD1FF;
    color: #1E1F24;
    animation: 0.5s myAnim
}
.lienpricing{
    margin-top: 25px;
    padding: 7px 25px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #1E1F24;
    background-color:  #BDD1FF;
    animation: 0.2s myAnim;
    cursor: pointer;
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

@media screen and (max-width: 653px){
    h1 {
        font-size: 3em;
    }
}
@media screen and (max-width: 476px){
    h1 {
        font-size: 2.6em;
    }
}
</style>