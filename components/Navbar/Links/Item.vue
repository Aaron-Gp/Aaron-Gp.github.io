<template>
    <li class="" @click="$emit('toggle')">
        <a :href="link" class="hover:text-primary block transition dark:hover:text-white md:px-4 ">
            <span class="">
                <slot />
            </span>
        </a>
    </li>
</template>

<script setup>
defineProps(['link'])
defineEmits(['toggle'])
</script>

<style lang="scss" scoped></style>