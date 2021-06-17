<template>
  <ContentLoader
    viewBox="0 0 800 575"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="2" ry="2" width="250" height="302" />
    <rect x="270" y="0" rx="2" ry="2" width="250" height="302" />
    <rect x="540" y="0" rx="2" ry="2" width="250" height="302" />
    <rect x="0" y="323" rx="2" ry="2" width="250" height="302" />
    <rect x="270" y="323" rx="2" ry="2" width="250" height="302" />
    <rect x="540" y="323" rx="2" ry="2" width="250" height="302" />
  </ContentLoader>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
  name: "ProductsLoading",
  components: {
    ContentLoader,
  },
};
</script>
