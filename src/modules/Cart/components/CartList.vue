<template>
  <div class="cart-list">
    <!-- table -->
    <table class="cart-list__table">
      <tbody>
        <CartItem />
        <CartItem />
      </tbody>
    </table>
    <!-- /table -->
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "CartList",
  components: {
    CartItem,
  },
};
</script>

<style lang="scss" scoped>
.cart-list {
  @extend .card;
  overflow-x: auto;

  &__table {
    width: 100%;
  }
}
</style>
