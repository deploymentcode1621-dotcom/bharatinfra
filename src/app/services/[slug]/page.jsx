export async function generateMetadata({ params }) {
  const serviceName = params.slug.replace(/-/g, " ");

  return {
    title: `${serviceName} in Latur, Maharashtra | Bharat Infrastructure`,
    description: `Professional ${serviceName} services in Latur, Solapur, Osmanabad, Beed, Nanded, Nilanga, Omerga, and across Maharashtra. Trusted contractor since 2010.`,
    keywords: [
      `${serviceName} Latur`,
      `${serviceName} contractor Latur`,
      `${serviceName} services Maharashtra`,
      `${serviceName} near me`,
      `best ${serviceName} company Maharashtra`,
    ],
    alternates: {
      canonical: `https://www.bharatinfrastructure.com/services/${params.slug}`,
    },
    openGraph: {
      title: `${serviceName} in Maharashtra | Bharat Infrastructure`,
      description: `Expert ${serviceName} contractor serving Maharashtra.`,
      images: ["/images/LOGO3.png"],
      url: `https://www.bharatinfrastructure.com/services/${params.slug}`,
      type: "article",
    },
  };
}

export default function ServicePage({ params }) {
  const name = params.slug.replace(/-/g, " ");

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">{name}</h1>

      <p className="text-lg mb-6">
        Bharat Infrastructure provides professional {name} services across
        Maharashtra including Latur, Solapur, Dharashiv (Osmanabad), Beed,
        Nanded, Nilanga, Omerga and more.
      </p>
    </div>
  );
}
