<template>
  <div :class="['filter', loading && 'filter--loading']">
    <Collapse title="محدوده قیمت" visible>
      <PriceRange
        :min="priceRef.min"
        :max="priceRef.max"
        :priceMin="form.min"
        :priceMax="form.max"
        @update:priceMin="onPriceChange('min', $event)"
        @update:priceMax="onPriceChange('max', $event)"
      />
    </Collapse>

    <Collapse title="کالاهای موجود" visible>
      <HasSellingStock
        :model-value="form.has_selling_stock"
        @input="onHasSellingStockChange"
      />
    </Collapse>

    <Collapse title="مرتب سازی بر اساس" visible>
      <Sort :model-value="sortRef" @input="onSortChange" />
    </Collapse>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import debounce from "lodash.debounce";
import { useProductsLoading } from "@/composables";
import Collapse from "./Collapse.vue";
import { PriceRange, HasSellingStock, Sort } from "./Sections";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { FILTERS } from "@/modules/Products/store/state";
import { SET_FILTERS } from "@/modules/Products/store/mutations";

export default {
  name: "Filter",
  components: {
    Collapse,
    PriceRange,
    HasSellingStock,
    Sort,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const loading = useProductsLoading();

    const priceRef = ref({
      min: 0,
      max: 0,
    });
    const sortRef = ref(22);

    const form = ref({
      min: null,
      max: null,
      has_selling_stock: false,
      sort: 22,
    });

    store.subscribe((mutation) => {
      if (mutation.type === `${PRODUCTS_MODULE}/${SET_FILTERS}`) {
        const { price } = store.state[PRODUCTS_MODULE][FILTERS];

        // set price
        priceRef.value.min = price?.options?.min;
        priceRef.value.max = price?.options?.max;
      }
    });

    const query = route.query;
    if (query.price_min && query.price_max) {
      form.value.min = parseInt(query.price_min);
      form.value.max = parseInt(query.price_max);
    }
    if (query.has_selling_stock) {
      form.value.has_selling_stock = true;
    }
    if (query.sort) {
      sortRef.value = parseInt(query.sort);
    }

    // on has_selling_stock change
    const onHasSellingStockChange = ({ target }) => {
      const value = target.checked;
      form.value.has_selling_stock = value;

      if (value) {
        router.push({
          name: "Home",
          query: {
            ...route.query,
            has_selling_stock: 1,
          },
        });
      } else {
        const query = { ...route.query };
        delete query.has_selling_stock;

        router.push({
          name: "Home",
          query,
        });
      }
    };

    // on sort change
    const onSortChange = ({ target }) => {
      const value = target.value;
      form.value.sort = parseInt(value);

      router.push({
        name: "Home",
        query: {
          ...route.query,
          sort: value,
        },
      });
    };

    // on price change
    const onPriceChange = debounce((type, value) => {
      if (!value || value === 0) {
        if (type === "min") {
          form.value.min = 0;
        } else if (type === "max") {
          form.value.max = priceRef.value.max;
        }
      } else {
        form.value[type] = value;
      }

      router.push({
        name: "Home",
        query: {
          ...route.query,
          price_min:
            form.value.min === null ? priceRef.value.min : form.value.min,
          price_max:
            form.value.max === null ? priceRef.value.max : form.value.max,
        },
      });
    }, 1000);

    return {
      priceRef,
      sortRef,
      form,
      onHasSellingStockChange,
      onSortChange,
      onPriceChange,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  @extend .card;
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
}
</style>
