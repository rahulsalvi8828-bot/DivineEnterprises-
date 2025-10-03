import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Briefcase from './components/Briefcase/Briefcase';
import LaptopBags from './components/Laptop_Bag/LaptopBags';
// import LuggagBage from "./components/School_Bag/LuggagBage";
import LuggagBage from "./components/Luggag_ Bags/Luggag_ Bags";


import {Router,Routes,Route} from 'react-router-dom'

function App() {
 
  return (
    <div>
   
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/briefcase" element={<Briefcase/>} />
          <Route path="/laptop-bag" element={<LaptopBags />} />
          <Route path="/luggag-bage" element={<LuggagBage />} />
        </Routes>
      </main>
      <Footer/>
    
    </div>
   
    
  );
}

export default App;
