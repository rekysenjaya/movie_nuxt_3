const useGetdetail = () => {
	const loading = ref(false)
	const detail = ref({})

	const getDetail = async (id) => {
		loading.value = true
		const { data: { value } } = await useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
		loading.value = false
		detail.value = value
	}

	return { loading, detail, getDetail }
}

export default useGetdetail
