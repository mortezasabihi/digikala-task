import Home from "@/views/Home";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "@/views/Cart.vue"),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "@/views/Product.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
  },
];
