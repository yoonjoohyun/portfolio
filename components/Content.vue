<template>
    <div class="content">
        <div class="txt_box">
            <div class="title">
                <span>{{ title }}</span>
            </div>
            <div class="explain">
                <span>{{ description }}</span>
            </div>
        </div>
        <div class="work_box">
            <div class="slide_box" ref="slideBox">
                <div class="work_container" :style="{ transform: `translateX(${currentPosition}px)` }">
                    <div v-for="(image, index) in images" :key="index" class="work">
                        <img :src="image.src" :alt="image.alt">
                    </div>
                </div>
            </div>
            <div class="work_btn">
                <div class="slide_btn" @click="prevSlide"><i class="ri-arrow-left-circle-fill"></i></div>
                <div class="slide_btn" @click="nextSlide"><i class="ri-arrow-right-circle-fill"></i></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    images: {
        type: Array,
        default: () => []
    }
})

const slideBox = ref(null)
const currentPosition = ref(0)
const slideWidth = 770 // work의 width + margin-right

function nextSlide() {
    if (currentPosition.value > -(slideWidth * (props.images.length - 1))) {
        currentPosition.value -= slideWidth
    }
}

function prevSlide() {
    if (currentPosition.value < 0) {
        currentPosition.value += slideWidth
    }
}
</script>

<style lang="scss" scoped src="~/assets/scss/content.scss"></style>