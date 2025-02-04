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
</div>
</template>

<script setup>

import work1 from '@/assets/images/gven/gvenmain.webp'

const title = "GVEN mall"
const txt01 = "지벤 쇼핑몰 홈페이지 리뉴얼 작업"
const txt02 = "포지션 : 웹 디자인"
const txt03 = "작업 툴 : (adobe Ps, adobe Ai, HTML, CSS, MAKESHOP)"
const txt04 = "메이크샵을 기반으로 제작된 기존 쇼핑몰을 코드 수정하여 리뉴얼했습니다. 기본 스토어 느낌의 단조로운 디자인에서 벗어나 가구사에 어울리는 세련되고 감각적인 스타일로 개선하였으며, 가구 특유의 엣지함을 살리는 레이아웃 구조로 더욱 고급스럽고 감각적인 홈페이지로 디자인하였습니다."

const images = [
    {
        src: work1,
        link: 'http://www.gven.co.kr/index.html'
    }
]

import work2 from '@/assets/images/gven/newnormani.webp'
import work3 from '@/assets/images/gven/unibox.webp'
import work4 from '@/assets/images/gven/ligard.webp'
import work5 from '@/assets/images/gven/amos.webp'
import work6 from '@/assets/images/gven/pladium.webp'

const title02 = "DETAIL PAGE"
const txt05 = "가구 상세페이지 디자인"
const txt06 = "포지션 : 웹 디자인"
const txt07 = "작업 툴 : (adobe Ps, adobe Ai)"
const txt08 = "가구들마다 가지고 있는 목재, 가공법, 마감법, 디자인, 컨셉 등등 각각의 특성들을 살릴 수 있는 상세페이지로 소비자가 실제 가구점에서 가구를 볼 때 중점적으로 보는 부분을 온라인에서도 최대한 확인할 수 있게 세세히 전달하였으며, 특히 조립형 가구들의 경우 상세한 설명서 제공, 다양한 공간 활용법 제시, 조립 시 안전 사항을 명시하며 소비자가 믿고 제품을 구매할 수 있게 제작하였습니다."

const images02 = [
    {
        src: work2,
        link: 'http://www.gven.co.kr/shop/shopdetail.html?branduid=85391&search=&xcode=015&mcode=001&scode=&special=1&GfDT=a2p3UQ%3D%3D'
    },
    {
        src: work3,
        link: 'http://www.gven.co.kr/shop/shopdetail.html?branduid=85376&search=%C0%AF%B4%CF%B9%DA%BD%BA&sort=order&xcode=010&mcode=002&scode=&GfDT=bm51W14%3D'
    },
    {
        src: work4,
        link: 'http://www.gven.co.kr/shop/shopdetail.html?branduid=187961&xcode=006&mcode=006&scode=&type=X&sort=manual&cur_code=006006&search=&GfDT=bGp3UQ%3D%3D'
    },
    {
        src: work5,
        link: 'http://www.gven.co.kr/shop/shopdetail.html?branduid=85279&xcode=015&mcode=001&scode=&type=X&sort=manual&cur_code=015001&search=&GfDT=bm19W18%3D'
    },
    {
        src: work6,
        link: 'http://www.gven.co.kr/shop/shopdetail.html?branduid=716376&xcode=011&mcode=002&scode=&type=X&sort=manual&cur_code=011002&search=&GfDT=bmp8W18%3D'
    }
]

</script>

<style lang="scss" scoped src="@/assets/scss/gven.scss"></style>
