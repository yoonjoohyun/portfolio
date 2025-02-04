<template>
    <nav class="navi">
        <div class="logo_box">
            <NuxtLink class="logo" to="/"><img src="~/assets/images/logo.webp"/></NuxtLink>
        </div>
        <div class="menu_box_pc">
            <ul>
                <li class="menu"><NuxtLink class="txt_box" to="/profile">프로필</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/optten">옵텐</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/acepharm">에이스제약</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/gven">지벤가구</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/ticketbus">티켓버스</NuxtLink></li>
                <li class="menu"><NuxtLink class="txt_box" to="/etc">기타</NuxtLink></li>
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
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/profile">프로필</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/optten">옵텐</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/acepharm">에이스제약</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/gven">지벤가구</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/ticketbus">티켓버스</NuxtLink></li>
            <li class="menu" @click="toggleMenu"><NuxtLink class="txt_box" to="/etc">기타</NuxtLink></li>
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