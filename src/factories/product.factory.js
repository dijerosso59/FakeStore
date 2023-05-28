export const productFactory = {
  getProducts(products) {
    return products.map(({ category, description, id, image, price, title }) => ({ category, description, id, image, price, title }))
  }
}