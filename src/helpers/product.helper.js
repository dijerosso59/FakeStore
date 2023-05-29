// Import de la constante environment depuis le fichier des environnements
import { environment } from "../environments";

// Définition de la constante productHelper
export const productHelper = {
  // getProductClassName2(product) {
  //   console.log(product.category) // women's clothing
  // },
  // getProductClassName3({ category }) {
  //   console.log(category) // women's clothing
  // },

  // Méthode pour obtenir la classe CSS en fonction de la catégorie du produit
  getProductClassName({ category }) {
    // Vérification de la catégorie du produit
    if (category === "women's clothing") return "blue";
    if (category === "men's clothing") return "orange";
    if (category === "electronics") return "red";
    return "green";
  },

  // Méthode pour obtenir le prix du produit incluant la TVA
  getProductTVA({ price }) {
    // Calcul du prix avec la TVA en utilisant le taux défini dans environment.tva
    return Math.floor(price * environment.tva * 100) / 100;
  },
};
