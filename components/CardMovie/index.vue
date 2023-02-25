<script setup>
const { movie } = defineProps(['movie'])
</script>

<template>
	<div>
		<CardMovieImage :movie="movie" />
		<div class="pt-3">
			<h3 class="text-base font-semibold uppercase">Space Sweepers</h3>
			<p class="text-sm font-extralight">2020</p>
		</div>
	</div>
</template>
