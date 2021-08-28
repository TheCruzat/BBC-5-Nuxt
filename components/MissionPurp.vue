<template>
  <section>
    <h2>I like to build</h2>

    <div class="flat">
      <ResSummary />
    </div>

  </section>
</template>

<script>
import ResSummary from "@/content/resSummary";
export default {
  name: 'MissionPurp',
  props: {
    msg: String
  },
  components: {
    ResSummary
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  section {
    margin-top: 28vh; // 4rem;
  }
</style>
