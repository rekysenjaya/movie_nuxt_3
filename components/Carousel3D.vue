<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import constants from '~~/constants';
const currentSlide = ref(0)
const { list, getList } = useAutocompleteSearch()

onMounted(() => {
	if (!list.value.length) {
		getList({ q: 'love', maxResults: 3 })
	}
})

const slideTo = (val) => currentSlide.value = val

</script>

<template>
	<div class="pt-5 pb-5">
		<Carousel :itemsToShow="3" :wrapAround="true" :transition="500" v-model="currentSlide">
			<Slide v-for="movie in list" class="pl-5 pr-5">
				<CardMovieCarousel :movie="{ ...movie, rate: constants.getRndInteger(3.0, 5) }" />
			</Slide>
		</carousel>

		<div class="flex flex-row items-center justify-center">
			<div v-for="(slide, index) in list" class="h-3 w-3 m-1 rounded-full cursor-pointer"
				:class="currentSlide === index ? 'w-16 bg-[#E74C3C] ' : 'bg-[#808080]'" @click="slideTo(index)" />
		</div>
	</div>
</template>

<style scoped>
.carousel__slide {
	opacity: 0.5;
}

.carousel__slide--active {
	opacity: 1;
}
</style>
