const Contact = () => {
  return (
    <div className="page-contact">
      <h1>Contact Candace Health</h1>
      <p>Have questions? We're here to help you on your path to wellness.</p>

      <section className="contact-info">
        <h3>General Inquiries</h3>
        <p>Email: hello@candacehealth.com</p>
        <p>Phone: (555) 123-4567</p>

        <h3>Emergency Support</h3>
        <p>If you're in a mental health crisis, please contact your local emergency services or the national crisis hotline at 988.</p>

        <h3>Our Office</h3>
        <p>123 Serenity Way, Calm City, NY 10001</p>
      </section>

      <section className="contact-form">
        <h3>Send us a Message</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="cta-button" onClick={() => window.location.href = 'https://custral.com'}>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
