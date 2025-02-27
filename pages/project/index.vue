<template>
<div class="wrap">
    <ContentWide
        :title="title02"
        :widetxt01="txt05"
        :widetxt02="txt06"
        :widetxt04="txt07"
        :images="images02"
    />
    <ContentHigh
        :title="title"
        :hightxt01="txt01"
        :hightxt02="txt02"
        :hightxt04="txt04"
        :images="images"
    />
</div>
</template>

<script setup>


import work1 from '@/assets/images/project/wedding01.webp'
import work2 from '@/assets/images/project/wedding02.webp'
import work3 from '@/assets/images/project/wedding03.webp'
import work4 from '@/assets/images/project/wedding04.webp'
import work5 from '@/assets/images/project/wedding05.webp'
import work6 from '@/assets/images/project/cardsection01.webp'
import work7 from '@/assets/images/project/cardsection02.webp'



const title02 = "CARD SECTION"
const txt05 = "부트스트랩 습작 - 카드 섹션 인터랙션"
const txt06 = "작업 툴 : (Bootstarp, HTML, JS, CSS)"
const txt07 = "부트스트랩 Class 활용하여 기본 섹션 및 오브젝트 구성 후 JS, CSS 활용하여 인터랙션 효과 제작"

const images02 = [
    {
        src: work6,
        link: 'http://crayoon000.dothome.co.kr'
    },
    {
        src: work7,
        link: ''
    }
]


const title = "INVITATION"
const txt01 = "개인 모바일 청첩장 작업"
const txt02 = "작업 툴 : (Vue, Nuxt3, SCSS, Supabase, Git, Adobe_Ai)"
const txt04 = "Vue.js를 기반으로 한 Nuxt3 프레임워크를 사용하여 개발하였으며, scss를 활용해 디자인 및 애니메이션을 구현하였고 백엔드로 Supabase를 활용하여 방명록 기능 구현하였으며, 전체적인 버전 관리는 Git으로 진행하였고, Netlify 이용하여 호스팅 진행하였습니다 모바일 청첩장 특성 상 따로 반응형 작업 없이 모바일 사용 환경에 최적화된 디자인으로 제작하였습니다. 메인 일러스트 또한 직접 Adobe Ai로 그려 저만의 캐릭터 감성을 살린 모바일 청첩장을 완성하였습니다."

const images = [
    {
        src: work1,
        link: 'https://wedding0823.netlify.app/'
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
    },
]


</script>

<style lang="scss" scoped src="@/assets/scss/project.scss"></style>