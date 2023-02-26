<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import constants from '~~/constants';

const { loading, list, getList } = useAutocompleteSearch()

onMounted(() => {
	if (!list.value.length) {
		getList({ q: 'love', maxResults: 3 })
	}
})

</script>

<template>
	<div class="pt-5 pb-5">
		<Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
			<Slide v-for="movie in list" class="pl-5 pr-5">
				<CardMovieCarousel :movie="{ ...movie, rate: constants.getRndInteger(3.0, 5) }" />
			</Slide>
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
</style>
