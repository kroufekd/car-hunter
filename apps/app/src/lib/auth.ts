// Hranice autentizace. Zatím jen tvar — žádný poskytovatel není zapojený.
//
// Až se bude vybírat řešení (Auth.js, Clerk, Supabase Auth, vlastní),
// změní se jen tenhle soubor; zbytek aplikace sahá výhradně sem.

export interface SessionUser {
  id: string;
  email: string;
  name: string | null;
}

export interface Session {
  user: SessionUser;
  expiresAt: Date;
}

/**
 * Vrátí přihlášeného uživatele, nebo `null`. Serverová funkce —
 * volá se ze serverových komponent a route handlerů.
 */
export async function getSession(): Promise<Session | null> {
  // TODO: napojit na zvoleného poskytovatele autentizace.
  return null;
}

/**
 * Vyžádá si přihlášeného uživatele. Volající se má postarat o přesměrování,
 * když session chybí — proto vrací `null` místo házení výjimky.
 */
export async function requireSession(): Promise<Session | null> {
  return getSession();
}
