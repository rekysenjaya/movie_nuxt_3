<script setup>
const { movie } = defineProps(['movie'])
</script>

<template>
	<div class="relative scale-110">
		<img class="w-60"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyWCNu18fRtZn06jSU1iXsyYxFeZ9ucuV5A&usqp=CAU" />
		<div class="p-2 pl-5 pr-5 absolute top-0 right-0" style="background-color: rgba(30, 35, 43, 0.8);">
			{{ movie?.key }}
		</div>
	</div>
</template>
