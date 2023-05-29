// Définition de la constante productFactory
export const productFactory = {
  // Méthode pour obtenir une liste formatée de produits
  getProducts(products) {
    // Utilisation de la méthode map pour itérer sur chaque produit dans la liste
    return products.map(({ category, description, id, image, price, title }) => ({
      // Extraction des propriétés spécifiques de chaque produit et création d'un nouvel objet
      category,
      description,
      id,
      image,
      price,
      title
    }));
  }
}
