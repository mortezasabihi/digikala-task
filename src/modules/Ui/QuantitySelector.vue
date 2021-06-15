<template>
  <div class="quantity-selector">
    <!-- button -->
    <button
      class="quantity-selector__button"
      :disabled="max && modelValue === max"
      @click="increment"
    >
      <FontAwesomeIcon :icon="['fas', 'plus']" />
    </button>
    <!-- /button -->

    <!-- value -->
    <div class="quantity-selector__value">{{ count }}</div>
    <!-- /value -->

    <!-- /button -->
    <button
      class="quantity-selector__button"
      @click="decrement"
      :disabled="min && modelValue === min"
    >
      <FontAwesomeIcon :icon="['fas', 'minus']" />
    </button>
    <!-- /button -->
  </div>
</template>

<script>
import { watch } from "vue";
import { useCount } from "@/composables";

export default {
  name: "QuantitySelector",
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: false,
      default: 1,
    },
    max: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  setup(props, { emit }) {
    const { count, increment, decrement } = useCount({
      min: props.min,
      max: props.max,
      defaultValue: props.modelValue,
    });

    watch(
      () => count.value,
      (value) => emit("update:modelValue", value)
    );

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>

<style lang="scss">
.quantity-selector {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid #eee;
  border-radius: 8px;
  width: 100px;

  &__button {
    all: unset;
    cursor: pointer;
    height: 40px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3f3f3f;
    font-size: 14px;

    &:disabled {
      color: $gray;
      cursor: not-allowed;
    }
  }

  &__value {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $info;
  }
}
</style>
