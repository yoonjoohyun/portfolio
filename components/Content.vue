<template>
    <div class="content">
        <div class="txt_box">
            <div class="title">
                <span class="title">{{ title }}</span>
            </div>
            <div class="explain">
                <span class="txt">{{ description }}</span>
            </div>
        </div>
        <div class="work_box">
            <div class="slide_box" 
                ref="slideBox"
                @wheel="handleWheel"
                @touchstart="startDrag"
                @touchmove="onDrag"
                @touchend="endDrag">
                <div class="work_container" 
                    :style="{ transform: `translateX(${currentPosition}px)` }">
                    <div v-for="(image, index) in images" :key="index" class="work">
                        <img :src="image.src" :alt="image.alt">
                    </div>
                </div>
                <div class="left_btn" @click="prevSlide"><i class="ri-arrow-left-circle-fill"></i></div>
                <div class="right_btn" @click="nextSlide"><i class="ri-arrow-right-circle-fill"></i></div>
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
const slideWidth = ref(770) // 초기값 설정

// 슬라이드 넓이를 계산하는 함수 추가
const calculateSlideWidth = () => {
    if (window.innerWidth < 480) {
        slideWidth.value = 370 // 320px + 50px margin
    } else if (window.innerWidth < 980) {
        slideWidth.value = 530 // 480px + 50px margin
    } else {
        slideWidth.value = 770 // 720px + 50px margin
    }
}

// 윈도우 리사이즈 이벤트 핸들러 추가
onMounted(() => {
    calculateSlideWidth()
    window.addEventListener('resize', calculateSlideWidth)
})

const isDragging = ref(false)
const startX = ref(0)
const startPosition = ref(0)

// 마우스 휠 이벤트 핸들러
const handleWheel = (event) => {
    event.preventDefault()
    
    // 휠 아래로 = 다음 슬라이드
    if (event.deltaY > 0) {
        if (currentPosition.value > -(slideWidth.value * (props.images.length - 1))) {
            currentPosition.value -= slideWidth.value
        }
    }
    // 휠 위로 = 이전 슬라이드
    else {
        if (currentPosition.value < 0) {
            currentPosition.value += slideWidth.value
        }
    }
}

// 모바일 터치 이벤트 핸들러
const startDrag = (event) => {
    isDragging.value = true
    startX.value = event.touches[0].clientX
    startPosition.value = currentPosition.value
}

const onDrag = (event) => {
    if (!isDragging.value) return
    
    event.preventDefault()
    const currentX = event.touches[0].clientX
    const diff = currentX - startX.value
    let newPosition = startPosition.value + diff

    // 슬라이드 범위 제한
    const maxPosition = 0
    const minPosition = -(slideWidth.value * (props.images.length - 1))
    newPosition = Math.min(maxPosition, Math.max(minPosition, newPosition))
    
    currentPosition.value = newPosition
}

const endDrag = () => {
    if (!isDragging.value) return
    
    isDragging.value = false
    
    // 슬라이드 위치 스냅
    const slideIndex = Math.round(Math.abs(currentPosition.value) / slideWidth.value)
    currentPosition.value = -slideIndex * slideWidth.value
}

function nextSlide() {
    if (currentPosition.value > -(slideWidth.value * (props.images.length - 1))) {
        currentPosition.value -= slideWidth.value
    }
}

function prevSlide() {
    if (currentPosition.value < 0) {
        currentPosition.value += slideWidth.value
    }
}
</script>

<style lang="scss" scoped src="~/assets/scss/content.scss"></style>