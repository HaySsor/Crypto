<template>
  <div class="summary">
    <div class="summary__box">
      <CryptocurrencyData />
    </div>
  </div>
</template>

<script>
import CryptocurrencyData from "@/components/AppCryptocurrencyData.vue";
export default {
  name: "SummaryView",
  components: { CryptocurrencyData },
};
</script>

<style lang="scss" scoped>
.summary {
  padding-top: 32px;
}

@media (min-width: 1000px) {
  .summary {
    padding-top: 0px;
  }
}
</style>
