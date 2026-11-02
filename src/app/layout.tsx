import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://gustavosergio.github.io"),
  title: "Gustavo Sérgio — Desenvolvedor Full Stack",
  description:
    "Portfólio de Gustavo Sérgio. Projetos Full Stack, desenvolvimento web e Ciência da Computação na UNICAP.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gustavo Sérgio — Full Stack Developer",
    description:
      "Ideias que se transformam em experiências digitais. Conheça meus projetos.",
    url: "/",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark';document.documentElement.lang=localStorage.getItem('language')==='en'?'en':'pt-BR'}catch{}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
