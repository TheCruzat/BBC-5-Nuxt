<template>
	<div id="app" class="resume">

    <header>
      <div>
        <h1>Dan Cruzat</h1>
        <LogoTC :type="types.header" />
      </div>
      <div>
        <nav aria-label="page navigation">

          <span>
            <a v-for="link in resumeLinks" :class="link.class" :href="link.href" :aria-label="link.ariaLabel" :title="link.title" target="_blank" v-html="link.label" />
          </span>

          <span>
            <a v-for="link in resumeNav" :href="link.href" :aria-label="link.ariaLabel" :title="link.title" target="_blank" v-html="link.label" />
          </span>

        </nav>
      </div>
    </header>

    <section>
      <h2>summary</h2>
      <ResSummary />
    </section>

    <section>
      <h2>skills & experience</h2>
      <p v-html="SkillsIntro"></p>
      <hr />
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

    <section class="row link-row no-print">
      <a :href="resumeFile" target="_blank" aria-label="download resume pdf" title="download Dan Cruzat's resume as a pdf">download pdf <i class="fa fa-chevron-down"></i></a>
      <a :href="liURL" target="_blank" aria-label="Dan Cruzat on LinkedIn" title="see more work history for Dan Cruzat on LinkedIn">more work history on linkedin <i class="fa fa-chevron-right"></i></a>
    </section>

    <section>
      <h2>ancient history & trivia</h2>
      <p class="small">PDX since 06, Chicago expatriot<span class="no-screen"> : </span><br class="no-print" />lifelong Doctor Who fan<span class="no-screen"> : </span><br class="no-print" />sampler and strangler of sounds since 199?<span class="no-print"><span class="no-screen"> : </span><br class="no-print" />once pulled caper with Pete Wentz & Jody Minnoch<span class="no-screen"> : </span><br class="no-print" />once cussed out by Dan Aykroyd</span></p>
    </section>

    <section class="row link-row no-print">
      <a :href="portURL" aria-label="return to main page" title="return to Dan Cruzat's portfolio"><i class="fa fa-chevron-left"></i> back to main</a>
    </section>

    <section class="mo">
      <LogoTC />
    </section>
	</div>
</template>

<script>
import LogoTC, {types} from "@/components/LogoTC";
import ResSummary from "@/content/resSummary";
import ResSkills, { SkillsIntro } from "@/content/resSkills";
import ResOrgs from "@/content/resOrgs";
import ResBrands from "@/content/resBrands";
import ResCredits from "@/content/resCredits";
import {contactEmail, portURL, codeURL, liURL, rootURL, resumeFile} from "@/content/LinkSets";

const resumeLinks = [
  {
    label: contactEmail,
    href: "mailto:"+contactEmail+"?subject='I came across your resume...'",
    ariaLabel: "email Dan Cruzat",
    title: "send Dan Cruzat an email"
  },
  {
    label: "download resume",
    href: resumeFile,
    ariaLabel: "open resume in new tab",
    title: "download the resume PDF",
    class: "no-print"
  }
];

const resumeNav = [
  {
    label: "portfolio",
    href: portURL,
    ariaLabel: "Dan Cruzat's Portfolio",
    title: "see the portfolio of Dan Cruzat"
  },
  {
    label: "code",
    href: codeURL,
    ariaLabel: "Dan Cruzat's Code Samples",
    title: "see code samples from Dan Cruzat"
  },
  {
    label: "linkedin",
    href: liURL,
    ariaLabel: "Dan Cruzat on LinkedIn",
    title: "connect with Dan Cruzat on LinkedIn"
  },
  {
    label: "about",
    href: rootURL,
    ariaLabel: "About Dan Cruzat",
    title: "learn the arcanum of Dan Cruzat"
  },
]

export default {
  name: 'Resume',
  head: {
    title: 'Resume of Dan Cruzat : Front End Developer / UI Engineer',
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
      contactEmail: contactEmail,
      portURL: portURL,
      liURL: liURL,
      resumeNav: resumeNav,
      resumeLinks: resumeLinks,
      resumeFile: resumeFile,
      SkillsIntro: SkillsIntro
    }
  }
}
</script>

<style scoped lang="scss">

@import "@/styles/global.scss";
@import "@/styles/resume";

</style>
