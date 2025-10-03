import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Briefcase from "../components/Briefcase/Briefcase";
import LaptopBags from "../components/Laptop Bag/LaptopBags";
import SchoolBag from "../components/School Bag/SchoolBag";
import {Router ,Routes ,Route} from 'react-router-dom'
const AllPages = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Default page */}
          <Route path="/" element={<><Hero /><Home /></>} />

          {/* Other pages */}
          <Route path="/briefcase" element={<Briefcase />} />
          <Route path="/laptop-bag" element={<LaptopBags />} />
          <Route path="/school-bag" element={<SchoolBag />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </div>
  );
};

export default AllPages;
