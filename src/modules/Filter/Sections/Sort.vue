<template>
  <div class="filter-sort">
    <div class="form-group">
      <input
        type="radio"
        name="sort"
        id="most-views"
        :value="4"
        v-model="sort"
      />
      <label for="most-views">بیشترین بازدید</label>
    </div>
    <div class="form-group">
      <input
        type="radio"
        name="sort"
        id="most-relavent"
        :value="22"
        v-model="sort"
      />
      <label for="most-relavent">محبوب ترین</label>
    </div>
    <div class="form-group">
      <input
        type="radio"
        name="sort"
        id="customers-recommendation"
        :value="27"
        v-model="sort"
      />
      <label for="customers-recommendation">پیشنهاد مشتریان</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterSort",
  data() {
    return {
      sort: 4,
    };
  },
};
</script>
