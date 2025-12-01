import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import CustomCookieBanner from "@/components/CustomCookieBanner";
import Footer from "@/section/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackspektro.com"),
  title: {
    default: "Blackspektro - Intelligence as a Service",
    template: "%s - Blackspektro",
  },
  description:
    "Transform your business with cutting-edge AI solutions. Blackspektro provides intelligent automation, data analytics, and AI-powered insights to drive innovation and growth.",
  keywords: [
    "kernopy",
    "IOT in India",
    "realtime iot data",
    "device monitering",
    "IOT",
    "artificial intelligence",
    "AI solutions",
    "machine learning",
    "data analytics",
    "intelligent automation",
    "AI consulting",
    "business intelligence",
    "AI transformation",
    "intelligent systems",
    "AI services",
  ].join(", "),
  openGraph: {
    title: "Blackspektro - Intelligence as a Service",
    description:
      "Transform your business with cutting-edge AI solutions. Blackspektro provides intelligent automation, data analytics, and AI-powered insights to drive innovation and growth.",
    url: "https://blackspektro.com",
    siteName: "Blackspektro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Blackspektro - Intelligence as a Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackspektro - Intelligence as a Service",
    description:
      "Transform your business with cutting-edge AI solutions. Blackspektro provides intelligent automation, data analytics, and AI-powered insights to drive innovation and growth.",
    images: ["/opengraph-image.png"],
  },
  authors: [{ name: "Blackspektro Team", url: "https://blackspektro.com" }],
  creator: "Blackspektro Team",
  publisher: "Blackspektro Inc.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Blackspektro | Intelligence as a Service",
              url: "https://blackspektro.com",
              datePublished: "2025-01-01T12:35:16Z",
              dateModified: new Date().toISOString(),
              description:
                "Transform your business with cutting-edge AI solutions. Blackspektro provides intelligent automation, data analytics, and AI-powered insights to drive innovation and growth.",
              image: "https://blackspektro.com/opengraph-image.png",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://blackspektro.com",
                  },
                ],
              },
              mainEntity: {
                "@type": "Organization",
                name: "Blackspektro",
                url: "https://blackspektro.com",
                description:
                  "Intelligence as a Service - AI solutions for business transformation",
                serviceType: "Artificial Intelligence Services",
                areaServed: "Worldwide",
                keywords: [
                  "artificial intelligence",
                  "AI solutions",
                  "machine learning",
                  "data analytics",
                  "intelligent automation",
                  "AI consulting",
                  "business intelligence",
                  "AI transformation",
                  "intelligent systems",
                  "AI services",
                  "predictive analytics",
                  "AI implementation",
                  "automation solutions",
                  "smart technology",
                  "AI strategy",
                ],
                offers: [
                  {
                    "@type": "Service",
                    name: "AI Consulting Services",
                    description:
                      "Strategic AI implementation and consulting for business transformation",
                    provider: {
                      "@type": "Organization",
                      name: "Blackspektro",
                    },
                  },
                  {
                    "@type": "Service",
                    name: "Intelligent Automation",
                    description:
                      "Automated business processes powered by artificial intelligence",
                    provider: {
                      "@type": "Organization",
                      name: "Blackspektro",
                    },
                  },
                  {
                    "@type": "Service",
                    name: "Data Analytics & Insights",
                    description:
                      "AI-powered data analysis and business intelligence solutions",
                    provider: {
                      "@type": "Organization",
                      name: "Blackspektro",
                    },
                  },
                ],
              },
              mainEntityOfPage: {
                "@type": "FAQPage",
                name: "Blackspektro | AI Solutions & Intelligence Services FAQs",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is Blackspektro and what services do you provide?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Blackspektro is an Intelligence as a Service provider that offers cutting-edge AI solutions including intelligent automation, data analytics, machine learning implementation, and AI consulting services to help businesses transform and innovate.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can AI solutions benefit my business?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "AI solutions can automate repetitive tasks, provide predictive insights from your data, improve decision-making processes, enhance customer experiences, reduce operational costs, and drive innovation across your organization.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What industries does Blackspektro serve?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Blackspektro serves businesses across various industries including healthcare, finance, retail, manufacturing, technology, and professional services, providing customized AI solutions tailored to specific industry needs and challenges.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you implement AI solutions for businesses?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our implementation process involves understanding your business needs, analyzing existing systems, designing custom AI solutions, seamless integration with your current infrastructure, comprehensive testing, and ongoing support to ensure optimal performance.",
                    },
                  },
                ],
              },
              potentialAction: [
                {
                  "@type": "ContactAction",
                  name: "Get AI Consultation",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://blackspektro.com#contact",
                    actionPlatform: [
                      "https://schema.org/DesktopWebPlatform",
                      "https://schema.org/MobileWebPlatform",
                    ],
                  },
                },
                {
                  "@type": "ViewAction",
                  name: "Learn About Our AI Services",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://blackspektro.com#services",
                    actionPlatform: [
                      "https://schema.org/DesktopWebPlatform",
                      "https://schema.org/MobileWebPlatform",
                    ],
                  },
                },
              ],
              publisher: {
                "@type": "Organization",
                name: "Blackspektro Inc.",
                url: "https://blackspektro.com",
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "info@blackspektro.com",
                  contactType: "Customer Support",
                  availableLanguage: "English",
                },
                areaServed: "Worldwide",
              },
            }),
          }}
        />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <div className="relative z-10">
          <Providers>
            {children}
            <Footer />{" "}
          </Providers>
          <CustomCookieBanner />
        </div>
      </body>
    </html>
  );
}

