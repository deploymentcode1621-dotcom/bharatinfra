"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sun,
  Zap,
  Droplet,
  Gauge,
  Building2,
  Radio,
  Waves,
  Shield,
} from "lucide-react";

const slugify = (text) =>
  text
    ?.toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("services");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

 const services = [
  {
    icon: Sun,
    title: "Solar MW Projects",
    slug: "solar-mw-projects",
    description:
      "Large-scale solar power plant development with engineering, installation and commissioning for industrial and commercial projects.",
    details: {
      longDescription:
        "We design and build solar MW-scale projects with a full EPC approach. Our team handles engineering, procurement, installation and commissioning using high-efficiency modules and reliable inverters. These projects are built for industries, institutions and commercial clients who need long-term energy savings and stable performance.",
      highlights: [
        "End-to-end project execution",
        "High-efficiency solar panels",
        "Industrial and commercial expertise",
        "Fast installation with strict quality checks"
      ]
    },
    image: "...",
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: Droplet,
    title: "Solar Krushi Pump",
    slug: "solar-krushi-pump",
    description:
      "Solar-powered agricultural pumps for irrigation, helping farmers reduce electricity costs and increase efficiency.",
    details: {
      longDescription:
        "We install solar water pumps for irrigation, borewells and farms. These systems work without electricity or diesel, making them a reliable and long-term solution for rural and agricultural needs.",
      highlights: [
        "Zero electricity cost",
        "Works in rural areas",
        "Ideal for farms and irrigation",
        "Low maintenance"
      ]
    },
    image: "...",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Sun,
    title: "O&M Services of Solar",
    slug: "solar-om-services",
    description:
      "Professional solar Operation & Maintenance services to ensure plant safety, reliability and maximum generation.",
    details: {
      longDescription:
        "Our solar O&M team handles cleaning, inspection, testing, inverter monitoring and performance improvement. We detect issues early and ensure your plant runs at top efficiency throughout the year.",
      highlights: [
        "Cleaning and maintenance",
        "Inverter testing and monitoring",
        "Fault detection and repair",
        "Performance optimization"
      ]
    },
    image: "...",
    color: "from-amber-400 to-yellow-600"
  },
  {
    icon: Zap,
    title: "Transmission Line & Bay Work",
    slug: "transmission-line-bay-work",
    description:
      "Electrical transmission installation including 11kV/33kV line work, bay construction and substation solutions.",
    details: {
      longDescription:
        "We execute HT/LT line erection, substation work, bay construction, cable laying and transformer installation. Our electrical team follows strict safety standards for reliable and long-lasting results.",
      highlights: [
        "11kV and 33kV expertise",
        "Substation and bay work",
        "Transformer installation",
        "Electrical testing and commissioning"
      ]
    },
    image: "...",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Gauge,
    title: "Smart Meter Installation",
    slug: "smart-meter-installation",
    description:
      "Accurate and fast smart meter installation for electricity monitoring and billing automation.",
    details: {
      longDescription:
        "We install smart meters that provide accurate real-time energy data. This system reduces manual billing errors and helps consumers monitor usage easily.",
      highlights: [
        "Accurate digital metering",
        "Fast and clean installation",
        "Supports modern billing",
        "Long-term reliability"
      ]
    },
    image: "...",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Precast Boundary Wall & Chainlink Fencing",
    slug: "precast-boundary-wall-chainlink-fencing",
    description:
      "Durable precast walls and chainlink fencing for industrial, commercial and residential properties.",
    details: {
      longDescription:
        "We install strong precast boundary walls and chainlink fencing for factories, farms, plots, schools and housing projects. These solutions are long-lasting, quick to install and low maintenance.",
      highlights: [
        "Fast installation",
        "High-strength precast materials",
        "Secure fencing solutions",
        "Suitable for all property types"
      ]
    },
    image: "...",
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: Building2,
    title: "Civil Work & Interior",
    slug: "civil-work-interior",
    description:
      "Complete civil construction and interior design services for industrial, commercial and residential projects.",
    details: {
      longDescription:
        "We build industrial sheds, foundations, RCC structures, commercial spaces and residential projects. Our interior team also handles finishing, furnishings and modern design work.",
      highlights: [
        "Industrial and residential projects",
        "RCC and foundation work",
        "Interior design and finishing",
        "Renovation and repair"
      ]
    },
    image: "...",
    color: "from-indigo-500 to-blue-600"
  },
  {
    icon: Radio,
    title: "Telecommunication",
    slug: "telecommunication-services",
    description:
      "Telecom tower installation, fiber laying and maintenance services for network expansion.",
    details: {
      longDescription:
        "We work with telecom providers to install mobile towers, lay fiber optic cables, perform splicing and expand network coverage. Our team ensures safe and compliant execution.",
      highlights: [
        "Fiber laying and splicing",
        "Tower installation",
        "Telecom EPC services",
        "Maintenance and upgrades"
      ]
    },
    image: "...",
    color: "from-red-500 to-sky-600"
  }
];


  const handleClick = (slug) => {
    console.log("Navigating to:", `/services/${slug}`);
    router.push(`/services/${slug}`);
  };

  return (
    <section
      id="services"
      className="relative py-16 bg-gradient-to-br from-gray-50 to-sky-50/30 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full mb-4">
            <Zap className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-600">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Comprehensive Infrastructure Solutions
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            From solar energy to civil construction, we deliver end-to-end
            infrastructure services with excellence.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div
                  className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${service.color} rounded-xl shadow-lg`}
                >
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <button
                  onClick={() => handleClick(slugify(service.title))}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all"
                >
                  Learn More →
                </button>
              </div>

              <div
                className={`absolute inset-0 border-2 border-blue-500 rounded-2xl transition-opacity duration-300 ${
                  hoveredCard === idx ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}