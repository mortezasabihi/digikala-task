<template>
  <div class="row">
    <!-- cart list -->
    <section class="col-xs-12 col-lg-9">
      <CartList />
    </section>
    <!-- /cart list -->

    <!-- summary -->
    <aside class="col-xs-12 col-lg-3">
      <CartSummary />
    </aside>
    <!-- /summary -->
  </div>
</template>

<script>
import { CartList, CartSummary } from "@/modules/Cart";

export default {
  name: "CartPage",
  components: {
    CartList,
    CartSummary,
  },
};
</script>
