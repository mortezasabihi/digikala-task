<template>
  <div class="form-group">
    <input type="checkbox" id="has-selling-stock" v-model="value" />
    <label for="has-selling-stock"> نمایش کالا های موجود در انبار </label>
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
