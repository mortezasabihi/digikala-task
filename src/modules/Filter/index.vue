<template>
  <div class="filter">
    <Collapse title="محدوده قیمت" visible>
      <PriceRange />
    </Collapse>

    <Collapse title="کالاهای موجود" visible>
      <HasSellingStock />
    </Collapse>

    <Collapse title="مرتب سازی بر اساس" visible>
      <Sort />
    </Collapse>
  </div>
</template>

<script>
import Collapse from "./Collapse.vue";
import { PriceRange, HasSellingStock, Sort } from "./Sections";

export default {
  name: "Filter",
  components: {
    Collapse,
    PriceRange,
    HasSellingStock,
    Sort,
  },
};
</script>

<style lang="scss">
.filter {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
  position: sticky;
  top: 80px;
}
</style>
