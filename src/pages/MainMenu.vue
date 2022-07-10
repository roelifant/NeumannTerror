<script setup lang="ts">
import neumann from "../assets/img/Neumann.svg";
import terror from "../assets/img/Terror.svg";
import mainMenu from "../assets/img/mainMenu.svg";
import warpGate from "../assets/img/WarpGate.svg";
import roelifant from "../assets/img/roelifant.svg";

import { ref, computed } from "vue";

const colors = [
  "red",
  "purple",
  "blue",
  "green",
  "brown",
  "orange",
  "cyan",
  "yellow"
];
let rando = Math.floor(Math.random() * (colors.length - 1));
let colorIndex = ref(rando);

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
    class="
      w-screen
      h-screen
      bg-black
      transition-opacity
      duration-1000
      overflow-hidden
    "
    :class="{ 'opacity-0': loading }"
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
          class="
            w-10/12
            sm:w-10/12
            md:w-11/12
            xl:w-10/12
            2xl:w-8/12
            mx-auto
            animate-[neumann_7s_ease-in-out_infinite_alternate-reverse]
          "
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
            animate-[terror_7s_ease-in-out_infinite_alternate]
          "
          :class="['text-' + menuColor, 'duration-[' + transitionSpeed + 'ms]']"
        />
      </div>
    </div>

    <div class="absolute bottom-0 -left-[75%] sm:left-0 w-[250%] sm:w-full">
      <div class="max-w-xl mx-auto relative">
        <main-menu
          class="w-12/12 mx-auto transition-colors]"
          :class="['text-' + menuColor, 'duration-[' + transitionSpeed + 'ms]']"
        />

        <div class="absolute bottom-[22.5%] w-full">
          <warp-gate
            class="
              transition-colors
              mx-auto
              w-[130px]
              animate-[spin_7s_linear_infinite_reverse]
            "
            :class="[
              'text-' + menuColor,
              'duration-[' + transitionSpeed + 'ms]',
            ]"
          />
        </div>

        <div class="absolute bottom-4 w-full">
          <a
            href="https://roelifant.com"
            class="block transition-colors w-12 mx-auto hover:opacity-70"
            :class="[
              'text-' + menuColor,
              'duration-[' + transitionSpeed + 'ms]',
            ]"
          >
            <roelifant />
          </a>
        </div>

        <!-- Planets -->
        <div class="relative w-full bottom-0">
          <!-- Left -->
          <div
            class="
              rounded-full
              w-6
              h-6
              bg-gray-lighter
              absolute
              bottom-[210px]
              left-[40px]
              animate-[menuPlanet1_9s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-4
              h-4
              bg-gray-lighter
              absolute
              bottom-[310px]
              left-[10px]
              animate-[menuPlanet2_10s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[350px]
              left-[175px]
              animate-[menuPlanet3_11s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-4
              h-4
              bg-gray-lighter
              absolute
              bottom-[420px]
              left-[100px]
              animate-[menuPlanet4_12s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-4
              h-4
              bg-gray-lighter
              absolute
              bottom-[510px]
              left-[-50px]
              animate-[menuPlanet1_12s_ease-in-out_infinite_alternate]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[400px]
              left-[-75px]
              animate-[menuPlanet2_11s_ease-in-out_infinite_alternate]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[200px]
              left-[-100px]
              animate-[menuPlanet3_10s_ease-in-out_infinite_alternate]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[525px]
              left-[200px]
              animate-[menuPlanet4_9s_ease-in-out_infinite_alternate]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[350px]
              left-[-250px]
              animate-[menuPlanet4_9s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[600px]
              left-[-200px]
              animate-[menuPlanet3_10s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[650px]
              left-[-10px]
              animate-[menuPlanet2_11s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[375px]
              left-[275px]
              animate-[menuPlanet1_12s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-4
              h-4
              bg-gray-lighter
              absolute
              bottom-[70px]
              left-[40px]
              animate-[menuPlanet1_13s_ease-in-out_infinite_alternate]
            "
          />

          <!-- Right -->
          <div
            class="
              rounded-full
              w-6
              h-6
              bg-gray-lighter
              absolute
              bottom-[450px]
              right-[120px]
              animate-[menuPlanet4_9s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-4
              h-4
              bg-gray-lighter
              absolute
              bottom-[330px]
              right-[-50px]
              animate-[menuPlanet3_10s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[375px]
              right-[150px]
              animate-[menuPlanet2_11s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-4
              h-4
              bg-gray-lighter
              absolute
              bottom-[475px]
              right-[220px]
              animate-[menuPlanet1_12s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-4
              h-4
              bg-gray-lighter
              absolute
              bottom-[510px]
              right-[-110px]
              animate-[menuPlanet4_12s_ease-in-out_infinite_alternate]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[400px]
              right-[10px]
              animate-[menuPlanet3_11s_ease-in-out_infinite_alternate]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[190px]
              right-[-75px]
              animate-[menuPlanet2_10s_ease-in-out_infinite_alternate]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[110px]
              right-[30px]
              animate-[menuPlanet1_9s_ease-in-out_infinite_alternate]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[525px]
              right-[50px]
              animate-[menuPlanet4_12s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[325px]
              right-[-240px]
              animate-[menuPlanet3_11s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[575px]
              right-[-220px]
              animate-[menuPlanet2_10s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-3
              h-3
              bg-gray-lighter
              absolute
              bottom-[675px]
              right-[30px]
              animate-[menuPlanet1_9s_ease-in-out_infinite_alternate-reverse]
            "
          />
          <div
            class="
              rounded-full
              w-4
              h-4
              bg-gray-lighter
              absolute
              bottom-[250px]
              right-[40px]
              animate-[menuPlanet2_13s_ease-in-out_infinite_alternate-reverse]
            "
          />
        </div>
      </div>
    </div>

    <!-- buttons -->
    <div class="absolute top-52 left-0 w-full z-10 space-y-4">
      <router-link
        to="/test"
        class="
          block
          mx-auto
          w-40
          bg-gray
          hover:bg-gray-light
          text-center
          uppercase
          font-bold
          shadow-neumann
          text-lg
          py-1
          text-gray-darker
        "
        >Test</router-link
      >
      <router-link
        to="/test"
        class="
          block
          mx-auto
          w-40
          bg-gray
          hover:bg-gray-light
          text-center
          uppercase
          font-bold
          shadow-neumann
          text-lg
          py-1
          text-gray-darker
        "
        >Test</router-link
      >
      <router-link
        to="/test"
        class="
          block
          mx-auto
          w-40
          bg-gray
          hover:bg-gray-light
          text-center
          uppercase
          font-bold
          shadow-neumann
          text-lg
          py-1
          text-gray-darker
        "
        >Test</router-link
      >
      <router-link
        to="/test"
        class="
          block
          mx-auto
          w-40
          bg-gray
          hover:bg-gray-light
          text-center
          uppercase
          font-bold
          shadow-neumann
          text-lg
          text-gray-darker
          py-1
        "
        >Test</router-link
      >
    </div>
  </div>
</template>

<style>
</style>
