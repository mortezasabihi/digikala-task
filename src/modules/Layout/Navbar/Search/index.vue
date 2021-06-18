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
        v-model="searchInput"
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
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import debounce from "lodash.debounce";

export default {
  name: "Search",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const searchInput = ref("");

    const search = debounce((query) => {
      router.push({
        name: "Home",
        query: {
          ...route.query,
          search: query,
        },
      });
    }, 1000);

    watch(
      () => searchInput.value,
      (value) => search(value)
    );

    // couldn't accessed to query param in layout component :(
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    if (searchParam) {
      searchInput.value = searchParam;
    }

    return {
      searchInput,
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
