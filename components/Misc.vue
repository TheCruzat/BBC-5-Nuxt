<template>
  <section>
    <div class="flat">
      <p>Chicago Cat <a href="//thecruzat.com" target="_blank">made good</a> in Rose City</p>
      <p>Beats, Rhymes + Podcasts</p>
      <p><a href="//cruzat.media" target="_blank" title="Cruzat.Media">Cruzat.Media</a> will return</p>
      <p><a href="//p1rk5.com" target="_blank" title="P1RK5">P1RK5</a> [SystemSound]</p>
      <p>agents, asks and avenues</p>
      <p>the only path to success is through failure</p>
      <p>John showed us <a href="http://www.johnhardyco.com" title="This Is The Way" target="_blank">the autodidact way</a></p>
      <p><a href="//maps.app.goo.gl/AWAdCkLis855A6z26" target="_blank">Evanston Forever</a></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Misc',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  h3 {
    font-family: var(--title);
    color: #ccc;
  }

  p {
    /*margin: 0 0 1rem;
    font-size: 1rem;

    @include mFlip() {
      display: inline-block;
      width:auto;
      + p {
        padding-left: 2rem;
      }
    }*/
  }

</style>
