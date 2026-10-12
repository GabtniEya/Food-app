function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <div className="card">
      {/* IMAGE */}
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="category">
          {product.category}
        </span>
      </div>

      {/* CONTENU */}
      <div className="card-content">
        <div className="card-title">
          <h3>{product.name}</h3>

          {/* FAVORI */}
          <button
            type="button"
            className={`like ${isFavorite ? "liked" : ""}`}
            onClick={() => onToggleFavorite(product.id)}
            aria-label={
              isFavorite
                ? `Retirer ${product.name} des favoris`
                : `Ajouter ${product.name} aux favoris`
            }
            aria-pressed={isFavorite}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>

        {/* DESCRIPTION */}
        <p>{product.description}</p>

        {/* PRIX + AJOUTER */}
        <div className="bottom">
          <strong>
            {Number(product.price).toFixed(2)} DNT
          </strong>

          <button
            type="button"
            className="add"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;