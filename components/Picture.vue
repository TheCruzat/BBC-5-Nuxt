<template>
	<picture>

		<source v-if="this.img.full.webp" media="(min-width: 40rem)" :srcset="this.img.full.webp" type="image/webp">
		<source v-if="this.img.full.jpg" media="(min-width: 40rem)" :srcset="this.img.full.jpg">

		<source v-if="this.img.mobile.webp" :srcset="this.img.mobile.webp" type="image/webp">
		<source v-if="this.img.mobile.jpg" :srcset="this.img.mobile.jpg">

		<img v-if="this.img.full.jpg && noLazy" :src="this.img.full.jpg" alt="" :style="imgStyle">
		<img v-if="this.img.full.jpg && !noLazy" :src="this.img.full.jpg" loading="lazy" alt="" :style="imgStyle">

	</picture>
</template>

<script>
	export default {
		name: "Picture",
		props: {
			img: Object,
			noLazy: Boolean,
			imgStyle: Object,
		},
		mounted:function() {
			// console.log(this.img.full.webp);
		}
	}
</script>

<style lang="scss" scoped>
	picture {
		display: block;
		width: auto; // 100%;
		height: auto; // 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		// right: var(--rails);
		z-index: -1;
		// overflow: hidden;
  		clip-path: inset(0);

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: fixed;
			top: 0;
			left: 0;
		}
	}
</style>
