<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '~~/stores/auth-store';

const schema = Yup.object().shape({
	username: Yup.string().min(6).required('Username is required'),
	password: Yup.string().min(6).required('Password is required')
});

function onSubmit(values, { setErrors }) {
	const authStore = useAuthStore();
	const { username, password } = values;

	return authStore.login(username, password)
		.catch(error => setErrors({ apiError: error }));
}
</script>

<template>
	<div class="m-11 mx-auto w-[30rem] p-5 rounded-xl" style="background-color:rgba(255, 255, 255, 0.05);">
		<h2 class="text-xl">Login</h2>
		<Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
			<div class="mt-3">
				<div class="font-medium">Username</div>
				<Field name="username" type="text"
					class="bg-transparent w-full focus-visible:outline-none border-slate-600 border-2 rounded-md px-2"
					:class="{ 'is-invalid': errors.username }" />
				<div class="text-[#fc0d39]">{{ errors.username }}</div>
			</div>
			<div class="mt-3">
				<div class="font-medium">Password</div>
				<Field name="password" type="password"
					class="bg-transparent w-full focus-visible:outline-none border-slate-600 border-2 rounded-md px-2"
					:class="{ 'is-invalid': errors.password }" />
				<div class="text-[#fc0d39]">{{ errors.password }}</div>
			</div>
			<div class="flex items-center justify-between mt-3">
				<div class="flex items-center">
					<input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300">
					<label for="remember-me" class="ml-2 block text-sm">Remember me</label>
				</div>

				<NuxtLink to="/forgot-password" class="font-medium">Forgot your password?</NuxtLink>
			</div>
			<div class="mt-3 flex justify-between ">
				<button class="h-8 bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium flex flex-row items-center"
					:disabled="isSubmitting">
					<img v-show="isSubmitting" src="/loading.png" alt="loading" class="animate-spin w-4 h-4" />
					<div :class="isSubmitting ? 'ml-3' : ''">Login</div>
				</button>
				<NuxtLink to="/signup"
					class="h-8 bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium flex flex-row items-center">Sign Up
				</NuxtLink>
			</div>
			<div v-if="errors.apiError" class="mt-3 bg-[#fc0d39] p-2 rounded-md">{{ errors.apiError }}</div>
		</Form>
	</div>
</template>
