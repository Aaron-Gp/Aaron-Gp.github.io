<template>
    <header class="sticky top-0 z-10 ">
        <Header />
    </header>
    <main class="main space-y-10 mb-40">
        <Gradient class=" -z-10"/>
        <n-button @click="{console.log(instance);instance>0?pass:getChild();instance++;}">
            点它
        </n-button>
        <Game ref="game" />
        <!-- <div class="" id="home">
            <Gradient />
            <h1>Hello Nuxt 3</h1>
            <img src="@/assets/car.jpg" alt="car" />
            <IconsAirplay />
        </div> -->
        <!-- <div>
            <h1>test</h1>
        </div>
        <div>
            <h1>test</h1>
        </div>
        <div>
            <h1>test</h1>
        </div> -->
    </main>
    <footer>

    </footer>
</template>

<script setup>
import { defineComponent, ref } from "vue";
const instance = ref(0)
const game = ref()
const getChild = () => {
    console.log(game.value)
    game.value.doSomething();
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>