<template>
  <header>
    <h1><span>Built By The Cruzat</span>

      <Logo :type="types.header" />

    </h1>
    <div class="tiptop"><div class="subset">
      <p class="name">Dan Cruzat</p>
      <p>front end engineer <br>based in portland or</p>
    </div></div>
    <Button><i class="fa fa-chevron-down"></i></Button>
    <div class="bottom-band"></div>
  </header>
</template>

<script>
import Logo, {types} from "@/components/Logo";
export default {
  name: 'Header',
  components: {
    Logo
  },
  data: function() {
    return {
      types: types,
    }
  },
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "@/styles/global.scss";

  header {
    display: flex;
    justify-content: flex-start;
    align-items: center; // flex-start;
    flex-direction: column-reverse;
    background: #fff; // var(--paper); // #fff;
    height: auto;
    padding: 0; // 20px 0;
    position: relative;
    margin-bottom: 3rem;
    z-index: 3;
    @include mFlip() {
       height: 90vh;
      //overflow: visible;
      // flex-direction: column;
      // justify-content: space-between;
    }
  }
  h1, p {
    margin: 0;
  }
  h1 {
    position: absolute;
    top: calc(50% - 2vw);
    right: var(--gutter);
    width: 40%;
    display: block;

    z-index: 1;
    @include mFlip() {
      margin-bottom: -0.8rem;
      width: auto;
      position: relative;
      top: auto; right: auto;
      width: 100%;
    }
    span {
      display: none;
    }
    svg {
      display: none;
      height: auto;
      width: 100%;
      margin: 0 auto -0.9rem;
      @include mFlip() {
        display: block;
        position: relative;
        transform: rotate(0);
        max-width: 100vw;
        width: 70vw;
        margin-top: 0;
        margin-bottom: -1.4rem;
      }
    }
  }
  .tiptop {
    width: 100%;
    position: relative;
    background: #eee;

    @include mFlip() {
      margin-bottom: 8vh;
      background: url('assets/fopo.jpg') 50% 50% / cover no-repeat fixed; //#000;

      &:after {
        display: block;
        content: "";
        background: rgba(0,0,0,0.5);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .bottom-band {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2rem; // 5vh;
    z-index: 0;
    background: var(--paper); // #fff;
    display: none;
    @include mFlip() {
      display: block;
    }
  }
  .subset {
    width: 100%;

    padding: 0.8rem 0 1.4rem var(--gutter);
    margin-left: auto;
    margin-right: auto;
    font-family: var(--title);
      position: relative;
      z-index: 2;

    @include mFlip() {
      max-width: 45rem;
    }
  }
  p {
    text-transform: lowercase;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    // opacity: 0.7;
    color: var(--dim); // #fff; // var(--bod);
    line-height: 1.2;
    align-self: flex-end;
    text-align: left;
    @include mFlip() {
      width: auto;
      font-size: 2.2vw;
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
      @include mFlip() {
        padding-top: 12vw;
        font-size: 6vw;
        color: #fff; //var(--hot);
      }
    }
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    left: calc(50% - 60px);
    font-size: 2rem;
    color: var(--hot);
    animation: float 1s ease-out infinite;
    width: 120px;
    display: none;
    @include mFlip() {
      display: block;
    }
  }
  $chrv: 0.8rem;
  @keyframes float {
    from {
      bottom: -2.5vh;
      opacity: 100;
      font-size: $chrv;
    }
    to {
      bottom: -7.5vh;
      opacity: 0;
      font-size: $chrv*4;
    }
  }
</style>
