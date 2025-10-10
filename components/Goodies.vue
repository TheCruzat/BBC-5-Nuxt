<template>
  <div :type="type" class="goodies-set">
    <a v-for="(link, ndx) in links" :key="link.title" :href="link.url" :title="link.title" :data-mega="link.mega" target="_blank" :class="{ 'sub': ndx > topRow }">
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

function setRow(q) { return Math.ceil(q.length / 2) - 1; }

export default {
  name: "Goodies",
  props: {
    type: types
  },
  data: function() {
    return {
      links: GoodiesLinks,
      topRow: setRow(GoodiesLinks)
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
    justify-content: center; // space-between;
    width: 100%;
    gap: var(--gutter);

    @include mFlip() {
      justify-content: center; // space-around;
      padding-left: 0;
      padding-right: 0;
      max-width: 800px;
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
        border-color: var(--bod);
        box-shadow: 0 0 0.125rem rgba(255,255,255,0.75);
        &:hover {
          border-color: rgba(0,0,0,0.1); // var(--bod); // var(--hot);
          background: var(--hot);
          // box-shadow: 0 0 0.125rem rgba(0,0,0,0.75);
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
    // margin-bottom: var(--gutter);
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
      width: calc(25% - var(--gutter));
    }

    &.sub {
      background: #fff;

      &:hover {
        background: var(--hot);
      }
    }

    i {
      width: 32px;
      text-align: center;
      font-size: 1.5rem;
      margin-right: 0.75rem;
    }

    .label {
      font-size: 1.2rem;
      cursor: pointer;
      font-weight: 600;
    }
  }
</style>
