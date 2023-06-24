<template>
    <nav class="w-full border-b border-black/5 dark:border-white/5 lg:border-transparent ">
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4 ">
                <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max ">
                    <a href="/" aria-label="logo" class="flex items-center space-x-2 ">
                        <div aria-hidden="true" class="flex space-x-1 ">
                            <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white "></div>
                            <div class="h-6 w-2 bg-primary "></div>
                        </div>
                        <span class="text-2xl font-bold text-gray-900 dark:text-white ">Astrolus</span>
                    </a>
                    <NavbarHamburger :isToggled="isToggled" @toggle="toggleNavlinks" />
                </div>
                <NavbarLayer :isToggled="isToggled" />
                <NavbarLinks :isToggled="isToggled" @toggle="toggleNavlinks" :navlinks="navlinks"/>
            </div>
        </div>
    </nav>
</template>

<script setup>
const isToggled = ref(false);
function toggleNavlinks() {
    isToggled.value = !isToggled.value;
}
const navlinks = ref([
    {
        link: '/custom',
        text: 'Test'
    }
])
</script>

<style lang="scss" scoped></style>