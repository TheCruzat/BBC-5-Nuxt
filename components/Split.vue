<template>
  <section :id="id" class="title-split" :style="style">
    <span>{</span>
    <h2 v-if="msg" v-html="msg"></h2>
    <span>}</span>
  </section>
</template>

<script>
export default {
  name: "Split",
  props: {
    id: String,
    msg: String,
    img: String,
  },
  computed: {
    style () {
      return 'background: url('+this.img+') 50% 80% no-repeat fixed; background-size: cover; @media (min-width: 40rem) { background-position: fixed; }';
    }
  },
}
</script>

<style scoped lang="scss">

@import "@/styles/global.scss";

  section.title-split {
    width: 100%; // 88vw; // calc(100% - 40px);
    // opacity: 0.8;
    min-height: 160px; // 50vh;
    margin-left: auto;
    margin-right: auto;

    margin: 100px 0 0;
    justify-content: flex-end;
    position: relative;

    @include mFlip() {
      width: 100%; // 88vw;
      min-height: 30vh;
      justify-content: center;

      margin: 24vh auto 0; // 8vh;
    }

    &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 0;
    }

    h2 {
      color: #fff;
      text-shadow: 0 0 2px var(--bod);
      margin-bottom: var(--gutter);
      position: relative;
      z-index: 1;

      @include mFlip() {
        margin-bottom: 0;
      }
    }

    span {
      color: rgba(255,255,255,0.5);
      position: fixed;
      top: calc(50% - 4.8vw); // calc(80px - 4.5vw); //
      font-size: 8vw;
      z-index: 1;
      display: none;

      @include mFlip() {
        display: block;
      }

      &:first-child {
        left: 80px; //calc(50% - 480px);
      }

      &:last-child {
        right: 80px; //calc(50% - 480px);
      }
    }

  }
</style>
