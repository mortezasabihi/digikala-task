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
];
