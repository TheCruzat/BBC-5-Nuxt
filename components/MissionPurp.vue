<template>
  <section class="mission-purpose">
    <div id="nutshell" class="beacon"></div>

    <div class="flat">
      <h2>I like to build</h2>

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

  @import "@/styles/global.scss";
  section {
    margin-top: 28vw; // 4rem;

    &.mission-purpose {
      @include mFlip() {
        margin-top: 20vw;
      }
    }
  }
</style>
