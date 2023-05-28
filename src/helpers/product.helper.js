import { environment } from "../environments";

export const productHelper = {
  // getProductClassName2(product) {
  //   console.log(product.category) // women's clothing
  // },
  // getProductClassName3({ category }) {
  //   console.log(category) // women's clothing
  // },

  getProductClassName({ category }) {
    if (category === "women's clothing") return "blue";
    if (category === "men's clothing") return "orange";
    if (category === "electronics") return "red";
    return "green";
  },

  getProductTVA({ price }) {
    return Math.floor(price * environment.tva * 100) / 100;
  }
}