import { cities } from "../citiesData";

export async function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return {
    title: `Solar EPC, O&M & Civil Construction in ${city} | Bharat Infrastructure`,
    description: `Solar EPC, O&M, fencing, transmission line work, telecom and civil construction services in ${city}, Maharashtra. Trusted infrastructure contractor since 2010.`,
    keywords: [
      `solar EPC ${city}`,
      `solar company in ${city}`,
      `civil construction in ${city}`,
      `solar O&M ${city}`,
      `transmission line contractor ${city}`,
      `fencing contractor ${city}`,
      `${city} solar installation`,
      `${city} infrastructure development`,
      `${city} renewable energy company`,
      `best solar company in ${city}`,
    ],
    alternates: {
      canonical: `https://www.bharatinfrastructure.com/cities/${params.city}`,
    },
    openGraph: {
      title: `Infrastructure & Solar EPC in ${city}`,
      description: `Bharat Infrastructure provides expert solar EPC, O&M, fencing, telecom and civil construction services in ${city}.`,
      url: `https://www.bharatinfrastructure.com/cities/${params.city}`,
      images: ["/images/LOGO3.png"],
      type: "website",
    },
  };
}

export default function CityPage({ params }) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return (
    <div className="py-20 px-6 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold text-orange-600 mb-6">
        Bharat Infrastructure in {city}
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        Bharat Infrastructure is a leading EPC and infrastructure service provider in {city}, Maharashtra. 
        We deliver solar EPC, O&M services, civil construction, fencing, telecom tower work and transmission  
        line solutions with high standards of safety and reliability.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services in {city}</h2>
      <ul className="list-disc ml-6 text-gray-700 text-lg space-y-2">
        <li>Solar EPC Projects</li>
        <li>Solar Operation & Maintenance (O&M)</li>
        <li>Civil Construction & Infrastructure</li>
        <li>Chainlink Fencing & Precast Wall Installation</li>
        <li>Telecommunication Tower Setup</li>
        <li>Transmission Line & Electrical Work</li>
      </ul>

      <p className="mt-8 text-gray-700 text-lg">
        Want to start a project in {city}?  
        Contact us: <strong>+91 8080529797</strong>
      </p>
    </div>
  );
}
