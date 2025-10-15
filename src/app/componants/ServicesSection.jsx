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
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad649?q=80&w=2070",
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