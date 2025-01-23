<template>
    <div class="wrap">
        <ContentHigh
            :title="title"
            :description="description"
            :images="images"
        />
        <ContentWide
            :title="title02"
            :description="description02"
            :images="images02"
        />
    </div>
</template>

<script setup>
import ContentHigh from '~/components/ContentHigh.vue'
import ContentWide from '~/components/ContentWide.vue'
import high1 from '@/assets/images/acepharm/high1.jpg'
import high2 from '@/assets/images/acepharm/high2.jpg'
import high3 from '@/assets/images/acepharm/high3.jpg'
import high4 from '@/assets/images/acepharm/high4.jpg'
import work5 from '@/assets/images/acepharm/work4.jpg'
import work6 from '@/assets/images/acepharm/work3.png'
import work7 from '@/assets/images/acepharm/work2.png'
import work8 from '@/assets/images/acepharm/work1.png'

const title = "Acepharm Project"
const description = "Acepharm 프로젝트 설명..."

const images = [
    {
        src: high1
    },
    {
        src: high2
    },
    {
        src: high3
    },
    {
        src: high4
    }
]

const title02 = "Acepharm Project22"
const description02 = "Acepharm 프로젝트 설명.22.."

const images02 = [
    {
        src: work5
    },
    {
        src: work6
    },
    {
        src: work7
    },
    {
        src: work8
    }
]
</script>

<style lang="scss" scoped src="@/assets/scss/acepharm.scss"></style>