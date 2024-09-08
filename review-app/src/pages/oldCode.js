      {/* <header classNameName="header">
        <h1 classNameName="page-title">YUMMY</h1>
        <nav classNameName="nav-bar">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about-us")}>About Us</button>
          <button onClick={() => navigate("/contact-us")}>Contact Us</button>
        </nav>
        <button onClick={handleLogout} classNameName="logout-button">
          Logout
        </button>
        <span classNameName="user-name">Welcome, {userName}</span>
      </header> */}
<section classNameName="featured-section">
<div
  classNameName="featured-card"
  onClick={() => handleCategoryClick(featuredCategory.name)}
>
  <img
    src={featuredCategory.image}
    alt={featuredCategory.name}
    classNameName="featured-image"
  />
  <h1 classNameName="featured-title">{featuredCategory.name}</h1>
</div>
</section>

<main classNameName="categories">
{categories.map((category) => (
  <div
    key={category.name}
    classNameName="category-card"
    onClick={() => handleCategoryClick(category.name)}
  >
    <img
      src={category.image}
      alt={category.name}
      classNameName="category-image"
    />
    <h2 classNameName="category-title">{category.name}</h2>
  </div>
))}
</main>

<section classNameName="reviews">
<h2>What our customers say</h2>
<div classNameName="reviews-slider">
  {/* Add customer review cards here */}
  <div classNameName="review-card">
    "The best food I've ever had!" - Customer A
  </div>
  <div classNameName="review-card">
    "Amazing experience!" - Customer B
  </div>
  <div classNameName="review-card">
    "Would highly recommend." - Customer C
  </div>
</div>
</section>