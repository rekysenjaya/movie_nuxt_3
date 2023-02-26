<script setup>
import constants from '~~/constants';
</script>

<template>
	<div class="flex items-center space-x-4 uppercase">
		<div v-for="menu of constants.menusList" class="relative" :class="!!menu?.icon ? 'group' : ''">
			<a :href="menu?.to || '#'"
				class="flex items-center whitespace-nowrap text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
				<img v-if="!!menu?.icon" src="/icon_grid.png" alt="grid" class="h-5 mr-1" />{{ menu?.name }}
			</a>
			<div class="invisible group-hover:visible">
				<div v-if="!!menu?.icon" class="p-3 pb-0 bg-white absolute z-10 top-9.5 rounded-md flex flex-col">
					<NuxtLink v-for="category of constants.menusListCategory"
						:to="`/category${constants.createObjectToParams({ category })}`"
						class="font-semibold text-xs pb-3 text-black hover:font-bold">
						{{ category }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
