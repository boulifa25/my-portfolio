import type { Metadata } from "next";
import { profile } from "@/data/content";
import "./globals.css";

const title = `${profile.firstName} ${profile.lastName} — ${profile.role}`;
const description = profile.tagline;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
