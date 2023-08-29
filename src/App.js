import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

import Footer from "./container/footer/Footer";
import Home from "./pages/home/Home";
import Faq from "./pages/faq/Faq"



function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
