<script setup>
import constants from '~~/constants';

const listComment = [
	{
		name: 'Sarwenda',
		date: 'January 18, 2023',
		rate: constants.getRndInteger(3.0, 5),
		desc: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`
	},
	{
		name: '',
		date: 'December 18, 2022',
		rate: constants.getRndInteger(3.0, 5),
		desc: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen.`
	}
]

</script>

<template>
	<div class="bg-white h-[20.5rem]">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="uppercase text-[#FF0000] mb-4">REVIEWS</div>
			<div class="grid grid-cols-2 gap-6">
				<div v-for="item of listComment" class="text-[#000] bg-[#F9F9F9] h-52 p-5 rounded-xl shadow-lg">
					<div class="flex flex-row items-center">
						<div class="bg-[#cbccce] rounded-full w-11 h-11 mr-4" />
						<div>
							<div class="text-sm font-bold">{{ item.name }}</div>
							<div class="text-sm font-normal">{{ item.date }}</div>
						</div>
						<div class="p-1 flex flex-row">
							<img src="/start.png" class="w-2 h-2 mr-2" />
							<div class="text-4xl text-[#000] font-semibold">{{ item.rate }}</div>
						</div>
					</div>
					<div class="desc five">{{ item.desc }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
