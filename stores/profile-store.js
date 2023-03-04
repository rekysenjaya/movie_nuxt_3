import { defineStore } from 'pinia';
import { fetchWrapper } from '~~/helpers/fetch-wrapper';
import { useAuthStore } from './auth-store';

const baseUrl = `http://localhost:3000`;

export const useProfileStore = defineStore({
	id: 'profile',
	state: () => ({
		user: {},
	}),
	actions: {
		async getProfile() {
			const user = await fetchWrapper.get(`${baseUrl}/profile`);
			if (user?.id) {
				this.user = user
			} else {
				this.user = {}
				useAuthStore().token = ''
				localStorage.setItem('token', '')
			}
		},
	}
});
