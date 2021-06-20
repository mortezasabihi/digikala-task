<template>
  <!-- loading -->
  <ProductsLoading v-if="loading && !products.length" />
  <!-- /loading -->

  <div v-else class="card row no-gap mb-3">
    <div
      v-for="product in products"
      :key="product.id"
      class="col-xs-12 col-sm-6 col-md-4"
    >
      <ProductCard :product="product" @add-to-cart="addToCart" />
    </div>
  </div>

  <!-- loading spinner  -->
  <LoadingSpinner v-if="loading && products.length" />
  <!-- /loading spinner  -->
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useProductsLoading, useCart } from "@/composables";
import ProductsLoading from "./ProductsLoading";
import ProductCard from "./ProductCard";
import { LoadingSpinner } from "@/modules/Ui";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { PRODUCTS } from "@/modules/Products/store/state";

export default {
  name: "ProductsList",
  components: {
    ProductsLoading,
    ProductCard,
    LoadingSpinner,
  },
  setup() {
    const store = useStore();
    const loading = useProductsLoading();
    const { addToCart } = useCart();

    return {
      loading,
      products: computed(() => store.state[PRODUCTS_MODULE][PRODUCTS]),
      addToCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.col-xs-12 {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:nth-child(3n) {
    @include md_down {
      border-left: none;
    }
  }

  &:nth-child(2n) {
    @include sm_up {
      border-left: none;
    }
  }

  @include md_down {
    &:nth-last-child(-n + 3) {
      border-bottom: none;
    }
  }
}
</style>
