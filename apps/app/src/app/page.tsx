import { getSession } from "@/lib/auth";

export default async function HomePage() {
  const session = await getSession();

  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: "42rem", margin: "0 auto" }}>
      <h1>CarHunter</h1>
      <p>
        Kostra produktové aplikace. Zatím tu není nic než hranice autentizace a routovací
        struktura — obsah přijde, až bude jasné, co má první verze umět.
      </p>
      <p>
        Stav přihlášení: <strong>{session ? session.user.email : "nepřihlášen"}</strong>
      </p>
    </main>
  );
}
