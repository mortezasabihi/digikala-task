<template>
  <div class="product-details">
    <!-- image -->
    <div class="col-xs-12 col-md-4 col-lg-4">
      <img
        class="product-details__image"
        :src="product.images.main"
        :alt="$filters.slug(product.title)"
      />
    </div>
    <!-- /image -->

    <div class="col-xs-12 col-md-8 col-lg-8">
      <!-- title -->
      <h1 class="product-details__title">{{ product.title }}</h1>
      <!-- /title -->

      <!-- status -->
      <span
        :class="[
          'product-details__status',
          product.status === 'marketable'
            ? 'product-details__status--marketable'
            : 'product-details__status--unsalable',
        ]"
      >
        {{ product.status === "marketable" ? "موجود" : "ناموجود" }}
      </span>
      <!-- /status -->

      <template v-if="product.status === 'marketable'">
        <!-- price -->
        <div class="product-details__price">
          قیمت:
          <strong>{{ $filters.price(product.price.selling_price) }}</strong>
        </div>
        <!-- /price -->

        <!-- count -->
        <QuantitySelector v-model="count" class="my-3" />
        <!-- /count -->

        <!-- add to cart -->
        <button @click="addToCart(product, count)" class="btn btn--success">
          <FontAwesomeIcon :icon="['fas', 'shopping-cart']" class="ml-2" />
          افزودن به سبد خرید
        </button>
        <!-- /add to cart -->
      </template>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useCart } from "@/composables";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { PRODUCT } from "@/modules/Products/store/state";
import { QuantitySelector } from "@/modules/Ui";

export default {
  name: "ProductDetails",
  components: {
    QuantitySelector,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const count = ref(1);
    const { addToCart, items } = useCart();

    const product = computed(() => store.state[PRODUCTS_MODULE][PRODUCT]);
    if (!product.value) {
      router.push({
        name: "404",
      });
    }

    const current = JSON.parse(JSON.stringify(items.value)).find(
      (item) => item.product.id === product.value.id
    );
    if (current) {
      count.value = current.quantity;
    }

    return {
      product,
      count,
      addToCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-details {
  @extend .row;

  &__image {
    max-width: 100%;
  }

  &__title {
    @extend .mb-4;
  }

  &__status {
    color: #fff;
    padding: 6px 8px;
    font-size: 12px;
    border-radius: 25px;

    &--marketable {
      background-color: $success;
    }

    &--unsalable {
      background-color: $danger;
    }
  }

  &__price {
    @extend .mt-4;
    font-size: $font-md;
  }
}
</style>
