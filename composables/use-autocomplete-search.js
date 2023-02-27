const useAutocompleteSearch = () => {
	const loading = ref(false)
	const list = ref([])
	const timeout = ref()
	const autocomplete = async (obj) => {
		if (timeout.value)
			clearTimeout(timeout.value);

		timeout.value = setTimeout(async () => {
			loading.value = true
			const { data: { value } } = await useFetch('https://www.googleapis.com/books/v1/volumes', {
				params: {
					startIndex: 1,
					printType: 'books',
					orderBy: true ? 'newest' : 'relevance',
					...obj
				}
			});
			loading.value = false
			list.value = value?.items
		}, 800);
	}

	const getList = async (obj) => {
		loading.value = true
		const { data: { value } } = await useFetch('https://www.googleapis.com/books/v1/volumes', {
			params: {
				startIndex: 1,
				printType: 'books',
				orderBy: true ? 'newest' : 'relevance',
				...obj
			}
		});
		loading.value = false
		list.value = value?.items
	}

	const setInit = () => list.value = []

	return { loading, list, getList, autocomplete, setInit }
}

export default useAutocompleteSearch
