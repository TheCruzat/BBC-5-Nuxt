<template>
  <div class="flat">
    <h3>have a question?</h3>
    <p></p>
    <p><a :href="'mailto:'+contactEmail+'?subject='+subject" class="btn">Ask Me Anything</a></p>
  </div>
</template>

<script>
import {contactEmail} from '@/content/LinkSets';
export default {
  name: "FinaleCTA",
  props: {
    subject: String
  },
  data: function() {
    return {
      contactEmail: contactEmail
    }
  }
}
</script>

<style lang="scss">

</style>
