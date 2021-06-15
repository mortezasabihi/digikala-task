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

<style lang="scss" scoped>
.filter {
  @extend .card;
  position: sticky;
  top: 80px;
}
</style>
