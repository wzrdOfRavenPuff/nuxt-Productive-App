<template>
  <ul class="rounded p-2">
    <li v-for="item in todos" :key="item.id">
      <span
        v-if="item.subItems"
        @click="item.open = !item.open"
        class="mr-2 cursor-pointer"
        >{{ item.open ? "/\\" : "\\/" }}</span
      >
      <span v-else class="ml-5"></span>
      <InputCheckBox
        :id="'checkbox-' + item.id"
        v-model="item.checked"
        :label="
          item.subItems ? item.topic + ':' : item.topic + ': ' + item.label
        "
        :class="{ 'line-through': item.checked, 'font-bold': item.important }"
        :disabled="item.disabled"
        checkBoxClass="bg-red-500 text-yellow-500 focus:ring-green-500 active:ring-purple-500"
      >
        <ul class="ml-11" v-if="item.open && item.subItems">
          <li
            v-if="item.subItems"
            v-for="subitem in item.label"
            :key="item.id + '-' + subitem.id"
          >
            <InputCheckBox
              :id="'checkbox-' + item.id + '-' + subitem.id"
              v-model="subitem.checked"
              :disabled="subitem.disabled"
              :label="subitem.label"
              :class="{
                'line-through': subitem.checked,
                'font-bold': subitem.important,
              }"
            ></InputCheckBox>
          </li>
        </ul>
      </InputCheckBox>
    </li>
  </ul>
</template>

<script setup>
const getTodos = () =>
  import("~/static/data/todo.json").then((m) => m.default || m);

const list = ref([
  {
    id: 0,
    checked: true,
    disabled: false,
    open: false,
    subItems: true,
    topic: "checkbox",
    label: [
      {
        id: 1,
        checked: true,
        disabled: false,
        label: "add checkbox component",
      },
      { id: 2, checked: true, label: "add label class" },
      { id: 3, checked: true, label: "add slot" },
      { id: 4, checked: true, label: "add checkbox classes" },
      {
        id: 5,
        checked: true,
        disabled: false,
        label: "add model as array (so as text)",
        value: "testText",
      },
      {
        id: 6,
        checked: true,
        label: "add states (default, indeterminate, disabled)",
      },
      { id: 7, checked: true, label: "add label slot" },
    ],
  },
  {
    id: 1,
    checked: false,
    disabled: false,
    open: true,
    subItems: true,
    topic: "default",
    label: [
      { id: 1, checked: true, label: "add common tailwind css" },
      {
        id: 2,
        checked: false,
        label: "add todo read to json file",
        important: true,
      },
      {
        id: 3,
        checked: false,
        label: "add todo write to json file",
        important: true,
      },
      { id: 4, checked: false, label: "add vue use" },
      { id: 5, checked: false, label: "add dark mode" },
    ],
  },
  {
    id: 2,
    checked: true,
    open: false,
    subItems: false,
    topic: "topic",
    label: "label",
    important: true,
  },
  {
    id: 5,
    checked: false,
    open: true,
    subItems: true,
    topic: "weekplanner",
    label: [
      { id: 1, checked: false, label: "add page" },
      { id: 2, checked: false, label: "add overview" },
      { id: 3, checked: false, label: "add input for hours" },
      { id: 4, checked: false, label: "add import from toggle" },
      { id: 5, checked: false, label: "add " },
      { id: 6, checked: false, label: "add " },
      { id: 7, checked: false, label: "add " },
      { id: 8, checked: false, label: "add " },
    ],
  },
  {
    id: 6,
    checked: false,
    open: false,
    subItems: true,
    topic: "components",
    label: [
      { id: 1, checked: true, label: "add checkbox" },
      { id: 2, checked: false, label: "add textfield" },
      { id: 3, checked: false, label: "add select" },
      { id: 4, checked: false, label: "add autocomplete" },
      { id: 5, checked: false, label: "add radiobutton" },
      { id: 6, checked: false, label: "add file input" },
      { id: 7, checked: false, label: "add file input drag and drop?" },
      { id: 8, checked: false, label: "add switch" },
      { id: 9, checked: false, label: "add slider" },
      { id: 10, checked: false, label: "add slider with range" },
      { id: 11, checked: false, label: "add textarea" },
      { id: 12, checked: false, label: "add icon" },
    ],
  },
]);

console.log(getTodos());
</script>
