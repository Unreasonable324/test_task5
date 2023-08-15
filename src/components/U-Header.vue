<template>
  <div class="U-header">
    <div class="container">
      <div class="wrapper-header">
        <a href="#">Каталог</a>
        <div class="header-nav">
          <a href="#">Сравнение</a>
          <a href="#">Личный кабинет </a>
          <img src="../assets/images/userImg.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "U-header",
  // components: {},
  // props: {},
  // data() {
  //   return {};
  // },
  // mounted() {},
  // beforeDestroy() {},
  methods: {},
});
</script>

<style>
.U-header {
  border-bottom: 1px solid #a6a5a9;
}

.wrapper-header {
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  font-size: 18px;
}
.wrapper-header a {
  color: #0d5adc;
  text-decoration: none;
}
.header-nav {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.header-nav :nth-child(1) {
  margin-right: 48px;
  text-transform: uppercase;
  color: #3b4157;
}
.header-nav :nth-child(2) {
  margin-right: 19px;
  color: #3b4157;
}
</style>
