<template>
  <!-- navbar -->
  <Navbar />
  <!-- /navbar -->

  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { Navbar } from "@/modules/Layout";

export default {
  components: {
    Navbar,
  },
};
</script>
