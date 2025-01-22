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
                @wheel="handleWheel">
                <div class="work_container" 
                    :style="{ transform: `translateX(${currentPosition}px)` }">
                    <div v-for="(image, index) in images" 
                        :key="index" 
                        class="work"
                        @touchstart.prevent="startDrag"
                        @touchmove.prevent="onDrag"
                        @touchend.prevent="endDrag">
                        <img :src="image.src" :alt="image.alt" draggable="false">
                    </div>
                </div>
            </div>
            <div class="work_btn">
                <div class="slide_btn" @click="prevSlide"><i class="ri-arrow-left-circle-fill"></i></div>
                <div class="slide_btn" @click="nextSlide"><i class="ri-arrow-right-circle-fill"></i></div>
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

const isDragging = ref(false)
const startX = ref(0)
const startPosition = ref(0)

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
    // 이전 드래그 상태 초기화
    isDragging.value = false
    startX.value = 0
    startPosition.value = 0
    
    // 새로운 드래그 시작
    setTimeout(() => {
        isDragging.value = true
        startX.value = event.touches[0].clientX
        startPosition.value = currentPosition.value
    }, 0)
}

const onDrag = (event) => {
    if (!isDragging.value) return

    const currentX = event.touches[0].clientX
    const diff = currentX - startX.value
    
    // 드래그 감도 조절
    const sensitivity = 1.0
    let newPosition = startPosition.value + (diff * sensitivity)

    // 슬라이드 범위 제한
    const maxPosition = 0
    const minPosition = -(slideWidth.value * (props.images.length - 1))
    newPosition = Math.min(maxPosition, Math.max(minPosition, newPosition))
    
    requestAnimationFrame(() => {
        currentPosition.value = newPosition
    })
}

const endDrag = () => {
    if (!isDragging.value) return
    
    const finalPosition = currentPosition.value
    const finalDiff = finalPosition - startPosition.value
    
    // 상태 초기화
    isDragging.value = false
    startX.value = 0
    startPosition.value = 0
    
    // 드래그 거리에 따른 슬라이드 전환 임계값
    const threshold = slideWidth.value * 0.2
    
    requestAnimationFrame(() => {
        if (Math.abs(finalDiff) >= threshold) {
            // 임계값을 넘으면 다음/이전 슬라이드로 전환
            const slideIndex = Math.round(Math.abs(finalPosition) / slideWidth.value)
            currentPosition.value = -slideIndex * slideWidth.value
        } else {
            // 임계값을 넘지 않으면 원래 위치로 복귀
            currentPosition.value = startPosition.value
        }
    })
}
</script>

<style lang="scss" scoped src="~/assets/scss/content.scss"></style>