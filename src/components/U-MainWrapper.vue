<template>
  <div class="U-main-wrapper">
    <UHeader></UHeader>
    <div class="container">
      <div class="header-comparsion">
        <div class="header-comparsion__title">Смартфоны</div>
        <div class="header-comparsion__navigation">
          Отобразить товары:
          <span
            v-for="qty in variantsSlicePhones"
            :key="qty"
            :style="
              qty === visiblePhone
                ? 'text-decoration : underline'
                : 'text-decoration : none'
            "
            @click="Getqty(qty)"
          >
            {{ qty }}
          </span>
        </div>
      </div>
      <UTable
        :phones_data="phones"
        :remainsPhones_data="remainsPhones"
        @replacementPhone="replacementPhone"
      >
        <input
          type="checkbox"
          id="checked"
          @click="checked()"
          v-model="isChecked"
        /><label for="checked">Показать различия</label>
      </UTable>
    </div>
  </div>
</template>

<script lang="ts">
import UHeader from "./U-Header.vue";
import UTable from "./U-Table.vue";
import { defineComponent } from "vue";
import { Phone, article } from "../api/schema";
import phonesApi from "../api/phones.json";

export default defineComponent({
  name: "MainWrapper",
  components: {
    UHeader,
    UTable,
  },
  data() {
    return {
      remainsPhones: [] as Phone[],
      clonePhones: [] as Phone[],
      visiblePhone: 2 as number,
      variantsSlicePhones: [2, 3, 4, 5, 6] as number[],
      phones: phonesApi as Phone[],
      isChecked: false as boolean,
      index: 0 as number,
    };
  },
  mounted() {
    this.quantityPhoneVisible(this.remainsPhones, this.phones, this.visiblePhone);
  },
  methods: {
    Getqty(qty: number): void {
      this.visiblePhone = qty;
      this.isCheckedDefault();
      this.quantityPhoneVisible(this.remainsPhones, this.phones, this.visiblePhone);
    },

    quantityPhoneVisible(
      remainsPhones: Phone[],
      phones: Phone[],
      visiblePhone: number
    ): void {
      while (remainsPhones.length) {
        const remainsPhone: Phone | undefined = remainsPhones.pop();
        remainsPhone != undefined ? phones.push(remainsPhone) : phones;
      }
      let difference: number = phones.length - visiblePhone;
      while (difference--) {
        const phone: Phone | undefined = phones.pop();
        phone != undefined ? remainsPhones.push(phone) : remainsPhones;
      }
    },
    checked() {
      // создаю копию для возврата исходных данных
      if (this.clonePhones.length != this.phones.length) {
        this.clonePhones = JSON.parse(JSON.stringify(this.phones));
      } else {
        this.phones = JSON.parse(JSON.stringify(this.clonePhones));
      }
      // выявление дубликатов
      if (!this.isChecked) {
        Object.entries(this.phones[0]).forEach(([keyValue, index]: [string, any]) => {
          const isSameValuse: boolean = this.phones.every(
            (phone) => phone[keyValue as keyof Phone] === index
          );
          if (isSameValuse) {
            this.phones.forEach(
              (phone) => (phone[keyValue as keyof Phone] = "duplicate")
            );
          }
        });
      }
    },
    replacementPhone(itemArticle: article, ThisArticle: article) {
      this.isCheckedDefault();
      for (var i = this.phones.length - 1; i >= 0; --i) {
        if (this.phones[i].article === ThisArticle) {
          this.index = this.phones.indexOf(this.phones[i]);
          this.remainsPhones.push(this.phones[i]);
          this.phones.splice(i, 1);
        }
      }
      for (var z = this.remainsPhones.length - 1; z >= 0; --z) {
        if (this.remainsPhones[z].article === itemArticle) {
          this.phones.splice(this.index, 0, this.remainsPhones[z]);
          this.remainsPhones.splice(z, 1);
        }
      }
      this.clonePhones = JSON.parse(JSON.stringify(this.phones));
    },
    isCheckedDefault(): void {
      if (this.isChecked) {
        this.checked();
        this.isChecked = false;
      }
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

.header-comparsion__navigation span:hover {
  text-decoration: underline;
}
</style>
