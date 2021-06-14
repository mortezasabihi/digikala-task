<template>
  <div class="filter-has-selling-stock">
    <label>
      <input type="checkbox" name="has_selling_stock" v-model="value" />
      نمایش کالا های موجود در انبار
    </label>
  </div>
</template>

<script>
export default {
  name: "FilterHasSellingStock",
  data() {
    return {
      value: false,
    };
  },
};
</script>
