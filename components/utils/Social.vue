<template>
  <div>
    <a v-if="social.link.linktype === 'url'" :href="social.link.url">
      <img class="w-20 h-auto" :src="social.logo.filename" alt="">
    </a>

    <NuxtLink v-else-if="social.link.linktype === 'story'" :to="social.link.url">
      <img class="w-20 h-auto" :src="social.logo.filename" alt="">
    </NuxtLink>

    <span v-else>no valid link was entered here</span>
  </div>
</template>
<script>
export default {
  props: {
    social: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
