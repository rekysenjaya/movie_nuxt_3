<script setup>
import { useAuthStore } from '~~/stores/auth-store';
import { useProfileStore } from '~~/stores/profile-store';

const profileStore = useProfileStore();
const route = useRoute()

const checkToken = () => {
	if (process.client) {
		useAuthStore().$state.token = localStorage.getItem('token')
		profileStore.getProfile()
	}
}

onMounted(() => {
	checkToken()
})


watchEffect(() => {
	if (route?.path && !profileStore?.user?.id) {
		checkToken()
	}
})

</script>

<template>
	<div>
		<nav class="top-0 left-0 right-0 z-10" :class="'absolute'" style="background-color: rgba(255, 255, 255, 0.05);">
			<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div class="relative flex h-16 items-center justify-between">
					<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<!-- Mobile menu button-->
						<button type="button"
							class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
							<svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<NuxtLink to="/">
							<div class="flex flex-shrink-0 items-center">
								<img class="block h-8 w-auto lg:hidden" src="/logo.png" alt="Your Company">
								<img class="hidden h-8 w-auto lg:block" src="/logo.png" alt="Your Company">
							</div>
						</NuxtLink>
						<div class="hidden sm:ml-6 sm:block w-full">
							<AutocompleteInput />
						</div>
					</div>
					<div class="hidden sm:ml-6 sm:block">
						<HeaderLink />
					</div>
				</div>
			</div>

			<!-- Mobile menu, show/hide based on menu state. -->
			<div class="sm:hidden" id="mobile-menu">
				<div class="space-y-1 px-2 pt-2 pb-3">
					<HeaderLink />
					<AutocompleteInput />
				</div>
			</div>
		</nav>
		<div class="pt-40 sm:pt-[4rem]">
			<slot />
		</div>
		<Footer />
	</div>
</template>
