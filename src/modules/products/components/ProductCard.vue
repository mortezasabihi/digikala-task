<template>
  <div class="product-card">
    <!-- status -->
    <span
      :class="[
        'product-card__status',
        product.status === 'marketable'
          ? 'product-card__status--marketable'
          : 'product-card__status--unsalable',
      ]"
    >
      {{ product.status === "marketable" ? "موجود" : "ناموجود" }}
    </span>
    <!-- /status -->

    <!-- thumbnail -->
    <div>
      <router-link to="/">
        <img
          class="product-card__thumbnail"
          :src="product.images.main"
          :alt="$filters.slug(product.title)"
        />
      </router-link>
    </div>
    <!-- /thumbnail -->

    <!-- body -->
    <div class="product-card__body">
      <!-- title -->
      <router-link to="/" class="product-card__title">
        {{ product.title }}
      </router-link>
      <!-- /title -->

      <!-- price -->
      <div class="product-card__price" v-if="product.price.selling_price">
        <strong class="product-card__price-value">
          {{ $filters.price(product.price.selling_price) }}
        </strong>
        تومان
      </div>
      <!-- /price -->

      <!-- add to cart -->
      <button
        type="button"
        :disabled="product.status === 'out_of_stock'"
        :class="[
          'btn mt-3',
          product.status === 'out_of_stock' ? 'btn--danger' : 'btn--info',
        ]"
        @click="
          product.status === 'marketable' && $emit('add-to-cart', product)
        "
      >
        {{
          product.status === "out_of_stock" ? "ناموجود" : "افزودن به سبد خرید"
        }}
      </button>
      <!-- /add to cart -->
    </div>
    <!-- /body -->
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  height: 100%;

  &:hover {
    .product-card__status {
      visibility: visible;
      opacity: 1;
    }
  }

  &__status {
    position: absolute;
    color: #fff;
    padding: 6px 8px;
    font-size: 12px;
    border-radius: 25px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-in-out;

    &--marketable {
      background-color: $success;
    }

    &--unsalable {
      background-color: $danger;
    }
  }

  &__thumbnail {
    max-width: 100%;
    max-height: 160px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  &__title {
    color: #535353;
    font-size: 13px;
    text-align: center;
    display: block;
    line-height: 22px;
  }

  &__price {
    text-align: center;
    margin-top: 10px;
  }

  &__price-value {
    color: #000;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
