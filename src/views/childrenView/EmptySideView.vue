<template>
  <div class="empty">
    <h3>{{ this.$route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  name: "EmptyPageVue",
};
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  h3 {
    font-size: 3rem;
  }
}
</style>
