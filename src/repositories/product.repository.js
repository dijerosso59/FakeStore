// Import de la constante environment depuis le fichier des environnements
import { environment } from "../environments";

// Définition de l'URL de l'API des produits en utilisant l'URL définie dans environment.api
const productUrl = `${environment.api}/products`;

// Définition de la constante productRepository
export const productRepository = {
  
  // Méthode asynchrone pour obtenir la liste des produits
  async getProducts() {
    try {
      // Appel à l'API pour récupérer les produits
      const products = await fetch(productUrl);
      return await products.json();
    } catch (e) {
      this.logError(e); // En cas d'erreur, appel à la méthode logError pour gérer l'erreur
    }
  },

  // Méthode asynchrone pour obtenir un produit spécifique par son ID
  async getProduct(id) {
    try {
      // Appel à l'API pour récupérer le produit avec l'ID spécifié
      const product = await fetch(`${productUrl}/${id}`);
      return await product.json();
    } catch (e) {
      this.logError(e); // En cas d'erreur, appel à la méthode logError pour gérer l'erreur
    }
  },

  // Méthode asynchrone pour mettre à jour un produit
  async updateProduct({ ...productDto }) {
    try {
      // Appel à l'API pour mettre à jour le produit avec les données spécifiées
      // problème d'api (ne renvoie que l'id), donc pas de retour d'objet ici
      await fetch(`${productUrl}/${productDto.id}`, {
        method: "PATCH",
        body: JSON.stringify({ price: productDto.price }), // Envoi des données de mise à jour (prix) sous forme JSON
      });
      return productDto; // Retour du produit mis à jour
    } catch (e) {
      this.logError(e); // En cas d'erreur, appel à la méthode logError pour gérer l'erreur
    }
  },

  // Méthode pour gérer les erreurs
  logError(e) {
    alert("Une erreur est survenue");
    console.error(e);
    throw new Error();
  },
};
