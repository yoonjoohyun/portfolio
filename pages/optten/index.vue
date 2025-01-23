<template>
<div class="wrap">
    <ContentWide
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

import Content from '~/components/ContentWide.vue'
import work1 from '@/assets/images/acepharm/work1.png'
import work2 from '@/assets/images/acepharm/work2.png'
import work3 from '@/assets/images/acepharm/work3.png'
import work4 from '@/assets/images/acepharm/work4.jpg'
import work5 from '@/assets/images/acepharm/work4.jpg'
import work6 from '@/assets/images/acepharm/work3.png'
import work7 from '@/assets/images/acepharm/work2.png'
import work8 from '@/assets/images/acepharm/work1.png'

const title = "Acepharm Project"
const description = "Acepharm 프로젝트 설명..."

const images = [
    {
        src: work1
    },
    {
        src: work2
    },
    {
        src: work3
    },
    {
        src: work4
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

<style lang="scss" scoped src="@/assets/scss/optten.scss"></style>