<template>
  <div class="loading-spinner">
    <FontAwesomeIcon :icon="['fas', 'spinner']" spin />
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style lang="scss" scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  @extend .my-3;
  font-size: 40px;
}
</style>
