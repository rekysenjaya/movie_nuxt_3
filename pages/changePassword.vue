<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '~~/stores/auth-store';

const schema = Yup.object().shape({
	passwordOld: Yup.string().min(6).required('Password Old is required'),
	passwordNew: Yup.string().min(6).required('Password New is required'),
	repassword: Yup.string().required().oneOf([Yup.ref('passwordNew'), null], 'Passwords must match New')
});

function onSubmit(values, { setErrors }) {
	const router = useRouter()
	const authStore = useAuthStore();
	const { passwordOld, passwordNew } = values;
	let username = ''
	if (router?.currentRoute?.value?.query?.username) {
		username = router?.currentRoute?.value?.query?.username
	}
	return authStore.changePassword(username, passwordOld, passwordNew)
		.catch(error => setErrors({ apiError: error }));
}
</script>

<template>
	<div class="m-11 mx-auto w-[30rem] p-5 rounded-xl" style="background-color:rgba(255, 255, 255, 0.05);">
		<h2 class="text-xl">Change Password</h2>
		<Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }" class="pb-5">
			<div class="mt-3">
				<div class="font-medium">Old Password</div>
				<Field name="passwordOld" type="password"
					class="bg-transparent w-full focus-visible:outline-none border-slate-600 border-2 rounded-md px-2"
					:class="{ 'is-invalid': errors.passwordOld }" />
				<div class="text-[#fc0d39]">{{ errors.passwordOld }}</div>
			</div>
			<div class="mt-3">
				<div class="font-medium">New Password</div>
				<Field name="passwordNew" type="password"
					class="bg-transparent w-full focus-visible:outline-none border-slate-600 border-2 rounded-md px-2"
					:class="{ 'is-invalid': errors.passwordNew }" />
				<div class="text-[#fc0d39]">{{ errors.passwordNew }}</div>
			</div>
			<div class="mt-3">
				<div class="font-semibold">Re Password</div>
				<Field name="repassword" type="password"
					class="bg-transparent w-full focus-visible:outline-none border-slate-600 border-2 rounded-md px-2"
					:class="{ 'is-invalid': errors.repassword }" />
				<div class="text-[#fc0d39]">{{ errors.repassword }}</div>
			</div>
			<div class="mt-3 flex justify-between ">
				<button class="h-8 bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium flex flex-row items-center"
					:disabled="isSubmitting">
					<img v-show="isSubmitting" src="/loading.png" alt="loading" class="animate-spin w-4 h-4" />
					<div :class="isSubmitting ? 'ml-3' : ''">Change Password</div>
				</button>
				<NuxtLink to="/"
					class="h-8 bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium flex flex-row items-center">Cancel
				</NuxtLink>
			</div>
			<div v-if="errors.apiError" class="mt-3 bg-[#fc0d39] p-2 rounded-md">{{ errors.apiError }}</div>
		</Form>
	</div>
</template>
