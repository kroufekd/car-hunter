import { CONCEPT_URL, REPO_URL } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>CarHunter · koncept a pitch · data z reálného reportu 18. 8. 2026</span>
        <nav className="footer__links" aria-label="Odkazy v patičce">
          <a href={REPO_URL} rel="noopener">
            GitHub
          </a>
          <a href={CONCEPT_URL} rel="noopener">
            Koncept
          </a>
        </nav>
      </div>
    </footer>
  );
}
