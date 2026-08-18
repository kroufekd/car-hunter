import { BrandMark } from "@/components/BrandMark";

const NAV_LINKS = [
  { href: "#jak", label: "Jak to funguje" },
  { href: "#umi", label: "Co agent umí" },
  { href: "#dovoz", label: "Dovoz" },
  { href: "#baliky", label: "Balíčky" },
  { href: "#faq", label: "Otázky" },
];

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#">
          <BrandMark />
          CarHunter
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary header__cta" href="#report">
          Reálný report
        </a>
      </div>
    </header>
  );
}
