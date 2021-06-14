<template>
  <div class="filter-price-range">
    <div class="filter-price-range__item">
      <label for="min" class="filter-price-range__label">حداقل</label>
      <input
        type="number"
        id="min"
        class="filter-price-range__input"
        :min="min"
        v-model="min"
        step="any"
      />
    </div>
    <div class="filter-price-range__item">
      <label for="max" class="filter-price-range__label">حداکثر</label>
      <input
        type="number"
        id="max"
        class="filter-price-range__input"
        :max="max"
        v-model="max"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterPriceRange",
  data() {
    return {
      min: 1000,
      max: 10000000,
    };
  },
};
</script>

<style lang="scss">
.filter-price-range {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__item {
    &:first-of-type {
      margin-left: 15px;
    }
  }

  &__label {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
    display: block;
  }

  &__input {
    width: 100%;
    display: block;
    border: 1px solid #ced4da;
    height: 30px;
    border-radius: 4px;

    &:focus {
      outline: none;
    }
  }
}
</style>
