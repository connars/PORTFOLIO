import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./container/footer/Footer";
import Home from "./pages/home/Home";



function App() {
  return (
    <>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
  );
}


export default App;
