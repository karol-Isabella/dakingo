const products = [
  { name: "Rich Chocolate Truffle Cake", price: "₹500", rating: "4.9", image: "/reference/product-1.jpg" },
  { name: "Choco Chip Truffle Cake", price: "₹509", rating: "4.8", image: "/reference/product-2.jpg" },
  { name: "Tropical Fruit N Almond Cake", price: "₹599", rating: "4.9", image: "/reference/product-3.jpg" },
  { name: "Rich Butterscotch Crunchie Cake", price: "₹399", rating: "4.7", image: "/reference/product-4.jpg" },
];
const gallery = ["/reference/gallery-1.jpg", "/reference/gallery-2.jpg", "/reference/gallery-3.jpg", "/reference/gallery-4.jpg", "/reference/gallery-5.jpg", "/reference/gallery-6.jpg"];
const categories = [
  { label: "CLASSIC", icon: "cake" }, { label: "GOURMET", icon: "box" }, { label: "DESSERTS", icon: "dessert" }, { label: "COOKIES", icon: "cookies" },
];

function CategoryIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "cake") return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><path d="M8 25h32v15H8zM5 40h38M14 25v-5a4 4 0 0 1 8 0v5m5 0v-7a4 4 0 0 1 8 0v7M17 12v5m11-8v5m8 0v4M8 31c3 3 5-3 8 0s5-3 8 0 5-3 8 0 5-3 8 0"/><path d="M20 7h.01M31 4h.01" strokeWidth="3"/></svg>;
  if (name === "box") return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><rect x="7" y="9" width="34" height="30" rx="3"/><path d="M14 15h20v18H14zM18 19h12m-12 4h12m-12 4h7M9 5h30M5 42h38"/><circle cx="34" cy="28" r="2"/></svg>;
  if (name === "dessert") return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><path d="M8 18h32v6H8zM11 24h26v15H11zM7 39h34M13 14l6-6h10l6 6M16 29h16m-16 5h16M24 8V4m-3 2h6M16 19v3m8-3v3m8-3v3"/><path d="m33 10 4-3 3 4-4 3z"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><path d="M11 8h19l7 7v25H11zM30 8v8h7M16 22h16m-16 5h16m-16 5h10M6 17h2m-2 5h2m-2 5h2m-2 5h2m-2 5h2"/><path d="M37 20c5 0 5 5 2 7m-2 2c5 0 5 5 2 7"/></svg>;
}

export function HomeSections() {
  return <>
    <section className="menu-section">
      <div className="menu-intro"><h2>Menu</h2><p>Whst will you wish for?</p><div className="mini-icons"><span><CategoryIcon name="cake" /></span><span><CategoryIcon name="dessert" /></span><span><CategoryIcon name="cookies" /></span></div></div>
      <div className="category-cards">{categories.map((item) => <a className="category-card" key={item.label} href="#bestsellers"><span><CategoryIcon name={item.icon} /></span><b>{item.label}</b></a>)}</div>
    </section>
    <section className="bestsellers" id="bestsellers">
      <h2 className="section-title">Bestsellers from Across the Country</h2>
      <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}>
        <div className="product-photo" style={{ backgroundImage: `url("${product.image}")` }}><button aria-label={`Añadir ${product.name}`}>♥</button></div>
        <h3>{product.name}</h3><p className="product-meta"><b>{product.price}</b><span>● Same day delivery</span></p><p className="rating"><span>★★★★★</span><small>{product.rating} · 300</small></p>
      </article>)}</div>
      <div className="view-all-wrap"><a className="pill-button" href="#bestsellers">VIEW ALL</a></div>
    </section>
    <section className="promise-section">
      <div className="promise-heading"><h2>Our Promise</h2><p>There’s no secret spell – only honest hard work!</p></div>
      <div className="promise-layout">
        <div className="promise-left">
          <div className="promise-box">
            <h3>A glimpse into our secret spell – only honest hard work!</h3>
            <div className="promise-points"><div><span><CategoryIcon name="cake" /></span><b>ON-TIME<br />DELIVERY</b></div><div><span><CategoryIcon name="box" /></span><b>5100+<br />DESIGNS</b></div><div><span className="orders-icon">2<sup>+</sup></span><b>2 CR+<br />ORDERS</b></div><div><span><CategoryIcon name="cookies" /></span><b>BAKED<br />FRESH</b></div></div>
          </div>
          <div className="ticket-box"><div className="ticket-art" role="img" aria-label="Boleto mágico de Dakingo"/><div><h3>THE MAGICAL TICKET</h3><p>Add 3 reminders in your account.<br />Win exciting rewards worth Rs. 750</p><a className="pill-button" href="#footer">UNLOCK NOW</a></div></div>
          <div className="social-box"><div className="avatars">{gallery.slice(0, 5).map((img, i) => <span key={img} style={{ backgroundImage: `url("${img}")`, zIndex: 5 - i }} />)}</div><b>Follow us on social!</b></div>
        </div>
        <div className="gallery-grid">{gallery.map((img) => <div className="gallery-photo" key={img} style={{ backgroundImage: `url("${img}")` }} />)}</div>
      </div>
    </section>
  </>;
}
