import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Sidebar from "./Components/Sidebar"; // ✅ Added Sidebar
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
//import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import './Components/global.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex">
          <Sidebar /> {/* ✅ Sidebar for navigation */}
          <div className="ml-16 w-full"> {/* ✅ Space for sidebar */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* ✅ Fixed Home Route */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
           { /*  <Route path="/certifications" element={<Certifications />} /> */}
              <Route path="/contact" element={<Contact />} /> {/* ✅ Fixed Case Issue */}
            </Routes>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
