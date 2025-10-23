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

<style lang="scss">

  @import "@/styles/global.scss";

  a.wildlink {
    color: var(--bod);
    text-decoration: none;
    display: inline-block;
    background: $paper;
    border: 2px solid var(--paper);
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: left;
    margin-right: var(--gutter);
    margin-bottom: 1.8rem;
    transition: all 0.35s ease-in;

    &:hover {
      transition: all 0.15s ease-out;
      background: #fff;
      border-color: var(--con);

      p:first-child {
        color: var(--hot);

        + p {
          color: var(--bod);
        }

        &:after {
          width: 100%;
          transition: all 3s ease-out;
        }
      }
    }

    p {
      margin: 0;
      transition: all 0.2s;


      &:first-child {
        margin-bottom: 0.5rem;
        position: relative;

        &:after {
          display: block;
          content: "";
          top: 100%;
          left: 0;
          right: 0.75rem;
          background: #aaa;
          height: 1px;
          width: 3rem;
          position: absolute;
          transition: all 0.75s ease-out;

        }
      }

      + p {
        font-size: 60%;
        border: none;
        color: var(--con);
      }
    }
  }
</style>
