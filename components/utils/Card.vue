<template>
  <div class="flex flex-col items-center p-5 space-y-5 rounded-xl border-4 border-black shadow hover:shadow-xl">
    <div class="text-4xl font-bold">
      {{ index + 1 }}
    </div>
    <div class="text-2xl uppercase">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
