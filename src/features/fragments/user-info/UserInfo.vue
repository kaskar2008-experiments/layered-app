<template lang="pug">
p.user-info {{ user }}
</template>

<script lang="ts">
import { IUser } from '@/domain/user/resolvers';
import { defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  name: 'UserInfo',
  props: {
    user: {
      type: Object as PropType<IUser>,
    },
  },
  setup(props) {
    const { user } = toRefs(props);

    return {
      user,
    };
  },
})
</script>

<style lang="stylus" scoped>
.user-info
  border-radius 6px
  background-color #ddd
  padding 1rem
  margin 0.5rem
</style>
