<template>
  <div class="wallet">
    <div class="wallet__box">
      <div class="wallet__box-top">
        <h2 class="wallet__box-top-title">Current Balance</h2>
        <div lass="wallet__box-top-dots">
          <div class="wallet__box-top-dots-dot"></div>
        </div>
      </div>
      <div class="wallet__box-middle">
        <h2 class="wallet__box-middle-title">
          <span class="dollar">$</span>21 432.23
        </h2>
        <div class="wallet__box-middle-change">
          <div class="wallet__box-middle-change-circle">
            <img src="../assets/icon/arrow.svg" alt="" aria-hidden="true" />
          </div>
          <p>12% vs last month</p>
        </div>
      </div>
      <div class="wallet__box-bottom">
        <div class="wallet__box-bottom-buttons">
          <button class="wallet__box-bottom-buttons-button">
            Quick Invest
          </button>
          <button
            class="wallet__box-bottom-buttons-button wallet__box-bottom-buttons-button--white"
          >
            Show Report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentBalance",
};
</script>

<style lang="scss" scoped>
.wallet {
  width: 80vw;
  margin-top: 32px;
  background-color: #f7f7f9;
  border-radius: 16px;
  &__box {
    padding: 32px;
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-dots {
        width: 24px;
        height: 24px;
        &-dot {
          position: relative;
          width: 5px;
          height: 5px;
          background-color: #9896a1;
          border-radius: 50%;
          &::after,
          &::before {
            content: "";
            position: absolute;
            width: 5px;
            height: 5px;
            background-color: #9896a1;
            border-radius: 50%;
          }
          &::after {
            right: -7px;
          }
          &::before {
            left: -7px;
          }
        }
      }
      &-title {
        font-style: normal;
        font-weight: 500px;
        font-size: 2rem;
        line-height: 24px;
      }
    }
    &-middle {
      margin-top: 40px;
      &-title {
        font-weight: 300;
        font-size: 5.6rem;
        line-height: 56px;
        font-style: normal;
        .dollar {
          color: #9896a1;
        }
      }
      &-change {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        color: #2dc78f;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 24px;

        &-circle {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 18px;
          height: 18px;
          background-color: #2dc78f;
          border-radius: 50%;
        }
      }
    }
    &-bottom {
      margin-top: 72px;
      &-buttons {
        display: flex;
        gap: 8px;
        &-button {
          width: 109px;
          height: 40px;
          background-color: #7445fb;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 1.4rem;
          line-height: 24px;
          cursor: pointer;
          transition: transform 0.3s, background-color 0.3s, border 0.3s;
          &:hover {
            transform: scale(1.1);
            background-color: #4d2fa8;
          }
          &--white {
            background-color: white;
            color: #7445fb;
            &:hover {
              transform: scale(1.1);
              background-color: white;
              border: 2px solid gray;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1000px) {
  .wallet {
    width: clamp(300px, 100%, 509px);
  }
}
</style>
