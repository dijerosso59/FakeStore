<script setup>
import { ref, computed, watchEffect } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { productService } from "../services/product.service";
import { productHelper } from "../helpers/product.helper";

const route = useRoute();
const product = computed(() => productService.selectedProduct);
const productId = route.params.id;
const productBackup = ref(null);

function handleUpdate() {
  if (productBackup.value.price === product.value.price) return;
  productService.updateProduct(product.value);
}

watchEffect(() => {
  if (product.value && !productBackup.value) {
    productBackup.value = { ...product.value };
  }
});

if (product && product.id !== productId) {
  productService.removeSelectedProduct();
}

productService.getProduct(productId);
</script>

<template>
  <section>
    <div v-if="product" class="container padding">
      <div>
        <RouterLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="arrow"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </RouterLink>
      </div>
      <h1>{{ product.title }}</h1>
      <div class="product-content">
        <div class="product-image">
          <figure>
            <img :src="product.image" :alt="product.title" />
          </figure>
        </div>
        <div class="product-infos">
          <div class="product-description">
            <h2>Decription</h2>
            <p>{{ product.description }}</p>
          </div>
          <div>
            <h2>Catégorie</h2>
            <p :class="productHelper.getProductClassName(product)" class="bull">
              {{ product.category }}
            </p>
          </div>
          <div class="w-full">
            <h2>Prix</h2>
            <div class="col-price">
              <div class="border-price">
                <input v-model="product.price" type="number" />
              </div>
              <p class="tva">
                <span class="font-bold">Prix</span> (inclut la TVA):
                {{ productHelper.getProductTVA(product) }} €
              </p>
            </div>
            <button @click="handleUpdate()" class="btn">MAJ Produit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
