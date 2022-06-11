<template>
  <div
    class="flex justify-center mx-auto w-full"
    :class="{
      'bg-gradient-to-r from-yellow-500 to-green-300': variant === 'hero' && $route.path === '/'
    }"
  >
    <div
      :class="{
        'py-40 max-w-screen-2xl px-6': variant === 'hero',
        'max-w-screen-xl py-8 md:py-12 px-6 md:px-12 w-full' : variant === 'xl'
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: ''
    }
  }
}
</script>
