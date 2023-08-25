<template>
  <input
    :id="id"
    type="checkbox"
    v-model="cModelValue"
    class="
      mr-2
      h-4
      w-4
      text-blue-600
      dark:text-blue-500
      bg-gray-100
      border-gray-300
      dark:border-blue-600
      rounded
      focus:ring-blue-500
      active:ring-blue-500
      dark:focus:ring-blue-600 dark:active:ring-blue-600
      focus:ring-2
      active:ring-2
    "
    :class="
      (checkBoxClass != null && checkBoxClass != undefined
        ? checkBoxClass
        : 'bg-green-300') +
      ($attrs.disabled
        ? 'grayscale grayscale-[80%] active:ring-0 focus:ring-0'
        : 'grayscale-0')
    "
    :disabled="$attrs.disabled"
  />
  <!-- ($attrs.disabled ? 'bg-yellow-500' : 'bg-orange-500') + -->

  <label v-if="label" :for="id" :class="$attrs.class">
    {{ label }}
  </label>
  <slot></slot>
</template>
<script setup>
const { id, modelValue, label, checkBoxClass } = defineProps([
  'id',
  'modelValue',
  'label',
  'checkBoxClass',
  // 'value',
]);
const emit = defineEmits(['update:modelValue']);
const cModelValue = computed({
  get() {
    return modelValue;
  },
  set(cModelValue) {
    // if (value) {
    //   if (cModelValue && cModelValue == false) {
    //     emit('update:modelValue', null);
    //   } else if (cModelValue && cModelValue == true) {
    //     emit('update:modelValue', value);
    //   }
    // } else {
    emit('update:modelValue', cModelValue);
    // }
  },
});
</script>
