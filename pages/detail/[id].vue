<script setup>
const route = useRoute()
const listScore = ref([])
const { loading, detail, getDetail } = useGetdetail()

watchEffect(() => {
	getDetail(route.params.id)
})

const currencyConversion = (val) => {
	return Number(val).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
}


watch(detail, (val, old) => {
	listScore.value = [
		{
			titel: 'user score',
			value: `${val?.volumeInfo?.pageCount || '3621'} Votes`
		},
		{
			titel: 'Status',
			value: 'Released'
		},
		{
			titel: 'language',
			value: 'english'
		},
		{
			titel: 'budget',
			value: `$${currencyConversion(val?.saleInfo?.listPrice?.amount || 100000)}`
		},
		{
			titel: 'production',
			value: 'DC Entertainment'
		}
	]
})
</script>


<template>
	<ClientOnly>
		<div class="-mt-40 sm:-mt-[3.8rem] relative mb-5">
			<img class="w-[100vw] h-[55rem] object-cover" src="/loading_blue.gif"
				:srcset="detail?.volumeInfo?.imageLinks?.thumbnail" :alt="detail?.volumeInfo?.title" />
			<CardDetail :detail="detail" :listScore="listScore" />
			<img v-if="loading" class="animate-spin h-3 w-3 m-10 mx-auto" src="/loading.png" />
		</div>
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-5">RECOMMENDATION MOVIES</div>
		<GridCard maxResults="5" />
	</ClientOnly>
</template>

<style>
.desc {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	color: #000;
}

.five {
	-webkit-line-clamp: 5 !important;
}
</style>
