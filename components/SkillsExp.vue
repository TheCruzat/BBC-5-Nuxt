<template>
  <section>

    <div class="flat">
      <p v-html="SkillsIntro"></p>
      <p>Full service / full stack for WordPress, solid UI / CSS resource for a React / Vue team.</p>
    </div>

    <div class="flat">
      <h3>dialects + skills</h3>
      <ResSkills />
    </div>

    <div class="flat">
      <h3>agencies + organizations</h3>
      <ResOrgs />
    </div>

    <div class="flat">
      <h3>brands handled</h3>
      <ResBrands />
    </div>

    <FinaleCTA subject="I%20want%20to%20talk%20to%20you%20about%20your%20experience" />
  </section>
</template>

<script>
import FinaleCTA from "@/components/FinaleCTA";
import ResSkills, { SkillsIntro } from "@/content/resSkills";
import ResOrgs from "@/content/resOrgs";
import ResBrands from "@/content/resBrands";
export default {
  name: 'SkillsExp',
  components: {
    FinaleCTA,
    ResSkills,
    ResOrgs,
    ResBrands
  },
  data() {
    return {
      SkillsIntro: SkillsIntro
    }
  },
  props: {
    msg: String
  }
}
</script>

<style>

</style>
