<template>
  <ul class="bg-pink-200 rounded p-2">
    <li v-for="item in list" :key="item.id">
      <span
        v-if="item.subItems"
        @click="item.open = !item.open"
        class="mr-2 cursor-pointer"
        >{{ item.open ? '/\\' : '\\/' }}</span
      >
      <span v-else class="ml-5"></span>
      <InputCheckbox
        :id="'checkbox-' + item.id"
        v-model="item.checked"
        :label="
          item.subItems ? item.topic + ':' : item.topic + ': ' + item.label
        "
        :class="item.checked ? 'line-through' : ''"
        :disabled="item.disabled"
        checkBoxClass="bg-red-500 text-yellow-500 focus:ring-green-500 active:ring-purple-500"
      >
        <ul class="ml-11" v-if="item.open && item.subItems">
          <li
            v-if="item.subItems"
            v-for="subitem in item.label"
            :key="item.id + '-' + subitem.id"
          >
            <InputCheckbox
              :id="'checkbox-' + item.id + '-' + subitem.id"
              v-model="subitem.checked"
              :disabled="subitem.disabled"
              :label="subitem.label"
              :class="subitem.checked ? 'line-through' : ''"
            ></InputCheckbox>
          </li>
        </ul>
      </InputCheckbox>
    </li>
  </ul>
</template>

<script setup>
const textField = ref(undefined);
const list = ref([
  {
    id: 0,
    checked: true,
    disabled: false,
    open: false,
    subItems: true,
    topic: 'checkbox',
    label: [
      {
        id: 1,
        checked: true,
        disabled: false,
        label: 'add checkbox component',
      },
      { id: 2, checked: true, label: 'add label class' },
      { id: 3, checked: true, label: 'add slot' },
      { id: 4, checked: true, label: 'add checkbox classes' },
      {
        id: 5,
        checked: true,
        disabled: false,
        label: 'add model as array (so as text)',
        value: 'testText',
      },
      {
        id: 6,
        checked: true,
        label: 'add states (default, indeterminate, disabled)',
      },
      { id: 7, checked: true, label: 'add label slot' },
    ],
  },
  {
    id: 1,
    checked: false,
    disabled: false,
    open: true,
    subItems: true,
    topic: 'default',
    label: [
      {
        id: 1,
        checked: false,
        label: 'add games submenu on navbar',
      },
      { id: 2, checked: true, label: 'add common tailwind css' },
      { id: 3, checked: false, label: 'add vue use' },
      { id: 4, checked: false, label: 'add dark mode' },
    ],
  },
  {
    id: 2,
    checked: false,
    open: false,
    subItems: true,
    topic: 'mastermind',
    label: [
      {
        id: 1,
        checked: false,
        label: 'add count on how many guesses where needed',
      },
      { id: 2, checked: true, label: 'beautify' },
    ],
  },
  {
    id: 3,
    checked: false,
    disabled: false,
    open: false,
    subItems: true,
    topic: 'tictactoe',
    label: [
      { id: 1, checked: false, label: 'switch start player' },
      { id: 2, checked: false, label: 'beautify' },
    ],
  },
  {
    id: 4,
    checked: false,
    open: false,
    subItems: true,
    topic: 'new game ideas',
    label: [
      { id: 1, checked: false, topic: 'default', label: 'add minesweeper' },
      { id: 2, checked: false, topic: 'default', label: 'add memory' },
    ],
  },
  {
    id: 5,
    checked: false,
    open: false,
    subItems: false,
    topic: 'new game ideas',
    label: 'add minesweeper',
  },
  {
    id: 6,
    checked: false,
    open: false,
    subItems: true,
    topic: 'components',
    label: [
      { id: 1, checked: true, label: 'add checkbox' },
      { id: 2, checked: false, label: 'add textfield' },
      { id: 3, checked: false, label: 'add select' },
      { id: 4, checked: false, label: 'add autocomplete' },
      { id: 5, checked: false, label: 'add radiobutton' },
      { id: 6, checked: false, label: 'add file input' },
      { id: 7, checked: false, label: 'add file input drag and drop?' },
      { id: 8, checked: false, label: 'add switch' },
      { id: 9, checked: false, label: 'add slider' },
      { id: 10, checked: false, label: 'add slider with range' },
      { id: 11, checked: false, label: 'add textarea' },
      { id: 12, checked: false, label: 'add icon' },
    ],
  },
]);
</script>
