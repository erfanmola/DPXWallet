<script setup>
    const props = defineProps([
        'title',
        'icon',
    ]);
</script>

<template>
    <header id="header-main">
        <h1 v-if="props.title || props.icon"><i v-if="props.icon" :class="props.icon"></i>{{ props.title }}</h1>

        <ul>
            <slot name="menu"></slot>
        </ul>
    </header>
</template>

<style lang="scss">

    #header-main {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        
        > h1 {
            display: flex;
            font-size: 1.25rem;
            align-items: center;
            gap: 1rem;
            order: 2;
            flex-direction: column;
            color: var(--tg-theme-button-color);

            > i {
                font-size: 4rem;
            }
        }

        > ul {
            order: 1;
            display: flex;
            width: 100%;
            gap: 1rem;
            justify-content: flex-end;

            > li {
                i {
                    font-size: 1.75rem;
                }

                &#settings-icon {
                    flex-grow: 1;
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }
    }

</style>