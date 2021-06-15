<template>
  <div class="row">
    <!-- sidebar -->
    <aside class="col-xs-12 col-lg-3">
      <!-- filter -->
      <Filter />
      <!-- /filter -->
    </aside>
    <!-- /sidebar -->

    <!-- main -->
    <main class="col-xs-12 col-lg-9">
      <!-- products list -->
      <ProductsList />
      <!-- /products list -->
    </main>
    <!-- /main -->
  </div>
</template>

<script>
import Filter from "@/modules/Filter/index";
import { ProductsList } from "@/modules/Products";

export default {
  name: "HomePage",
  components: {
    Filter,
    ProductsList,
  },
};
</script>
