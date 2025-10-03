import Css from './Luggag.module.css'

import img1 from './luggagImage/img1.webp'
import img2 from './luggagImage/img2.webp'
import img3 from './luggagImage/img3.webp'
import img4 from './luggagImage/img4.webp'
import img5 from './luggagImage/img5.webp'
import img6 from './luggagImage/img6.jpg'
import img7 from './luggagImage/img7.jpg'
import img8 from './luggagImage/img8.jpg'
import img9 from './luggagImage/img9.jpg'
import img10 from './luggagImage/img10.jpg'
import img11 from './luggagImage/img11.jpg'
import img12 from './luggagImage/img12.jpg'

const LuggagBage = () => {
  
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
      //  img13,
      //  img14,
      //  img15,
      //  img16,
      //  img17,
      //  img18,
      //  img19,
      //  img20
     ];
    
   
     return (
       <div className={Css.main}>
         <div className={`${Css.gallery_container} ${Css.container}`}>
           <h2 className={Css.gallery_title}>Luggag Bags</h2>
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
  
}

export default LuggagBage;