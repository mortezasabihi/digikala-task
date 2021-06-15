<template>
  <nav class="navbar">
    <div class="navbar__inner">
      <!-- logo -->
      <router-link to="/" class="navbar__logo">
        <FontAwesomeIcon :icon="['fas', 'store-alt']" />
        دیجی کالا
      </router-link>
      <!-- /logo -->

      <!-- search -->
      <Search />
      <!-- /search -->

      <!-- cart -->
      <Cart />
      <!-- /cart -->
    </div>
  </nav>
</template>

<script>
import Cart from "./Cart/index.vue";
import Search from "./Search/index.vue";

export default {
  name: "Navbar",
  components: {
    Cart,
    Search,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 9;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    @extend .container;
  }

  &__logo {
    color: #fff;
    padding: 10px 16px;
    background-color: $primary;
    border-radius: 25px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      background-color: $danger;
    }
  }
}
</style>
