import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './RestaurantPage.css';

const restaurantsDetails = {
  1: { name: 'Pizza Palace', image: '/images/pizzapalace.jpg', location: '123 Pizza St.', phone: '123-456-7890', email: 'contact@pizzapalace.com' },
  2: { name: 'Burger King', image: '/images/burgerking.jpg', location: '456 Burger Ave.', phone: '987-654-3210', email: 'contact@burgerking.com' },
  // Add more restaurant details...
};

function RestaurantPage() {
  const { id } = useParams();
  const restaurant = restaurantsDetails[id];
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="restaurant-detail-container">
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      <div className="restaurant-info">
        <p><FaMapMarkerAlt /> {restaurant.location}</p>
        <p><FaPhone /> {restaurant.phone}</p>
        <p><FaEnvelope /> {restaurant.email}</p>
      </div>
      <div className="rating-container">
        <h3>Rate this Restaurant:</h3>
        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
        <p>Your rating: {rating} stars</p>
      </div>
    </div>
  );
}

export default RestaurantPage;