import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

import Footer from "./container/footer/Footer";
import Home from "./pages/home/Home";
import Header from "./container/header/Header"
import About from "./pages/about/About";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <Form />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
