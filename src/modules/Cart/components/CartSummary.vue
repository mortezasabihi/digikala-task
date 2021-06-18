<template>
  <div class="cart-summary">
    <!-- heading -->
    <div class="cart-summary__heading">خلاصه سفارش</div>
    <!-- /heading -->

    <div>
      <!-- content -->
      <div class="cart-summary__content" v-if="!loading">
        <div>قیمت کالاها ({{ productsQuantity }})</div>
        <div>
          <strong>{{ $filters.price(totalPrice) }}</strong> تومان
        </div>
      </div>
      <!-- /content -->

      <router-link to="/" class="btn btn--info mt-4">
        ادامه فرآیند خرید
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useCart } from "@/composables";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { LOADING } from "@/modules/Products/store/state";

export default {
  name: "CartSummary",
  setup() {
    const store = useStore();
    const { totalPrice, productsQuantity } = useCart();

    return {
      totalPrice,
      productsQuantity,
      loading: computed(() => store.state[PRODUCTS_MODULE][LOADING]),
    };
  },
};
</script>

<style lang="scss">
.cart-summary {
  @extend .card;
  @extend .p-3;
  position: sticky;
  top: 80px;

  &__heading {
    font-weight: 500;
    font-size: 14px;
    @extend .pb-3;
    @extend .mb-3;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }
}
</style>
