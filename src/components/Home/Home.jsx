import React from 'react'
// import './hero.css'
import Img from "../../assets/images/homeimg.jpg"

import Css from './Home.module.css'


const Home = () => {
  return (
    <div className={Css.color}> 
 <main className={ `${Css.container} ${Css.hero}`} >
    <div className={Css.hero_content}>
        <h1 id={Css.heroh1} >DIVINE ENTERPRISES</h1>
        <p id= {Css.heropara}>Welcome To The Fancy World Of Bags  <span>#DEALS</span> In Kind Of Bags</p>
    </div>
   
   <div className={Css.img_content}>
    <img id={Css.imghero} src={Img} alt="image not found " />
   </div>

 </main>
    </div>
  )
}

export default Home;