<template>
  <td class="cart-item">
    <!-- thumbnail -->
    <div>
      <router-link to="/">
        <img
          class="cart-item__thumbnail"
          src="https://dkstatics-public.digikala.com/digikala-products/114389900.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          alt=""
        />
      </router-link>
    </div>
    <!-- /thumbnail -->

    <!-- content -->
    <div class="cart-item__content">
      <!-- title -->
      <div class="cart-item__title">
        لپ تاپ 16 اینچی اپل مدل MacBook Pro MVVK2 2019 همراه با تاچ بار
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
            <strong class="cart-item__price-value">۶۳,۲۶۴,۰۰۰</strong> تومان
          </div>
          <div class="cart-item__price">
            قیمت کل:
            <strong class="cart-item__price-value">۶۳,۲۶۴,۰۰۰</strong> تومان
          </div>
        </div>
        <!-- /price -->

        <!-- delete -->
        <div>
          <button class="cart-item__delete">
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
import { QuantitySelector } from "@/modules/Ui";

export default {
  name: "CartItem",
  components: {
    QuantitySelector,
  },
  data() {
    return {
      count: 1,
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
