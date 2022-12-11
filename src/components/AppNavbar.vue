<template>
  <header class="navbar">
    <div class="navbar__box">
      <input type="text" class="navbar__box-input" placeholder="Search" />

      <div class="navbar__cont">
        <div class="navbar__cont-box-notification">
          <img src="@/assets/icon/ring.svg" alt="" aria-hidden="true" />
        </div>
        <div class="navbar__cont-box-menu">
          <div class="navbar__cont-box-menu-bar"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  &__box {
    display: flex;
    justify-content: space-between;

    &-input {
      position: relative;
      width: clamp(100px, 50vw, 232px);
      height: 48px;
      margin-right: 10px;
      background: #f7f7f9;
      background-image: url("../assets/icon/search.svg");
      background-repeat: no-repeat;
      background-position: 20px;
      border-radius: 8px;
      border: none;
      text-indent: 40px;
    }
  }
  &__cont {
    display: flex;
    gap: 15px;
    &-box-notification,
    &-box-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 48px;
      height: 48px;
      background-color: #f7f7f9;
      border-radius: 8px;

      &-bar {
        position: relative;
        width: 12px;
        height: 2px;
        background-color: #9896a1;
        border-radius: 5px;

        &::after,
        &::before {
          content: "";
          position: absolute;
          width: 12px;
          height: 2px;
          background-color: #9896a1;
          border-radius: 5px;
        }
        &::after {
          bottom: -5px;
        }
        &::before {
          top: -5px;
        }
      }
    }
    &-box-notification::before {
      content: "";
      position: absolute;
      top: -2px;
      right: -2px;
      width: 12px;
      height: 12px;
      background-color: #ea4d4d;
      border-radius: 50%;
    }
  }
}
</style>
