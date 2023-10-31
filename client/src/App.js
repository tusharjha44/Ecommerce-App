import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import PageNotFound from './pages/PageNotFound';
import Policy from './pages/Policy';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
