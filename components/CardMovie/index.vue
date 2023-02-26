<script setup>
const { movie } = defineProps(['movie'])
</script>

<template>
	<div>
		<CardMovieImage :movie="movie" />
		<div class="pt-3">
			<h3 class="text-base font-semibold uppercase truncate hover:text-clip hover:whitespace-normal">{{ movie?.volumeInfo?.title }}</h3>
			<p class="text-sm font-extralight">{{ movie?.volumeInfo?.publishedDate }}</p>
		</div>
	</div>
</template>
