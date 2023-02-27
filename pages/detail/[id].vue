<script setup>
import constants from '~~/constants';

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
			<div class="h-[40rem] absolute bottom-0 left-0 right-0 overflow-hidden">
				<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div class="ml-52 h-24">
						<div class="font-medium text-lg whitespace-nowrap">{{ detail?.volumeInfo?.publishedDate }}</div>
						<div class="font-semibold text-3xl whitespace-nowrap">{{ detail?.volumeInfo?.title }}</div>
						<div class="font-medium text-xs whitespace-nowrap">{{ detail?.volumeInfo?.publisher }}</div>
					</div>
				</div>
				<div style="background: rgba(0, 0, 0, 0.5)">
					<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div class="ml-52 flex flex-row items-center p-4">
							<img src="/start.png" class="w-8 h-8 mr-4" />
							<div class="text-3xl font-semibold mr-4">{{ detail?.rate }}</div>
							<div v-for="(item, index) of listScore" class="mr-8 pr-8 border-[#ffffff80]"
								:class="index == listScore.length - 1 ? '' : 'border-r-2'">
								<div class="uppercase text-xs text-[#ffffff80]">{{ item.titel }}</div>
								<div class="uppercase text-xs">{{ item.value }}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-white h-[11rem] relative">
					<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-row relative">
						<div class="ml-52 pt-4">
							<div class="uppercase text-[#FF0000] mb-4">OVERVIEW</div>
							<div class="desc" v-html="detail?.volumeInfo?.description" />
						</div>
						<img class="w-52 h-80 absolute -top-40 left-0" src="/loading_blue.gif"
							:srcset="detail?.volumeInfo?.imageLinks?.thumbnail" />
					</div>
				</div>
				<CardComment />
			</div>
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
