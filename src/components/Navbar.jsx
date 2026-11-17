function Navbar({ search, onSearchChange, isDark, onToggleTheme, favoritesCount }) {
  return (
    <header className="header">
      <div className="logo">🍔 Food Menu</div>

      <input
        className="search-input"
        type="search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Rechercher un plat..."
        aria-label="Rechercher un plat, une catégorie ou une description"
      />

      <div className="header-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
          title={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <div className="favorites-counter" aria-label={`${favoritesCount} produits favoris`}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UHYANqUHbyR8PxCf5fUk6j4YxT0vbJMolnXEeR-rEQ&s=10"
            alt=""
            style={{ width: 24, height: 24, objectFit: "cover", verticalAlign: "middle", marginRight: 8 }}
          />
          {favoritesCount}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
