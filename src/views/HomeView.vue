<template>
  <section class="home">
    <AppNavbarVue />
    <main class="box">
      <CurrentBalance class="box__balance" />
      <AppSummary class="box__summary" />
      <CryptoView class="box__crypto" />
    </main>
  </section>
</template>

<script>
import AppNavbarVue from "@/components/AppNavbar.vue";
import CurrentBalance from "@/components/AppCurrentBalance.vue";
import CryptoView from "@/views/childrenView/CrybtoView.vue";
import AppSummary from "@/components/AppSummary.vue";
export default {
  name: "AppHome",
  components: { AppNavbarVue, CurrentBalance, AppSummary, CryptoView },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__balance {
    flex-grow: 1;
  }
  &__summary {
    flex-grow: 1;
    order: 1;
  }
}

@media (min-width: 1000px) {
  .home {
    display: block;
    padding: 0 68px;
    padding-top: 49px;
  }
  .box {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 32px;
    &__balance {
      grid-column: 1/2;
    }
    &__summary {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    &__crypto {
      grid-column: 1/3;
    }
  }
}
</style>
