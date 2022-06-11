<template>
  <Section v-editable="blok" variant="xl">
    <div>
      <h2 class="">
        {{ blok.title }}
      </h2>
      <!-- grid with stack -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 md:mt-12 gap-5 md:gap-10">
        <div v-for="(stack, index) in blok.stack" :key="index">
          <NuxtLink :to="stack.full_slug || '/'">
            <Card
              :name="getHeroTitle(stack)"
              :index="index"
            />
          </NuxtLink>
        </div>
      </div>
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
  },
  methods: {
    getHeroTitle (stack) {
      return stack.content?.bloks?.[0]?.title
    }
  }
}
</script>
