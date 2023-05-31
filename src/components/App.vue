<template>
  <div id="shoppingApp">
    <!-- product vuex practice -->
    <div class="">
      <h1>Shopping Cart Example</h1>
      <hr />
      <h2>Products</h2>
      <ProductList />
      <hr />
      <ShoppingCart />
    </div>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import ShoppingCart from "./ShoppingCart.vue";

export default {
  components: { ProductList, ShoppingCart },
};
</script>
