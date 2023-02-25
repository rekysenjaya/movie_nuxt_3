const useAutocompleteSearch = () => {
	const loading = ref(false)
	const list = ref([])
	const timeout = ref()
	const getList = async (q) => {
		loading.value = true
		try {
			if (timeout.value)
				clearTimeout(timeout.value);

			timeout.value = setTimeout(async () => {
				const { data: { value } } = await useFetch('https://www.googleapis.com/books/v1/volumes', {
					params: {
						q,
						startIndex: 1,
						maxResults: 10,
						printType: 'books',
						orderBy: true ? 'newest' : 'relevance'
					}
				});
				list.value = value?.items
			}, 800);

		} catch (error) {

		}
	}

	return { loading, list, getList }
}

export default useAutocompleteSearch
