<template>
  <div class="list">
    <div v-if="!myERROR">
      <div class="list__box" v-if="flag">
        <div
          class="list__box-item"
          v-for="crypto in dataOfPrice"
          :key="crypto.id"
        >
          <div class="list__box-item-border">
            <img
              class="list__box-item-border-img"
              :src="getImg(crypto.id)"
              alt=""
            />
          </div>
          <div class="list__box-item-names">
            <p class="shortcut">{{ crypto.symbol }}</p>
            <p class="name">{{ crypto.name }}</p>
          </div>
          <div class="list__box-item-price">
            <p class="list__box-item-price-name">Price</p>
            <p class="list__box-item-price-number">
              ${{ cryptoPrice(crypto.quote.USD.price) }}
            </p>
          </div>
          <div class="list__box-item-change">
            <p class="list__box-item-change-name">Change</p>
            <div class="list__box-item-change-box">
              <p
                class="list__box-item-change-box-number"
                :style="{
                  color: PercentChange(crypto.quote.USD.percent_change_24h)
                    ? '#EA4D4D'
                    : '#2DC78F',
                }"
              >
                {{ getPercent(crypto.quote.USD.percent_change_24h) }}%
              </p>
              <img
                v-if="PercentChange(crypto.quote.USD.percent_change_24h)"
                src="../assets/icon/redArrow.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                v-else
                src="../assets/icon/greenArrow.svg"
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
          <div class="list__box-item-vector">
            <img
              v-if="PercentChange(crypto.quote.USD.percent_change_24h)"
              src="../assets/icon/vectorRed.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              v-else
              src="../assets/icon/vectorGreen.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div class="list__box-item-buttons">
            <button
              class="list__box-item-buttons-btn list__box-item-buttons-btn--white"
            >
              Sell
            </button>
            <button class="list__box-item-buttons-btn">Buy</button>
          </div>
        </div>
      </div>
    </div>
    <ErrorView v-else />
  </div>
</template>

<script>
import ErrorView from "@/views/childrenView/ErrorView.vue";
import { getCrypto, getCryptoInfo } from "../data/getDataFromAPI";
import { onMounted, ref } from "vue";
export default {
  name: "CryptoData",
  components: { ErrorView },
  setup() {
    const myERROR = ref(false);
    const { dataOfPrice, getCryptoData } = getCrypto();
    const { about, flag, getCryptoInfoData } = getCryptoInfo();

    function cryptoPrice(value) {
      const price = Number(value)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return price;
    }
    function getPercent(value) {
      const price = Number(value).toFixed(2);
      return price;
    }
    function getImg(value) {
      const img = about.value[value]?.logo;
      return img;
    }
    function PercentChange(value) {
      return value < 0;
    }

    onMounted(async () => {
      try {
        await getCryptoData();
        await getCryptoInfoData();
      } catch (err) {
        console.log(err);
        myERROR.value = true;
      }
    });

    return {
      cryptoPrice,
      getPercent,
      getImg,
      PercentChange,
      myERROR,
      flag,
      dataOfPrice,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin grayText {
  font-size: 1.4rem;
  line-height: 14px;
  color: #9896a1;
}
.list {
  &__box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      padding: 16px 20px;
      background-color: #ffffff;
      border-radius: 8px;
      &-border {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        height: 48px;
        width: 48px;
        border: 1px solid #ebebf3;
        border-radius: 50%;
        &-img {
          width: 32px;
          height: 32px;
        }
      }
      &-names {
        margin-left: 16px;
        width: 25%;
        .name {
          margin-top: 6px;
          font-size: 1.4rem;
        }
        .shortcut {
          @include grayText;
        }
      }
      &-price {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        width: 25%;
        &-name,
        &-number {
          @include grayText;
        }
        &-number {
          margin-top: 6px;
          color: #0a041c;
          font-weight: 600;
        }
      }
      &-change {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
        &-name {
          @include grayText;
        }
        &-box {
          display: flex;
          margin-top: 5px;

          &-number {
            @include grayText;
          }
        }
      }
      &-vector {
        width: 40%;
        margin-left: 10px;
        img {
          width: 100%;
        }
      }
      &-buttons {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-left: 15px;

        &-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 55px;
          height: 40px;
          padding: 10px;
          background-color: #7445fb;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 1.4rem;
          line-height: 24px;
          cursor: pointer;
          transition: transform 0.3s, background-color 0.3s;
          &:hover {
            transform: scale(1.2);
            background-color: #4d2fa8;
          }
          &--white {
            background-color: white;
            color: #7445fb;
            border: 1px solid rgba(128, 128, 128, 0.455);
            &:hover {
              transform: scale(1.2);
              background-color: white;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 925px) {
  .list {
    &__box {
      &-item {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        height: 80px;
        &-names {
          flex: 1;
          width: 0;
        }
        &-price {
          flex: 1;
          width: 0;
        }
        &-change {
          flex: 1;
          display: block;
        }
        &-vector {
          flex: 1;
          margin-left: 0;
          margin-right: 20px;
        }
        &-buttons {
          display: flex;
          gap: 8px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
