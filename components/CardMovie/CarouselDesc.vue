<script setup>
const { movie } = defineProps(['movie'])
</script>

<template>
	<div class="p-5 text-left font-normal">
		<div class="flex flex-row items-center text-lg">
			<img class="h-4 mr-1 w-auto" src="/start.png" alt="start" />
			<span>{{ movie?.rate }}</span>
		</div>
		<h3 class="text-xl font-bold uppercase mt-1">{{ movie?.volumeInfo?.title }}</h3>
		<div class="flex flex-row items-center mt-1">
			<div class="text-base">2023</div>
			<div class="bg-[#808080] h-1.5 w-1.5 m-1 rounded-full" />
			<div class="text-base">Sci-Fi</div>
		</div>
		<div class="text-xs desc mt-1">{{ movie?.volumeInfo?.description }}</div>
	</div>
</template>

<style>
.desc {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
</style>
