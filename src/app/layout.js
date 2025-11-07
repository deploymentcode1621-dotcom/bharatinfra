import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export const metadata = {
  title: "Bharat Infrastructure | Solar EPC, O&M & Civil Construction in Latur",
  description:
    "Bharat Infrastructure provides solar EPC projects, O&M services, transmission line work, civil construction, fencing, and telecom infrastructure across India.",
  keywords: [
    "solar EPC Latur",
    "civil construction Maharashtra",
    "transmission line contractor",
    "solar O&M services",
    "Bharat Infrastructure"
  ],
  openGraph: {
    title: "Bharat Infrastructure | Solar EPC & Civil Construction",
    description:
      "Trusted EPC company in Latur offering solar projects, O&M, electrical transmission, fencing, telecom and civil infrastructure solutions.",
    url: "https://www.bharatinfrastructure.com",
    siteName: "Bharat Infrastructure",
    images: ["/images/LOGO3.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Infrastructure | Solar EPC & Civil Construction",
    description:
      "Trusted EPC partner for solar, O&M, civil and electrical projects in Maharashtra and India.",
    images: ["/images/LOGO3.png"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
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

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bharat Infrastructure",
              url: "https://www.bharatinfrastructure.com",
              logo: "https://www.bharatinfrastructure.com/images/LOGO3.png",
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

      <body className="font-sans text-gray-900 bg-white" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
