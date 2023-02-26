<script setup>
import constants from '~~/constants';
const { loading, list, getList } = useAutocompleteSearch()
const { title, byCategory } = defineProps(['title', 'byCategory'])
const sortBy = ref('popularity')

const clickOrderBy = (val) => {
	sortBy.value = val
}

const refresh = () => getList({ q: title, maxResults: byCategory ? 12 : 15 })

onMounted(() => {
	if (!list.value.length) {
		refresh()
	}
})

</script>

<template>
	<div>
		<div class="bg-[#292e35] pt-16 pb-48">
			<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div class="mb-2 h-1 bg-[#E74C3C] w-[112px]" />
				<div class="flex justify-between">
					<h3 class="text-2xl font-semibold">{{ title }}</h3>
					<div v-if="!byCategory" class="flex flex-row">
						<button v-for="val in constants.listFilterBy"
							class="p-1 w-28 text-center rounded-full border-2 hover:font-semibold text-sm m-1"
							v-on:click="clickOrderBy(val)"
							:class="sortBy === val ? 'bg-[#fc0d39] border-[#fc0d39] hover:bg-red-700 hover:border-2' : 'bg-[#1e232a] border-[#1e232a] hover:bg-[#23272c]'">{{
								val }}</button>
					</div>
				</div>
			</div>
		</div>
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 -mt-44 mb-10 flex flex-row">
			<div v-if="byCategory">
				<Category />
			</div>
			<div class="grid gap-4 gap-y-8" :class="byCategory ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-5'">
				<CardMovie v-for="movie in list" :movie="{ ...movie, rate: constants.getRndInteger(3.0, 5) }" />
			</div>
		</div>
	</div>
</template>
