import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CategoryPage.css';

const initialRestaurantsData = {
  pizza: [{ id: 1, name: 'Pizza Palace', image: '/images/pizzapalace.jpg' }],
  burger: [{ id: 2, name: 'Burger King', image: '/images/burgerking.jpg' }],
  // Add other categories with initial data...
};

function CategoryPage() {
  const { categoryName } = useParams();
  const [restaurants, setRestaurants] = useState(initialRestaurantsData[categoryName] || []);
  
  // Form state for adding and editing restaurants
  const [formData, setFormData] = useState({ id: '', name: '', image: '' });
  const [editing, setEditing] = useState(false); // Whether we are editing a restaurant
  const [editId, setEditId] = useState(null);   // The id of the restaurant being edited
  
  // Handle form changes for adding/editing restaurants
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new restaurant
  const handleAddRestaurant = () => {
    if (formData.id && formData.name && formData.image) {
      setRestaurants((prev) => [...prev, formData]);
      setFormData({ id: '', name: '', image: '' });
    }
  };

  // Delete a restaurant by id or name
  const handleDeleteRestaurant = (id) => {
    const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id);
    setRestaurants(updatedRestaurants);
  };

  // Edit a restaurant
  const handleEditRestaurant = (restaurant) => {
    setEditing(true);
    setFormData(restaurant);
    setEditId(restaurant.id);
  };

  // Save edited restaurant
  const handleSaveEdit = () => {
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === editId ? formData : restaurant
    );
    setRestaurants(updatedRestaurants);
    setEditing(false);
    setFormData({ id: '', name: '', image: '' });
    setEditId(null);
  };

  return (
    <div>
      <h1>List of Restaurants for {categoryName}</h1>
      <div className="restaurants-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <button onClick={() => handleEditRestaurant(restaurant)}>Edit</button>
            <button onClick={() => handleDeleteRestaurant(restaurant.id)}>Delete</button>
          </div>
        ))}
      </div>

      <h2>{editing ? 'Edit Restaurant' : 'Add Restaurant'}</h2>
      <div className="admin-form">
        <input
          type="text"
          name="id"
          value={formData.id}
          placeholder="ID"
          onChange={handleChange}
          disabled={editing}
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Restaurant Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleChange}
        />
        {editing ? (
          <button onClick={handleSaveEdit}>Save</button>
        ) : (
          <button onClick={handleAddRestaurant}>Add Restaurant</button>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;