<template>
  <div
    class="flex flex-col space-y-10 items-center justify-center h-full mt-20"
  >
    <h3 class="z-20">
      {{ errorCode }}
    </h3>
    <h4 v-if="errorCode === 404" class="z-20">
      Page not found
    </h4>
    <h1 v-else class="z-20">
      An error occurred
    </h1>
    <t-button
      variant="primaryWithArrow"
      class="z-20"
      @click="$router.push('/')"
    >
      Back to home
    </t-button>
  </div>
</template>

<script>
export default {
  layout: 'error',
  error: {
    type: [Error, String],
    default: ''
  },
  computed: {
    errorCode () {
      return this.error?.statusCode
    }
  }
}
</script>
