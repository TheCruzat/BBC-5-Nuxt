<template>
	<div id="app" class="resume">

    <header>
      <div>
        <h1>Dan Cruzat</h1>
        <LogoTC :type="types.header" />
      </div>
      <div>
        <p><a href="mailto:dan@thecruzat.com?subject=came across your resume...">dan@thecruzat</a> : <a href="tel:7739884797">773.988.4797</a></p>
        <p><a href="//builtby.thecruzat.com" title="see the portfolio of Dan Cruzat " target="_blank">builtby</a> / <a href="//thecruzat.com" title="learn the arcanum of Dan Cruzat" target="_blank">thecruzat</a></p>
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
      <div class="expo-block">
        <h3>Emerge Interactive <span>: Senior Front End Developer</span></h3>
        <p>2021 : HTML, WordPress, SCSS : Lead dev on KIT build, support dev for WordPress niche layouts & widgets</p>
      </div>
      <div class="expo-block">
        <h3>ShirtSpace <span>: Senior Web Developer</span></h3>
        <p>2021 : Slim, SCSS, JS/ES6, JQuery : CSS audit, optimization work, bugsmashing</p>
      </div>
      <div class="expo-block">
        <h3>BASIC <span>: Front End Developer</span></h3>
        <p>2020 : React (Next, Gatsby), StorybookJS, SCSS : Layout work, element library, QA/bugfixing</p>
      </div>
      <div class="expo-block">
        <h3>Creative Few <span>: Lead Developer, Support Developer</span></h3>
        <p>2017-2020 : React (Next, Gatsby), Angular, WordPress/PHP, SCSS, Custom HTML : Dev work, team support</p>
      </div>
      <!-- div class="expo-block">
        <h3>E+C <span>: Strategist, Developer</span></h3>
        <p>2013-2019 : React/Next, Vue/Nuxt, WordPress, Custom HTML : Co-conspirator, dev + research, client relations</p>
      </div -->
      <div class="expo-block">
        <h3>Industrial Commercial Electric <span>: Lead Developer, UX Support</span></h3>
        <p>2018-2019 @ E+C : WordPress custom build, Gulp/SASS : Dev work, flow polish, website makeover for direct client</p>
      </div>
      <div class="expo-block">
        <h3>Modern Adventure <span>: WordPress Specialist, Team Support</span></h3>
        <p>2018 : Two minisite custom builds, Trellis/Vagrant/SASS : Dev work and iterative refinement for direct client</p>
      </div>
      <div class="expo-block">
        <h3>+Citizen (now EY) <span>: Support Developer, CSS Specialist, QA Testing</span></h3>
        <p>2015-2017 : on team of 10~15 working on Enterprise customer portal, first as FED/CSS, later as QA tester / UI problemsolver</p>
      </div>
    </section>

    <section>
      <h2 class="dim">ancient history & trivia</h2>
      <p>PDX since 06 : 1st site fit in 640x480, 1999 : lifelong Doctor Who fan : maker of weirdo hip hop / electronic music since 199? : I annoy Sharkula : once pulled a caper with Pete Wentz & Jody Minnoch : once cursed out by Dan Aykroyd : will retire to be a dogwalker</p>
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
    ResBrands
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
