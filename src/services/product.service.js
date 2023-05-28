import { reactive } from "vue";
import { productRepository } from "../repositories/product.repository";
import { productFactory } from "../factories/product.factory"

export const productService = reactive({
  products: [],
  selectedProduct: null,

  getProducts() {
    productRepository.getProducts().then((products) => {
      this.products = productFactory.getProducts(products);
    });
  },

  getProduct(id) {
    productRepository.getProduct(id).then((product) => {
      this.selectedProduct = productFactory.getProducts([product])[0];
    })
  },

  updateProduct(productDto) {
    productRepository.updateProduct(productDto).then((product) => {
      console.log(product);
      this.selectedProduct = productFactory.getProducts([product])[0];
    })
  },

  removeSelectedProduct() {
    this.selectedProduct = null;
  }
});