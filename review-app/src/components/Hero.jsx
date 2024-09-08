import img from "../assets/img/hero-img.png";
const Hero = () => {
  return (
    <section id="hero" className="hero section light-background">
      <div className="container">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              {" "}
              WELCOME TO YUMMY <br />
              WORLD
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              Tell us your experience with restaurants and discover others
              experience
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#book-a-table" className="btn-get-started">
                Booka a Table
              </a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-5 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
          >
            <img src={img} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
