export const ITEMS = "items";

const items = JSON.parse(localStorage.getItem("cart")) || [];

export default () => ({
  [ITEMS]: items,
});
