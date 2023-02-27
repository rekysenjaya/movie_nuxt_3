import constants from "~~/constants"

const useGetdetail = () => {
	const loading = ref(false)
	const detail = ref({})

	const getDetail = async (id) => {
		loading.value = true
		const { data: { value } } = await useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
		loading.value = false
		detail.value = { ...value, rate: constants.getRndInteger(3.0, 5) }
	}

	return { loading, detail, getDetail }
}

export default useGetdetail
