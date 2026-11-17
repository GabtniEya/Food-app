import ProductCard from "./ProductCard.jsx";

function ProductList({ products, category, favorites, onToggleFavorite }) {
  return (
    <main className="main">
      <div className="main-header">
        <h1>{category === "All" ? "Notre Menu" : category}</h1>
        <p>Découvrez nos délicieux produits</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="empty">Aucun produit trouvé.</div>
      )}
    </main>
  );
}

export default ProductList;
