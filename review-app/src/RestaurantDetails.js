import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

function RestaurantDetails({ match }) {
    const [restaurant, setRestaurant] = useState({});
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

    useEffect(() => {
        axios.get(`/api/restaurants/${match.params.id}`)
            .then(response => {
                setRestaurant(response.data.restaurant);
                setReviews(response.data.reviews);
            })
            .catch(error => console.error('Error fetching restaurant details:', error));
    }, [match.params.id]);

    const submitReview = () => {
        axios.post(`/api/restaurants/${restaurant.id}/reviews`, newReview)
            .then(response => setReviews([...reviews, response.data]))
            .catch(error => console.error('Error submitting review:', error));
    };

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>{restaurant.category}</p>
            <p>{restaurant.cuisine_type}</p>

            <h3>Reviews</h3>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <div>
                            {[...Array(5)].map((star, i) => (
                                <FaStar key={i} color={i < review.rating ? 'gold' : 'grey'} />
                            ))}
                            <span>{review.comment}</span>
                        </div>
                    </li>
                ))}
            </ul>

            <h3>Add a Review</h3>
            <div>
                {[...Array(5)].map((star, i) => (
                    <FaStar
                        key={i}
                        color={i < newReview.rating ? 'gold' : 'grey'}
                        onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                    />
                ))}
                <input
                    type="text"
                    value={newReview.comment}
                    onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Add your comment"
                />
                <button onClick={submitReview}>Submit Review</button>
            </div>
        </div>
    );
}

export default RestaurantDetails;