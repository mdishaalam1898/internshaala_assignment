import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import MovieBooking from "./components/MovieBooking";

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/summary/:showId" element={<ShowSummary />} />
          <Route path="/book/:showId" element={<MovieBooking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
