
import React, { useState, useEffect } from "react";
import { FaStar, FaTrash } from "react-icons/fa";

const FAQ = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  //const API_URL = "http://localhost:5001/api/reviews"; do not remove this line

  // const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/reviews`;

  // const API_URL = "https://codecrestbackend-production.up.railway.app/api/reviews";

  // console.log("API_URL:", import.meta.env.VITE_BACKEND_URL);


  // // 🔹 Fetch all reviews from backend on component mount
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data))
  //     .catch((error) => console.error("Error fetching reviews:", error));
  // }, []);

// ✅ Use environment variable instead of hardcoding
const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/reviews`;

console.log("API_URL:", API_URL);

// 🔹 Fetch all reviews from backend on component mount
useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setReviews(data))
    .catch((error) => console.error("Error fetching reviews:", error));
}, []);



  // 🔹 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || review.trim() === "" || rating === 0) {
      alert("Please fill in all fields and select a rating.");
      return;
    }

    const newReview = { name, review, rating };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) throw new Error("Failed to submit review");

      const data = await response.json();
      setReviews([data, ...reviews]); // Add new review to state
      setName("");
      setReview("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // 🔹 Handle review deletion
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete review");

      setReviews(reviews.filter((review) => review._id !== id)); // Remove deleted review from state
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div id="FAQ" className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] px-6 py-8">
      <div className="max-w-3xl text-center p-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">Customer Reviews</h2>

        {/* Review Submission Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mb-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            rows="3"
          />

          {/* Star Rating Selection */}
          <div className="flex justify-center mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={`rating-star-${star}`}
                className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Submit Review
          </button>
        </form>

        {/* Display User Reviews */}
        <div className="w-full max-w-lg text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Reviews:</h3>
          {reviews.length > 0 ? (
            reviews.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-start">
                <div>
                  <p className="text-lg font-medium text-gray-800">{item.name}</p>
                  <p className="text-gray-700">{item.review}</p>

                  {/* ✅ Fixed Star Rating Display */}
                  <div className="flex mt-1">
                    {[...Array(item.rating)].map((_, index) => (
                      <FaStar key={`${item._id}-star-${index}`} className="text-yellow-500" />
                    ))}
                  </div>

                  {/* <p className="text-sm text-gray-500 mt-1">{item.date}</p> */}

                  <p className="text-sm text-gray-500 mt-1">
                     {item.createdAt ? new Date(item.createdAt).toLocaleString() : new Date().toLocaleString()}
                  </p>

                </div>

                {/* Delete Button */}
                <button onClick={() => handleDelete(item._id)} className="text-red-500">
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
