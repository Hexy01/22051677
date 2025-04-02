import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import LiveFeed from "./pages/LiveFeed";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<LiveFeed />} />
        </Routes>
      </div>
  <div>
    <h1 className="text-2xl font-bold">Social Media Analytics App</h1>
  </div>
    </Router>
  );
};

export default App;
