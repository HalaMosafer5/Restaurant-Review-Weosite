import React, { useEffect, useRef } from "react";
import Swiper from "swiper"; // Import Swiper
import galleryImg0 from "../assets/img/gallery/gallery-1.jpg";
import galleryImg1 from "../assets/img/gallery/gallery-2.jpg";
import galleryImg2 from "../assets/img/gallery/gallery-3.jpg";
import galleryImg3 from "../assets/img/gallery/gallery-4.jpg";
import galleryImg4 from "../assets/img/gallery/gallery-5.jpg";
import galleryImg5 from "../assets/img/gallery/gallery-6.jpg";
import galleryImg6 from "../assets/img/gallery/gallery-7.jpg";
import galleryImg7 from "../assets/img/gallery/gallery-8.jpg";

const Gallery = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".Gswiper", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  const galleryImages = [
    galleryImg0,
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
  ];
  return (
    <section id="gallery" className="gallery section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>
          <span>Check</span>{" "}
          <span className="description-title">Our Gallery</span>
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="Gswiper init-swiper">
          <div className="swiper-wrapper align-items-center">
            {galleryImages.map((image, index) => (
              <div className="swiper-slide" key={index}>
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={image}
                >
                  <img
                    src={image}
                    className="img-fluid"
                    alt={`Gallery ${index + 1}`}
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
