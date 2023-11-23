<template>
  <h1>Welcome</h1>
  <h2>About</h2>
  <div>
    This app is to be more productive. It includes:
    <ul class="list">
      <li>weekplanner (with import from toggle)</li>
      <li>todo list for this app</li>
    </ul>
  </div>
  <h3>Select one of the following:</h3>
  <ul class="list">
    <li>
      <NuxtLink to="/todo">Todo</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/weekplanner">Weekplanner</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/calendar">Calendar</NuxtLink>
    </li>
  </ul></template>
<script setup></script>
