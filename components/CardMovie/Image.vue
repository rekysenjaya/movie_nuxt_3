<script setup>
const { movie } = defineProps(['movie'])
</script>

<template>
	<div class="relative group/item" :class="movie?.scale ? 'scale-110' : ''">
		<img class="w-60"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyWCNu18fRtZn06jSU1iXsyYxFeZ9ucuV5A&usqp=CAU" />
		<div class="p-1 pl-3 pr-3 absolute top-0 right-0 text-lg font-bold leading-4"
			style="background-color: rgba(30, 35, 43, 0.8);">
			{{ Number(movie?.key || 0).toFixed(1) }}
		</div>
		<NuxtLink :to="`/detail/${movie?.key}`">
			<div class="invisible absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-around pt-2 pb-2"
				:class="!movie?.scale ? 'group-hover/item:visible cursor-pointer' : ''" style="background: rgba(0, 0, 0, 0.8)">
				<div class="flex flex-row items-center justify-center">
					<img class="w-1/4 h-auto mr-1" src="/start.png" alt="start" />
					<div class="text-2xl font-semibold">{{ Number(movie?.key || 0).toFixed(1) }}</div>
				</div>
				<div class="text-lg font-semibold">Action</div>
				<button class="bg-[#fc0d39] uppercase p-1 pl-4 pr-4 rounded-full font-semibold text-sm">View</button>
			</div>
		</NuxtLink>
	</div>
</template>
