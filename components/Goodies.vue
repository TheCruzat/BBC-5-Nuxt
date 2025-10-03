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
      justify-content: space-around;
      padding-left: 0;
      padding-right: 0;
      max-width: 660px;
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
        opacity: 1;
        border: none;
        &:hover {
          border-color: var(--hot);
          background: var(--hot);
          .label, i {
            color: #fff;
            transition: color 0.35s ease-out;
          }
        }
        .label, i {
          color: rgba(255,255,255,0.75);
          transition: color 0.35s ease-in;
        }
      }
    }
  }
  a {
    color: var(--bod);
    display: flex;
    width: calc(50% - var(--gutter)/2);
    align-items: center;
    height: 4rem;
    background: var(--paper);
    margin-bottom: var(--gutter);
    padding-left: var(--gutter);
    border-radius: 0.5rem;
    border: 2px solid var(--paper);
    transition: all 0.35s ease-in;

    &:hover {
      transition: all 0.15s ease-out;
      color: #fff;
      background: var(--hot);
      border-color: var(--hot);
    }
    @include mFlip() {
      width: calc(33.3333% - var(--gutter));
    }

    &.sub {
      background: #fff;
    }

    i {
      width: 32px;
      text-align: center;
      font-size: 1.5rem;
    }

    .label {
      font-size: 1.2rem;
      margin-left: 1rem;
      cursor: pointer;
      font-weight: 600;
    }
  }
</style>
