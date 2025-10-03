import Css from './Laptop.module.css'

// all images
import img1 from './Laptop_imges/img1.jpg'
import img2 from './Laptop_imges/img2.jpg'
import img3 from './Laptop_imges/img3.jpg'
import img4 from './Laptop_imges/img4.jpg'
import img5 from './Laptop_imges/img5.jpg'
import img6 from './Laptop_imges/img6.jpg'
import img7 from './Laptop_imges/img7.jpg'
import img8 from './Laptop_imges/img8.jpg'
import img9 from './Laptop_imges/img9.jpg'
import img10 from './Laptop_imges/img10.jpg'
import img11 from './Laptop_imges/img11.jpg'
import img12 from './Laptop_imges/img12.jpg'
import img13 from './Laptop_imges/img13.jpg'
import img14 from './Laptop_imges/img14.jpg'
import img15 from './Laptop_imges/img15.jpg'
import img16 from './Laptop_imges/img16.jpg'
import img17 from './Laptop_imges/img17.jpg'
import img18 from './Laptop_imges/img18.jpg'
import img19 from './Laptop_imges/img19.jpg'
import img20 from './Laptop_imges/img20.jpg'
 const Laptop = () => {
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
    img18,
    img19,
    img20
  ];
 

  return (
    <div className={Css.main}>
      <div className={`${Css.gallery_container} ${Css.container}`}>
        <h2 className={Css.gallery_title}>Laptop Bags</h2>
        <div className={Css.gallery_grid}>
          {images.map((src, index) => (
            <div className={Css.gallery_card} key={index}>
              <img src={src} alt={`Random ${index + 1}`} />
              <div className={Css.content}>
                <p>
                  For More Info : Contact on <br /><span  className={Css.whatup}> What's app</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptop;