<template>
  <div>
    <Blok v-if="story" :blok="story" />
    <div class="flex justify-center">
      <NuxtLink to="/" class="inline-block p-4 mx-auto text-xl rounded-xl border-4 border-black hover:bg-black hover:text-white">
        Go back to Home
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import CurrentStory from '~/mixins/getCurrentStory'
import metatags from '~/mixins/metatags'
import storyblokLivePreview from '~/mixins/storyblokLivePreview'

export default {
  components: {},
  mixins: [CurrentStory, metatags, storyblokLivePreview]
}
</script>
