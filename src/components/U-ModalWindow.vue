<template>
  <div class="U-modal-window" v-click-outside="CloseModal">
    <div class="modal-wrapper">
      <div class="wrapper-slot">
        <input
          type="text"
          placeholder="Поиск"
          v-model="inputStr"
          v-if="remainsPhones_data.length > 3"
        />
        <p v-if="!filteredMovies(inputStr, remainsPhones_data).length" class="searchNone">
          Товар <span>{{ inputStr }}</span> не найден
        </p>
        <div
          class="wrapper-remains-phones"
          v-for="(item, index) of filteredMovies(inputStr, remainsPhones_data)"
          :key="index"
        >
          <div class="wrapper-remains-phones__item">
            <img
              src="../assets/images/Vector.png"
              alt=""
              @click="replacementPhone(item.article)"
            />
            <div class="wrapper-remains-phones__item-image">
              <img
                :src="require('../assets/images/phonesImg/' + item.image)"
                alt="phoneImg"
              />
            </div>
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Phone, article } from "../api/schema";
export default defineComponent({
  name: "U-ModalWindow",
  components: {},
  props: {
    remainsPhones_data: {
      type: Array as PropType<Phone[]>,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      inputStr: "" as string,
    };
  },
  computed: {},

  methods: {
    replacementPhone(itemArticle: article) {
      this.$emit("replacementPhone", itemArticle);
    },
    filteredMovies(inputStr: string, remainsPhones_data: Phone[]): Phone[] {
      if (inputStr) {
        return remainsPhones_data.filter((item: Phone) => {
          return item.name.toLowerCase().includes(inputStr.toLowerCase());
        });
      }
      return remainsPhones_data;
    },
    CloseModal(isOutside: boolean): void {
      if (isOutside) this.$emit("CloseModal");
    },
  },
});
</script>

<style>
.U-modal-window {
  background: #fff;
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 105px;
  border-radius: 4px;
  overflow: hidden;
  z-index: 3;
}

.modal-wrapper {
  overflow: auto;
  width: 350px;
  max-height: 330px;
  padding: 34px 18px;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 16px 32px rgba(35, 39, 51, 0.1);
}

.modal-wrapper::-webkit-scrollbar {
  width: 8px;
}
.modal-wrapper::-webkit-scrollbar-button {
  height: 10px;
}
.modal-wrapper::-webkit-scrollbar-thumb {
  background-color: #e3e3e3;
  border-radius: 20px;
  border: 3px solid white;
}

.modal-wrapper input {
  color: #000;
  outline: none;
  padding: 5px 16px;
  font-size: 24px;
  width: 100%;
}
.modal-wrapper input::-webkit-input-placeholder {
  color: #c1c1c1;
}
.wrapper-slot {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.wrapper-remains-phones {
  box-sizing: border-box;
  height: 50px;
}
.wrapper-remains-phones__item {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
}
.wrapper-remains-phones__item-image {
  height: 100%;
}
.wrapper-remains-phones__item-image img {
  height: 100%;
}
.searchNone {
  font-size: 24px;
}
.searchNone span {
  font-weight: 600;
  font-style: italic;
}
</style>
