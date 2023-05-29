<script setup>
import { ref, computed, watchEffect } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { productService } from "../services/product.service";
import { productHelper } from "../helpers/product.helper";

// Récupération de l'objet route en utilisant useRoute()
const route = useRoute();

// Définition d'une variable reactive product en utilisant computed() pour obtenir productService.selectedProduct
const product = computed(() => productService.selectedProduct);

// Récupération de l'ID du produit depuis les paramètres de route
const productId = route.params.id;

// Définition d'une variable reactive productBackup en utilisant ref()
const productBackup = ref(null);

// Définition d'une variable reactive updatedText en utilisant ref()
const updatedText = ref("");

// Fonction handleUpdate appelée lors de la mise à jour du produit
function handleUpdate() {
  // Vérification si le prix du produit a été modifié
  if (productBackup.value.price === product.value.price) return;
  // Appel de la fonction updateProduct de productService pour mettre à jour le produit
  productService.updateProduct(product.value);
  // Assignation du texte de mise à jour
  updatedText.value = "Produit mis à jour";
}

// Utilisation de watchEffect pour observer les changements de product
watchEffect(() => {
  // Vérification si product est défini et productBackup n'a pas encore été initialisé
  if (product.value && !productBackup.value) {
    // Copie de la valeur de product dans productBackup
    productBackup.value = { ...product.value };
  }
});

// Vérification si product est défini et l'ID du produit a changé
if (product && product.id !== productId) {
  // Suppression du produit sélectionné de productService
  productService.removeSelectedProduct();
}

// Appel de la fonction getProduct de productService pour obtenir les détails du produit avec l'ID spécifié
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
              <div>
                <p class="tva">
                  <span class="font-bold">Prix</span> (inclut la TVA):
                  {{ productHelper.getProductTVA(product) }} €
                </p>
                <div
                  v-if="productBackup && productBackup.price !== product.price"
                  class="alert"
                >
                  <p>Ancien prix : {{ productBackup.price }} €</p>
                </div>
              </div>
            </div>
            <div class="flex">
              <button @click="handleUpdate()" class="btn">MAJ Produit</button>
              <div v-if="updatedText" class="alert-update">
                <p>{{ updatedText }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
