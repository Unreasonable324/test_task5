<template>
  <div>
    <div class="U-table">
      <div class="table-wrapper">
        <div class="table_titles">
          
          <div class="table_titles__preview">
            <div class="table_titles__preview-data">
              <div class="table_titles__preview__phone-img">
                
                
               
              </div>
              <div class="table_titles__preview__phone-name"><slot></slot></div>
            </div>
          </div>
          <div
            class="table_titles__manufacturer"
            v-if="isVivsibleTitles(phones_data, 'manufacturer')"
          >
            производитель
          </div>
          <div
            class="table_titles__release-year"
            v-if="isVivsibleTitles(phones_data, 'releaseYear')"
          >
            год релиза
          </div>
          <div
            class="table_titles__diagonal"
            v-if="isVivsibleTitles(phones_data, 'diagonal')"
          >
            Диагональ экрана (дюйм)
          </div>
          <div
            class="table_titles__country-of-origin"
            v-if="isVivsibleTitles(phones_data, 'countryOfOrigin')"
          >
            Страна-производитель
          </div>
          <div
            class="table_titles__memory-capacity"
            v-if="isVivsibleTitles(phones_data, 'memoryCapacity')"
          >
            Объем памяти
          </div>
          <div
            class="table_titles__screen-refresh-rate"
            v-if="isVivsibleTitles(phones_data, 'screenRefreshRate')"
          >
            Частота обновления экрана
          </div>
          <div class="table_titles__nfc" v-if="isVivsibleTitles(phones_data, 'nfc')">
            nfc
          </div>
          <div
            class="table_titles__eSIM-support"
            v-if="isVivsibleTitles(phones_data, 'eSIMSupport')"
          >
            Поддержка eSIM
          </div>
          <div
            class="table_titles__support-wireless-charging"
            v-if="isVivsibleTitles(phones_data, 'supportWirelessCharging')"
          >
            Поддержка беспроводной зарядки
          </div>
          <div class="table_titles__price" v-if="isVivsibleTitles(phones_data, 'price')">
            стоимость
          </div>
        </div>
        <UTableItem
          v-for="phone_data in phones_data"
          :phone_data="phone_data"
          :key="phone_data.article"
          :remainsPhones_data="remainsPhones_data"
          @replacementPhone="replacementPhone"
        ></UTableItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UTableItem from "./U-TableItem.vue";
import { PropType, defineComponent } from "vue";
import { Phone, article } from "../api/schema";

export default defineComponent({
  name: "U-Table",
  components: {
    UTableItem,
  },
  props: {
    phones_data: {
      type: Array as PropType<Phone[]>,
      default() {
        return [];
      },
    },
    remainsPhones_data: {
      type: Array as PropType<Phone[]>,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    isVivsibleTitles(phones_data: Phone[], key: string): boolean {
      for (let phone_data of phones_data) {
        if (phone_data[key as keyof Phone] === "duplicate") {
          return false;
        }
      }
      return true;
    },
    replacementPhone(itemArticle: article, ThisArticle: article) {
      this.$emit("replacementPhone", itemArticle, ThisArticle);
    },
  },
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
  align-items: stretch;
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
  align-items: stretch;
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
