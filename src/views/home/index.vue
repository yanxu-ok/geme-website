<template>
  <div>
    home
    {{msg}}
    <drag-process :min="0" :max="100" v-model="proces" />
    asdas
    123
  </div>
</template>
<script>
import DragProcess from '_c/DragProcess'
export default {
  name: 'home',
  components: {
    DragProcess
  },
  data() {
    return {
      proces: 10,
      msg: '132'
    }
  }
}
</script>