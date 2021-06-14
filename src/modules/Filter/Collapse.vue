<template>
  <article class="filter-collapse">
    <!-- header -->
    <div class="filter-collapse__header" @click="toggleVisiblity">
      <div>{{ title }}</div>
      <FontAwesomeIcon
        :icon="['fas', isVisible ? 'chevron-up' : 'chevron-down']"
      />
    </div>
    <!-- /header -->

    <!-- body -->
    <div v-if="isVisible" class="filter-collapse__body">
      <slot />
    </div>
    <!-- /body -->
  </article>
</template>

<script>
import { useToggle } from "@/composables";

export default {
  name: "FilterCollapse",
  props: {
    title: {
      required: true,
      type: String,
    },
    visible: Boolean,
  },
  setup(props) {
    const { isVisible, toggleVisiblity } = useToggle(props.visible);

    return {
      isVisible,
      toggleVisiblity,
    };
  },
};
</script>

<style lang="scss">
.filter-collapse {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    cursor: pointer;
    user-select: none;
  }

  &__body {
    padding: 15px;
  }
}
</style>
