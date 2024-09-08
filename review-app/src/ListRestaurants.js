import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash, FaInfoCircle } from 'react-icons/fa';

function ListRestaurants({ category }) {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get(`/api/restaurants/category/${category}`)
            .then(response => setRestaurants(response.data))
            .catch(error => console.error('Error fetching restaurants:', error));
    }, [category]);

    const deleteRestaurant = (id) => {
        axios.delete(`/api/restaurants/${id}`)
            .then(() => setRestaurants(restaurants.filter(r => r.id !== id)))
            .catch(error => console.error('Error deleting restaurant:', error));
    };

    return (
        <div>
            <h2>{category} Restaurants</h2>
            <Link to="/add-restaurant" className="btn btn-primary">Add Restaurant</Link>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant.id}>
                        <span>{restaurant.name}</span>
                        <Link to={`/restaurant/${restaurant.id}`}>
                            <FaInfoCircle title="View Info" />
                        </Link>
                        <Link to={`/edit-restaurant/${restaurant.id}`}>
                            <FaEdit title="Edit Restaurant" />
                        </Link>
                        <FaTrash title="Delete Restaurant" onClick={() => deleteRestaurant(restaurant.id)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListRestaurants;
