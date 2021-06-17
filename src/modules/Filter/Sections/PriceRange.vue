<template>
  <div class="filter-price-range">
    <div class="filter-price-range__item">
      <label for="min" class="filter-price-range__label">حداقل</label>
      <input
        type="number"
        id="min"
        class="filter-price-range__input"
        :min="min"
        :value="priceMin"
        @input="update($event.target.value, 'priceMin')"
        placeholder="حداقل"
      />
    </div>
    <div class="filter-price-range__item">
      <label for="max" class="filter-price-range__label">حداکثر</label>
      <input
        type="number"
        id="max"
        class="filter-price-range__input"
        :max="max"
        :value="priceMax"
        @input="update($event.target.value, 'priceMax')"
        :placeholder="`حداکثر ${max}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterPriceRange",
  props: {
    min: {
      required: true,
      type: Number,
    },
    max: {
      required: true,
      type: Number,
    },
    priceMin: {
      required: false,
      type: Number,
    },
    priceMax: {
      required: false,
      type: Number,
    },
  },
  setup(props, { emit }) {
    const update = (value, name) => {
      if (name === "priceMax") {
        value <= props.max && emit(`update:${name}`, parseInt(value));
      } else if (name === "priceMin") {
        value >= props.min && emit(`update:${name}`, parseInt(value));
      }
    };

    return {
      update,
    };
  },
};
</script>

<style lang="scss" scoped>
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
