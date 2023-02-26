const menusList = [
	{
		name: 'Categories',
		icon: '/icon_grid.png',
		to: ''
	},
	{
		name: 'Movies',
		to: ''
	},
	{
		name: 'TV Shows',
		to: ''
	},
	{
		name: 'Login',
		to: ''
	}
]

const menusListCategory = [
	'Action',
	'Adventure',
	'Animation',
	'Comedy',
	'Crime',
	'Documentary',
	'Drama',
	'Family',
	'Fantasy',
	'History',
	'Horror'
]

const listFilterBy = ['Popularity', 'Release Date']

const getRndInteger = (min, max) => {
	return Number(Math.random() * (max - min) + min).toFixed(1);
}

const createObjectToParams = (data) => {
	let params = ''
	if (Object.keys(data).length) {
		let count = 0
		Object.entries(data).forEach(v => {
			if (v[1]) {
				params += !count ? '?' : '&'
				params += `${v[0]}=${encodeURIComponent(v[1])}`
				count += 1
			}
		});
	}
	return params
}

export default {
	menusList,
	menusListCategory,
	listFilterBy,
	getRndInteger,
	createObjectToParams
}
