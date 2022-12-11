<template>
  <div class="crypto-list">
    <div class="crypto-list__box">
      <CryptoNavar />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import CryptoNavar from "@/components/AppCryptoNavbar.vue";
export default {
  name: "CryptoView",
  components: { CryptoNavar },
};
</script>

<style lang="scss" scoped>
.crypto-list {
  width: 80vw;
  margin-top: 32px;
  background-color: #f7f7f9;
  border-radius: 16px;
  &__box {
    padding: 32px;
  }
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s linear;
  }
  .fade-leave-to {
    transition: all 0.5s linear;
    opacity: 0;
  }
}
@media (min-width: 1000px) {
  .crypto-list {
    width: 100%;
  }
}
</style>
