<template>
  <div id="app">
    <Header />
    <MissionPurp />
    <Goodies />
    <Split id="experience" msg="experience" :img="this.img[1]" />
    <SkillsExp />
    <Split id="work" msg="in the wild" :img="this.img[2]" />
    <Builds />
    <Split id="ramblings" msg="ramblings" :img="this.img[3]" />
    <Blog />
    <Split id="wanderings" msg="wanderings" :img="this.img[4]" />
    <Misc />
    <Footer />
    <Brackets />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Goodies from "@/components/Goodies";
import SkillsExp from "@/components/SkillsExp";
import Builds from "@/components/Builds";
import MissionPurp from "@/components/MissionPurp";
// import Stories from "@/components/Stories";
import Misc from "@/components/Misc";
import Split from "@/components/Split";
import Brackets from "@/components/Brackets";
import Blog from "@/components/Blog";

import {ImageSets} from "@/content/SplitIMG";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Goodies,
    SkillsExp,
    Builds,
    Blog,
    MissionPurp,
    Brackets,
    // Stories,
    Misc,
    Split
  },
  data:function() {
    return {
      img: ImageSets
    }
  },
  methods:function() {
    // return {
    // this.$gtag.event('PageView', { method: 'Google' })
  }
}
</script>

<style scoped lang="scss">

@import "@/styles/global.scss";

</style>

