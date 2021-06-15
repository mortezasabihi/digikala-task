import { ref } from "vue";

export default function ({ min, max, defaultValue }) {
  const count = ref(defaultValue);
  const increment = () => {
    if (max) {
      count.value < max && count.value++;
    } else {
      count.value++;
    }
  };
  const decrement = () => {
    if (min) {
      count.value > min && count.value--;
    } else {
      count.value--;
    }
  };

  return {
    count,
    increment,
    decrement,
  };
}
