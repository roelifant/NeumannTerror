<script setup lang="ts">
import { ref } from "vue";

const dismissed = ref(false);
</script>

<template>
  <div
    v-show="!dismissed"
    class="absolute w-full h-full top-0 z-20 landscape:md:hidden"
  >
    <div class="absolute bg-black opacity-70 w-full h-full top-0" />
    <div class="drop-shadow-neumann h-full w-full">
      <div
        class="
          bg-gray-dark
          relative
          py-6
          w-full
          h-full
          sm:w-10/12 sm:mx-auto sm:h-auto sm:mt-[20vh]
          flex flex-col
          sm:clip-path-modal
        "
      >
        <p
          class="
            text-gray-font
            font-bold
            uppercase
            text-xl text-center
            mb-6
            p-2
          "
        >
          We're going to need a bigger boat...
        </p>
        <p class="text-gray-font px-6 mb-6">
          It looks like the screen of your device isn't big enough to play this
          game!
        </p>
        <p class="text-gray-font px-6 mb-6">
          This game was designed for computer or tablet screens, so maybe
          bookmark it for later when you're on a bigger device.
        </p>
        <p class="text-gray-font px-6 mb-6">
          Feel free to try it on this device if you really want to, but be
          warned that everything might not fit on the screen and that the game
          will be more fun on your computer.
        </p>
        <button
          @click="dismissed = true"
          class="
            block
            mx-auto
            w-52
            sm:w-40
            bg-gray-light
            hover:bg-gray-lighter
            text-center
            uppercase
            font-bold
            shadow-neumann
            text-xl
            sm:text-lg
            py-2
            sm:py-1
            text-gray-dark
            mt-auto
            sm:mt-0
          "
        >
          Understood
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
