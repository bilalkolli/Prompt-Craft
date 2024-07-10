<template>
    <div>
        <div id="PromptComponent">
            <div class="loadingprompt"></div>
            <div class="loadingauthor"></div>
        </div>    
    </div>
</template>

<script setup>
</script>

<style scoped>
.loadingprompt,.loadingauthor {
    background-color: rgba(0, 0, 0, 0.11);
    animation: animation-c7515d 1.5s ease-in-out 0.5s infinite;
    width: 250px;
    height: 30px
}
.loadingauthor{
    margin-top: 5px;
    width: 100px;
    height: 15px
}
</style>