import { Star, ArrowRight, Shield, Zap, Smile } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">New: CandaceAI is now in Beta</span>
          <h1>Modern Mental Health <span className="text-gradient">For the Next Generation.</span></h1>
          <p className="hero-subtitle">Scale your emotional well-being with Candace Health. We're building the infrastructure for a happier, more resilient world.</p>
          <div className="hero-actions">
            <button className="cta-button" onClick={() => window.location.href = 'https://custral.com'}>Get Started <ArrowRight size={18} /></button>
            <button className="secondary-button" onClick={() => window.location.href = 'https://custral.com'}>View Products</button>
          </div>
          <div className="hero-social-proof">
            <div className="stars">
              <Star size={16} fill="#ffc107" stroke="#ffc107" />
              <Star size={16} fill="#ffc107" stroke="#ffc107" />
              <Star size={16} fill="#ffc107" stroke="#ffc107" />
              <Star size={16} fill="#ffc107" stroke="#ffc107" />
              <Star size={16} fill="#ffc107" stroke="#ffc107" />
            </div>
            <span>Trusted by 50,000+ individuals globally</span>
          </div>
        </div>
      </section>

      <section className="trusted-by">
        <p>TRUSTED BY INNOVATIVE COMPANIES</p>
        <div className="company-logos">
          <span className="logo-placeholder">Custral</span>
          <span className="logo-placeholder">Pied Piper</span>
          <span className="logo-placeholder">Hooli</span>
          <span className="logo-placeholder">Custral</span>
        </div>
      </section>

      <section className="features-modern">
        <div className="section-header">
          <h2>Why Candace Health?</h2>
          <p>We've redesigned therapy from the ground up.</p>
        </div>
        <div className="features-grid">
          <div className="feature-modern-card">
            <div className="icon-wrapper"><Zap /></div>
            <h3>Instant Connection</h3>
            <p>Match with a specialist in under 5 minutes, not 5 weeks.</p>
          </div>
          <div className="feature-modern-card">
            <div className="icon-wrapper"><Shield /></div>
            <h3>Enterprise Grade Security</h3>
            <p>Your data is encrypted with military-grade protocols.</p>
          </div>
          <div className="feature-modern-card">
            <div className="icon-wrapper"><Smile /></div>
            <h3>Proven Outcomes</h3>
            <p>94% of our members report improvement within 3 weeks.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <blockquote>
          "Candace Health changed how our entire engineering team approaches burnout. It's the most essential tool in our stack."
        </blockquote>
        <div className="testimonial-author">
          <div className="author-avatar">J</div>
          <div>
            <strong>Jane Doe</strong>
            <span>CTO at Pied Piper</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
