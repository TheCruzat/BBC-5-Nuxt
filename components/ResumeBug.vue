<template>

  <section class="resume-bug">
    <div class="floater flat">
    <ul>
      <li v-for="link in resumeLinks">
        <a
          :href="link.href">
          <i :class="`fa ${link.icon}`"></i>
          <span v-html="link.label"></span>
        </a>
      </li>
    </ul>
    </div>
  </section>

</template>

<script>

  import { resumeFile, resumeURL } from '@/content/LinkSets';
  const
    resumeFileLabel = "download resume",
    resumeURLLabel = "see resume",
    resumeLinks = [
      {
        href: resumeURL,
        label: resumeURLLabel,
        icon: 'fa-map-o'
      },
      {
        href: resumeFile,
        label: resumeFileLabel,
        icon: 'fa-floppy-o'
      }
    ];
  export default {
    name: 'ResumeBug',
    data:function() {
      return {
        resumeLinks: resumeLinks
      }
    }
  }

</script>

<style scoped lang="scss">

  @import "@/styles/global.scss";

  section.resume-bug {
    $rbpad: 0;

    position: sticky;
    bottom: 0;
    top: auto;
    background: var(--paper);
    z-index:3;
    padding-top: $rbpad;
    padding-bottom: $rbpad;
    margin-top: 88px;

    @include mFlip() {
      margin-top: 67px;
    }

    .floater {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
      padding: 0.8rem var(--gutter);

      @include mFlip() {
        padding: 0.8rem 0;
      }

      h3 {
        margin: 0;
      }

      ul {
        margin: 0 auto;
        padding: 0;
        list-style: none;
        display: grid;
        width: 100%;
        max-width: 440px;
        gap: var(--gutter);
        grid-template-columns: repeat(2, 1fr);

        @include mFlip(480px) {
          gap: var(--gutter);
        }
      }

      a {
        display: flex;
        flex-direction: row;
        width: 100%;
        text-align: center;
        background: #fff;
        border: 2px solid var(--con);
        color: var(--con);
        border-radius: var(--radius);
        font-size: 0.8rem;
        font-weight: 900;
        padding: 0.5rem 0.75rem;

        &:hover {
          background: var(--hot);
          border-color: var(--hot);
          color: #fff;
        }

        @include mFlip(480px) {
          font-size: 1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @include mFlip() {
          padding-left: 1rem;
          padding-right: 1rem;
        }


        i {
          font-size: 1.25rem;
          display: inline-block;
          margin-right: 0.75rem;
          text-align: center;

          @include mFlip(480px) {
            font-size: 1.5rem;
            margin-right: 1rem;
          }
        }
      }
    }
  }

</style>
