const groups = [
  { title: "KNOW US", links: ["About Us", "Blog"] },
  { title: "NEED HELP", links: ["Cancellation And Refund", "Privacy Policy"] },
  { title: "MORE INFO", links: ["Terms And Policy", "Customer Care"] },
  { title: "MORE INFO", links: ["Cakes & Offers", "Download App"] },
];

export function SiteFooter() {
  return <footer className="site-footer" id="footer">
    <div className="footer-banner">Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration</div>
    <div className="footer-main">
      <div className="footer-story"><a className="brand" href="#top">Dakingo</a><a href="#footer">Our Story</a><a href="#footer">Contact Us</a><a href="#footer">Location Map</a><a href="#footer">Media</a><a href="#footer">Careers</a></div>
      {groups.map((group, i) => <div className="footer-group" key={`${group.title}-${i}`}><h3>{group.title}</h3>{group.links.map((link) => <a key={link} href="#footer">{link}</a>)}</div>)}
    </div>
    <div className="subscribe-row"><span className="subscribe-spacer"/><form><input type="email" aria-label="Correo electrónico" placeholder="Enter Email Address"/><button>SUBSCRIBE</button></form><small>ⓘ<br />Hey, need any help?</small></div>
  </footer>;
}
