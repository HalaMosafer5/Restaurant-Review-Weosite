const Contact = () => {
    return (
      // Contact Section
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            <span>Need Help?</span> <span className="description-title">Contact Us</span>
          </p>
        </div>
        {/* End Section Title */}
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-5">
            <iframe
              style={{ width: '100%', height: '400px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          {/* End Google Maps */}
  
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Ramallah</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
  
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                <i className="icon bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>0599346781</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
  
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                <i className="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
  
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                <i className="icon bi bi-clock flex-shrink-0"></i>
                <div>
                  <h3>Opening Hours</h3>
                  <p>
                    <strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
          </div>
  
          <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="600">
            <div className="row gy-4">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
  
              <div className="col-md-6">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
  
              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
  
              <div className="col-md-12">
                <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
              </div>
  
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
  
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
          {/* End Contact Form */}
        </div>
      </section>
    );
  };
  
  export default Contact;
      