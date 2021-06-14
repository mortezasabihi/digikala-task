import { ref } from "vue";

export default function (defaultValue = false) {
  const isVisible = ref(defaultValue);
  const toggleVisiblity = () => (isVisible.value = !isVisible.value);

  return {
    isVisible,
    toggleVisiblity,
  };
}
