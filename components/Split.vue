<template>
  <section class="title-split">
    <span :id="id" class="beacon" />
    <div class="flat">
    <h2 v-if="msg" v-html="msg"></h2>
    </div>

    <Picture :img="img" />
  </section>
</template>

<script>

import Picture from "@/components/Picture";
export default {
  name: "Split",
  props: {
    id: String,
    msg: String,
    img: Object,
  },
  components: {
    Picture
  },
}
</script>

<style scoped lang="scss">

@import "@/styles/global.scss";

  section.title-split {
    width: 100%;
    min-height: 190px;
    margin-left: auto;
    margin-right: auto;
    margin: 100px 0 0;
    justify-content: flex-end;
    position: relative;

    @include mFlip() {
      width: 100%;
      min-height: 14rem;
      justify-content: center;
      margin: 24vh auto 0;
    }

    &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: var(--con);
      z-index: 0;
    }

    h2 {
      color: #fff;
      text-shadow: 0 0 10px var(--bod);
      margin-bottom: var(--gutter);
      position: relative;
      z-index: 2;

      @include mFlip() {
        margin-bottom: 0;
      }
    }

    picture {
      z-index: 1;
    }

    span:not(.beacon) {
      color: rgba(255,255,255,0.5);
      position: fixed;
      top: 2.3rem;
      font-size: 8vw;
      z-index: 1;
      display: none;

      @include mFlip() {
        display: block;
      }

      &:first-child {
        left: 80px;
      }

      &:last-child {
        right: 80px;
      }
    }
  }
</style>
