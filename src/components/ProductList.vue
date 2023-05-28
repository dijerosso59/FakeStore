<script setup>
import { productService } from "../services/product.service";
import { productHelper } from "../helpers/product.helper";

productService.getProducts();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Produit</th>
        <th>Categorie</th>
        <th>Prix</th>
        <th>Prix (TVA)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productService.products" :key="product.id">
        <td>
          <RouterLink :to="`/products/${product.id}`">
            {{ product.title }}
          </RouterLink>
        </td>
        <td>
          <p :class="productHelper.getProductClassName(product)" class="bull">
            {{ product.category }}
          </p>
        </td>
        <td>{{ product.price }}€</td>
        <td>{{ productHelper.getProductTVA(product) }} €</td>
      </tr>
    </tbody>
  </table>
</template>
