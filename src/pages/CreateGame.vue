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
  "dark",
  "cyan",
  "yellow",
];

let loading = ref(true);
let transitionSpeed = ref(10000);

const menuColor = ref("black");

setTimeout(() => {
  loading.value = false;
}, 100);
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

    <div class="flex justify-between gap-6 p-10 lg:max-w-5xl mx-auto relative">
      <div class="bg-gray p-4 w-6/12 shadow-neumann">
        <router-link
          to="/"
          class="
            absolute
            bg-gray-light
            hover:bg-gray-lighter
            pl-4
            pr-2
            py-1
            arrow-l
            text-sm
            uppercase
            text-gray-darker
            font-bold
          "
        >
          Back
        </router-link>
        <h1
          class="
            text-gray-darker
            font-bold
            uppercase
            w-full
            text-center text-xl
          "
        >
          Create Game
        </h1>
        <div class="space-y-2 mt-6">
          <h2 class="text-gray-darker font-bold uppercase text">Players</h2>
        </div>
      </div>
      <div class="bg-gray p-4 w-6/12 shadow-neumann">
        <h2 class="text-gray-darker font-bold uppercase">Settings</h2>
        <div class="space-y-2 mt-6">
          <div class="flex justify-between w-full">
            <p>Label</p>
            <p>Setting</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
