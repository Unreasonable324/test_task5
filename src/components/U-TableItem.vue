<template>
  <div class="table_titles">
    <div class="table_titles__preview">
      <div class="table_titles__preview-data">
        <div class="table_titles__preview__phone-img">
          <img
            :src="require('../assets/images/phonesImg/' + phone_data.image)"
            alt="phoneImg"
          />
          <img src="../assets/images/chevron_small.png" alt="" class="select-png" />
        </div>
        <div class="table_titles__preview__phone-name">{{ phone_data.name }}</div>
      </div>
    </div>
    <div class="table_titles__manufacturer">
      {{ phone_data.manufacturer }}
    </div>
    <div class="table_titles__release-year">
      {{ phone_data.releaseYear }}
    </div>
    <div class="table_titles__diagonal">
      {{ phone_data.diagonal }}
    </div>
    <div class="table_titles__country-of-origin">
      {{ phone_data.countryOfOrigin }}
    </div>
    <div class="table_titles__memory-capacity">
      {{ phone_data.memoryCapacity }}
    </div>
    <div class="table_titles__screen-refresh-rate">
      {{ phone_data.screenRefreshRate }}
    </div>
    <div class="table_titles__nfc">
      <img src="../assets/images/checked.png" alt="" />
      <img src="../assets/images/noChecked.png" alt="" />
    </div>
    <div class="table_titles__eSIM-support">
      <img src="../assets/images/checked.png" alt="" />
      <img src="../assets/images/noChecked.png" alt="" />
    </div>
    <div class="table_titles__support-wireless-charging">
      <img src="../assets/images/checked.png" alt="" />
      <img src="../assets/images/noChecked.png" alt="" />
    </div>
    <div class="table_titles__price">{{ phone_data.price }} ₽</div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Phones, RemainsPhones } from "../api/schema";

export default defineComponent({
  name: "U-TableItem",
  components: {},
  props: {
    phone_data: {
      type: Object as PropType<RemainsPhones>,
    },
  },
  // data() {
  //   return {};
  // },
  // mounted() {},
  // beforeDestroy() {},
  // methods: {},
});
</script>

<style>
.table_titles__preview__phone-img {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.select-png {
  transition: all 0.3s ease;
}
</style>
