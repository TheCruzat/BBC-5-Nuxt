<template>
  <a class="wildlink" :href="url" :title="title" target="_blank">
    <p>{{ title }}</p>
    <p>{{ desc }}</p>
  </a>
</template>

<script>
export default {
  name: 'WildLink',
  props: {
    title: String,
    url: String,
    desc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import "@/styles/global.scss";

  a.wildlink {
    color: var(--bod);
    text-decoration: none;
    display: inline-block;
    // width: auto;
    // flex-wrap: wrap;
    // flex-direction: column;
    // align-items: flex-start;
    // justify-content: flex-start;
    background: $paper;
    border: 2px solid var(--paper);
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: left;
    margin-right: var(--gutter);

    // width: 100%;
    margin-bottom: 1.8rem;
    transition: all 0.35s ease-in;

    @include mFlip() {
      // width: calc(50% - 0.9rem);
    }

    &:hover {
      transition: all 0.15s ease-out;
      background: #fff; // lighten($paper, 4%);
      border-color: var(--con);

      p:first-child {
        color: var(--hot);

        + p {
          color: var(--bod);
        }
      }
    }

    p {
      margin: 0;
      // display: inline-block;
      // width: auto;
      transition: all 0.2s;


      &:first-child {
        // border-bottom: 1px solid #ccc;
        margin-bottom: 0.5rem;
        position: relative;

        &:after {
          display: block;
          content: "";
          top: 100%;
          left: 0; // calc(50% - 1.5rem); // 0.75rem;
          right: 0.75rem;
          background: #aaa;
          height: 1px;
          width: 3rem;
          position: absolute;
        }
      }

      + p {
        font-size: 60%;
        border: none;
        // opacity: 0.8;
        color: var(--con);
      }
    }
  }
</style>
