// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaStar, FaTrash } from "react-icons/fa";

// const FAQ = () => {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(0);

//   // Fetch reviews from backend
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/reviews")
//       .then(response => setReviews(response.data))
//       .catch(error => console.error("Error fetching reviews:", error));
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (name.trim() === "" || review.trim() === "" || rating === 0) {
//       alert("Please fill in all fields and select a rating.");
//       return;
//     }

//     const newReview = { name, review, rating };

//     try {
//       const response = await axios.post("http://localhost:5000/api/reviews", newReview);
//       setReviews([response.data, ...reviews]); // Update UI instantly
//       setName("");
//       setReview("");
//       setRating(0);
//     } catch (error) {
//       console.error("Error saving review:", error);
//     }
//   };

//   // Handle review deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/reviews/${id}`);
//       setReviews(reviews.filter((review) => review._id !== id));
//     } catch (error) {
//       console.error("Error deleting review:", error);
//     }
//   };

//   return (
//     <div id="FAQ" className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] px-6 py-8">
//       <div className="max-w-3xl text-center p-4">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">Customer Reviews</h2>

//         {/* Review Submission Form */}
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mb-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="Write your review..."
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             rows="3"
//           />

//           {/* Star Rating Selection */}
//           <div className="flex justify-center mb-3">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <FaStar
//                 key={star}
//                 className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
//                 onClick={() => setRating(star)}
//               />
//             ))}
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//             Submit Review
//           </button>
//         </form>

//         {/* Display User Reviews */}
//         <div className="w-full max-w-lg text-left">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Reviews:</h3>
//           {reviews.length > 0 ? (
//             reviews.map((item) => (
//               <div key={item._id} className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-start">
//                 <div>
//                   <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   <p className="text-gray-700">{item.review}</p>

//                   {/* Star Rating Display */}
//                   <div className="flex mt-1">
//                     {[...Array(item.rating)].map((_, index) => (
//                       <FaStar key={index} className="text-yellow-500" />
//                     ))}
//                   </div>

//                   <p className="text-sm text-gray-500 mt-1">{new Date(item.date).toLocaleString()}</p>
//                 </div>

//                 {/* Delete Button */}
//                 <button onClick={() => handleDelete(item._id)} className="text-red-500">
//                   <FaTrash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

// currected code 
// import React, { useState } from "react";
// import { FaStar, FaTrash } from "react-icons/fa";

// const FAQ = () => {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(0);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() === "" || review.trim() === "" || rating === 0) {
//       alert("Please fill in all fields and select a rating.");
//       return;
//     }

//     const newReview = {
//       id: Date.now(), // Generate a unique ID
//       name,
//       review,
//       rating,
//       date: new Date().toLocaleString(),
//     };

//     setReviews([newReview, ...reviews]); // Add review to the state
//     setName("");
//     setReview("");
//     setRating(0);
//   };

//   // Handle review deletion
//   const handleDelete = (id) => {
//     setReviews(reviews.filter((review) => review.id !== id));
//   };

//   return (
//     <div id="FAQ" className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] px-6 py-8">
//       <div className="max-w-3xl text-center p-4">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">Customer Reviews</h2>

//         {/* Review Submission Form */}
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mb-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="Write your review..."
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             rows="3"
//           />

//           {/* Star Rating Selection */}
//           <div className="flex justify-center mb-3">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <FaStar
//                 key={star}
//                 className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
//                 onClick={() => setRating(star)}
//               />
//             ))}
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//             Submit Review
//           </button>
//         </form>

//         {/* Display User Reviews */}
//         <div className="w-full max-w-lg text-left">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Reviews:</h3>
//           {reviews.length > 0 ? (
//             reviews.map((item) => (
//               <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-start">
//                 <div>
//                   <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   <p className="text-gray-700">{item.review}</p>

//                   {/* Star Rating Display */}
//                   <div className="flex mt-1">
//                     {[...Array(item.rating)].map((_, index) => (
//                       <FaStar key={index} className="text-yellow-500" />
//                     ))}
//                   </div>

//                   <p className="text-sm text-gray-500 mt-1">{item.date}</p>
//                 </div>

//                 {/* Delete Button */}
//                 <button onClick={() => handleDelete(item.id)} className="text-red-500">
//                   <FaTrash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;


// import React, { useState, useEffect } from "react";
// import { FaStar, FaTrash } from "react-icons/fa";

// const FAQ = () => {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(0);
//   const [userId, setUserId] = useState(null); // Unique user session

//   // Generate unique session ID for each user (Stored in localStorage)
//   useEffect(() => {
//     let sessionUserId = localStorage.getItem("userId");
//     if (!sessionUserId) {
//       sessionUserId = Date.now().toString(); // Assign unique ID
//       localStorage.setItem("userId", sessionUserId);
//     }
//     setUserId(sessionUserId);

//     // Load reviews from localStorage
//     const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
//     setReviews(savedReviews);
//   }, []);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() === "" || review.trim() === "" || rating === 0) {
//       alert("Please fill in all fields and select a rating.");
//       return;
//     }

//     const newReview = {
//       id: Date.now(), // Unique ID
//       name,
//       review,
//       rating,
//       date: new Date().toLocaleString(),
//       userId, // Store user ID
//     };

//     const updatedReviews = [newReview, ...reviews];
//     setReviews(updatedReviews);
//     localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Save to localStorage

//     setName("");
//     setReview("");
//     setRating(0);
//   };

//   // Handle review deletion (Only allows the original user to delete)
//   const handleDelete = (id, reviewUserId) => {
//     if (reviewUserId !== userId) {
//       alert("You can only delete your own review.");
//       return;
//     }

//     const updatedReviews = reviews.filter((review) => review.id !== id);
//     setReviews(updatedReviews);
//     localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Update localStorage
//   };

//   return (
//     <div id="FAQ" className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] px-6 py-8">
//       <div className="max-w-3xl text-center p-4">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">Customer Reviews</h2>

//         {/* Review Submission Form */}
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mb-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="Write your review..."
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             rows="3"
//           />

//           {/* Star Rating Selection */}
//           <div className="flex justify-center mb-3">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <FaStar
//                 key={star}
//                 className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
//                 onClick={() => setRating(star)}
//               />
//             ))}
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//             Submit Review
//           </button>
//         </form>

//         {/* Display User Reviews */}
//         <div className="w-full max-w-lg text-left">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Reviews:</h3>
//           {reviews.length > 0 ? (
//             reviews.map((item) => (
//               <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-start">
//                 <div>
//                   <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   <p className="text-gray-700">{item.review}</p>

//                   {/* Star Rating Display */}
//                   <div className="flex mt-1">
//                     {[...Array(item.rating)].map((_, index) => (
//                       <FaStar key={index} className="text-yellow-500" />
//                     ))}
//                   </div>

//                   <p className="text-sm text-gray-500 mt-1">{item.date}</p>
//                 </div>

//                 {/* Delete Button (Only show if user owns the review) */}
//                 {item.userId === userId && (
//                   <button onClick={() => handleDelete(item.id, item.userId)} className="text-red-500">
//                     <FaTrash />
//                   </button>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

// import React, { useState, useEffect } from "react";
// import { FaStar, FaTrash } from "react-icons/fa";

// const FAQ = () => {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(0);

//   // Load reviews from localStorage when the component mounts
//   useEffect(() => {
//     const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
//     setReviews(savedReviews);
//   }, []);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() === "" || review.trim() === "" || rating === 0) {
//       alert("Please fill in all fields and select a rating.");
//       return;
//     }

//     const newReview = {
//       id: Date.now(), // Unique ID
//       name,
//       review,
//       rating,
//       date: new Date().toLocaleString(),
//     };

//     const updatedReviews = [newReview, ...reviews];
//     setReviews(updatedReviews);
//     localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Save to localStorage

//     setName("");
//     setReview("");
//     setRating(0);
//   };

//   // Handle review deletion (Any user can delete any review)
//   const handleDelete = (id) => {
//     const updatedReviews = reviews.filter((review) => review.id !== id);
//     setReviews(updatedReviews);
//     localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Update localStorage
//   };

//   return (
//     <div id="FAQ" className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] px-6 py-8">
//       <div className="max-w-3xl text-center p-4">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">Customer Reviews</h2>

//         {/* Review Submission Form */}
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mb-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="Write your review..."
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             rows="3"
//           />

//           {/* Star Rating Selection */}
//           <div className="flex justify-center mb-3">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <FaStar
//                 key={star}
//                 className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
//                 onClick={() => setRating(star)}
//               />
//             ))}
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//             Submit Review
//           </button>
//         </form>

//         {/* Display User Reviews */}
//         <div className="w-full max-w-lg text-left">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Reviews:</h3>
//           {reviews.length > 0 ? (
//             reviews.map((item) => (
//               <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-start">
//                 <div>
//                   <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   <p className="text-gray-700">{item.review}</p>

//                   {/* Star Rating Display */}
//                   <div className="flex mt-1">
//                     {[...Array(item.rating)].map((_, index) => (
//                       <FaStar key={index} className="text-yellow-500" />
//                     ))}
//                   </div>

//                   <p className="text-sm text-gray-500 mt-1">{item.date}</p>
//                 </div>

//                 {/* Delete Button (Visible to all users) */}
//                 <button onClick={() => handleDelete(item.id)} className="text-red-500">
//                   <FaTrash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

//before backend code
// import React, { useState, useEffect } from "react";
// import { FaStar, FaTrash } from "react-icons/fa";

// const FAQ = () => {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(0);

//   // Load reviews from localStorage when the component mounts
//   useEffect(() => {
//     const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
//     setReviews(savedReviews);
//   }, []);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() === "" || review.trim() === "" || rating === 0) {
//       alert("Please fill in all fields and select a rating.");
//       return;
//     }

//     const newReview = {
//       id: Date.now(), // Unique ID
//       name,
//       review,
//       rating,
//       date: new Date().toLocaleString(),
//     };

//     const updatedReviews = [newReview, ...reviews];
//     setReviews(updatedReviews);
//     localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Save to localStorage

//     setName("");
//     setReview("");
//     setRating(0);
//   };

//   // Handle review deletion (Any user can delete any review)
//   const handleDelete = (id) => {
//     const updatedReviews = reviews.filter((review) => review.id !== id);
//     setReviews(updatedReviews);
//     localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Update localStorage
//   };

//   return (
//     <div id="FAQ" className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] px-6 py-8">
//       <div className="max-w-3xl text-center p-4">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">Customer Reviews</h2>

//         {/* Review Submission Form */}
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mb-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="Write your review..."
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             rows="3"
//           />

//           {/* Star Rating Selection */}
//           <div className="flex justify-center mb-3">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <FaStar
//                 key={star}
//                 className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
//                 onClick={() => setRating(star)}
//               />
//             ))}
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//             Submit Review
//           </button>
//         </form>

//         {/* Display User Reviews */}
//         <div className="w-full max-w-lg text-left">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Reviews:</h3>
//           {reviews.length > 0 ? (
//             reviews.map((item) => (
//               <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-start">
//                 <div>
//                   <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   <p className="text-gray-700">{item.review}</p>

//                   {/* Star Rating Display */}
//                   <div className="flex mt-1">
//                     {[...Array(item.rating)].map((_, index) => (
//                       <FaStar key={index} className="text-yellow-500" />
//                     ))}
//                   </div>

//                   <p className="text-sm text-gray-500 mt-1">{item.date}</p>
//                 </div>

//                 {/* Delete Button (Visible to all users) */}
//                 <button onClick={() => handleDelete(item.id)} className="text-red-500">
//                   <FaTrash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default FAQ;


//backend code
// import React, { useState, useEffect } from "react";
// import { FaStar, FaTrash } from "react-icons/fa";

// const FAQ = () => {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(0);

//   const API_URL = "http://localhost:5001/api/reviews";

//   // 🔹 Fetch all reviews from backend on component mount
//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => setReviews(data))
//       .catch((error) => console.error("Error fetching reviews:", error));
//   }, []);

//   // 🔹 Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (name.trim() === "" || review.trim() === "" || rating === 0) {
//       alert("Please fill in all fields and select a rating.");
//       return;
//     }

//     const newReview = { name, review, rating };

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newReview),
//       });

//       if (!response.ok) throw new Error("Failed to submit review");

//       const data = await response.json();
//       setReviews([data, ...reviews]); // Add new review to state
//       setName("");
//       setReview("");
//       setRating(0);
//     } catch (error) {
//       console.error("Error submitting review:", error);
//     }
//   };

//   // 🔹 Handle review deletion
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) throw new Error("Failed to delete review");

//       setReviews(reviews.filter((review) => review._id !== id)); // Remove deleted review from state
//     } catch (error) {
//       console.error("Error deleting review:", error);
//     }
//   };

//   return (
//     <div id="FAQ" className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] px-6 py-8">
//       <div className="max-w-3xl text-center p-4">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">Customer Reviews</h2>

//         {/* Review Submission Form */}
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mb-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="Write your review..."
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             rows="3"
//           />

//           {/* Star Rating Selection */}
//           <div className="flex justify-center mb-3">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <FaStar
//                 key={star}
//                 className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
//                 onClick={() => setRating(star)}
//               />
//             ))}
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//             Submit Review
//           </button>
//         </form>

//         {/* Display User Reviews */}
//         <div className="w-full max-w-lg text-left">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Reviews:</h3>
//           {reviews.length > 0 ? (
//             reviews.map((item) => (
//               <div key={item._id} className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-start">
//                 <div>
//                   <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   <p className="text-gray-700">{item.review}</p>

//                   {/* Star Rating Display */}
//                   <div className="flex mt-1">
//                     {[...Array(item.rating)].map((_, index) => (
//                       <FaStar key={index} className="text-yellow-500" />
//                     ))}
//                   </div>

//                   <p className="text-sm text-gray-500 mt-1">{item.date}</p>
//                 </div>

//                 {/* Delete Button */}
//                 <button onClick={() => handleDelete(item._id)} className="text-red-500">
//                   <FaTrash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;


import React, { useState, useEffect } from "react";
import { FaStar, FaTrash } from "react-icons/fa";

const FAQ = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const API_URL = "http://localhost:5001/api/reviews";

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

                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
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
