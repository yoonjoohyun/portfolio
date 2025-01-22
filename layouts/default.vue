<template>
    <nav class="navi">
        <div class="logo_box">
            <NuxtLink class="logo" to="/"><img src="~/assets/images/logo.png"/></NuxtLink>
        </div>
        <div class="menu_box_pc">
            <ul>
                <li class="menu"><NuxtLink class="txt_box" to="/red">optten</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/orange">gven</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/yellow">yellow</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/green">green</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/blue">blue</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/purple">purple</NuxtLink></li>
            </ul>
        </div>
        <div class="sns_box">
            <ul>
                <li class="utube_icon ri-youtube-fill"></li>
                <li class="insta_icon ri-instagram-line"></li>
            </ul>
        </div>
        <div class="hamburger" @click="toggleMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
    <div class="menu_box_mobile" :class="{ 'is-active': isMenuOpen }">
        <ul>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/red">red</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/orange">orange</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/yellow">yellow</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/green">green</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/blue">blue</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/purple">purple</NuxtLink></li>
            <li class="menu sns_menu">
                <i class="utube_icon ri-youtube-fill"></i>
                <i class="insta_icon ri-instagram-line"></i>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>
<style lang="scss" src="@/assets/scss/navigation.scss"></style>