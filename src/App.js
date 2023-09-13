import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";

import Footer from "./container/footer/Footer";
import Home from "./pages/home/Home";
import Header from "./container/header/Header"
import About from "./pages/about/About";
import Form from "./components/form/Form";
import NotFound from "./pages/404/NotFound";
import AdminLogin from "./pages/admin-login/AdminLogin";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <Form />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={< AdminLogin />} />
        <Route path="/blog" element={< Blog />} />
        <Route
          path="/*"
          element={
            <>
              <Navigate to="/not-found" />
              <NotFound />
            </>
          }
      />
     
      </Routes>
      <Footer />
    </>
  );
}


export default App;
