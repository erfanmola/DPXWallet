<script setup>
    const props = defineProps({ 'rank': { default: 1 } });
</script>

<template>
    <span      v-if="props.rank === 1" class="icon-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>
    <span v-else-if="props.rank === 2" class="icon-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>
    <span v-else-if="props.rank === 3" class="icon-3"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>
    <span v-else-if="props.rank === 4" class="icon-4"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>
    <span v-else-if="props.rank === 5" class="icon-5"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>
    <span v-else-if="props.rank === 6" class="icon-6"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>
    <span v-else-if="props.rank === 7" class="icon-7"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>
    <span v-else-if="props.rank === 8" class="icon-8"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>
</template>