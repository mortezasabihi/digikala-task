<template>
  <div>
    <div class="form-group">
      <input
        type="radio"
        name="sort"
        id="most-views"
        :value="VALUES.mostViews"
        :checked="modelValue === VALUES.mostViews"
        @input="update($event.target.value)"
      />
      <label for="most-views">بیشترین بازدید</label>
    </div>
    <div class="form-group">
      <input
        type="radio"
        name="sort"
        id="most-relavent"
        :value="VALUES.mostRelavent"
        :checked="modelValue === VALUES.mostRelavent"
        @input="update($event.target.value)"
      />
      <label for="most-relavent">محبوب ترین</label>
    </div>
    <div class="form-group">
      <input
        type="radio"
        name="sort"
        id="customers-recommendation"
        :value="VALUES.customerRecommendation"
        :checked="modelValue === VALUES.customerRecommendation"
        @input="update($event.target.value)"
      />
      <label for="customers-recommendation">پیشنهاد مشتریان</label>
    </div>
  </div>
</template>

<script>
const VALUES = {
  mostViews: 4,
  mostRelavent: 22,
  customerRecommendation: 27,
};

export default {
  name: "FilterSort",
  props: {
    modelValue: {
      required: true,
      type: Number,
      validator: (value) => Object.values(VALUES).includes(value),
    },
  },
  setup(_, { emit }) {
    const update = (value) => emit("update:modelValue", parseInt(value));

    return {
      update,
      VALUES,
    };
  },
};
</script>
