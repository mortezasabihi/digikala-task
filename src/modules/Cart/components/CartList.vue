<template>
  <!-- loading -->
  <LoadingSpinner v-if="loading" />
  <!-- /loading -->

  <div v-else class="cart-list">
    <!-- table -->
    <table class="cart-list__table">
      <tbody>
        <CartItem
          v-for="item in items"
          :key="item.id"
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
import { LoadingSpinner } from "@/modules/Ui";
import CartItem from "./CartItem.vue";
import { CART_MODULE } from "@/modules/Cart/store";
import { SET_ITEM_QUANTITY } from "@/modules/Cart/store/mutations";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { GET_ALL_PRODUCTS } from "@/modules/Products/store/actions";

export default {
  name: "CartList",
  components: {
    LoadingSpinner,
    CartItem,
  },
  setup() {
    const store = useStore();
    const { items, onDelete } = useCart();
    const loading = useProductsLoading();

    const setCount = (params) =>
      store.commit(`${CART_MODULE}/${SET_ITEM_QUANTITY}`, params);

    store.dispatch(`${PRODUCTS_MODULE}/${GET_ALL_PRODUCTS}`);

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
