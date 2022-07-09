<script setup lang="ts">
import neumann from "../assets/img/Neumann.svg";
import terror from "../assets/img/Terror.svg";
import mainMenu from "../assets/img/mainMenu.svg";
import warpGate from "../assets/img/WarpGate.svg";
import roelifant from "../assets/img/roelifant.svg";

import { ref, computed, nextTick } from "vue";

const colors = [
  "rose-500",
  "purple-500",
  "blue-500",
  "green-300",
  "orange-900",
  "orange-300",
];
let colorIndex = ref(0);

let loading = ref(true);
let transitionSpeed = ref(10000);

const menuColor = computed(() => {
  return colors[colorIndex.value];
});

setTimeout(() => {
  loading.value = false;
  colorIndex.value++;
}, 100);


setInterval(() => {
  if (colorIndex.value == colors.length - 1) {
    colorIndex.value = 0;
  } else {
    colorIndex.value++;
  }
}, transitionSpeed.value);
</script>

<template>
  <div
    class="w-screen h-screen bg-black transition-opacity duration-1000"
    :class="{'opacity-0': loading}"
  >
    <div
      v-for="color in colors"
      :key="color"
      class="
        w-full
        h-full
        bg-gradient-to-b
        transition-opacity
        from-black
        opacity-0
        absolute
        top-0
        left-0
      "
      :class="[
        { 'opacity-30': menuColor === color },
        'to-' + color,
        'duration-[' + transitionSpeed + 'ms]',
      ]"
    />

    <div class="absolute top-0 left-0 z-10 w-full">
      <div class="max-w-xl mx-auto mt-6">
        <neumann
          class="w-10/12 sm:w-10/12 md:w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto"
        />

        <terror
          class="
            w-9/12
            sm:w-9/12
            md:w-10/12
            xl:w-9/12
            2xl:w-7/12
            mx-auto
            mt-[-15px]
            transition-colors
            z-10
          "
          :class="['text-' + menuColor, 'duration-[' + transitionSpeed + 'ms]']"
        />
      </div>
    </div>

    <!-- <roelifant class="absolute top-0 left-0 transition-colors duration-[10000ms]" :class="menuColor" /> -->
    <!-- <warp-gate class="absolute top-0 left-0 transition-colors duration-[10000ms]" :class="menuColor" /> -->
    <div class="absolute bottom-0 left-0 w-full">
      <div class="max-w-xl mx-auto">
        <main-menu
          class="w-12/12 mx-auto transition-colors]"
          :class="['text-' + menuColor, 'duration-[' + transitionSpeed + 'ms]']"
        />
      </div>
    </div>

    <!-- buttons -->
    <div class="absolute top-0 left-0 w-full z-10">
      <router-link to="/test" class="block mx-auto w-20">Test</router-link>
    </div>
  </div>
</template>

<style>
</style>
