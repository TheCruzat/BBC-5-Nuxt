<template>
	<div id="app" class="resume">

    <header>
      <div>
        <h1>Dan Cruzat</h1>
        <LogoTC :type="types.header" />
      </div>
      <div>
        <p>
          <a href="mailto:dan@thecruzat.com?subject=came across your resume...">dan@thecruzat</a> :
          <a href="tel:7739884797">773.988.4797</a>
        </p>
        <p>
          <a href="//builtby.thecruzat.com" title="see the portfolio of Dan Cruzat " target="_blank">portfolio</a> /
          <a href="//linkedin.com/in/dancruzat" title="connect with Dan Cruzat on LinkedIn" target="_blank">linkedin</a> /
          <a href="//coffeewith.thecruzat.com" title="read the rantings of Dan Cruzat" target="_blank">blog</a> /
          <a href="//thecruzat.com" title="learn the arcanum of Dan Cruzat" target="_blank">about</a>
        </p>
      </div>
    </header>

    <section>
      <h2>summary</h2>
      <ResSummary />
    </section>

    <section>
      <h2>skills & experience</h2>
      <ResSkills />
    </section>

    <section>
      <h2>agencies & organizations</h2>
      <ResOrgs />
    </section>

    <section>
      <h2>brands handled</h2>
      <ResBrands />
    </section>

    <section class="break">
      <h2>projects & positions</h2>
      <ResCredits />
    </section>

    <section>
      <h2 class="dim">ancient history & trivia</h2>
      <p>PDX since 06 : lifelong Doctor Who fan : maker of weirdo hip hop / electro music since 199? : once pulled caper with Pete Wentz & Jody Minnoch : once cursed out by Dan Aykroyd</p>
    </section>

    <section class="mo">
      <LogoTC />
    </section>
	</div>
</template>

<script>
import LogoTC, {types} from "@/components/LogoTC";
import ResSummary from "@/content/resSummary";
import ResSkills from "@/content/resSkills";
import ResOrgs from "@/content/resOrgs";
import ResBrands from "@/content/resBrands";
import ResCredits from "@/content/resCredits";
export default {
  name: 'Resume',
  head: {
    title: 'Resume of Dan Cruzat : Interactive Engineer / ',
  },
  components: {
    LogoTC,
    ResSummary,
    ResSkills,
    ResOrgs,
    ResBrands,
    ResCredits
  },
  data: function() {
    return {
      types: types,
    }
  }
}
</script>

<style scoped lang="scss">

@import "@/styles/global.scss";
@import "@/styles/resume";

</style>
