<template>
  <div class="U-main-wrapper">
    <UHeader></UHeader>

    <div class="container">
      <div class="header-comparsion">
        <div class="header-comparsion__title">Смартфоны</div>
        <div class="header-comparsion__navigation">
          Отобразить товары:
          <span
            v-for="qty in [2, 3, 4, 5, 6]"
            :key="qty"
            :style="
              qty === visiblePhone
                ? 'text-decoration : underline'
                : 'text-decoration : none'
            "
            @click="
              (): void => {
                visiblePhone = qty;
                quantityPhoneVisible();
              }
            "
          >
            {{ qty }}
          </span>
        </div>
      </div>
      <UTable :phones_data="phones">
        <!-- <input type="checkbox" id="checked" @click="checked" v-model="isChecked" /><label
          for="checked"
          >Показать различия</label
        > -->
      </UTable>
    </div>
  </div>
</template>

<script lang="ts">
import UHeader from "./U-Header.vue";
import UTable from "./U-Table.vue";
import { defineComponent } from "vue";
import { Phones, RemainsPhones } from "../api/schema";

interface State {
  phones: Phones[];
  remainsPhones: Phones[];
  visiblePhone: number;
}

export default defineComponent({
  name: "MainWrapper",
  components: {
    UHeader,
    UTable,
  },
  // props: {},
  data(): State {
    return {
      remainsPhones: [] as Phones[],
      visiblePhone: number 3,
      phones: [
        {
          article: 1,
          image: "Apple_iPhone_12.png",
          name: "Apple iPhone 12",
          manufacturer: "Apple",
          releaseYear: "2020",
          diagonal: "6,1",
          countryOfOrigin: "Китай",
          memoryCapacity: "128 Гб",
          screenRefreshRate: "60 Гц",
          nfc: false,
          eSIMSupport: false,
          supportWirelessCharging: false,
          price: 81990,
        },

        {
          article: 2,
          image: "Xiaomi_Mi_11_Lite.png",
          name: "Xiaomi Mi 11 Lite ",
          manufacturer: "Xiaomi",
          releaseYear: "2021",
          diagonal: "6,55",
          countryOfOrigin: "Китай",
          memoryCapacity: "128 Гб",
          screenRefreshRate: "90 Гц",
          nfc: true,
          eSIMSupport: true,
          supportWirelessCharging: false,
          price: 27490,
        },
        {
          article: 3,
          image: "Samsung_Galaxy_A72.png",
          name: "Samsung Galaxy A72",
          manufacturer: "Samsung",
          releaseYear: "2021",
          diagonal: "6,7",
          countryOfOrigin: "Вьетнам",
          memoryCapacity: "128 Гб",
          screenRefreshRate: "90 Гц",
          nfc: true,
          eSIMSupport: false,
          supportWirelessCharging: true,
          price: 32890,
        },
        {
          article: 4,
          image: "Apple_iPhone_Xr.png",
          name: "iPhone XR",
          manufacturer: "Apple",
          releaseYear: "2018",
          diagonal: "6,1",
          countryOfOrigin: "Китай",
          memoryCapacity: "256 Гб",
          screenRefreshRate: "90 Гц",
          nfc: true,
          eSIMSupport: true,
          supportWirelessCharging: true,
          price: 65990,
        },
        {
          article: 5,
          image: "Samsung_Galaxy_S21.png",
          name: "Samsung Galaxy S21",
          manufacturer: "Samsung",
          releaseYear: "2021",
          diagonal: "6,2",
          countryOfOrigin: "Вьетнам",
          memoryCapacity: "256 Гб",
          screenRefreshRate: "90 Гц",
          nfc: true,
          eSIMSupport: true,
          supportWirelessCharging: true,
          price: 65990,
        },
        {
          article: 6,
          image: "Realme_8_Pro.png",
          name: "Realme 8 Pro",
          manufacturer: "Realme",
          releaseYear: "2021",
          diagonal: "6,51",
          countryOfOrigin: "Китай",
          memoryCapacity: "256 Гб",
          screenRefreshRate: "60 Гц",
          nfc: true,
          eSIMSupport: true,
          supportWirelessCharging: true,
          price: 27990,
        },
      ],
    };
  },
  mounted() {
    this.quantityPhoneVisible();
  },
  methods: {
    quantityPhoneVisible(): void {
      while (this.remainsPhones.length) this.phones.push(this.remainsPhones.pop());
      let difference: number = this.phones.length - this.visiblePhone;
      while (difference--) this.remainsPhones.push(this.phones.pop());
    },
  },
});
</script>

<style>
.U-main-wrapper {
  overflow: hidden;
  position: relative;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.header-comparsion {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.header-comparsion__title {
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.02em;
  color: #828286;
}
.header-comparsion__navigation {
  font-weight: 400;
  font-size: 18px;
  line-height: 60px;
  letter-spacing: 0.02em;
  color: #0d5adc;
  display: flex;
  gap: 5px;
}
.header-comparsion__navigation span {
  cursor: pointer;
}
/* .header-comparsion__navigation span:nth-of-type(2) {
  text-decoration: underline;
} */
.header-comparsion__navigation span:hover {
  text-decoration: underline;
}
</style>
