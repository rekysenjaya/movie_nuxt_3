<script setup>
const value = ref('')
const { loading, list, getList } = useAutocompleteSearch()
</script>

<template>
	<div class="flex flex-row items-center relative">
		<input placeholder="Find movie" v-model="value" @input="getList($event.target.value)"
			class="bg-transparent pl-10 pr-10 pt-2 pb-2 w-full focus-visible:outline-none" />
		<img class="h-5 w-auto mr-2 absolute top-2 left-2" src="/icon_movie.png" alt="" />
		<img class="h-5 w-auto mr-2 absolute top-2 right-2" src="/search.png" alt="" />
		<div :class="(list.length && value.length) ? 'block' : 'hidden'"
			class=" p-10 bg-red-50 absolute top-full left-0 right-0">
			ada
		</div>
	</div>
</template>
