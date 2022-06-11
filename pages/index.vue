<template>
  <div>
    <Blok v-if="story" :blok="story" />
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
