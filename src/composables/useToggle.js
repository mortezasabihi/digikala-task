import { ref } from "vue";

export default function () {
  const isVisible = ref(false);
  const toggleVisiblity = () => (isVisible.value = !isVisible.value);

  return {
    isVisible,
    toggleVisiblity,
  };
}
