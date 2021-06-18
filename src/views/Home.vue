<template>
  <div class="row">
    <!-- sidebar -->
    <aside class="col-xs-12 col-lg-3">
      <!-- filter -->
      <Filter />
      <!-- /filter -->
    </aside>
    <!-- /sidebar -->

    <!-- main -->
    <main class="col-xs-12 col-lg-9" ref="scrollComponent">
      <!-- products list -->
      <ProductsList />
      <!-- /products list -->
    </main>
    <!-- /main -->
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Filter from "@/modules/Filter/index";
import { ProductsList } from "@/modules/Products";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { LOADING } from "@/modules/Products/store/state";
import { GET_ALL_PRODUCTS } from "@/modules/Products/store/actions";
import { NEXT_PAGE, RESET_PRODUCTS } from "@/modules/Products/store/mutations";

export default {
  name: "HomePage",
  components: {
    Filter,
    ProductsList,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const fetch = (query) => {
      store.dispatch(`${PRODUCTS_MODULE}/${GET_ALL_PRODUCTS}`, query);
    };

    // generate query for api call
    const generateQuery = () => {
      const { has_selling_stock, sort, price_min, price_max, search } =
        route.query;
      let query = "";

      // check if has search query
      if (search) {
        query = `${query}&q=${search}`;
      }

      // check if has selling stock
      if (has_selling_stock) {
        query = `${query}&has_selling_stock=${has_selling_stock}`;
      }
      // check if has sort
      if (sort) {
        query = `${query}&sort=${sort}`;
      }
      // check if has price
      if (price_min || price_max) {
        query = `${query}&price[min]=${price_min}&price[max]=${price_max}`;
      }

      return query;
    };

    const scrollComponent = ref(null);

    onMounted(() => window.addEventListener("scroll", handleScroll));
    onUnmounted(() => window.removeEventListener("scroll", handleScroll));

    // fetch api on scroll (infinit scroll)
    const handleScroll = () => {
      const element = scrollComponent.value;

      if (
        element.getBoundingClientRect().bottom <= window.innerHeight &&
        !store.state[PRODUCTS_MODULE][LOADING] &&
        route.name === "Home"
      ) {
        store.commit(`${PRODUCTS_MODULE}/${NEXT_PAGE}`);
        fetch(generateQuery());
      }
    };

    // fetch api on first load & route query changed
    watch(
      () => route.query,
      () => {
        if (route.name === "Home") {
          store.commit(`${PRODUCTS_MODULE}/${RESET_PRODUCTS}`);
          fetch(generateQuery());
        }
      },
      {
        immediate: true,
      }
    );

    return {
      scrollComponent,
    };
  },
};
</script>
