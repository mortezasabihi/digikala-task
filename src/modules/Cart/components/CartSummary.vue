<template>
  <div :class="['cart-summary', loading && 'cart-summary--loading']">
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
import { useCart, useProductsLoading } from "@/composables";

export default {
  name: "CartSummary",
  setup() {
    const { totalPrice, productsQuantity } = useCart();
    const loading = useProductsLoading();

    return {
      totalPrice,
      productsQuantity,
      loading,
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

  &--loading {
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.1);
      cursor: wait;
      border-radius: 10px;
    }
  }

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
