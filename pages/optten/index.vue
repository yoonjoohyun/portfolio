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
    <ContentHigh
        :title="title02"
        :hightxt01="txt05"
        :hightxt02="txt06"
        :hightxt03="txt07"
        :hightxt04="txt08"
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
</div>
</template>

<script setup>

import work1 from '@/assets/images/optten/pc/guide.webp'
import work2 from '@/assets/images/optten/pc/login.webp'
import work3 from '@/assets/images/optten/pc/main.webp'
import work4 from '@/assets/images/optten/pc/mypage.webp'
import work5 from '@/assets/images/optten/pc/payment.webp'
import work6 from '@/assets/images/optten/pc/qna.webp'
import work7 from '@/assets/images/optten/pc/setting.webp'

const title = "METACLOID"
const txt01 = "메타클로이드 개발 프로젝트 (가상 모바일 클라우드 서비스)"
const txt02 = "포지션 : 웹 디자인 & 퍼블리싱"
const txt03 = "작업 툴 : (FIGMA, VUE, NUXT3, SCSS)"
const txt04 = "기획안을 토대로 FIGMA를 활용하여 디자인하였고 처음 경험해보는 VUE기반 개발환경이었지만 큰 어려움 없이 적응하여 퍼블리싱 완료하였으며 디자인 및 퍼블리싱까지 약 3달 정도의 개발 시간이 소요되었습니다."

const images = [
    {
        src: work1,
        link: 'http://app.metacloid.com/'
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
    {
        src: work6,
        link: ''
    },
    {
        src: work7,
        link: ''
    }
]



import work8 from '@/assets/images/optten/mobile/guide_m.webp'
import work9 from '@/assets/images/optten/mobile/login_m.webp'
import work10 from '@/assets/images/optten/mobile/main_m.webp'
import work11 from '@/assets/images/optten/mobile/mypage_m.webp'
import work12 from '@/assets/images/optten/mobile/payment_m.webp'
import work13 from '@/assets/images/optten/mobile/setting_m.webp'
import work14 from '@/assets/images/optten/mobile/ticket_m.webp'
import work15 from '@/assets/images/optten/mobile/logout_m.webp'


const txt07 = "모바일 디자인 (반응형)"
const txt08 = "모바일, 태블릿, 웹 사용성을 고려하여 뷰포트 사이즈를 책정하였으며 특히 태블릿의 경우 높이에 따른 반응형 디자인을 추가하며 디테일을 살렸습니다."

const images02 = [
    {
        src: work8,
        link: 'http://app.metacloid.com/'
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
        src: work14,
        link: ''
    },
    {
        src: work15,
        link: ''
    }
]


import work16 from '@/assets/images/optten/dashboard/dashboard.webp'
import work17 from '@/assets/images/optten/dashboard/dashboard_login.webp'
import work18 from '@/assets/images/optten/dashboard/dashboard_user.webp'
import work19 from '@/assets/images/optten/dashboard/dashboard_admin.webp'

const title03 = "DASHBOARD"
const txt09 = "메타클로이드 서비스 관리자 페이지"
const txt10 = "포지션 : 웹 디자인 & 퍼블리싱"
const txt11 = "작업 툴 : (VUE, NUXT3, SCSS)"
const txt12 = "기획서 참고하여 디자인 작업 없이 바로 퍼블리싱으로 제작하였습니다."

const images03 = [
    {
        src: work16,
        link: 'http://dashboard.metacloid.com/'
    },
    {
        src: work17,
        link: ''
    },
    {
        src: work18,
        link: ''
    },
    {
        src: work19,
        link: ''
    }
]

</script>

<style lang="scss" scoped src="@/assets/scss/optten.scss"></style>