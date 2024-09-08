import React from "react";
import item0 from "../assets/img/menu/item (6).jpg";
import item1 from "../assets/img/menu/item (1).jpg";
import item2 from "../assets/img/menu/item (2).jpg";
import item3 from "../assets/img/menu/item (3).jpg";
import item4 from "../assets/img/menu/item (4).jpg";
import item5 from "../assets/img/menu/item (5).jpg";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <section id="menu" className="menu section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>OUR CATEGORY</h2>
        <p>
          <span>CHECK RESTAURANTS IN CATEGORIES</span>{" "}
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {/* Starters Tab */}
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="row gy-5">
              {menuItems.map((item) => (
                <div className="col-lg-4 menu-item" key={item.id}>
                  <Link to={`/${item.id}`} className="glightbox">
                    <img
                      src={item.image}
                      className="menu-img img-fluid"
                      alt={item.title}
                    />
                  </Link>
                  <h4>{item.title}</h4>
                  {/* <p className="ingredients">{item.ingredients}</p>
                  <p className="price">{item.price}</p> */}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
// ((Pizza  , Burger , Fast Food  , Traditional Food
//   ,Home Made ,Sweet))
const menuItems = [
  {
    id: 1,
    image: item0,
    title: "Pizza",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$5.95",
  },
  {
    id: 2,
    image: item1,
    title: "Traditional Food",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$14.95",
  },
  {
    id: 3,
    image: item2,
    title: "Home Made",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$8.95",
  },
  {
    id: 4,
    image: item3,
    title: "Sweet",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$12.95",
  },
  {
    id: 5,
    image: item4,
    title: "Fast Food ",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$12.95",
  },
  {
    id: 6,
    image: item5,
    title: "Burger",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$9.95",
  },
];

export default Category;
