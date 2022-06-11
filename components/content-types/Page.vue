<template>
  <main v-editable="blok">
    <slot name="bloks" />
  </main>
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
