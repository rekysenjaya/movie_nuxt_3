<template>
	<Carousel3D />
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="grid sm:grid-cols-4 lg:grid-cols-6 gap-4">
			<CardMovie v-for="slide in 10" :key="slide" :movie="{ key: slide }" />
		</div>
	</div>
</template>
