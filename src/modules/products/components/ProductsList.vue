<template>
  <div class="row no-gap product-list">
    <div v-for="i in 30" :key="i" class="col-xs-12 col-sm-6 col-md-4">
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductsList",
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss">
.product-list {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0 2px 4px -1px;

  .col-xs-12 {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:nth-child(3n) {
      @include md_down {
        border-left: none;
      }
    }

    &:nth-child(2n) {
      @include sm_up {
        border-left: none;
      }
    }

    @include md_down {
      &:nth-last-child(-n + 3) {
        border-bottom: none;
      }
    }
  }
}
</style>
