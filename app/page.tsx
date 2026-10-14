import { SiteFooter } from "@/components/site-footer";
import { HomeSections } from "@/components/home-sections";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <section className="hero" aria-label="Oferta de pasteles de chocolate">
        <div className="hero-image hero-image-main" role="img" aria-label="Pastel de chocolate con frutos rojos" />
        <div className="hero-copy">
          <span className="hero-kicker">Un momento para celebrar</span>
          <h1>DECADENT<br />CHOCOLATE<br />BLISS!</h1>
          <p>Satisfy Your Sweet Cravings</p>
          <div className="offer"><span>Special Offer</span><strong>SAVE 20%</strong></div>
        </div>
        <div className="hero-image hero-image-small hero-image-top" role="img" aria-label="Pastel individual de chocolate" />
        <div className="hero-image hero-image-small hero-image-bottom" role="img" aria-label="Porción de pastel de chocolate" />
      </section>
      <div className="content-card"><HomeSections /></div>
      <SiteFooter />
    </main>
  );
}
