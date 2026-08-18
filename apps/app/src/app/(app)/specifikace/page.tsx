import { requireSession } from "@/lib/auth";

export default async function SpecificationsPage() {
  const session = await requireSession();

  if (!session) {
    return (
      <main style={{ padding: "3rem 1.5rem", maxWidth: "42rem", margin: "0 auto" }}>
        <h1>Specifikace</h1>
        <p>
          Tahle část bude jen pro přihlášené. Zatím sem vede jen prázdná cesta —
          přesměrování doplníme spolu s autentizací.
        </p>
      </main>
    );
  }

  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: "42rem", margin: "0 auto" }}>
      <h1>Specifikace</h1>
      <p>Seznam uložených specifikací uživatele {session.user.email}.</p>
    </main>
  );
}
