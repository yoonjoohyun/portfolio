<template>
    <div class="wrap">
        <Content 
            :title="title"
            :description="description"
            :images="images"
        />
    </div>
</template>

<script setup>
import Content from '@/components/Content.vue'

const title = "Acepharm Project"
const description = "Acepharm 프로젝트 설명..."

// 이미지 import
const work1 = new URL('@/assets/images/acepharm/work1.png', import.meta.url).href
const work2 = new URL('@/assets/images/acepharm/work2.png', import.meta.url).href
const work3 = new URL('@/assets/images/acepharm/work3.png', import.meta.url).href
const work4 = new URL('@/assets/images/acepharm/work4.jpg', import.meta.url).href

const images = [
    {
        src: work1,
        alt: 'Acepharm work 1'
    },
    {
        src: work2,
        alt: 'Acepharm work 2'
    },
    {
        src: work3,
        alt: 'Acepharm work 3'
    },
    {
        src: work4,
        alt: 'Acepharm work 4'
    }
]
</script>

<style lang="scss" scoped src="@/assets/scss/acepharm.scss"></style>