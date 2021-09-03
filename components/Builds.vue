<template>
  <section>

    <div v-for="set in links" :key="set.header" class="flat">
      <h3>{{ set.header }}</h3>
      <WildSet>
        <WildLink v-for="link in set.links" :key="link.title" :title="link.title" :desc="link.desc" :url="link.url"  />
      </WildSet>
    </div>

    <FinaleCTA subject="I%20want%20to%20talk%20about%20one%20of%20your%20builds" />

  </section>
</template>

<script>
import WildSet from "@/components/WildSet";
import WildLink from "@/components/WildLink";
import FinaleCTA from "@/components/FinaleCTA";
import {LinkSets} from "@/content/LinkSets";
export default {
  name: 'Builds',
  components: {WildSet, WildLink, FinaleCTA},
  data:function() {
    return {
      links: LinkSets
    }
  },
  props: {
    msg: String
  }
}
</script>

<style>

</style>
