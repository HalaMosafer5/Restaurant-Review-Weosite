const About = () => {
  return (
    // <!-- About Section -->
    <section id="about" className="about section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>
          About Us
          <br />
        </h2>
        <p>
          <span>Learn More</span>{" "}
          <span className="description-title">About Us</span>
        </p>
      </div>
      {/* //   <!-- End Section Title --> */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <img src="https://picsum.photos/seed/picsum/600" className="img-fluid mb-4" alt="" />
          </div>
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                We are Computer Engineering students ,studying at Birzeit
                University and this is our first full stack project
              </p>
              {/* <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p> */}

              <div className="position-relative mt-4">
                <img
                  src="https://picsum.photos/seed/picsum/550"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
