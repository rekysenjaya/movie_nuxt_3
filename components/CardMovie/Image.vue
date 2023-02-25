<script setup>
const { movie } = defineProps(['movie'])
</script>

<template>
	<div class="relative" :class="movie?.scale ? 'scale-110' : ''">
		<img class="w-60"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyWCNu18fRtZn06jSU1iXsyYxFeZ9ucuV5A&usqp=CAU" />
		<div class="p-1 pl-3 pr-3 absolute top-0 right-0 text-lg font-bold leading-4"
			style="background-color: rgba(30, 35, 43, 0.8);">
			{{ Number(movie?.key || 0).toFixed(1) }}
		</div>
	</div>
</template>
