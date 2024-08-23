<template>
  <div :type="type" class="goodies-set">
    <a v-for="(link, ndx) in links" :key="link.title" :href="link.url" :title="link.title" :data-mega="link.mega" target="_blank" :class="{ 'sub': ndx > 3 }">
      <i :class="'fa '+link.icon" />
      <span class="label" v-html="link.label"></span>
    </a>
  </div>
</template>

<script>

import { GoodiesLinks } from "@/content/LinkSets";

export const types = {
  header: "header",
  footer: "footer",
}
export default {
  name: "Goodies",
  props: {
    type: types
  },
  data: function() {
    return {
      links: GoodiesLinks
    }
  }
}
</script>

<style scoped lang="scss">

  @import "@/styles/global.scss";

  .goodies-set {
    font-size: 1.8rem;
    display: flex;
    flex-wrap: wrap;
    padding: var(--gutter);
    align-self: flex-start;
    justify-content: space-between;
    width: 100%;

    @include mFlip() {
      // font-size: 2.4rem;
      justify-content: space-around;
      padding-left: 0;
      max-width: 880px;
      margin-left: auto;
      margin-right: auto;
    }

    &[type="footer"] {
      margin: 9vh auto 9vh;
      @include mFlip() {
        margin-bottom: 4vh;
      }
      a {
        color: var(--paper);
        background: var(--bod);
        opacity: 1; // 0.7;
        border: 2px solid var(--bod);
        // transition: all 0.2s;
          .label, i {
            color: rgba(255,255,255,0.75);
            transition: color 0.35s ease-in;
          }
        &:hover {
          border-color: var(--hot);
          background: var(--hot);
          // opacity: 1;
          .label, i {
            color: #fff;
            transition: color 0.35s ease-out;
          }

        }
      }
    }
  }
  a {
    color: var(--bod);
    display: flex;
    width: calc(50% - var(--gutter)/2); // 100%;
    align-items: center;
    height: 4rem;
    background: var(--paper);
    margin-bottom: var(--gutter);
    padding-left: var(--gutter);
    border-radius: 0.5rem;
    border: 2px solid var(--paper);

    &.sub {
      background: #fff;
    }

    &[data-mega="true"] {
      @include mFlip() {
        // border: 1px solid #ccc;
        // width: 50%;
        // flex-basis: 2;
      }
    }

    i {
      width: 20px;
      text-align: center;
      font-size: 1.5rem;

      @include mFlip() {
        // width: 50px;
      }
    }

    .label {
      font-size: 1.2rem;
      margin-left: 1rem;
      cursor: pointer;
      font-weight: 600;
      @include mFlip() {
        // font-size: 1.4rem;
      }
    }

    transition: all 0.35s ease-in;
    &:hover {
      transition: all 0.15s ease-out;
      color: var(--con);
      background: #fff; // var(--hot);
      border-color: var(--con);
      .label, i {
        color: var(--hot);
      }
    }
    + a {
      // margin-top: 1rem;
    }
    @include mFlip() {
      width: calc(25% - var(--gutter)); // 100%;
    }
  }
</style>
