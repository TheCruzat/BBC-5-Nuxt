<template>
	<section>
		<div class="flat">
			<h3>Occasionally, I write</h3>
			<div class="cards">
					<a v-for="(post, ndx) in posts" v-if="ndx < 6" :href="post.link" target="_blank" class="wildlink">
						<p class="card-title">{{ post.title.rendered }}</p>
					</a>
			</div>
			<div>
				<p><a class="btn" :href="blogURL" target="_blank" title="read more from Dan Cruzat at Coffee with the Cruzat">Go to Blog</a></p>
			</div>
		</div>
	</section>
</template>

<script>

import {blogURL} from '@/content/LinkSets';

const rootie = 'https://coffeewith.thecruzat.com/wp-json/wp/v2/posts';

export default {
	name: "Blog",

	data() {
		return {
			posts: [],
			blogURL: blogURL
		}
	},

	methods: {

    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },

    async getAllData() {
      try {
        const res = await fetch(rootie);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        console.log('+++', data);
        this.posts = data;

      } catch (err) {
        this.getResult = err.message;
      }
    },

	},

	mounted:function() {
		this.getAllData();
	}

}
</script>

<style scoped lang="scss">

  @import "@/styles/global.scss";

  section .cards {

  	margin-bottom: 3rem;
  	display: grid;
  	grid-template-columns: 100%;
  	gap: 1.8rem var(--gutter);
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;

		$card_med: calc(50% - (#{var(--gutter)} / 2));
		$card_largo: calc(33.3333% - (#{var(--gutter)} / 1.5));

		@include mFlip(36rem) {
			grid-template-columns: $card_med $card_med;
		}

		@include mFlip() {
			grid-template-columns: $card_largo $card_largo $card_largo;

		}

  	> a {
  		border-radius: 0.5rem;
  		text-decoration: none;
  		border: 2px solid var(--paper);
  		width: 100%;
  		margin-right: 0;
  		margin-bottom: 0;
  		display: flex;
  		align-items: center;

  		&:hover {
  			background: #fff;
  			border-color: var(--con);
  		}

  		p {
  			margin: 0;
  			line-height: 1.4;

  			&:after {
  				display: none;
  			}
  		}
  	}
  }

	.card-title {
  	margin: 0;
  }

  .card-excerpt {
  	font-size: 0.9rem;

  	p {
  		margin: 0;
  	}
  }


</style>
