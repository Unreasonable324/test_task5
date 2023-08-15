<template>
  <div>
    <div class="U-table">
      <div class="table-wrapper">
        <div class="table_titles">
          <div class="table_titles__preview">
            <slot></slot>
          </div>
          <div class="table_titles__manufacturer">производитель</div>

          <div class="table_titles__release-year">год релиза</div>

          <div class="table_titles__diagonal">Диагональ экрана (дюйм)</div>
          <div class="table_titles__country-of-origin">Страна-производитель</div>
          <div class="table_titles__memory-capacity">Объем памяти</div>
          <div class="table_titles__screen-refresh-rate">Частота обновления экрана</div>
          <div class="table_titles__nfc">nfc</div>
          <div class="table_titles__eSIM-support">Поддержка eSIM</div>
          <div class="table_titles__support-wireless-charging">
            Поддержка беспроводной зарядки
          </div>
          <div class="table_titles__price">стоимость</div>
        </div>
        <UTableItem
          v-for="phone_data in phones_data"
          :phone_data="phone_data"
          :key="phone_data.article"
        ></UTableItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UTableItem from "./U-TableItem.vue";
import { PropType, defineComponent } from "vue";
import { Phones,RemainsPhones } from "../api/schema";

export default defineComponent({
  name: "U-Table",
  components: {
    UTableItem,
  },
  props: {
    phones_data: {
      type: Array as PropType<RemainsPhones[]>,
    },
  },
  data() {
    return {};
  },
  // mounted() {},
  // beforeDestroy() {},
  methods: {},
});
</script>

<style>
.table-wrapper {
  width: 100%;
  line-height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 90px;
  position: relative;
}
.table-wrapper::before {
  content: "";
  width: 99vw;
  height: calc(100% - 213px);
  background: #f4f9fc;
  position: absolute;
  z-index: -1;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0px;
}

.table_titles {
  flex: 1;
}
.table_titles > div {
  padding: 0 5px;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #cdcfd2;
}
.table_titles > div:nth-child(1) {
  display: flex;
  align-items: flex-end;
  height: 195px;
  padding-bottom: 50px;
  margin-top: 20px;
  justify-content: flex-start;
}
.table_titles:nth-child(1) > div {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: #a4a9b9;
  padding-right: 4px;
  padding-left: 0px;
}
.table_titles:nth-child(1) > div:nth-child(1) {
  display: flex;
  justify-content: flex-start;

  text-transform: none;
  font-weight: 400;
  font-size: 16px;
  color: #0d5adc;
}
.table_titles > div:nth-child(n + 2) {
  display: flex;
  align-items: center;
}

.table_titles__preview {
  display: inline-block;
  position: relative;
}
</style>
