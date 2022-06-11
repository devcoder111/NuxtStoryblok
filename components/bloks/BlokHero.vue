<template>
  <Section v-editable="blok" variant="hero" class="">
    <h1 class="text-center text-6xl font-black">
      {{ blok.title }}
    </h1>
    <h2 class="">
      {{ blok.subtitle }}
    </h2>
  </Section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
