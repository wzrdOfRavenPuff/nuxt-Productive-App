<script setup>
const { label, text, icon } = defineProps({
  text: {
    type: String,
    required: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button class="btn" :class="icon ? 'rounded-full ' : ''">
    <slot>
      {{ text ?? '' }}
    </slot>
  </button>
</template>

<style lang="scss" scoped></style>
