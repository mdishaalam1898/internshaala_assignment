import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieBooking = () => {
  const { showId } = useParams();
  const [movieName, setMovieName] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setMovieName(data.name))

      .catch((error) => console.error("Error fetching movie details:", error));
  }, [showId]);

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    toast.success("Booking successful! Enjoy the movie!");
    setUserDetails({
      ...userDetails,
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <h2>Movie Booking</h2>
      <p>Movie: {movieName}</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default MovieBooking;
