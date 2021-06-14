<template>
  <div class="row">
    <!-- sidebar -->
    <aside class="col-xs-12 col-lg-3">
      <Filter />
    </aside>
    <!-- /sidebar -->

    <!-- main -->
    <main class="col-xs-12 col-lg-9"></main>
    <!-- /main -->
  </div>
</template>

<script>
import Filter from "@/modules/Filter/index";

export default {
  name: "HomePage",
  components: {
    Filter,
  },
};
</script>
