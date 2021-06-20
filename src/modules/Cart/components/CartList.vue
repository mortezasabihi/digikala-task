<template>
  <h1 v-if="!items.length">سبد خرید شما خالی است ;(</h1>

  <div v-else class="cart-list">
    <!-- table -->
    <table class="cart-list__table">
      <tbody>
        <CartItem
          v-for="item in items"
          :key="item.product.id"
          :product="item.product"
          :quantity="item.quantity"
          @delete="onDelete"
          @change="setCount"
        />
      </tbody>
    </table>
    <!-- /table -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useCart, useProductsLoading } from "@/composables";
import CartItem from "./CartItem.vue";
import { CART_MODULE } from "@/modules/Cart/store";
import { SET_ITEM_QUANTITY } from "@/modules/Cart/store/mutations";

export default {
  name: "CartList",
  components: {
    CartItem,
  },
  setup() {
    const store = useStore();
    const { items, onDelete } = useCart();
    const loading = useProductsLoading();

    const setCount = (params) =>
      store.commit(`${CART_MODULE}/${SET_ITEM_QUANTITY}`, params);

    return {
      items,
      onDelete,
      loading,
      setCount,
    };
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
