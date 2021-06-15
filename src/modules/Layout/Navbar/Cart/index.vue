<template>
  <div class="cart">
    <!-- button -->
    <button
      class="cart__button"
      @click="route.path !== '/cart' && toggleVisiblity()"
    >
      <FontAwesomeIcon :icon="['fas', 'shopping-cart']" />

      <!-- count -->
      <span class="cart__count">5</span>
      <!-- /count -->
    </button>
    <!-- /button -->

    <!-- modal -->
    <Modal :show="isVisible" @close="toggleVisiblity" title="سبد خرید">
      <CartItem
        v-for="(item, index) in items"
        :key="index"
        :thumbnail="item.thumbnail"
        :name="item.name"
        :price="item.price"
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
    </Modal>
    <!-- /modal -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useToggle } from "@/composables";
import Modal from "@/modules/Modal";
import CartItem from "./Item.vue";

export default {
  name: "Cart",
  data() {
    return {
      items: [
        {
          thumbnail:
            "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png",
          name: "کفش مردانه ساق بلند",
          price: 99000,
        },
        {
          thumbnail:
            "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png",
          name: "کفش مردانه ساق بلند",
          price: 150000,
        },
      ],
    };
  },
  components: {
    Modal,
    CartItem,
  },
  computed: {
    totalPrice() {
      return this.items.reduce((total, current) => total + current.price, 0);
    },
  },
  setup() {
    const { isVisible, toggleVisiblity } = useToggle();
    const route = useRoute();

    return {
      isVisible,
      toggleVisiblity,
      route,
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
}
</style>
