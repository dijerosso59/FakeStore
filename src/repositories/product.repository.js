import { environment } from "../environments"

const productUrl = `${environment.api}/products`

export const productRepository = {
  async getProducts() {
    try {
      const products = await fetch(productUrl);
      return await products.json();
    } catch (e) {
      this.logError(e)
    }
  },

  async getProduct(id) {
    try {
      const product = await fetch(`${productUrl}/${id}`);
      return await product.json();
    } catch(e) {
      this.logError(e)
    }
  },

  async updateProduct({ ...productDto }) {
    try {
      // problème d'api (ne renvoie que l'id), donc pas de retour d'objet ici
      await fetch(`${productUrl}/${productDto.id}`, {
        method: "PATCH",
        body: JSON.stringify({ price: productDto.price })
      });
      return productDto;
    } catch (e) {
      this.logError(e);
    }
  },

  logError(e) {
    alert("Une erreur est survenue");
    console.error(e);
    throw new Error();
  }
}