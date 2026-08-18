import type { ReactNode } from "react";

/** Společný obal pro tenké linkové ikony 24×24. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const SearchIcon = () => (
  <Icon>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 5 5" />
  </Icon>
);

export const ChatIcon = () => (
  <Icon>
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-4.2 3.4a.5.5 0 0 1-.8-.4V6.5Z" />
    <path d="M8 8.8h8M8 12h5" />
  </Icon>
);

export const PhotoIcon = () => (
  <Icon>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <circle cx="8.8" cy="10.2" r="1.5" />
    <path d="m4.5 16.5 4-3.5 3.5 3 3.6-4 4 4.5" />
  </Icon>
);

export const DocumentIcon = () => (
  <Icon>
    <path d="M6.5 3.5H14l4.5 4.5V18a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 18V6a2.5 2.5 0 0 1 2.5-2.5Z" />
    <path d="M14 3.5V8.5h4.5" />
    <path d="M8 13h8M8 16.5h5.5" />
  </Icon>
);

export const TagIcon = () => (
  <Icon>
    <path d="M3.5 11.2V5.5a2 2 0 0 1 2-2h5.7a2 2 0 0 1 1.4.6l7.4 7.4a2 2 0 0 1 0 2.8l-5.7 5.7a2 2 0 0 1-2.8 0l-7.4-7.4a2 2 0 0 1-.6-1.4Z" />
    <circle cx="8.2" cy="8.2" r="1.4" />
  </Icon>
);

export const RouteIcon = () => (
  <Icon>
    <circle cx="6" cy="18" r="2.2" />
    <circle cx="18" cy="6" r="2.2" />
    <path d="M7.6 16.4C13 13 11 9.5 16.4 7.6" strokeDasharray="2.5 3" />
  </Icon>
);

export const PhoneIcon = () => (
  <Icon>
    <path d="M7.8 3.5c.6 0 1.1.4 1.3 1l.9 2.6c.2.6 0 1.2-.5 1.6l-1.3 1a12.5 12.5 0 0 0 6.1 6.1l1-1.3c.4-.5 1-.7 1.6-.5l2.6.9c.6.2 1 .7 1 1.3v2.3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2h2.3Z" />
  </Icon>
);

export const StampIcon = () => (
  <Icon>
    <rect x="4.5" y="3.5" width="12" height="15" rx="2" />
    <path d="M8 8h5M8 11.5h5" />
    <circle cx="16.5" cy="16.5" r="4" />
    <path d="m14.9 16.6 1.2 1.2 2-2.3" />
  </Icon>
);

export const ExternalLinkIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 10 10 2M4 2h6v6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
