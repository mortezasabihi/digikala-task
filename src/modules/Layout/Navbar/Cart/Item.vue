<template>
  <div class="cart-item">
    <!-- thumbnail -->
    <div>
      <img
        :src="thumbnail"
        :alt="$filters.slug(name)"
        class="cart-item__thumbnail"
      />
    </div>
    <!-- /thumbnail -->

    <!-- name -->
    <div class="cart-item__name">{{ name }}</div>
    <!-- /name -->

    <!-- price -->
    <div class="cart-item__price-section">
      <span class="cart-item__price">{{ $filters.price(price) }}</span>
      تومان
    </div>
    <!-- /price -->

    <!-- delete -->
    <button class="cart-item__delete" title="حذف">
      <FontAwesomeIcon :icon="['fas', 'trash']" />
    </button>
    <!-- /delete -->
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    thumbnail: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style lang="scss">
.cart-item {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 0.5fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas: "action name price thubmnail";
  padding-bottom: 10px;
  margin-bottom: 10px;
  @include sm_up {
    align-items: flex-start;
  }

  &__thumbnail {
    grid-area: thubmnail;
    width: 100px;
    @include sm_up {
      width: 80px;
    }
  }

  &__name {
    grid-area: name;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    @include sm_up {
      font-size: 14px;
      text-align: center;
    }
  }

  &__price {
    font-size: 20px;
    color: #000;
    font-weight: 500;
    @include sm_up {
      font-size: 16px;
      display: block;
    }
  }

  &__price-section {
    grid-area: price;
    display: flex;
    align-items: center;
    justify-content: center;
    @include sm_up {
      text-align: center;
      font-size: 12px;
    }
  }

  &__delete {
    grid-area: action;
    all: unset;
    cursor: pointer;
    color: $danger;
    text-align: center;
  }
}
</style>
