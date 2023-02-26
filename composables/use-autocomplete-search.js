const useAutocompleteSearch = () => {
	const loading = ref(false)
	const list = ref([])
	const timeout = ref()
	const getList = async (obj) => {
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

	return { loading, list, getList }
}

export default useAutocompleteSearch
