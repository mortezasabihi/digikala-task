<template>
  <div>
    <!-- loading -->
    <ProductLoading v-if="loading" />
    <!-- /loading -->

    <!-- details -->
    <ProductDetails v-else />
    <!-- /details -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { useProductsLoading } from "@/composables";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { RESET_PAGE } from "@/modules/Products/store/mutations";
import { GET_PRODUCT } from "@/modules/Products/store/actions";
import ProductLoading from "@/modules/Products/components/ProductLoading";
import ProductDetails from "@/modules/Products/components/ProductDetails";

export default {
  name: "ProductPage",
  components: {
    ProductLoading,
    ProductDetails,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = useProductsLoading();

    store.dispatch(`${PRODUCTS_MODULE}/${GET_PRODUCT}`, route.params.id);

    onBeforeRouteLeave((to) => {
      if (to.name === "Home") {
        store.commit(`${PRODUCTS_MODULE}/${RESET_PAGE}`);
      }
    });

    return {
      loading,
    };
  },
};
</script>
