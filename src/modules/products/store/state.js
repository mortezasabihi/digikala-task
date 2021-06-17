export const PRODUCTS = "products";
export const LOADING = "loading";
export const PAGINATION = "pagination";
export const FILTERS = "filters";

export default () => ({
  [PRODUCTS]: [],
  [LOADING]: false,
  [PAGINATION]: {
    current_page: 1,
    total_pages: 1,
    total_items: 0,
  },
  [FILTERS]: {},
});
