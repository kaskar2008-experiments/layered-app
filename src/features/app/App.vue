<template lang="pug">
h1 qweqwe
component(:is="layout")
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import { LoadLayout, TTayoutName } from '@/features/layout/business';

export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute()
    const layout = shallowRef();

    watch(route, () => {
      layout.value = defineAsyncComponent(LoadLayout(route.meta.layout as TTayoutName));
    }, {
      immediate: true,
    });

    return {
      layout,
    }
  },
})
</script>
