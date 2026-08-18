export default function SignInPage() {
  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: "26rem", margin: "0 auto" }}>
      <h1>Přihlášení</h1>
      <p>
        Poskytovatel autentizace zatím není zapojený. Až bude vybraný, napojí se přes
        <code> src/lib/auth.ts</code>.
      </p>
    </main>
  );
}
