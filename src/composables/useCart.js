import { computed } from "vue";
import { useStore } from "vuex";
import { CART_MODULE } from "@/modules/Cart/store";
import { GET_CART_PRODUCTS } from "@/modules/Cart/store/getters";
import { REMOVE_CART_ITEM } from "@/modules/Cart/store/mutations";

export default function () {
  const store = useStore();

  const items = computed(
    () => store.getters[`${CART_MODULE}/${GET_CART_PRODUCTS}`]
  );
  const totalPrice = computed(() => {
    if (items.value.length) {
      return items.value.reduce(
        (total, current) =>
          total + current.product.price.selling_price * current.quantity,
        0
      );
    }

    return 0;
  });
  const productsQuantity = computed(() => {
    if (items.value.length) {
      return items.value.reduce(
        (total, current) => total + current.quantity,
        0
      );
    }

    return 0;
  });

  const onDelete = (id) =>
    store.commit(`${CART_MODULE}/${REMOVE_CART_ITEM}`, id);

  return {
    items,
    totalPrice,
    productsQuantity,
    onDelete,
  };
}
