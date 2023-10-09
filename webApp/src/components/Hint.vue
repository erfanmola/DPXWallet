<script setup>

</script>

<template>
    <section class="hint">
        <i class="icon-info"></i>
        <slot name="content"></slot>
    </section>
</template>

<style lang="scss">

    .hint {
        display: flex;
        border: 1px solid var(--tg-theme-button-color);
        border-radius: 0.325rem;
        position: relative;
        align-items: center;
        padding: 0.75rem;
        gap: 0.75rem;

        > i {
            display: flex;
            align-items: center;
            font-size: 1.25rem;
            color: var(--tg-theme-button-color);
        }

        > p {
            color: var(--tg-theme-button-color);
            font-size: 0.925rem;
            // text-align: justify;
            z-index: 1;
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--tg-theme-button-color);
            opacity: 0.125;
            z-index: -1;
        }
    }

</style>