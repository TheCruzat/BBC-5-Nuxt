<template>
	<section>
		<div v-for="post in posts" class="flat">
			<a :href="post.link" target="_blank">{{ post.title.rendered }}</a>
		</div>
		<div class="flat">
			<p><a class="btn" href="//coffeewith.thecruzat.com" target="_blank" title="read more from Dan Cruzat at Coffee with the Cruzat">Go to Blog</a></p>
		</div>
	</section>
</template>

<script>

const rootie = 'https://coffeewith.thecruzat.com/wp-json/wp/v2/posts';

export default {
	name: "Blog",

	data() {
		return {
			posts: []
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

        console.log(data);
        this.posts = data;

        /* const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          length: res.headers.get("Content-Length"),
          data: data,
        }; */

        // this.getResult = this.fortmatResponse(result);
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


</style>
