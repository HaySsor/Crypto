<template>
  <div class="chart">
    <div class="chart__box">
      <div class="chart__box-top">
        <h2 class="chart__box-top-title">Summary</h2>
        <div lass="chart__box-top-dots">
          <div class="chart__box-top-dots-dot"></div>
        </div>
      </div>
      <div class="chart__box-middle">
        <AppLineChart />
      </div>
      <div class="chart__box-bottom">
        <span class="chart__box-bottom-now">This month</span>
        <span class="chart__box-bottom-last">Last month</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppLineChart from "@/components/AppLineChart.vue";

export default {
  name: "AppSummary",
  components: { AppLineChart },
};
</script>

<style lang="scss" scoped>
.chart {
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
          width: 5px;
          height: 5px;
          background-color: #9896a1;
          border-radius: 50%;
          position: relative;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 189px;
      margin-top: 24px;
    }
    &-bottom {
      display: flex;
      gap: 20px;
      margin-top: 23px;
      margin-left: 10px;

      &-now,
      &-last {
        position: relative;
        color: #9896a1;
      }
      &-now::before,
      &-last::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -12px;
        width: 8px;
        height: 8px;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: #9896a1;
      }
      &-now::before {
        background-color: #7445fb;
      }
    }
  }
}

@media (min-width: 1000px) {
  .chart {
    width: clamp(300px, 100%, 509px);
  }
}
</style>
