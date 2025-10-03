<template>
  <div id="app">
    <Header />
    <div style="position: relative;">
      <Nav />
      <MissionPurp />
      <Goodies />
      <Split id="experience" msg="experience" :img="this.img[1]" />
      <SkillsExp />
      <Split id="work" msg="in the wild" :img="this.img[2]" />
      <Builds />
      <Split id="scribblings" msg="scribblings" :img="this.img[3]" />
      <Blog />
      <Split id="maxims" msg="maxims" :img="this.img[4]" />
      <Misc />
      <ResumeBug />
    </div>
    <Footer />
    <Brackets />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Goodies from "@/components/Goodies";
import Nav from "@/components/Nav";
import SkillsExp from "@/components/SkillsExp";
import Builds from "@/components/Builds";
import MissionPurp from "@/components/MissionPurp";
import Misc from "@/components/Misc";
import Split from "@/components/Split";
import Brackets from "@/components/Brackets";
import Blog from "@/components/Blog";
import ResumeBug from "@/components/ResumeBug";

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
    Nav,
    ResumeBug,
    Misc,
    Split
  },
  data:function() {
    return {
      img: ImageSets
    }
  },
  methods:function() {
    //
  }
}
</script>

<style scoped lang="scss">

@import "@/styles/global.scss";

</style>

