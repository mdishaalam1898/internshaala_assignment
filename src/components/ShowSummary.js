import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ShowSummary = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setSummary(data.summary))
      .catch((error) => console.error("Error fetching show summary:", error));
  }, [showId]);

  return (
    <div>
      <h2>Show Summary</h2>
      <p>{summary}</p>
      <Link to={`/book/${showId}`} className="btn btn-primary">
        Book Movie Ticket
      </Link>
    </div>
  );
};

export default ShowSummary;
