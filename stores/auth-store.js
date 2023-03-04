import { defineStore } from 'pinia';
import { fetchWrapper } from '~~/helpers/fetch-wrapper';
import { useProfileStore } from "~~/stores/profile-store";

const baseUrl = `http://localhost:3000`;

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		token: null
	}),
	actions: {
		async login(username, password) {
			const user = await fetchWrapper.post(`${baseUrl}/login`, { username, password });
			if (user) {
				const router = useRouter()
				this.token = user?.token;
				await localStorage.setItem('token', user?.token);
				router.push({ path: "/" });
			}
		},
		async signup(username, password, repassword) {
			const user = await fetchWrapper.post(`${baseUrl}/signup`, { username, password, repassword });
			if (user) {
				const router = useRouter()
				router.push({ path: "/login" });
			}
		},
		async forgotPassword(username) {
			const user = await fetchWrapper.post(`${baseUrl}/forgot-password`, { username });
			if (user) {
				const router = useRouter()
				router.push({ path: `/change-password`, query: { username } });
			}
		},
		async changePassword(username, passwordOld, passwordNew) {
			const user = await fetchWrapper.post(`${baseUrl}/change-password`, { username, passwordOld, passwordNew });
			if (user) {
				const router = useRouter()
				router.push({ path: this.token ? '/' : `/login` });
			}
		},
		async logout() {
			const profileStore = useProfileStore()
			const router = useRouter()
			localStorage.setItem('token', '');
			profileStore.user = {}
			router.push({ path: "/" });
		}
	}
});
