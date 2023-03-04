export default defineNuxtConfig({
	app: {
		head: {
			title: 'Movies',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width-device-width, initial-scale-1' }
			]
		}
	},
	build: {
		transpile: [
			"vee-validate/dist/rules"
		],
	},
	plugins: [
		{ src: '@/plugins/fake-backend', mode: 'client' }
	],
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt'
	],
	hooks: {
		'pages:extend'(pages) {
			pages.map(v => {
				if (v.name === 'changePassword') {
					v.path = '/change-password'
				}
				if (v.name === 'forgotPassword') {
					v.path = '/forgot-password'
				}
				return v
			})
		}
	}
})
