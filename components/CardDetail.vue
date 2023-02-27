<script setup>
const { detail, listScore } = defineProps(['detail', 'listScore'])
</script>

<template>
	<div class="h-[40rem] absolute bottom-0 left-0 right-0 overflow-hidden">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="ml-52 h-24">
				<div class="font-medium text-lg whitespace-nowrap one-line">{{ detail?.volumeInfo?.publishedDate }}</div>
				<div class="font-semibold text-3xl whitespace-nowrap one-line">{{ detail?.volumeInfo?.title }}</div>
				<div class="font-medium text-xs whitespace-nowrap one-line">{{ detail?.volumeInfo?.publisher }}</div>
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
</template>

<style>
.one-line {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
}
</style>
