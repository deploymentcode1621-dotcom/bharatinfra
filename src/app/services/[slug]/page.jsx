// ✅ Server Component (SEO Friendly)
export async function generateMetadata({ params }) {
  const name = params.slug.replace(/-/g, " ");

  return {
    title: `${name} | Bharat Infrastructure`,
    description: `Learn more about our ${name} service. Bharat Infrastructure provides trusted EPC, solar, O&M, civil and transmission services across India.`,
    openGraph: {
      title: `${name} | Bharat Infrastructure`,
      description: `Complete details about our ${name} services.`,
      images: ["/images/LOGO3.png"],
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const name = params.slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-white px-6 py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6 capitalize">
        {name}
      </h1>

      <p className="text-gray-700 text-lg max-w-2xl text-center">
        This page contains details about <strong>{name}</strong>.  
        Add descriptions, images or project examples for better SEO.
      </p>

      <BackButton />
    </div>
  );
}
