import { computed } from "vue";
import { useStore } from "vuex";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { LOADING } from "@/modules/Products/store/state";

export default function () {
  const store = useStore();
  const loading = computed(() => store.state[PRODUCTS_MODULE][LOADING]);

  return loading;
}
