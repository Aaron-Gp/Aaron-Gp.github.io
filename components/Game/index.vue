<template>
    <div class="game w-full items-center justify-center" ref="canvas"></div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import Game from "./Scenes/dino.js"

const canvas = ref();
// let width = 1200;
// let height = 769;
const width = window.innerWidth;
const height = width / 16 * 9;

const scale = `scale(${window.innerHeight < window.innerWidth
    ? window.innerHeight / height
    : window.innerWidth / width
    })`;

const doSomething = () => {
    console.log(canvas.value);
    new Game({
        width,
        height,
        el: canvas.value,
        resolution: 1,
        onProgress: n => {
            Bus.$emit("changeProgress", n);
        }
    }).init();
}
defineExpose({
    doSomething
})
</script>

<style lang="scss">
.game canvas {
    // transform: v-bind(scale);
    width: v-bind(width);
    height: v-bind(height);
    // cursor: none;
}
</style>