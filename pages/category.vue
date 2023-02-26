<script setup>
const route = useRoute()
const category = ref(null)


watchEffect(() => {
	category.value = route?.query?.category
})

</script>

<template>
	<GridCard :title="'Movies'" :byCategory="{}" maxResults="12" />
</template>
