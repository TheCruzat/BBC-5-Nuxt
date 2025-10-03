<template>
  <header>
    <h1><span>builtby the cruzat v5.5</span>

      <Logo :type="types.header" />

    </h1>
    <div class="tiptop">
      <div class="subset">
      <p>the online portfolio of</p>
      <p class="name">Dan Cruzat</p>
      <p>front end engineer based in portland or</p>
      <!-- <Button><i class="fa fa-chevron-down"></i></Button> -->
      </div>
    </div>
    <!-- <div class="bottom-band"></div> -->

    <span class="header-corner"></span>
    <span class="header-corner"></span>
    <span class="header-corner"></span>
    <span class="header-corner"></span>

    <div class="sculpture-garden">

      <span>
        <span></span>
        <span></span>
      </span>

      <span>
        <span></span>
        <span></span>
      </span>

      <span>
        <span></span>
        <span></span>
      </span>

      <span>
        <span></span>
        <span></span>
      </span>

    </div>

    <Picture :img="img[0]" :noLazy="true" :imgStyle="{ objectPosition: 'var(--headerBGPos)' }" />

  </header>
</template>

<script>
import Logo, {types} from "@/components/Logo";
import Picture from "@/components/Picture";
import { ImageSets } from "@/content/SplitIMG";
import bgM from "@/assets/bg-fopo-mobile.webp";
import bg from "@/assets/fopo.jpg";

const headerTypes = {
  social: "social",
}


export default {
  name: 'Header',
  components: {
    Logo,
    Picture
  },
  data: function() {
    return {
      types: types,
      img: ImageSets,
    }
  },
  props: {
    msg: String,
  },
  mounted:function() {
    //
  }
}
</script>

<style scoped lang="scss">

  @import "@/styles/global.scss";

  header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 4rem);
    padding: 0;
    position: relative;
    margin: 0 0 4rem;
    z-index: 5;
    border-right: 1rem solid #fff;
    border-top: 1rem solid #fff;
    border-bottom: 1rem solid #fff;
    background: #8cd8fe;

    @include mFlip() {

       height: 100vh;
       background-position: 40% 50%;
       border: 1rem solid #fff;
       margin: 0;

       &:after {
        display: block;
        content: "";
        width: 100%;
        height: 6.5rem;
        background: #fff;
        z-index: 0;
        position: absolute;
        left: 0;
        bottom: 0;
       }
    }

    .sculpture-garden {
      @include mFlipUnder() {
        display: none;
      }
      position: absolute;
      width: 48vw;
      height: 5vw;
      background: var(--con);
      left: calc(50% - 24vw);
      top: 4vw;

      &:before, &:after {
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        width: 0px;
        height: 0px;
        border-style: solid;

        transform: rotate(0deg);
      }

      &:before {
           border-width: 0 0 6vw 6vw;
           border-color: transparent transparent var(--con) transparent;
           left: calc(-6vw + 1px);
      }

      &:after {
           border-width: 6vw 0 0 6vw;
           border-color: transparent transparent transparent var(--con);
           right: calc(-6vw + 1px);
      }

      span {
        display: block;
        position: absolute;
        background: var(--con);

        > span {
          background: transparent;
           width: 0px;
           height: 0px;
           border-style: solid;
           transform: rotate(0deg);
           bottom: 0;
        }
      }

      > span {
        &:nth-child(1) {
          width: 20vw;
          height: 5vw;
          bottom: -2.0vw;
          left: -12vw;

          span:nth-child(1) {
           border-width: 0 0 6vw 6vw;
           border-color: transparent transparent var(--con) transparent;
           left: calc(-6vw + 1px);
          }
          span:nth-child(2) {
           border-width: 5vw 5vw 0 0;
           border-color: var(--con) transparent transparent transparent;
           right: calc(-5vw + 1px);
          }
        }

        &:nth-child(2) {
          width: 20vw;
          height: 5vw;
          bottom: -2.0vw;
          right: -12vw;

          span:nth-child(1) {
           border-width: 0 5vw 5vw 0;
           border-color: transparent var(--con) transparent transparent;
           left: calc(-5vw + 1px);
          }
          span:nth-child(2) {
           border-width: 6vw 0 0 6vw;
           border-color: transparent transparent transparent var(--con);
           right: calc(-6vw + 1px);
          }

        }
        &:nth-child(3) {
          width: 24vw;
          height: 5vw;
          top: -2.5vw;
          right: calc(50% - 12vw);

          span {
           width: 0px;
           height: 0px;
           border-style: solid;
           transform: rotate(0deg);
           bottom: 0;
          }

          span:nth-child(1) {
           border-width: 0 0 6vw 6vw;
           border-color: transparent transparent var(--con) transparent;
           left: calc(-6vw + 1px);
          }
          span:nth-child(2) {
           border-width: 6vw 0 0 6vw;
           border-color: transparent transparent transparent var(--con);
           right: calc(-6vw + 1px);
          }

        }
        &:nth-child(4) {
          width: 16vw;
          height: 5vw;
          bottom: -3vw;
          right: calc(50% - 8vw);

          span:nth-child(1) {
           border-width: 0 6vw 6vw 0;
           border-color: transparent var(--con) transparent transparent;
           left: calc(-6vw + 1px);
           top: 0;
          }
          span:nth-child(2) {
           border-width: 6vw 6vw 0 0;
           border-color: var(--con) transparent transparent transparent;
           right: calc(-6vw + 1px);
           top: 0;
          }

        }
      }
    }

    .header-corner {

      border-style: solid;
      transform: rotate(0deg);
      position: absolute;
      top: 0;

      &:nth-child(3) {
        left: 0;
        border-width: 58px 58px 0 0;
        border-color: #fff transparent transparent transparent;
      }

      &:nth-child(4) {
        right: 0;
        border-width: 0 58px 58px 0;
        border-color: transparent #fff transparent transparent;
      }

      &:nth-child(5) {
        left: 0;
        top: unset;
        bottom: 6.5rem;
        border-width: 58px 0 0 58px;
        border-color: transparent transparent transparent #fff;

        @include mFlipUnder(64rem) {
          display: none;
        }
      }

      &:nth-child(6) {
        right: 0;
        top: unset;
        bottom: 6.5rem;
        border-width: 0 0 58px 58px;
        border-color: transparent transparent #fff transparent;

        @include mFlipUnder(64rem) {
          display: none;
        }
      }

      @include mFlipUnder(40rem) {
        display: none;
      }
    }
  }
  h1, p {
    margin: 0;
  }
  h1 {
    padding: calc(#{var(--gutter)} / 2) var(--gutter);
    width: calc(100% - 2rem);
    max-width: 500px;
    display: flex;
    align-items: flex-start;
    flex-direction: column-reverse;
    background: var(--con);
    margin-top: var(--gutter);
    position: relative;
    z-index: 1;

    @include mFlipBetween(40rem, 64rem) {

      $htrisize: 114px;

      &:after {
        display: block;
        content: "";
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width:  $htrisize 0 0 $htrisize;
        border-color: transparent transparent transparent var(--con);
        transform: rotate(0deg);
        position: absolute;
        bottom: 0;
        right: - $htrisize;
      }
    }

    @include mFlip() {
      margin-bottom: -0.8rem;
      width: 100%;
      max-width: unset;
      position: relative;
      top: auto; right: auto;
      width: 100%;
      background: transparent;
    }

    span {
      text-align: right;
      display: inline-block;
      width: 100%;
      color: #fff;
      position: relative;
      z-index: 1;
      font-family: var(--title);
      padding: 0 1rem;
      font-size: 1.2rem;

      @include mFlip() {
        width: auto;
        font-size: 1.5rem;
        margin-left:auto;
        margin-right: auto;
        background: var(--con);
      }
    }
    svg {
      display: block;
      height: auto;
      width: 100%;
      margin: 0 auto -0.9rem;
      @include mFlip() {
        position: relative;
        transform: rotate(0);
        max-width: 100vw;
        width: 70vw;
        margin-top: 0;
        margin-bottom: -1.4rem;
      }

      @include mFlipUnder(40rem) {
        margin-bottom: 0;
      }
    }
  }
  .tiptop {
    width: 100%;
    position: relative;
    background: #fff;
    display: inline-block;
    width: auto;
    margin-bottom: -1px;

    @include mFlip() {
      margin: 0 auto;
    }

    $tsize: 116px;
    $hcorners: #fff;
    &:after {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      right: -115px;
      border-style: solid;
      border-width: 116px 0 0 116px;
      border-color: transparent transparent transparent $hcorners;
      transform: rotate(0deg);

      @include mFlipUnder(40rem) {
        display: none;
      }

      @include mFlip() {
        bottom: 2.5rem;
      }
    }

    &:before {
      display: block;
      content: "";
      position: absolute;
      bottom: 2.5rem;
      left: -116px;
      border-style: solid;
      border-width: 116px 116px 0 0;
      border-color: transparent $hcorners transparent transparent;
    }
  }

  .subset {
    width: 100%;

    padding: 0.8rem var(--gutter) 0;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--title);
    position: relative;
    z-index: 2;



    @include mFlip() {
      max-width: 45rem;
      padding-bottom: 1rem;
      p {
        text-align: center;
      }
    }
  }
  p {
    text-transform: lowercase;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    color: var(--bod);
    line-height: 1.2;
    align-self: flex-end;
    text-align: left;
    @include mFlip() {
      width: auto;
      font-size: 1.5rem;
      text-align: left;
      br {
        display: none;
      }
    }

    &.name {
      opacity: 1;
      text-transform: capitalize;
      font-size: 3rem;
      color: var(--hot);
      margin-bottom: 1px;
      @include mFlip() {
        font-size: 3.5rem;
      }
    }
  }
</style>
