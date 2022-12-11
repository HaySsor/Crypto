<template>
  <div class="nav">
    <ul>
      <li>
        <RouterLink class="link" :to="{ name: 'summary' }">Summary</RouterLink>
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'tab', params: { id: 'table' } }"
          >Table</RouterLink
        >
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'tab', params: { id: 'chart' } }"
          >Chart</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="link"
          :to="{ name: 'tab', params: { id: 'reporting' } }"
          >Reporting</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="link"
          :to="{ name: 'tab', params: { id: 'analysis' } }"
          >Analysis</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CryptoNavbar",
};
</script>

<style lang="scss" scoped>
.nav {
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.161);
  ul {
    display: flex;
    gap: 24px;
    list-style: none;
    overflow: auto;
    overflow-y: hidden;
    padding: 5px;

    li {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 24px;

      .link {
        color: #9896a1;
        text-decoration: none;
      }
      .active-link {
        position: relative;
        color: #0a041c;
      }
      .active-link::before {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 4px;
        background-color: #7445fb;
      }
    }
  }
}
</style>
