const About = () => {
  const team = [
    { name: "Candace Reid", role: "Founder & CEO", bio: "Former Head of Happiness at Hooli. Advocate for mental health since 2012." },
    { name: "Marcus Thorne", role: "Chief Clinical Officer", bio: "PhD in Behavioral Science. Leading our therapeutic protocols." },
    { name: "Sarah Jenkins", role: "Head of Engineering", bio: "Ex-Google architect focusing on privacy-preserving AI." },
    { name: "David Kim", role: "Product Strategy", bio: "Previously built wellness products for over 10M users." }
  ];

  return (
    <div className="page-about">
      <section className="about-hero">
        <h1>Human-Centered, <br/>Data-Driven.</h1>
        <p className="hero-subtitle">Meet the team dedicated to making mental health support a global standard, not a luxury.</p>
      </section>

      <section className="about-content modern-section">
        <div className="about-grid">
          <div className="about-text">
            <h2>The Candace Health Story</h2>
            <p>
              Founded in 2024 by Candace, a lifelong advocate for accessible mental health,
              Candace Health was born out of a simple idea: that everyone deserves a
              supportive, non-judgmental space to grow and heal.
            </p>
            <p>
              Candace saw the barriers people faced when seeking help – from long wait times
              to impersonal care. She built this platform to bridge that gap, combining
              human empathy with modern technology.
            </p>
          </div>
          <div className="mission-statement">
            <h3>Our Mission</h3>
            <p>
              To democratize mental health support by providing affordable, high-quality,
              and compassionate services to individuals around the globe.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet Our Leadership</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-avatar">{member.name[0]}</div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
