<script setup>
const { movie } = defineProps(['movie'])
</script>

<template>
	<div class="hidden lg:ml-6 lg:block h-[22rem]">
		<div class="font-semibold flex flex-row bg-black mb-5 mt-5 grid grid-cols-2 gap-4">
			<CardMovieImage :movie="{ ...movie, scale: true }" />
			<CardMovieCarouselDesc :movie="movie" />
		</div>
	</div>
	<div class="lg:hidden bg-black">
		<CardMovieImage :movie="{ ...movie, scale: true }" />
		<CardMovieCarouselDesc :movie="movie" />
	</div>
</template>
