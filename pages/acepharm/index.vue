<template>
    <div class="wrap">
        <ContentWide
            :title="title"
            :widetxt01="txt01"
            :widetxt02="txt02"
            :widetxt03="txt03"
            :widetxt04="txt04"
            :images="images"
        />
        <ContentWide
            :title="title02"
            :widetxt01="txt05"
            :widetxt02="txt06"
            :widetxt03="txt07"
            :widetxt04="txt08"
            :images="images02"
        />
        <ContentWide
            :title="title03"
            :widetxt01="txt09"
            :widetxt02="txt10"
            :widetxt03="txt11"
            :widetxt04="txt12"
            :images="images03"
        />
        <ContentWide
            :widetxt04="txt13"
            :images="images04"
        />
    </div>
</template>

<script setup>

import work1 from '@/assets/images/acepharm/beaunoia_main.webp'
import work2 from '@/assets/images/acepharm/beaunoia_02.webp'
import work3 from '@/assets/images/acepharm/object01_wide.webp'
import work4 from '@/assets/images/acepharm/object02_wide02_1900x940.webp'
import work5 from '@/assets/images/acepharm/skineat_1900x940.webp'

const title = "BEAUNOIA"
const txt01 = "신규 코스매틱 브랜드 홈페이지 제작"
const txt02 = "포지션 : 웹 디자인 & 퍼블리싱"
const txt03 = "작업 툴 : (adobe Ps, adobe Ai, HTML, CSS, JS, Cafe24)"
const txt04 = "브랜드 컨셉, 홈페이지 기획 및 제작, 제품 촬영 핸들링, 제품 3D 목업 제작 핸들링 등 전반적인 브랜드 이미지 구축부터 제품 촬영 및 목업 제작까지 주도적으로 프로젝트를 진행하였으며, 폐쇄적인 환경의 카페24 개발환경에 잘 적응하여 기획된 시안의 구성을 100% 구현하였습니다 그러나 갑작스러운 경영 방침 변경으로 인해 컨셉 변경 후 급히 마무리하게된 프로젝트입니다."

const images = [
    {
        src: work1,
        link: 'https://crayon000.dothome.co.kr/beaunoia_copy/index.html'
    },
    {
        src: work2,
        link: 'https:www.beaunoia.com'
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


import work6 from '@/assets/images/acepharm/ravender.webp'
import work7 from '@/assets/images/acepharm/camomile.webp'

const title02 = "COUPLING"
const txt05 = "커플링 마사지 젤 상세페이지 리뉴얼"
const txt06 = "포지션 : 웹 디자인"
const txt07 = "작업 툴 : (adobe Ps, adobe Ai)"
const txt08 = "올리브영 입점 브랜드 'coupling'마사지 젤 상세페이지 리뉴얼 작업"

const images02 = [
    {
        src: work6,
        link: 'https://blog.naver.com/crayon_00/223337806696'
    },
    {
        src: work7,
        link: 'https://blog.naver.com/crayon_00/223337807315'
    }
]


import work8 from '@/assets/images/acepharm/blog_main01.webp'
import work9 from '@/assets/images/acepharm/blog_main02.webp'
import work10 from '@/assets/images/acepharm/blog_main03.webp'
import work11 from '@/assets/images/acepharm/moon01.webp'
import work12 from '@/assets/images/acepharm/moon02.webp'
import work13 from '@/assets/images/acepharm/moon03.webp'
import work21 from '@/assets/images/acepharm/ace03.webp'
import work22 from '@/assets/images/acepharm/ace04.webp'
import work23 from '@/assets/images/acepharm/ace05.webp'

const title03 = "Online BRAND"
const txt09 = "에이스제약, 문헤일로, 비인 블로그 및 스토어팜 리뉴얼"
const txt10 = "포지션 : 웹 디자인"
const txt11 = "작업 툴 : (adobe Ps, adobe Ai)"
const txt12 = "죽어있던 온라인 전용 브랜드들을 전체적으로 활성화 시키기 위해 마케터와 협업하여 메인배너 및 썸네일 이미지 등 새로운 컨셉으로 리뉴얼 작업하였습니다. 단순 썸네일 변경작업 만으로도 유입수가 유의미하게 늘어나는 경험을 하였습니다."

const images03 = [
    {
        src: work8,
        link: ''
    },
    {
        src: work9,
        link: ''
    },
    {
        src: work10,
        link: ''
    },
    {
        src: work11,
        link: ''
    },
    {
        src: work12,
        link: ''
    },
    {
        src: work13,
        link: ''
    },
    {
        src: work21,
        link: ''
    },
    {
        src: work22,
        link: ''
    },
    {
        src: work23,
        link: ''
    }
]


import work14 from '@/assets/images/acepharm/viin01.webp'
import work15 from '@/assets/images/acepharm/viin02.webp'
import work16 from '@/assets/images/acepharm/viin03.webp'
import work17 from '@/assets/images/acepharm/viin04.webp'
import work18 from '@/assets/images/acepharm/viin05.webp'
import work19 from '@/assets/images/acepharm/ace01.webp'
import work20 from '@/assets/images/acepharm/ace02.webp'

const txt13 = "온라인 브랜드 이미지 리뉴얼 작업"

const images04 = [
    {
        src: work14,
        link: ''
    },
    {
        src: work15,
        link: ''
    },
    {
        src: work16,
        link: ''
    },
    {
        src: work19,
        link: ''
    },
    {
        src: work20,
        link: ''
    },
    {
        src: work17,
        link: ''
    },
    {
        src: work18,
        link: ''
    }
]
</script>

<style lang="scss" scoped src="@/assets/scss/acepharm.scss"></style>