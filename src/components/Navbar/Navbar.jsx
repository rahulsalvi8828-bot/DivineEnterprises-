import React, { useEffect, useState } from "react";
//  import "./nav.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Css from './Navbar.module.css'
import whatup from  '../../assets/images/whatsapp.png'



const Navbar = () => {
    
  return (
    <div id={Css.bc_color}>
      <nav className={Css.container} id={Css.navbar}>
        <div className={Css.logo}>
          <img id={Css.nev_img} src={logo} alt="logo" />
        </div>

        <ul id={Css.nav_ul}>
          <li>
            <Link className={Css.links} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={Css.links} to="/briefcase">
              Briefcase
            </Link>
          </li>
          <li>
            <Link className={Css.links} to="/laptop-bag">
              Laptop Bag
            </Link>
          </li>
          <li>
            <Link className={Css.links} to="/luggag-bage">
             Luggag Bage
            </Link>
          </li>
        </ul>
        <a className={Css.linkwhatup} href="https://wa.me/917225897565" >
        <button id={Css.nav_button} > <span className={Css.button_content}>Contact</span>
          <img className={Css.whatup} src= {whatup}alt="" />
          </button>
          </a>
      </nav>
    </div>
  );
};

export default Navbar;



// import React, { useEffect, useState } from "react";
//  import "./nav.css";
// import Css from './Navbar.module.css'
// import logo from "../../assets/images/logo.png";
// import { Link } from "react-router-dom";
 


// const Navbar = () => {
     
//   return (
//     <div id={Css.bc-color}  >
//       <nav className={Css.container} id={Css.navbar}>
//         <div className={Css.logo}>
//           <img id={Css.nev_img} src={logo} alt="logo" />
//         </div>

//         <ul id={Css.nav_ul}>
//           <li>
//             <Link className={Css.links} to="/">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className={Css.links} to="/briefcase">
//               Briefcase
//             </Link>
//           </li>
//           <li>
//             <Link className={Css.links} to="/laptop-bag">
//               Laptop Bag
//             </Link>
//           </li>
//           <li>
//             <Link className={Css.links} to="/school-bag">
//               School Bag
//             </Link>
//           </li>
//         </ul>
//         <a href="https://wa.me/919753201019" ><button id={Css.nav_button} >Contact Us  </button></a>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import whatup from "../../assets/images/whatsapp.png";
// import Css from "./Navbar.module.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div id={Css.bc_color}>
//       <nav className={Css.container} id={Css.navbar}>
//         {/* Logo */}
//         <div className={Css.logo}>
//           <img id={Css.nev_img} src={logo} alt="logo" />
//         </div>

//         {/* Hamburger Button */}
//         <div
//           className={Css.hamburger}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         {/* Links */}
//         <ul
//           id={Css.nav_ul}
//           className={`${Css.nav_links} ${isOpen ? Css.active : ""}`}
//         >
//           <li>
//             <Link className={Css.links} to="/" onClick={() => setIsOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className={Css.links} to="/briefcase" onClick={() => setIsOpen(false)}>
//               Briefcase
//             </Link>
//           </li>
//           <li>
//             <Link className={Css.links} to="/laptop-bag" onClick={() => setIsOpen(false)}>
//               Laptop Bag
//             </Link>
//           </li>
//           <li>
//             <Link className={Css.links} to="/luggag-bage" onClick={() => setIsOpen(false)}>
//               Luggag Bage
//             </Link>
//           </li>
//         </ul>

//         {/* Contact Button */}
//         <a className={Css.linkwhatup} href="https://wa.me/917225897565">
//           <button id={Css.nav_button}>
//             <span className={Css.button_content}>Contact</span>
//             <img className={Css.whatup} src={whatup} alt="whatsapp" />
//           </button>
//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
