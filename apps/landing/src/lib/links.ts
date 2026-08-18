// Externí odkazy na jednom místě, ať se nemusí hledat po komponentách.

export const REPO_URL = "https://github.com/kroufekd/car-hunter";
export const NEW_ISSUE_URL = `${REPO_URL}/issues/new`;
export const CONCEPT_URL = `${REPO_URL}/tree/master/concept`;

/** Veřejná adresa landing page — používá se v OG metadatech. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://car-hunter.vercel.app";
