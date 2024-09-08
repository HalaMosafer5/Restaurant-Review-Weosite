import { useEffect } from "react";
import state from "../assets/img/stats-bg.jpg";

const Stats = () => {
  return (
    <section id="stats" className="stats section dark-background">
      <img src={state} alt="" data-aos="fade-in" />

      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">210</span>
              <p>Restaurants </p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-4 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">503</span>
              <p>Reviews </p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-4 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">455</span>
              <p>Visits </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
