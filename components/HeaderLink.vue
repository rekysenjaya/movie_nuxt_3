<script setup>
import constants from '~~/constants';
import { useAuthStore } from '~~/stores/auth-store';
import { useProfileStore } from '~~/stores/profile-store';
const authStore = useAuthStore()
const profileStore = useProfileStore();
</script>

<template>
	<div class="flex items-center space-x-4 uppercase">
		<div v-for="menu of constants.menusList" class="relative" :class="!!menu?.icon ? 'group' : ''">
			<NuxtLink :to="menu?.to || '#'"
				class="flex items-center whitespace-nowrap text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
				<img v-if="!!menu?.icon" src="/icon_grid.png" alt="grid" class="h-5 mr-1" />{{ menu?.name }}
			</NuxtLink>
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
		<div v-if="profileStore?.user?.id" class="relative group">
			<div
				class="flex items-center whitespace-nowrap text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
				{{ profileStore?.user?.username }}</div>
			<div class="invisible group-hover:visible">
				<div class="p-3 pb-0 bg-white absolute z-10 top-9.5 rounded-md flex flex-col">
					<NuxtLink to="/change-password" class="whitespace-nowrap font-semibold text-xs pb-3 text-black hover:font-bold cursor-pointer">
						Change Password
					</NuxtLink>
					<div @click="authStore.logout()" class="font-semibold text-xs pb-3 text-black hover:font-bold cursor-pointer">
						Logout
					</div>
				</div>
			</div>
		</div>
		<NuxtLink v-else to="/login"
			class="flex items-center whitespace-nowrap text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
			Login
		</NuxtLink>
	</div>
</template>
