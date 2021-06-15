<template>
  <div class="cart-summary">
    <!-- heading -->
    <div class="cart-summary__heading">خلاصه سفارش</div>
    <!-- /heading -->

    <div>
      <!-- content -->
      <div class="cart-summary__content">
        <div>قیمت کالاها (1)</div>
        <div><strong>۶۳,۲۶۴,۰۰۰</strong> تومان</div>
      </div>
      <!-- /content -->

      <router-link to="/" class="btn btn--info mt-4">
        ادامه فرآیند خرید
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartSummary",
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
