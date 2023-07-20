<template>
	<section>
		<h2 v-for="res in result">asdf{{ res.title.rendered }}</h2>
	</section>
</template>

<script>
export default {
	name: "Blog",
	data(){
		return {

		}
	},
	setup(){
		/*
		const result = ref(null)

		fetch('https://coffeewith.thecruzat.com/wp-json/wp/v2/posts')
			.then(response => response.json())
			.then(data => result.value = data );

		console.log(result)

		return { result }*/
	}
}
</script>

<style scoped lang="scss">

  @import "@/styles/global.scss";


</style>
