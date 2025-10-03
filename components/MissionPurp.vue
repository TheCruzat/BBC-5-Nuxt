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

<style scoped lang="scss">

  @import "@/styles/global.scss";
  section {
    margin-top: 28vw;

    &.mission-purpose {
      margin-top: 5rem;

      .beacon {
        top: -8rem;

        @include mFlip() {
            top: -8rem;
        }

      }


      @include mFlip() {
        margin-top: 12vw;
      }
    }
  }
</style>
