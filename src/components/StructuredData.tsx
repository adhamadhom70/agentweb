import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'organization' | 'service' | 'localBusiness';
}

const StructuredData = ({ type = 'organization' }: StructuredDataProps) => {
  useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Luxury Hospitality Concierge",
      "alternateName": "LHC Services",
      "url": "https://yourdomain.com",
      "logo": "https://yourdomain.com/logo.png",
      "image": "https://yourdomain.com/og-image.jpg",
      "description": "Premium luxury concierge services offering 24/7 personalized assistance for exclusive experiences, VIP travel planning, and lifestyle management.",
      "email": "contact@yourdomain.com",
      "telephone": "+1-234-567-8900",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Luxury Lane",
        "addressLocality": "Your City",
        "addressRegion": "State",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "sameAs": [
        "https://www.facebook.com/yourbusiness",
        "https://www.instagram.com/yourbusiness",
        "https://www.linkedin.com/company/yourbusiness",
        "https://twitter.com/yourbusiness"
      ],
      "foundingDate": "2010",
      "founders": [
        {
          "@type": "Person",
          "name": "Founder Name"
        }
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Luxury Concierge Service",
      "provider": {
        "@type": "Organization",
        "name": "Luxury Hospitality Concierge"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Concierge Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIP Travel Planning",
              "description": "Exclusive travel arrangements and luxury accommodations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Event Management",
              "description": "Corporate and private event planning and execution"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lifestyle Management",
              "description": "24/7 personal assistance and lifestyle coordination"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dining Reservations",
              "description": "Access to exclusive restaurants and private dining experiences"
            }
          }
        ]
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://yourdomain.com",
        "servicePhone": "+1-234-567-8900",
        "availableLanguage": ["English", "Arabic", "French"]
      }
    };

    // Local Business Schema (if you have a physical office)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Luxury Hospitality Concierge",
      "image": "https://yourdomain.com/office.jpg",
      "priceRange": "$$$",
      "telephone": "+1-234-567-8900",
      "email": "contact@yourdomain.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Luxury Lane",
        "addressLocality": "Your City",
        "addressRegion": "State",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Luxury Hospitality Concierge",
      "url": "https://yourdomain.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://yourdomain.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Breadcrumb Schema (for navigation)
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yourdomain.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://yourdomain.com#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": "https://yourdomain.com#contact"
        }
      ]
    };

    // Insert all schemas
    const schemas: Array<Record<string, unknown>> = [
      organizationSchema,
      serviceSchema,
      websiteSchema,
      breadcrumbSchema
    ];

    if (type === 'localBusiness') {
      schemas.push(localBusinessSchema);
    }

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [type]);

  return null;
};

export default StructuredData;