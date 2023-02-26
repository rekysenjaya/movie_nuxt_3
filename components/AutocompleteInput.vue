<script setup>
const value = ref('')
const { loading, list, getList } = useAutocompleteSearch()
</script>

<template>
	<div class="flex flex-row items-center relative" style="background-color: rgba(0, 0, 0, 0.13);">
		<input placeholder="Find movie" v-model="value" @input="getList({ q: $event.target.value })"
			class="bg-transparent pl-10 pr-10 pt-2 pb-2 w-full focus-visible:outline-none" />
		<img class="h-5 w-auto mr-2 absolute top-2 left-2" src="/icon_movie.png" alt="" />
		<img class="h-5 w-auto mr-2 absolute top-2 right-2" :class="loading ? 'animate-spin' : ''"
			:src="loading ? '/loading.png' : '/search.png'" alt="" />
		<div :class="(list.length && value.length) ? 'block' : 'hidden'"
			class="p-4 pb-0 absolute top-full left-0 right-0 z-10 shadow-lg bg-[#171717] rounded-bl-lg rounded-br-lg">
			<NuxtLink v-for="row of list" class="font-semibold text-sm pb-4 cursor-pointer titel_1 h-9" :to="`/detail/${row?.id}`">
				{{ row?.volumeInfo?.title }}
			</NuxtLink>
		</div>
	</div>
</template>

<style>
.titel_1 {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
}
</style>
