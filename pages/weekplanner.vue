<script setup>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

const events = ref([
  {
    start: "2023-11-21 14:00",
    end: "2023-11-21 18:00",
    class: "leisure", //leisure, sport, event, duty, meet
    title: "Need to go shopping",
    content: "fa-cart-shopping"
  },
  {
    start: "2023-11-21 19:00",
    end: "2023-11-21 20:00",
    class: "sport", //leisure, sport, event, duty, meet
    title: "Test golf court",
    content: "fa-golf-ball-tee"

  },
  {

    start: "2023-11-22 19:00",
    end: "2023-11-22 22:00",
    class: "sport", //leisure, sport, event, duty, meet
    title: "Golf with John",
    content: '<Icon name="ic:round-sports-golf" size="28px" class="duration-150" />'

  },
  {

    start: "2023-11-23 10:00",
    end: "2023-11-23 13:00",
    class: "event", //leisure, sport, event, duty, meet
    title: "Dad's birthay",
    content: "fa-golf-ball-tee"

  },
  {

    start: "2023-11-24 21:00",
    end: "2023-11-24 24:00",
    class: "duty", //leisure, sport, event, duty, meet
    title: "Do homework",
    content: "fa-golf-ball-tee"

  },
  {

    start: "2023-11-25 15:00",
    end: "2023-11-25 18:00",
    class: "meet", //leisure, sport, event, duty, meet
    title: "Meeting at work",
    content: "fa-golf-ball-tee"

  },
  {

    start: "2023-11-26 09:00",
    end: "2023-11-26 14:00",
    class: "sport", //leisure, sport, event, duty, meet
    title: "Hiking",
    content: "fa-golf-ball-tee"

  },
  {

    start: "2023-11-27 17:00",
    end: "2023-11-27 23:00",
    class: "event", //leisure, sport, event, duty, meet
    title: "Party at Frank house",
    content: "fa-golf-ball-tee"

  }
]);

</script>

<template>
  <div style="height: 600px">
    <vue-cal 
      :time-from="7 * 60" 
      :time-to="23 * 60" 
      active-view="week" 
      :events="events"
      events-on-month-view="short"
    >
      <template #arrow-prev>
        <Icon name="ic:round-arrow-back" size="28px" class="duration-150" />
      </template>
      <template #arrow-next>
        <Icon name="ic:round-arrow-forward" size="28px" class="duration-150" />
      </template>
    </vue-cal>
  </div>
</template>