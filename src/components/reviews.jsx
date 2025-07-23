
import React, { useState, useEffect } from "react";

const Reviews = () => {
  // Initial reviews data
  const initialReviews = []

  // Load reviews from localStorage or use initial data
  const [reviews, setReviews] = useState(() => {
    try {
      // In a real environment, this would work:
      const savedReviews = typeof localStorage !== 'undefined' ? localStorage.getItem('reviews') : null;
      return savedReviews ? JSON.parse(savedReviews) : initialReviews;
    } catch (error) {
      console.error('Error loading reviews:', error);
      return initialReviews;
    }
  });

  // Save reviews to localStorage whenever reviews change
  useEffect(() => { 
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('reviews', JSON.stringify(reviews));
      }
      console.log('Reviews saved:', reviews.length);
    } catch (error) {
      console.error('Error saving reviews:', error);
    }
  }, [reviews]);

  const calculateRatings = () => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sum = 0;

    reviews.forEach((review) => {
      counts[review.rating] += 1;
      sum += review.rating;
    });

    const average = (sum / reviews.length).toFixed(1);
    return { average, counts };
  };

  const { average, counts } = calculateRatings();

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    position: "",
    rating: 5,
    description: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const reviewsPerPage = 3;

  // Sort reviews based on selected option
  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      case "highest":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating,
    });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!newReview.name.trim() || !newReview.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const date = new Date().toISOString().split("T")[0];
    
    // Generate a unique ID based on timestamp
    const newId = Date.now();
    
    const newReviewWithId = {
      ...newReview,
      id: newId,
      date,
      name: newReview.name.trim(),
      position: newReview.position.trim(),
      description: newReview.description.trim(),
    };

    setReviews([newReviewWithId, ...reviews]);
    setNewReview({
      name: "",
      position: "",
      rating: 5,
      description: "",
    });
    setShowForm(false);
    setCurrentPage(1); // Go to first page to see the new review
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const RatingBar = ({ rating, count }) => {
    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;

    return (
      <div className="flex items-center mb-1">
        <span className="text-sm mr-2">{rating} Stars</span>
        <div className="w-96 bg-gray-200 rounded h-2.5 mr-2">
          <div
            className="bg-yellow-400 h-2.5 rounded"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm">{count}</span>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex items-start mb-4 md:mb-0">
          <div className="w-full flex flex-col md:flex-row space-x-2 md:space-x-28 md:mx-8 mx-0 border border-gray-300 p-6 item-start md:items-center">
            <div>
              <h2 className="text-md font-medium text-gray-600">
                Customer Reviews
              </h2>
              <span className="text-4xl sm:text-5xl text-[#556EAF] font-bold mr-2">
                {average}
              </span>
              <div>{renderStars(Math.round(parseFloat(average)))}</div>
              <p className="text-gray-600 text-sm mt-2 text-center md:text-left w-full md:w-auto">
                {reviews.length} reviews
              </p>
            </div>
            <div>
              {[5, 4, 3, 2, 1].map((rating) => (
                <RatingBar
                  key={rating}
                  rating={rating}
                  count={counts[rating]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between md:flex-row flex-col-reverse items-center mb-4">
        <div className="relative inline-block">
          <div className="relative">
            <select 
              className="border border-gray-300 rounded py-2 md:px-2 px-8 pr-8 appearance-none bg-gray-100"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#556EAF] hover:bg-[#273771] text-white py-2 md:mb-0 mb-5 md:px-4 px-8 rounded"
        >
          Write a Review
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Share Your Experience</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => handleRatingChange(star)}
                    className="mr-1 focus:outline-none"
                  >
                    <svg
                      className={`w-8 h-8 ${
                        star <= newReview.rating
                          ? "text-yellow-300"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  value={newReview.position}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Review</label>
              <textarea
                name="description"
                value={newReview.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded h-32"
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="mr-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#556EAF] hover:bg-blue-500 text-white py-2 px-4 rounded"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-6">
        {currentReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6">
            <p className="text-gray-400 text-sm">{review.date}</p>
            <div className="mt-2 mb-2">{renderStars(review.rating)}</div>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-[#556EAF] font-bold rounded-full mr-2">
                {review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>

              <span className="font-medium text-[#556EAF]">{review.name}</span>
            </div>

            {review.position && (
              <span className="text-gray-500 text-sm">{review.position}</span>
            )}
            <p className="text-gray-700 mb-2">{review.description}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="mr-2 px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-[#556EAF] text-white"
                  : "border-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="ml-2 px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
