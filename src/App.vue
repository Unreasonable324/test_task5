<template>
  <UMainWrapper></UMainWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UMainWrapper from "./components/U-MainWrapper.vue"
export default defineComponent({
  name: 'App',
  components: {
    UMainWrapper,
  }
});
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

</style>
