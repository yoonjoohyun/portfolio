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

import work1 from '@/assets/images/ticketbus/event/on (0).webp'
import work16 from '@/assets/images/ticketbus/event/banner (4).webp'
import work2 from '@/assets/images/ticketbus/event/on (1).webp'
import work17 from '@/assets/images/ticketbus/event/banner (5).webp'
import work3 from '@/assets/images/ticketbus/event/on (2).webp'
import work18 from '@/assets/images/ticketbus/event/banner (6).webp'
import work4 from '@/assets/images/ticketbus/event/on (3).webp'
import work19 from '@/assets/images/ticketbus/event/banner (2).webp'
import work5 from '@/assets/images/ticketbus/event/on (4).webp'
import work20 from '@/assets/images/ticketbus/event/banner (3).webp'



const title = "DRAWING"
const txt01 = "드로잉 삽화 작업물"
const txt03 = "작업 툴 : (Adobe Ps, Adobe Ai, ClipStudio)"
const txt04 = "서민갑부 삽화 외주, 캐릭터 컨셉 아트, 캐리커쳐, 발레교제 외주"

const images = [
    {
        src: work1,
        link: ''
    },
    {
        src: work16,
        link: ''
    },
    {
        src: work2,
        link: ''
    },
    {
        src: work17,
        link: ''
    },
    {
        src: work3,
        link: ''
    },
    {
        src: work18,
        link: ''
    },
    {
        src: work4,
        link: ''
    },
    {
        src: work19,
        link: ''
    },
    {
        src: work5,
        link: ''
    },
    {
        src: work20,
        link: ''
    }
]

import work8 from '@/assets/images/ticketbus/event/detail (1).webp'
import work9 from '@/assets/images/ticketbus/event/detail (2).webp'
import work10 from '@/assets/images/ticketbus/event/detail (3).webp'
import work11 from '@/assets/images/ticketbus/event/detail (4).webp'
import work12 from '@/assets/images/ticketbus/event/detail (5).webp'
import work13 from '@/assets/images/ticketbus/event/detail (6).webp'
import work14 from '@/assets/images/ticketbus/event/detail (7).webp'
import work15 from '@/assets/images/ticketbus/event/detail (8).webp'

const txt08 = "각각의 이벤트 컨셉에 맞춰 디자인하였으며, Adobe 일러스트레이터를 적극 활용하여 티켓버스만의 아이덴티티를 가져갈 수 있는 디자인을 하였습니다."

const images02 = [
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
        src: work14,
        link: ''
    },
    {
        src: work15,
        link: ''
    }
]

import work21 from '@/assets/images/ticketbus/sns/sns (1).webp'
import work22 from '@/assets/images/ticketbus/sns/sns (2).webp'
import work23 from '@/assets/images/ticketbus/sns/sns (3).webp'
import work24 from '@/assets/images/ticketbus/sns/sns (4).webp'
import work25 from '@/assets/images/ticketbus/sns/sns (5).webp'
import work26 from '@/assets/images/ticketbus/sns/sns (6).webp'



const title03 = "SNS CARD"
const txt09 = "인기 공연 정보를 동물 캐릭터 밈 활용하여 제작"
const txt10 = "포지션 : 웹 디자인"
const txt11 = "작업 툴 : (adobe Ps, adobe Ai)"
const txt12 = "당시 유행했던 우스꽝스러운 동물 밈을 활용하여 공연 정보 카드를 디자인하였고 다양한 커뮤니티에서 재사용 될 수 있게 공유하며 티켓버스를 간접적으로 홍보하기 위한 디자인이었습니다."

const images03 = [
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
    },
    {
        src: work24,
        link: ''
    },
    {
        src: work25,
        link: ''
    },
    {
        src: work26,
        link: ''
    }
]



  </script>
  
  <style lang="scss" scoped src="@/assets/scss/ticketbus.scss"></style>