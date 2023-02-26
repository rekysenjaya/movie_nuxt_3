<script setup>
const route = useRoute()
const { loading, detail, getDetail } = useGetdetail()

watchEffect(() => {
	getDetail(route.params.id)
})

</script>


<template>
	<ClientOnly>
		<div class="-mt-40 sm:-mt-[3.8rem]">
			<img class="w-full h-96 object-cover" src="/loading_blue.gif" :srcset="detail?.volumeInfo?.imageLinks?.thumbnail"
				:alt="detail?.volumeInfo?.title" />
			detail boos = {{ detail?.volumeInfo?.title || '' }}
			<img v-if="!!loading" class="animate-spin h-3 w-3" src="/loading.png" />
		</div>
		<GridCard maxResults="5" />
	</ClientOnly>
</template>
