<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  background-color: #ffffff;
  border-radius: 25px;
}

@media (min-width: 1200px) {
  .main {
    max-width: 1176px;
  }
}
</style>
