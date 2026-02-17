import { Zap, Shield, Smile, Cloud, Smartphone, Users } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "CandaceAI",
      description: "Our proprietary AI assistant for real-time emotional support and mood tracking.",
      icon: <Zap color="#e91e63" />,
      tag: "Flagship"
    },
    {
      title: "Harmony Enterprise",
      description: "Comprehensive mental wellness solutions for teams and corporations.",
      icon: <Users color="#2c3e50" />,
      tag: "B2B"
    },
    {
      title: "Guardian App",
      description: "Mobile-first platform for secure therapy sessions and mindfulness exercises.",
      icon: <Smartphone color="#e91e63" />,
      tag: "Consumer"
    },
    {
      title: "SafeCloud",
      description: "HIPAA-compliant data storage and analytics for mental health professionals.",
      icon: <Cloud color="#2c3e50" />,
      tag: "Infrastructure"
    }
  ];

  return (
    <div className="page-products">
      <section className="product-hero">
        <h1 className="section-title">Revolutionizing Mental Health Through Technology</h1>
        <p className="section-subtitle">Discover our suite of products designed to make wellness accessible, efficient, and deeply personal.</p>
      </section>

      <section className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-icon">{product.icon}</div>
            <span className="product-tag">{product.tag}</span>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <button className="secondary-button" onClick={() => window.location.href = 'https://custral.com'}>Learn More</button>
          </div>
        ))}
      </section>

      <section className="product-cta">
        <div className="cta-box">
          <h2>Ready to transform your workplace?</h2>
          <p>Get in touch with our enterprise team for a custom demo of Harmony.</p>
          <button className="cta-button" onClick={() => window.location.href = 'https://custral.com'}>Request a Demo</button>
        </div>
      </section>
    </div>
  );
};

export default Products;
