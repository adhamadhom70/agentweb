import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  siteName?: string;
}

const SEO = ({
  title = "Luxury Hospitality Concierge - Excellence in VIP Service Since 2010",
  description = "Premium luxury concierge services offering 24/7 personalized assistance for exclusive experiences, VIP travel planning, event management, and lifestyle solutions for discerning clients worldwide.",
  keywords = "luxury concierge services, VIP concierge, hospitality services, personal assistant, travel concierge, event planning, lifestyle management, corporate concierge, private concierge, elite services",
  image = "https://yourdomain.com/og-image.jpg",
  url = "https://yourdomain.com",
  type = "website",
  author = "Luxury Hospitality Concierge",
  siteName = "Luxury Hospitality Concierge"
}: SEOProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph Meta Tags (Facebook, LinkedIn)
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:creator', '@yourtwitterhandle');
    updateMetaTag('twitter:site', '@yourtwitterhandle');

    // Additional SEO Meta Tags
    updateMetaTag('theme-color', '#D4AF37'); // Gold color matching your brand
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('format-detection', 'telephone=no');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

  }, [title, description, keywords, image, url, type, author, siteName]);

  return null; // This component doesn't render anything
};

export default SEO;

// ============================================
// USAGE EXAMPLES FOR DIFFERENT PAGES
// ============================================

// For Home Page (use in App.tsx):
/*
import SEO from './components/SEO';

function App() {
  return (
    <>
      <SEO />
      {/* rest of your app *//*}
    </>
  );
}
*/

// For About Page:
/*
<SEO
  title="About Us - Luxury Hospitality Concierge"
  description="Learn about our team of dedicated professionals providing world-class concierge services since 2010. Excellence, discretion, and personalized service."
  keywords="about luxury concierge, concierge team, hospitality experts, VIP service providers"
/>
*/

// For Services Page:
/*
<SEO
  title="Premium Concierge Services - VIP Travel, Events & Lifestyle Management"
  description="Exclusive concierge services including VIP travel planning, luxury event management, personal shopping, restaurant reservations, and 24/7 lifestyle assistance."
  keywords="concierge services, VIP travel, event planning, lifestyle management, personal assistant services"
/>
*/

// For Contact Page:
/*
<SEO
  title="Contact Us - Luxury Concierge Services"
  description="Get in touch with our concierge team for personalized VIP services. Available 24/7 to assist with all your luxury lifestyle needs."
  keywords="contact concierge, VIP service contact, luxury assistance"
/>
*/

// For Blog Post:
/*
<SEO
  title="Top 10 Luxury Experiences in Dubai - Concierge Guide"
  description="Discover the most exclusive luxury experiences in Dubai, curated by our expert concierge team. From private yacht charters to Michelin-star dining."
  keywords="luxury Dubai, VIP experiences Dubai, Dubai travel guide"
  type="article"
  image="https://yourdomain.com/blog/dubai-luxury.jpg"
  url="https://yourdomain.com/blog/top-luxury-experiences-dubai"
/>
*/