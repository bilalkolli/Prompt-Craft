<template>
    <div class="navbar">
        <div class="logo">
            <NuxtLink to="/" class="logo">
                <img src="/logo.png" alt="logo officiel de la navbar" width="160px">
            </NuxtLink>
            <svg @click="toggleActionsVisibility" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="width: 40px; height: 40px;">
                <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
            </svg>
        </div>
        <nav :class="{ 'hidden': hideActions }">
            <NuxtLink v-for="biblioteque in biblioteques" :to="biblioteque.title" class="none">
                <p>{{ biblioteque.title }}</p>
            </NuxtLink>
        </nav>
        <div :class="{ 'hidden': hideActions }" class="droite" v-if="conditionuser === undefined || conditionuser === null">
            <NuxtLink to="/signup" class="inscription">
                <p>SIGNUP</p>
            </NuxtLink>
            <NuxtLink to="/login" class="login">
                <p>LOGIN</p>
            </NuxtLink>
        </div>
        <div :class="{ 'hidden': hideActions }" class="droite" v-else>
            <User></User>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUser } from '~/types/IUser'
import User from '~/components/User.vue'
import { useState } from 'nuxt/app'
import {ref} from 'vue'
import { onClickOutside } from '@vueuse/core'

const user = useState<IUser>('user')
const conditionuser = user.value
const hideActions = ref(true)
const userActions = ref(null)

const biblioteques = [
    { id: 0, title: 'BUSINESS' },
    { id: 1, title: 'PRODUCTIVITY' },
    { id: 2, title: 'MARKETING' }
];
const toggleActionsVisibility = () => {
    hideActions.value = !hideActions.value
};

onClickOutside(userActions, () => hideActions.value = true)

</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px
}
a {
    padding: 5px 25px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: #1E1F24
}
svg {
    display: none;
}
@media screen and (max-width: 1045px){
    .navbar { padding: 0px }
}
@media screen and (max-width: 964px){
    .logo {
        padding: 0;
        margin: 0;
    }
}
@media screen and (max-width: 896px){
    .navbar { 
        padding: 0px; 
        display: block;
        flex-direction: column;
    }
    .hidden { display: none }
    nav { flex-direction: column }
    .droite {
        display: flex;
        flex-direction: column 
    }
    .droite.hidden { display: none }
    .logo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    a {
        display: flex;
        justify-content: center;
    }
    svg { display: inherit }
}

.droite { display: flex }
p { font-weight: 500 }
nav { display: flex }
a:hover,.login { background-color: #BDD1FF }
.logo:hover { background-color: transparent }
.inscription,.inscription:hover {
    border: 2px solid #BDD1FF;
    background-color: transparent;
}
</style>
