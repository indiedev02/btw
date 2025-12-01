"use client";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? "" : section);
  };

  const servicesData = {
    "Blackspektro for": [
      { name: "Industrial Companies", hasArrow: true, href: "/industries" },
      { name: "Startups & Enterprises", hasArrow: true, href: "/startups" },
      {
        name: "Government & Public Sector Projects",
        hasArrow: true,
        href: "/government",
      },
    ],
    Services: [
      { name: "Digital Transformation" },
      { name: "Industrial IoT Solutions" },
      { name: "Digital Twins" },
      { name: "Industry 4.0" },
      { name: "IT/OT Integration" },
      { name: "Artificial Intelligence" },
      { name: "Product Development" },
      { name: "Salesforce Integration" },
    ],
    "Our Product": {
      hasImage: true,
      link: "Explore Kernopy",
      href: "/#products",
    },
  };

  const resourcesData = {
    Resources: [
      { name: "Blogs", hasArrow: true },
      { name: "Casestudies", hasArrow: true },
      { name: "Ebooks", hasArrow: true },
      { name: "Whitepapers", hasArrow: true },
    ],
    "Featured Blogs": {
      hasBlogs: true,
    },
  };

  return (
    <nav className="relative z-50 top-10">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex text-white top-10 gap-10 w-fit mx-auto text-lg">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <div className="relative group">
          <button className="flex gap-1 items-center hover:text-gray-300 transition-colors">
            Services <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="bg-white text-black rounded-lg shadow-2xl p-8 w-[90vw] max-w-[900px] grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Blackspektro for</h3>
                <ul className="space-y-3">
                  {servicesData["Blackspektro for"].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href ?? "/"}
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                        {item.hasArrow && <ArrowUpRight className="w-4 h-4" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Services</h3>
                <ul className="space-y-3">
                  {servicesData.Services.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Our Product</h3>
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg h-40 mb-3"></div>
                <Link
                  href="/#products"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Explore Kernopy <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link
            href={"/#products"}
            className="flex gap-1 items-center hover:text-gray-300 transition-colors"
          >
            Our Products
          </Link>
        </div>
        <div className="relative group">
          <button className="flex gap-1 items-center hover:text-gray-300 transition-colors">
            Resources <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="bg-white text-black rounded-lg shadow-2xl p-8 w-[90vw] max-w-[800px] grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-3">
                  {resourcesData.Resources.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                        {item.hasArrow && <ArrowUpRight className="w-4 h-4" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2">
                <h3 className="font-bold text-lg mb-4">Featured Blogs</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((blog) => (
                    <div
                      key={blog}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="bg-gradient-to-br from-blue-900 to-blue-700 h-32"></div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-2">
                          Blog heading cnksndckac ckankcna dbcksncknancnc
                        </p>
                        <a
                          href="#"
                          className="text-blue-600 text-sm font-medium"
                        >
                          View more
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Careers
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 bg-gray-800 rounded-lg"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 text-white z-40 overflow-y-auto">
          <div className="p-6 pt-20">
            <Link
              href="/"
              className="block py-3 text-lg border-b border-gray-700"
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => toggleAccordion("services")}
                className="w-full flex justify-between items-center py-3 text-lg"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openAccordion === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "services" && (
                <div className="pb-4 pl-4 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-400">
                      Blackspektro for
                    </h4>
                    <ul className="space-y-2">
                      {servicesData["Blackspektro for"].map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href ?? "/"}
                            className="text-sm flex items-center gap-2"
                          >
                            {item.name}
                            {item.hasArrow && (
                              <ArrowUpRight className="w-3 h-3" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-400">
                      Services
                    </h4>
                    <ul className="space-y-2">
                      {servicesData.Services.map((item, idx) => (
                        <li key={idx}>
                          <Link href="#" className="text-sm">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-400">
                      Our Product
                    </h4>
                    <Link
                      href="www.kernopy.com"
                      className="text-sm flex items-center gap-2 text-blue-400"
                    >
                      Explore Kernopy <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#products"
              className="block py-3 text-lg border-b border-gray-700"
            >
              Our Products
            </Link>

            {/* Resources Accordion */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => toggleAccordion("resources")}
                className="w-full flex justify-between items-center py-3 text-lg"
              >
                Resources
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openAccordion === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "resources" && (
                <div className="pb-4 pl-4 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-400">
                      Resources
                    </h4>
                    <ul className="space-y-2">
                      {resourcesData.Resources.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="text-sm flex items-center gap-2"
                          >
                            {item.name}
                            {item.hasArrow && (
                              <ArrowUpRight className="w-3 h-3" />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-400">
                      Featured Blogs
                    </h4>
                    <p className="text-sm text-gray-400">
                      View latest blog posts
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Link href="/" className="block py-3 text-lg">
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
