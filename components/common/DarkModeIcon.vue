<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  {{ isDark }}
  <CommonButton @click="toggleDark()" icon>
    <Icon
      v-if="isDark"
      name="ic:twotone-light-mode"
      size="28px"
      class="duration-150"
    />
    <Icon v-else name="ic:twotone-dark-mode" size="28px" class="duration-150" />
  </CommonButton>
</template>

<style scoped></style>
