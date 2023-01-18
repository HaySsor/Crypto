<template>
  <div class="error">
    <img src="@/assets/browser.png" alt="" />
    <div class="error__box">
      <h3 class="error__box-title">Ups! Somethings went wrong</h3>
      <p class="error__box-text">Please try again</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 30px;
  flex-direction: column;

  img {
    height: 80%;
  }
  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 15px;

    &-title {
      font-size: 2rem;
    }
    &-text {
      font-size: 1.6rem;
    }
  }
}
</style>
