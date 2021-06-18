<template>
  <div v-if="!loading" class="cart-list">
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
import { computed } from "vue";
import { useStore } from "vuex";
import { useCart } from "@/composables";
import CartItem from "./CartItem.vue";
import { CART_MODULE } from "@/modules/Cart/store";
import { SET_ITEM_QUANTITY } from "@/modules/Cart/store/mutations";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { LOADING } from "@/modules/Products/store/state";
import { GET_ALL_PRODUCTS } from "@/modules/Products/store/actions";

export default {
  name: "CartList",
  components: {
    CartItem,
  },
  setup() {
    const store = useStore();
    const { items, onDelete } = useCart();

    const loading = computed(() => store.state[PRODUCTS_MODULE][LOADING]);
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
