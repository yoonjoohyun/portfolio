<template>
<div class="wrap">
    <ContentHigh
        :title="title"
        :hightxt01="txt01"
        :hightxt03="txt03"
        :hightxt04="txt04"
        :images="images"
    />
    
</div>
</template>

<script setup>

import work1 from '@/assets/images/etc/seomin.webp'
import work2 from '@/assets/images/etc/ticketbus_c.webp'
import work3 from '@/assets/images/etc/webtoon.webp'
import work4 from '@/assets/images/etc/umakers_c.webp'
import work5 from '@/assets/images/etc/jellna_c.webp'


const title = "DRAWING"
const txt01 = "드로잉 삽화 작업물"
const txt03 = "작업 툴 : (Adobe Ps, Adobe Ai, ClipStudio)"
const txt04 = "서민갑부 삽화 외주, 캐리커쳐, 캐릭터 컨셉 아트, UMAKERS캐릭터 디자인(미사용), TICKETBUS캐릭터 디자인"

const images = [
    {
        src: work1,
        link: ''
    },
    {
        src: work2,
        link: ''
    },
    {
        src: work3,
        link: ''
    },
    {
        src: work4,
        link: ''
    },
    {
        src: work5,
        link: ''
    }
]






</script>

<style lang="scss" scoped src="@/assets/scss/etc.scss"></style>