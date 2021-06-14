import { ref } from "vue";

export default function (defaultValue) {
  const count = ref(defaultValue);
  const increment = () => count.value++;
  const decremnet = () => {
    if (count.value > 0) count.value--;
  };

  return {
    count,
    increment,
    decremnet,
  };
}
