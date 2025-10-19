    // app/layout.js

    import "./globals.css";
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import FloatingContact from "./components/FloatingContact";

    export const metadata = {
      title: "Bharat Infrastructure | Solar EPC, O&M & Civil Construction in Latur, India",
      description:
        "Leading Solar EPC, O&M and civil infrastructure company in Latur, Maharashtra. We provide solar installation, transmission line work, Krushi pump systems, fencing, and telecom services across India.",
      keywords: [
        // 🌞 Solar Energy & EPC
        "solar EPC company Latur",
        "solar EPC contractor Maharashtra",
        "solar EPC India",
        "solar energy company in Latur",
        "solar installation services Latur",
        "solar system installer Maharashtra",
        "solar plant EPC contractor India",
        "solar power company Latur",
        "solar energy EPC Maharashtra",
        "solar project developer Latur",
        "solar operation and maintenance Latur",
        "solar O&M services Maharashtra",
        "solar maintenance company Latur",
        "solar rooftop installer Maharashtra",
        "industrial solar EPC Latur",
        "commercial solar EPC Maharashtra",
        "residential solar EPC company India",
        "solar design and installation Latur",
        "best solar company in Latur",
        "top solar EPC in Maharashtra",
        "renewable energy company Latur",
        "solar power solutions India",
        "solar infrastructure contractor Maharashtra",
        "solar panel supplier Latur",
        "solar system maintenance Latur",
        "EPC solar projects Maharashtra",
        "solar engineering contractor Latur",
        "solar installation expert Maharashtra",
        "solar turnkey contractor Latur",
        "solar power plant installer Maharashtra",

        // ⚡ Transmission Line & Electrical
        "33kV bay work contractor Latur",
        "11kV transmission line work Maharashtra",
        "electrical substation contractor Latur",
        "power transmission contractor Maharashtra",
        "electrical infrastructure company Latur",
        "power line installation contractor India",
        "electrical project EPC Maharashtra",
        "HT line contractor Latur",
        "LT line contractor Maharashtra",
        "electrical maintenance services Latur",
        "transformer installation Latur",
        "transmission bay work contractor Maharashtra",
        "electrical erection contractor India",
        "power system contractor Latur",
        "substation work EPC Maharashtra",
        "electric utility contractor Latur",
        "power transmission EPC Maharashtra",
        "industrial electrical contractor Latur",
        "power grid installation Maharashtra",
        "energy distribution contractor India",

        // 🏗️ Civil Construction & Interior
        "civil construction company Latur",
        "civil contractor Maharashtra",
        "building construction company Latur",
        "industrial civil contractor Maharashtra",
        "residential construction Latur",
        "commercial construction Maharashtra",
        "infrastructure development Latur",
        "road construction company Maharashtra",
        "precast boundary wall Latur",
        "precast compound wall Maharashtra",
        "chainlink fencing Latur",
        "fencing contractor Maharashtra",
        "civil works contractor Latur",
        "interior design services Latur",
        "civil engineering contractor Maharashtra",
        "foundation construction Latur",
        "building renovation Maharashtra",
        "industrial shed construction Latur",
        "factory construction Maharashtra",
        "turnkey civil project contractor India",
        "infrastructure company Latur",
        "construction services Maharashtra",
        "civil contractor near me Latur",
        "civil and interior design Latur",
        "precast wall manufacturer Latur",
        "industrial boundary wall Maharashtra",
        "chainlink fencing installation Latur",
        "boundary wall contractor Maharashtra",
        "industrial fencing company Latur",
        "civil structure development Maharashtra",

        // 📡 Telecommunication & Smart Meter
        "telecommunication contractor Latur",
        "telecom infrastructure company Maharashtra",
        "mobile tower installation Latur",
        "fiber optic installation Maharashtra",
        "telecom EPC contractor India",
        "smart meter installation Maharashtra",
        "IoT meter installation Latur",
        "telecom tower maintenance Maharashtra",
        "fiber network installation Latur",
        "broadband infrastructure company Maharashtra",
        "telecommunication solutions Latur",
        "telecom project contractor India",
        "network infrastructure company Latur",
        "smart energy solutions Maharashtra",
        "data tower contractor Latur",
        "telecom maintenance services Maharashtra",
        "optical fiber contractor Latur",
        "mobile infrastructure EPC Maharashtra",
        "communication tower company Latur",
        "telecom network installer Maharashtra",

        // 🚜 Solar Krushi Pump & Agriculture
        "solar krushi pump Latur",
        "solar agriculture pump Maharashtra",
        "solar irrigation system Latur",
        "solar water pump supplier Maharashtra",
        "agriculture solar EPC contractor Latur",
        "solar pump installation Maharashtra",
        "solar powered irrigation system Latur",
        "solar borewell pump Maharashtra",
        "solar water system installer Latur",
        "agriculture solar project Maharashtra",
        "solar pump manufacturer India",
        "off-grid solar system Latur",
        "farm solar system Maharashtra",
        "solar irrigation contractor Latur",
        "agriculture solar company Maharashtra",
        "krushi solar EPC contractor Latur",
        "solar water management Maharashtra",
        "solar system for agriculture India",
        "solar irrigation solution Latur",
        "renewable farming solutions Maharashtra",

        // ⚙️ Operation & Maintenance (O&M)
        "O&M services for solar Latur",
        "solar O&M company Maharashtra",
        "solar maintenance contractor India",
        "operation and maintenance of solar Latur",
        "EPC O&M service Maharashtra",
        "solar project maintenance Latur",
        "solar cleaning and inspection Maharashtra",
        "solar asset management Latur",
        "PV plant maintenance Maharashtra",
        "renewable project O&M India",
        "solar field monitoring Latur",
        "solar AMC services Maharashtra",
        "performance testing of solar plants India",
        "solar repair and service Latur",
        "long-term O&M contractor Maharashtra",

        // 🌍 General Infrastructure & Branding
        "Bharat Infrastructure Latur",
        "Bharat Infrastructure Maharashtra",
        "top EPC contractor India",
        "infrastructure development company Maharashtra",
        "energy contractor Latur",
        "engineering procurement construction India",
        "renewable energy contractor Latur",
        "EPC services Maharashtra",
        "project management EPC Latur",
        "solar and civil EPC company India",
        "industrial project contractor Latur",
        "infrastructure contractor Maharashtra",
        "power and energy solutions India",
        "construction and engineering Latur",
        "EPC turnkey contractor Maharashtra",
        "infra solutions Latur",
        "infrastructure development India",
        "construction engineering company Latur",
        "trusted EPC contractor Maharashtra",
        "renewable infrastructure developer Latur",
      ],
    };

    export default function RootLayout({ children }) {
      return (
        <html lang="en" dir="ltr">
          <head>
            {/* ✅ Google Analytics (Live ID) */}
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

            {/* ✅ JSON-LD for SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Bharat Infrastructure",
                  url: "https://www.bharatinfrastructure.com",
                  logo: "https://www.bharatinfrastructure.com/logo.png",
                  description:
                    "Bharat Infrastructure is a solar EPC and infrastructure company in Latur, Maharashtra, offering solar installation, O&M, transmission line, civil construction, and telecom services.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Latur, Maharashtra",
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
                  sameAs: [
                    "https://www.facebook.com/bharatinfrastructure",
                    "https://www.linkedin.com/company/bharatinfrastructure",
                  ],
                }),
              }}
            />
            {/* ✅ Open Graph (Facebook, LinkedIn, WhatsApp) */}
<meta property="og:title" content="Bharat Infrastructure | Solar EPC, O&M & Civil Construction in Latur, India" />
<meta property="og:description" content="Leading Solar EPC, O&M and civil infrastructure company in Latur, Maharashtra. We provide solar installation, transmission line work, Krushi pump systems, fencing, and telecom services across India." />
<meta property="og:image" content="/images/LOGO3.png" />
<meta property="og:url" content="https://www.bharatinfrastructure.com" />
<meta property="og:type" content="website" />

{/* ✅ Twitter Card */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Bharat Infrastructure | Solar EPC, O&M & Civil Construction in Latur, India" />
<meta name="twitter:description" content="Solar EPC, Transmission, and Civil Projects across India — Trusted EPC Partner in Latur, Maharashtra." />
<meta name="twitter:image" content="/images/LOGO3.png" />
<meta name="google-site-verification" content="NH3vhUYx-AOR3iAdEbFn-pDkUizBvvKo183LyL_nfmw" />

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
