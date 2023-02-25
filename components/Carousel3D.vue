<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>

<template>
	<div class="pt-5">
		<Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
			<Slide v-for="slide in 10" :key="slide" class="pl-5 pr-5">
				<CardMovieCarousel />
			</slide>

			<template #addons>
				<pagination />
			</template>
		</carousel>
	</div>
</template>

<style scoped>
.carousel__slide {
	opacity: 0.5;
}

.carousel__slide--active {
	opacity: 1;
}

.carousel__pagination-button {
	background-color: blue !important;
}

.carousel__pagination-button::after {
	background-color: #8e9194 !important;
}

.carousel__pagination-button--active::after {
	background-color: red !important;
}
</style>
