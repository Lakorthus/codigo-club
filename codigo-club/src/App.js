import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
