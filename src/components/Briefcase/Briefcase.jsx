import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.webp";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";
import img9 from "./images/img9.webp";
import img10 from  "./images/img10.webp";
import img11 from "./images/img11.webp";
import img12 from "./images/img12.webp";
import img13 from "./images/img13.webp";
import img14 from "./images/img14.webp";
import img15 from "./images/img15.webp"
import img16 from "./images/img16.webp"
import img17 from "./images/img17.webp"
 import img19 from  "./images/img9.webp"
import img20 from "./images/img20.webp"

// import whatsapp from '../../assets/images/whatsapp.png'

import Css from "./Briefcase.module.css";
// import "./Briefcase.css";
const Briefcase = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    
    img19,
    img20
  ];
   
  return (
    <div className={Css.main}>
      <div className={`${Css.gallery_container} ${Css.container}`}>
        <h2 className={Css.gallery_title}>BriefCase</h2>
        <div className={Css.gallery_grid}>
          {images.map((src, index) => (
            <div className={Css.gallery_card} key={index}>
              <img src={src} alt={`Random ${index + 1}`} />
              <div className={Css.content}>
                <p>
                  For More Info : Contact on<span className={Css.whatup}> What's app</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Briefcase;
