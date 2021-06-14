<template>
  <div class="product-card">
    <!-- status -->
    <span class="product-card__status"> موجود </span>
    <!-- /status -->

    <!-- thumbnail -->
    <div>
      <router-link to="/">
        <img
          class="product-card__thumbnail"
          src="https://dkstatics-public.digikala.com/digikala-products/115598446.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
          alt=""
        />
      </router-link>
    </div>
    <!-- /thumbnail -->

    <!-- body -->
    <div class="product-card__body">
      <!-- title -->
      <router-link to="/" class="product-card__title">
        گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت
        128گیگابایت
      </router-link>
      <!-- /title -->

      <!-- price -->
      <div class="product-card__price">
        <strong class="product-card__price-value">۶,۱۹۵,۰۰۰</strong>
        تومان
      </div>
      <!-- /price -->
    </div>
    <!-- /body -->
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  //   props: {
  //     product: {
  //       required: true,
  //       type: Object,
  //     },
  //   },
};
</script>

<style lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;

  &:hover {
    .product-card__status {
      visibility: visible;
      opacity: 1;
    }
  }

  &__status {
    position: absolute;
    background-color: $success;
    color: #fff;
    padding: 6px 8px;
    font-size: 12px;
    border-radius: 25px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-in-out;
  }

  &__thumbnail {
    max-width: 100%;
    max-height: 160px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  &__title {
    color: #535353;
    font-size: 13px;
    text-align: center;
    display: block;
    line-height: 22px;
  }

  &__price {
    text-align: center;
    margin-top: 10px;
  }

  &__price-value {
    color: #000;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
