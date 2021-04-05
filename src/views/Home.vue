<template>
  <div class="home">
    <GraphDrawer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GraphDrawer from '@/components/GraphDrawer.vue'; // @ is an alias to /src

@Component({
  components: {
    GraphDrawer,
  },
})
export default class Home extends Vue {}
</script>
