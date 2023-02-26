<script setup>
const route = useRoute()
const { loading, detail, getDetail } = useGetdetail()

watchEffect(() => {
	getDetail(route.params.id)
})
</script>


<template>
	<ClientOnly>
		detail boos = {{ detail?.volumeInfo?.title || '' }}
		<img v-if="!!loading" class="animate-spin h-3 w-3" src="/loading.png" />
	</ClientOnly>
</template>
