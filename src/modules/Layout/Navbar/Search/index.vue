<template>
  <div class="search">
    <!-- wrapper -->
    <div class="search__wrapper">
      <!-- icon -->
      <FontAwesomeIcon class="search__icon" :icon="['fas', 'search']" />
      <!-- /icon -->

      <!-- input -->
      <input
        type="search"
        v-model="search"
        placeholder="جستجو در دیجی کالا ..."
        autocomplete="off"
        class="search__input"
      />
      <!-- /input -->
    </div>
    <!-- /wrapper -->
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  flex: 1;

  &__wrapper {
    position: relative;
    @include xs_down {
      width: 90%;
    }
    @include md_down {
      width: 400px;
    }
  }

  &__input {
    border: none;
    background-color: #f0f0f1;
    width: 100%;
    height: 35px;
    padding: 10px 30px 10px 10px;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
  }

  &__icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: #a1a3a8;
  }
}
</style>
