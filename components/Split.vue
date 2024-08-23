<template>
  <section :id="id" class="title-split">
    <div class="flat">
    <!-- <span>- - -</span> -->
    <h2 v-if="msg" v-html="msg"></h2>
    <!-- <span>- - -</span> -->
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
  // computed: {
  //   style () {
  //     // return 'background: url('+this.img[0]+') 25% 50% no-repeat fixed; background-size: cover; @media (min-width: 40rem) { background: url('+this.img[1]+') 50% 50% no-repeat fixed; background-size: cover; }';
  //     return 'background: url('+this.img[1]+') 50% 50% no-repeat fixed; background-size: cover;';
  //   }
  // },
}
</script>

<style scoped lang="scss">

@import "@/styles/global.scss";

  section.title-split {
    width: 100%; // 88vw; // calc(100% - 40px);
    // opacity: 0.8;
    min-height: 260px; // 50vh;
    margin-left: auto;
    margin-right: auto;

    margin: 100px 0 0;
    justify-content: flex-end;
    position: relative;

    @include mFlip() {
      width: 100%; // 88vw;
      min-height: 18rem; // 20vw; // 30vh;
      justify-content: center;

      margin: 24vh auto 0; // 8vh;
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

    span {
      color: rgba(255,255,255,0.5);
      position: fixed;
      top: 2.3rem; // calc(50% - 4.8vw); // calc(80px - 4.5vw); //
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
