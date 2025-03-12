import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu", // You can choose any CSS variable name you prefer
  weight: ["400", "500", "700"], // Adjust to the weights you need
});

export const metadata = {
  metadataBase: new URL("https://partners.divinosolutions.com"),
  title: "HR & Business Solutions | Divino Business Solutions Partner Portal",
  description:
    "Manage hiring, payroll, HR documentation, and compliance with Divino Business Solutions. Your all-in-one platform for workforce management in Canada.",
  keywords:
    "HR solutions, hiring, payroll services, recruitment, staffing, employer portal, workforce management, HR documentation, compliance, business solutions, Canada",
  authors: [
    {
      name: "Divino Business Solutions Inc.",
      url: "https://divinosolutions.com",
    },
  ],
  generator: "Next.js",
  applicationName: "Divino Business Solutions - Partner Portal",
  openGraph: {
    title: "HR & Business Solutions | Divino Business Solutions Partner Portal",
    description:
      "Simplify hiring, payroll, HR documentation, and compliance with Divino Business Solutions' employer portal. All-in-one workforce management for businesses.",
    url: "https://partners.divinosolutions.com",
    siteName: "Divino Business Solutions - Partner Portal",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 500,
        height: 129,
        alt: "Divino Business Solutions Partner Portal",
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR & Business Solutions | Divino Business Solutions Partner Portal",
    description:
      "Streamline hiring, payroll, HR documentation, and compliance with Divino Business Solutions' employer portal.",
    site: "@divinobusiness",
    creator: "@divinobusiness",
    images: ["/assets/images/logo.png"],
  },
  icons: {
    icon: "/assets/images/favicon.ico",
    shortcut: "/assets/images/favicon.ico",
    apple: "/assets/images/favicon.ico",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://partners.divinosolutions.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}
