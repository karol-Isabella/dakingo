const categories = ["Cakes", "Theme Cakes", "Desserts", "Birthday", "Hampers", "Anniversary", "Occasions", "Occasions"];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-top">
        <a className="brand" href="#top" aria-label="Dakingo inicio">Dakingo</a>
        <div className="header-actions">
          <label className="search-box"><span className="search-icon"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><path d="m13 13 4 4"/></svg></span><input aria-label="Buscar" placeholder="Search" /><button aria-label="Buscar"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><path d="m13 13 4 4"/></svg></button></label>
          <button className="cart-button" aria-label="Carrito"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.9-1.4L21 8H6"/><circle cx="10" cy="19" r="1.4"/><circle cx="18" cy="19" r="1.4"/><path d="M9 8V5h6v3m-3-3V3"/></svg></button>
          <a className="login-link" href="#footer">Login/Signup</a>
        </div>
      </div>
      <nav className="main-nav" aria-label="Categorías">
        <div className="nav-links">{categories.map((item, index) => <a key={`${item}-${index}`} href="#bestsellers">{item}</a>)}</div>
        <a className="order-button" href="#bestsellers">ORDER NOW</a>
      </nav>
    </header>
  );
}
