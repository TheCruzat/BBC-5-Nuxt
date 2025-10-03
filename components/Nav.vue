<template>
		<nav><div class="wrap">
			<div class="logo-wrap" aria-hidden="true">
				<!-- <Logo /> -->
				builtby the cruzat
			</div>
			<div class="links-wrap">
				<a v-for="link in linkS" :href="link[1]">{{ link[0] }}</a>
			</div>
		</div></nav>
</template>

<script>

import Logo, {types} from "@/components/Logo";

export default {
	name: 'Nav',
	components: {
		Logo,
	},
	data: function() {
		return {
			linkS: linkS,
			types: types,
		}
	}

  // created () {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // unmounted () {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  // methods: {
  //   handleScroll (event) {
//
  //     console.log(event);
  //   }
  // }
}

const linkS = [
	['hello', '#hello'],
	['experience', '#experience'],
	['work', '#work'],
	['blog', '#scribblings'],
	['etc', '#maxims'],
	// ['', '#'],
];

</script>

<style lang="scss">

  @import "@/styles/global.scss";

  .blanco {
  	position: relative;
  }
	nav {
		position: sticky;
		// text-align: center;
		top: 0;
		left:0;
		right: 0;
		width: 100%;
		background: var(--paper); // #fff;
		z-index: 4;
		padding: 0;

		// border-bottom: 1px solid var(--paper);

		@include mFlip() {
			padding: 0.5rem 0;
		}

		.wrap {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			width: 100%;
			max-width: 64rem;
			margin-left: auto;
			margin-right: auto;
			// padding-left: var(--gutter);
			// padding-right: var(--gutter);

			// @include mFlip() {
			// 	padding-left: 32px;
			// 	padding-right: 32px;
			// }

			@include mFlipUnder() {
				align-items: flex-end;
			}
		}

		.logo-wrap {
			width: auto;
			flex-basis: 2;
			flex-grow: 2;
			font-family: var(--title);
			font-size: 1.5rem;
			line-height: 2;
			color: var(--con);

			@include mFlipUnder() {
				width: 100%;
				font-size: 2rem;
				margin-bottom: 0.25rem;
				line-height: 1.5;
				background: #fff;
				padding-top: 0.25rem;
			}

			padding-left: var(--gutter);
			padding-right: var(--gutter);

			@include mFlip() {
				padding-left: 32px;
				padding-right: 32px;
			}

			svg {
				max-width: 16rem;

				path {
					fill: var(--con);
				}
			}
		}

		.links-wrap {
			padding-left: var(--gutter);
			padding-right: var(--gutter);

			@include mFlip() {
				padding-left: 32px;
				padding-right: 32px;
			}
		}

		a {
			display: inline-block;
			flex-basis: 1;
			color: var(--bod);
			padding: 6px 8px;
			line-height: 1.25;

			&:not(:last-child) {
				margin-right: 1rem;
			}

			&.curr {
				background: #fff;
				color: var(--con);
			}
		}
	}

</style>
