import { renderLayout } from "./layout.js";

export function renderImpressumPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Impressum & Legal Notice | One Wish Willow",
    "description": "Legal disclosure and contact information for One Wish Willow.",
    "url": "https://onewishwillow.com/impressum"
  };

  const body = `
    <main class="article-page" id="top">
      <article class="article-container">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="/">Home</a> <span>/</span>
          <span aria-current="page">Impressum / Legal Notice</span>
        </nav>

        <header class="article-header reveal">
          <p class="eyebrow">Legal Information · Rechtliche Hinweise</p>
          <h1>Impressum</h1>
          <div class="article-byline">
            <span>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</span>
          </div>
        </header>

        <div class="article-prose reveal">
          <h2>Angaben zum Diensteanbieter / Website Operator</h2>
          <p>
            <strong>One Wish Willow Shop</strong><br>
            c/o Prop &amp; Cinema Collectibles<br>
            E-Mail: <a href="mailto:support@onewishwillow.com">support@onewishwillow.com</a><br>
            Website: <a href="https://onewishwillow.com">https://onewishwillow.com</a>
          </p>

          <h2>Vertretungsberechtigt &amp; Verantwortlich für den Inhalt</h2>
          <p>
            Verantwortlich für redaktionelle Inhalte gemäß § 18 Abs. 2 MStV:<br>
            One Wish Willow Redaktion &amp; Collectibles Team<br>
            E-Mail: <a href="mailto:support@onewishwillow.com">support@onewishwillow.com</a>
          </p>

          <h2>Hinweis zu Requisiten &amp; Filmbezug / Disclaimer</h2>
          <p>
            Bei dem angebotenen Artikel handelt es sich um eine detailgetreue Nachbildung (Replica Prop) des im Film <em>„Obsession“</em> (Regie: Curry Barker) gezeigten Objekts („One Wish Willow / A sweet treat for your wish“). Es handelt sich um ein Sammler- und Deko-Objekt für Filmbegeisterte. Alle Markenzeichen, Filmnamen und Zitate dienen ausschließlich der beschreibenden Zuordnung und Kontextualisierung im Rahmen der Sammler-Community.
          </p>

          <h2>Online-Streitbeilegung (EU Dispute Resolution)</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a> finden. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte &amp; Links</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Für externe Links zu Webseiten Dritter können wir keine Gewähr übernehmen, da auf deren Inhalte kein Einfluss besteht.
          </p>

          <h2>Urheberrecht (Copyright)</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Erstellers.
          </p>
        </div>

        <div class="article-footer-cta reveal">
          <div class="article-cta-panel">
            <h3>Zurück zum Shop</h3>
            <p>Entdecke die legendäre One Wish Willow Requisite aus dem Film Obsession.</p>
            <div class="cta-actions">
              <a class="button primary" href="/product">Zum Produkt ($26)</a>
              <a class="button secondary" href="/">Zur Startseite</a>
            </div>
          </div>
        </div>
      </article>
    </main>
  `;

  return renderLayout({
    title: "Impressum / Legal Notice | One Wish Willow",
    description: "Impressum und rechtliche Anbieterkennzeichnung für One Wish Willow gemäß § 5 DDG.",
    canonical: "https://onewishwillow.com/impressum",
    noIndex: false,
    structuredData,
    body
  });
}
