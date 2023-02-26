<script setup>
import constants from '~~/constants';

const route = useRoute()
const sortBy = ref(null)
const category = ref(null)

onMounted(() => {
	sortBy.value = route?.query?.sortBy || constants.listFilterBy[0]
	category.value = route?.query?.category || null
})

watchEffect(() => {
	category.value = route?.query?.category
	sortBy.value = route?.query?.sortBy || constants.listFilterBy[0]
})

</script>

<template>
	<div class="bg-[#1b2029] rounded-xl w-60 mr-3 pb-5">
		<div class="border-b-2 border-[#222a34] font-semibold p-5">Sort Result By</div>
		<div class="border-b-2 border-[#222a34] p-5">
			<div class="group relative">
				<div class="p-2 bg-[#292e35] rounded-md ">
					{{ sortBy }}
				</div>
				<div class="bg-[#292e35] rounded-md invisible group-hover:visible absolute top-10 left-0 right-0">
					<NuxtLink v-for="by of constants.listFilterBy"
						class="cursor-pointer flex items-center whitespace-nowrap text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
						:class="by === sortBy ? 'border-2 border-white' : ''"
						:to="`/category${constants.createObjectToParams({ ...(route?.query || {}), sortBy: by })}`">
						{{ by }}
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="border-b-2 border-[#222a34] font-semibold p-5 mb-2">Genres</div>
		<NuxtLink v-for="item of constants.menusListCategory" class="flex flex-row items-center justify-between m-5 mt-3 mb-0"
			:to="`/category${constants.createObjectToParams({ ...(route?.query || {}), category: item })}`">
			<div>{{ item }}</div>
			<img class="w-4 h-4 object-contain" :src="category === item ? '/checked.png' : '/checked_un.png'" />
		</NuxtLink>
	</div>
</template>
