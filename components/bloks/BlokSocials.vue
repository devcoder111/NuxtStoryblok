<template>
  <Section v-editable="blok" variant="xl">
    <h2>{{ blok.title }}</h2>
    <div class="flex space-x-6 justify-center mt-8 md:mt-12">
      <!-- comment <Social v-for="(social, index) in blok.sub_socials" :key="index" :social="social" /> -->
    </div>
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
