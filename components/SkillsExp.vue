<template>
  <section>
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
import ResSkills from "@/content/resSkills";
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
  props: {
    msg: String
  }
}
</script>

<style>

</style>
