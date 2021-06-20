import { computed } from "vue";
import { useStore } from "vuex";
import { CART_MODULE } from "@/modules/Cart/store";
import { ITEMS } from "@/modules/Cart/store/state";
import { REMOVE_CART_ITEM } from "@/modules/Cart/store/mutations";
import { ADD_PRODUCT_TO_CART } from "@/modules/Cart/store/actions";

export default function () {
  const store = useStore();

  const items = computed(() => store.state[CART_MODULE][ITEMS]);
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

  const onDelete = (id) => {
    store.commit(`${CART_MODULE}/${REMOVE_CART_ITEM}`, id);
  };

  const addToCart = (product, quantity) => {
    store.dispatch(`${CART_MODULE}/${ADD_PRODUCT_TO_CART}`, {
      product,
      quantity,
    });
  };

  return {
    items,
    totalPrice,
    productsQuantity,
    onDelete,
    addToCart,
  };
}
