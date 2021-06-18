<template>
  <div class="cart">
    <!-- button -->
    <button
      class="cart__button"
      @click="route.path !== '/cart' && !loading && toggleVisiblity()"
    >
      <FontAwesomeIcon :icon="['fas', 'shopping-cart']" />

      <!-- count -->
      <span v-if="productsQuantity && !loading" class="cart__count">
        {{ productsQuantity }}
      </span>
      <!-- /count -->
    </button>
    <!-- /button -->

    <!-- modal -->
    <Modal :show="isVisible" @close="toggleVisiblity" title="سبد خرید">
      <template v-if="items.length">
        <CartItem
          v-for="item in items"
          :key="item.product.id"
          :id="item.product.id"
          :thumbnail="item.product.images.main"
          :name="item.product.title"
          :price="item.product.price.selling_price"
          :quantity="item.quantity"
          @delete="onDelete"
        />

        <div class="cart__footer">
          <div>
            مبلغ قابل پرداخت:
            <strong>{{ $filters.price(totalPrice) }}</strong> تومان
          </div>

          <div>
            <router-link class="btn btn--info" to="/cart">
              ثبت سفارش
              <FontAwesomeIcon class="mr-2" :icon="['fas', 'arrow-left']" />
            </router-link>
          </div>
        </div>
      </template>

      <div v-else>
        <h2 class="cart__empty-title">سبد خرید شما <b>خالی</b> است ;(</h2>
      </div>
    </Modal>
    <!-- /modal -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useToggle, useCart } from "@/composables";
import Modal from "@/modules/Modal";
import CartItem from "./Item.vue";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { LOADING } from "@/modules/Products/store/state";

export default {
  name: "Cart",
  components: {
    Modal,
    CartItem,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const { items, totalPrice, productsQuantity, onDelete } = useCart();
    const { isVisible, toggleVisiblity } = useToggle();

    const loading = computed(() => store.state[PRODUCTS_MODULE][LOADING]);

    return {
      isVisible,
      toggleVisiblity,
      route,
      items,
      totalPrice,
      productsQuantity,
      onDelete,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  position: relative;

  &__button {
    all: unset;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid #e4e4e4;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 14px;
    color: #343a40;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: $warning;
      color: #fff;
    }
  }

  &__count {
    position: absolute;
    top: -4px;
    right: -2px;
    font-size: 10px;
    width: 15px;
    height: 15px;
    background-color: $info;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
  }

  &__empty-title {
    text-align: center;
  }
}
</style>
