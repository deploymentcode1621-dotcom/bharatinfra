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
      description:
        "Large-scale solar power plant installations with high efficiency panels and maximum energy output.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Transmission Line & Bay Work",
      description:
        "Professional installation and maintenance of electrical transmission infrastructure and bay systems.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Droplet,
      title: "Solar Krushi Pump",
      description:
        "Solar-powered agricultural pumps for irrigation, helping farmers save costs and increase productivity.",
      image:
        "data:image/jpeg;base64,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",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Gauge,
      title: "Smart Meter Installation",
      description:
        "Advanced smart metering solutions for accurate energy monitoring and efficient billing systems.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Precast Boundary Wall & Chainlink Fencing",
      description:
        "Durable and secure boundary solutions including precast walls and professional chainlink fencing.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2231",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Building2,
      title: "Civil Work & Interior",
      description:
        "Complete civil construction and modern interior design services for residential and commercial spaces.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2231",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: Radio,
      title: "Telecommunication",
      description:
        "Installation and maintenance of telecommunication infrastructure including towers and network equipment.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
      color: "from-red-500 to-sky-600",
    },
    {
  icon: Sun, // you can use any suitable icon, e.g., from lucide-react
  title: "O&M Services of Solar",
  description:
    "Comprehensive Operation & Maintenance services ensuring maximum performance, reliability, and efficiency of solar power plants.",
  image:
    "https://images.unsplash.com/photo-1509390559807-3144e7d29097?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1780",
  color: "from-amber-400 to-yellow-600",
},

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