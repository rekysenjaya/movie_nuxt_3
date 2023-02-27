<script setup>
const route = useRoute()
const category = ref(null)


watchEffect(() => {
	category.value = route?.query?.category
})

</script>

<template>
	<ClientOnly>
		<GridCard :title="'Movies'" :byCategory="{}" maxResults="12" />
	</ClientOnly>
</template>
