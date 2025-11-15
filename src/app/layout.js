import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export const metadata = {
  metadataBase: new URL("https://www.bharatinfrastructure.com"),
  title: "Bharat Infrastructure | Solar EPC, O&M & Civil Construction in Latur, India",
  description:
    "Bharat Infrastructure is a leading Solar EPC, O&M, civil construction, fencing, telecom and infrastructure development company based in Latur, Maharashtra. Serving India since 2010.",
  keywords: [
    "solar EPC company India",
    "solar EPC Latur",
    "solar installation Maharashtra",
    "solar O&M contractor",
    "civil construction Latur",
    "fencing contractor Maharashtra",
    "telecom infrastructure company",
    "transmission line contractor Latur",
    "bharat infrastructure Latur",
    "renewable energy contractor Maharashtra",
    "solar panel installation Latur",
    "solar company near me",
    "solar EPC Maharashtra",
    "best solar company Maharashtra",
    "33kV bay work contractor",
    "chainlink fencing Latur",
    "precast boundary wall Latur",
  ],
  openGraph: {
    title: "Bharat Infrastructure | Solar EPC & Civil Construction in Latur",
    description:
      "Solar EPC, O&M, fencing, civil construction and telecom solutions across Maharashtra.",
    url: "https://www.bharatinfrastructure.com",
    siteName: "Bharat Infrastructure",
    images: ["/images/LOGO3.png"],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.bharatinfrastructure.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C6MKYWRGTL"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-C6MKYWRGTL');
              `,
          }}
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bharat Infrastructure",
              url: "https://www.bharatinfrastructure.com",
              logo:
                "https://www.bharatinfrastructure.com/images/LOGO3.png",
              description:
                "Solar EPC, O&M, Transmission line, Civil Construction and Telecom services in Latur, Maharashtra.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Latur",
                addressLocality: "Latur",
                addressRegion: "Maharashtra",
                postalCode: "413512",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8080529797",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>

      <body className="font-sans text-gray-900 bg-white">
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
