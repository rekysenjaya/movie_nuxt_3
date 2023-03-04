<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '~~/stores/auth-store';

const schema = Yup.object().shape({
	username: Yup.string().required('Username is required'),
});

function onSubmit(values, { setErrors }) {
	const authStore = useAuthStore();
	const { username } = values;

	return authStore.forgotPassword(username)
		.catch(error => setErrors({ apiError: error }));
}
</script>

<template>
	<div class="m-11 mx-auto w-[30rem] p-5 rounded-xl" style="background-color:rgba(255, 255, 255, 0.05);">
		<h2 class="text-xl">Forgot Password</h2>
		<Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
			<div class="mt-3">
				<div class="font-medium">Username</div>
				<Field name="username" type="text"
					class="bg-transparent w-full focus-visible:outline-none border-slate-600 border-2 rounded-md px-2"
					:class="{ 'is-invalid': errors.username }" />
				<div class="text-[#fc0d39]">{{ errors.username }}</div>
			</div>
			<div class="mt-3 flex justify-between ">
				<button class="h-8 bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium flex flex-row items-center"
					:disabled="isSubmitting">
					<img v-show="isSubmitting" src="/loading.png" alt="loading" class="animate-spin w-4 h-4" />
					<div :class="isSubmitting ? 'ml-3' : ''">Forgot Password</div>
				</button>
				<NuxtLink to="/login"
					class="h-8 bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium flex flex-row items-center">Login
				</NuxtLink>
			</div>
			<div v-if="errors.apiError" class="mt-3 bg-[#fc0d39] p-2 rounded-md">{{ errors.apiError }}</div>
		</Form>
	</div>
</template>
