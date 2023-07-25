import { Route, Routes } from "react-router-dom";
import './App.css';

// importing components
import Aboutpage from "./components/jsx/Aboutpage";
import Blogpage from "./components/jsx/Blogpage";
import Homepage from "./components/jsx/Homepage";
import Navbar from "./components/jsx/Navbar";
import Pagenotfound from "./components/jsx/Pagenotfound";
import Createblog from "./components/jsx/crud_pages/Createblog";
import Readblog from "./components/jsx/crud_pages/Readblog";
import Footer from "./components/jsx/Footer";
import Updateblog from "./components/jsx/crud_pages/Updateblog";

function App() {
  return (
    <div id="mainbody">
      <Navbar />
      <div id="maincontainer">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogpage />} />
          <Route path="/create" element={<Createblog />} />
          <Route path="/blog:id" element={<Readblog />} />
          <Route path="/update:id" element={<Updateblog />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
}

export default App;
