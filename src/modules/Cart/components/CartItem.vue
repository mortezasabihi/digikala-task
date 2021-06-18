<template>
  <td class="cart-item">
    <!-- thumbnail -->
    <div>
      <router-link to="/">
        <img
          class="cart-item__thumbnail"
          :src="product.images.main"
          :alt="$filters.slug(product.title)"
        />
      </router-link>
    </div>
    <!-- /thumbnail -->

    <!-- content -->
    <div class="cart-item__content">
      <!-- title -->
      <div class="cart-item__title">
        {{ product.title }}
      </div>
      <!-- /title -->

      <!-- quantity -->
      <QuantitySelector v-model="count" />
      <!-- /quantity -->

      <!-- bottom -->
      <div class="cart-item__bottom">
        <!-- price -->
        <div>
          <div class="cart-item__price">
            قیمت:
            <strong class="cart-item__price-value">
              {{ $filters.price(product.price.selling_price) }}
            </strong>
            تومان
          </div>
          <div class="cart-item__price">
            قیمت کل:
            <strong class="cart-item__price-value">
              {{ $filters.price(product.price.selling_price * count) }}
            </strong>
            تومان
          </div>
        </div>
        <!-- /price -->

        <!-- delete -->
        <div>
          <button
            @click="$emit('delete', product.id)"
            class="cart-item__delete"
          >
            <FontAwesomeIcon :icon="['fas', 'trash-alt']" />
            حذف
          </button>
        </div>
        <!-- /delete -->
      </div>
      <!-- /bottom -->
    </div>
    <!-- /content -->

    <div></div>
  </td>
</template>

<script>
import { ref, watch } from "vue";
import { QuantitySelector } from "@/modules/Ui";

export default {
  name: "CartItem",
  components: {
    QuantitySelector,
  },
  props: {
    quantity: {
      required: true,
      type: Number,
    },
    product: {
      required: true,
      type: Object,
    },
  },
  setup(props, { emit }) {
    const count = ref(props.quantity);

    watch(
      () => count.value,
      (value) => emit("change", { quantity: value, id: props.product.id })
    );

    return {
      count,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  @extend .p-3;
  @extend .mb-2;

  &__thumbnail {
    max-width: 100%;
    max-height: 140px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @extend .mr-3;
  }

  &__title {
    @extend .mt-2;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    &:not(&:last-of-type) {
      @extend .mb-1;
    }
  }

  &__price-value {
    color: #000;
  }

  &__delete {
    all: unset;
    cursor: pointer;
    color: #777;
    font-size: 12px;

    &:hover {
      color: $danger;
    }
  }
}
</style>
