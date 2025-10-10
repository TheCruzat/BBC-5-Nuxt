<template>
  <footer>
    <Goodies :type="GoodieTypes.footer" />
    <img class="cic" :src="cic" alt="" />
    <LogoTC :type="LogoTypes.footer" />
    <div class="read"><h3>built by the cruzat v5.7</h3>copyright &copy;2008-{{ yr }}<span> : </span><em><br></em>all rights reserved<span> : </span><em><br></em>settle down</div>
    <Picture :img="img" :imgStyle="{objectPosition: 'bottom', opacity: '0.75'}" />
  </footer>
</template>

<script>
import LogoTC, {types as LogoTypes} from "@/components/LogoTC";
import Picture from "@/components/Picture";
import Goodies, {types as GoodieTypes} from "@/components/Goodies";
import bg from '@/assets/bg-board.webp';
import bgM from '@/assets/bg-board-mobile.webp';
import cic from '@/assets/chicago-in-cascadia.png';

const footImages = {
  full: {
    webp: bg,
    jpg: bg,
  },
  mobile: {
    webp: bgM,
  }
}

const now = new Date();
const yr = now.getFullYear();
export default {
  name: 'Footer',
  components: {
    LogoTC,
    Goodies,
    Picture,
  },
  props: {
    msg: String
  },
  data:function() {
    return {
      LogoTypes: LogoTypes,
      GoodieTypes: GoodieTypes,
      yr: yr,
      img: footImages,
      cic: cic
    }
  }
}
</script>


<style scoped lang="scss">

@import "@/styles/global.scss";

  footer {
    background: #000;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    z-index: 3;
    text-align: center;

    h3 {
      color: #fff;
      font-family: var(--title);
    }

    img.cic {
      max-width: 32px;
      border-radius: 50%;
      margin-bottom: 0.75rem;
    }

    svg {
      margin-bottom: 8.4rem;
      align-self: flex-start;
      max-width: 210px;
      @include mFlipUnder {
        display: none;
      }
      @include mFlip() {
        align-self: center;
        margin-bottom: 5.6rem;
        width: auto;
      }
    }

    @media (max-width: 64rem) {
      text-align: left;
      span {
        display: none;
      }
    }

    @include mFlip() {
      br:not(.keep) {
        display: none;
      }
    }

    .read, svg, .goodies-set {
      position: relative;
      z-index: 2;
    }

    .goodies-set {

      @include mFlip() {
        align-self: center;
      }
    }

    .read {
      padding: 20px;
      color: var(--paper);

      @include mFlip() {
        position: absolute;
        bottom: 0; left: 0; right: 0;
      }
      @include mFlipUnder() {
        width: 100%;
        background: var(--bod);
        padding-bottom: 32px;

        h3 {
          margin-top: 0;
        }
      }

      +div {
        opacity: 0.7;
        position: absolute;
        z-index: 0;
        top: 0; left: 0; right: 0; bottom: 0;
      }
    }
  }
</style>
