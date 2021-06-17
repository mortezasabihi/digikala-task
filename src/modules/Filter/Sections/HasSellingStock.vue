<template>
  <div class="form-group">
    <input
      type="checkbox"
      id="has-selling-stock"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <label for="has-selling-stock"> نمایش کالا های موجود در انبار </label>
  </div>
</template>

<script>
export default {
  name: "FilterHasSellingStock",
  props: {
    modelValue: Boolean,
  },
};
</script>
