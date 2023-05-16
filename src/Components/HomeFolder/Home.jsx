import React from "react";
import styles from '../HomeFolder/Home.module.css'
import { useState , useRef , useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import main1 from '../Images/solvida1.jpg'
import main2 from '../Images/sadatfac.jpg'
import main3 from '../Images/em2.jpg'
import Form from '../FormFolder/Form'
// import interior1 from '../Images/interior1.jpg'
// import interior2 from '../Images/interior2.jpg'
// import interior3 from '../Images/interior3.jpg'
// import interior4 from '../Images/interior4.jpg'
import OurServices from '../OurServicesFolder/OurServices'
import Contactus from '../ContactusFolder/Contactus' 
import Clients from '../ClientsFolder/Clients'
import {FaArrowCircleUp} from 'react-icons/fa';
import $ from 'jquery'
import Player from "./Player";







export default function Home() {



  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {    
   if (!showScroll && window.pageYOffset > 350){
      setShowScroll(true)    
   } else if (showScroll && window.pageYOffset <= 350){
      setShowScroll(false)    
   }  
};

  window.addEventListener('scroll', checkScrollTop)

  const ScrollArrow = () =>{
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 350){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 350){
      setShowScroll(false)
    }
    }
  };  

  window.addEventListener('scroll', ScrollArrow)
  
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  useEffect(() => {
    $('.header').fadeIn(2000)
   
  }, [])
  
  return (

    <>
    
   




<header className="h-75">
<FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height:40, display: showScroll ? 'flex' : 'none'}}/> 
<Player />
</header>


<section className="container text-center ">
<div className="row ">
        <div className="col-md-12">
        <h1 className=' fw-bolder mainColor text-center mt-1'> Architecture Consulting House</h1>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
    <p>
   <span className={`${styles.color} fs-5`}>ACH</span>  has been providing architectural,civil engineering and project management services since its founding in <span className={`${styles.color} fs-5`}> 2004 </span>  
    </p>
    <p>Our mission is to design and supervise projects satisfying our clients according to the international standards and regulations.</p>
    <p> We believe the best way to achieve this goal is by providing quality control for our projects during both the design and supervision stages to the satisfy our clients.</p>
    <p>
    <span className={`${styles.color} fs-5`}>ACH</span> has a highly dynamic and experienced staff that are up to date with the latest engineering technologies, software , environmental control systems and sustainability in order to deliver clients engineering solutions with innovative ideas.
    </p>
   </div> 
</div>
</section>

<OurServices />

<Clients />
<section className="text-center mt-5 container">
    
</section>

<section >
<div className="container my-4">
  <div className="row">
    <div className="col-md-6 my-1 d-flex align-items-center text-center">
      <div className="p-5">
            <h2 className='text-center fs-1 fw-bolder position-relative mainColor mb-4'>
              Our Vision
            <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> o </div>
            <div className="shortline mt-2"></div>
            <div className="longline"></div>
            <div className="shortline mb-2"></div>
            </h2>
           <p>To be the architectural consultancy House is the best option in all engineering fields and the first reference and keep abreast of contemporary designs to suit the environment and social culture. Mastering global architecture styles and various local detail in accordance with prevailing implementation systems.</p>
      </div>
   
    </div>
    <div className="col-md-6 my-1">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper text-center "
      >
        <SwiperSlide><img src={main1} alt=""  className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src={main2} alt="" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src={main3} alt="" className="img-fluid"/></SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
    </Swiper> 
    </div>
  </div>
</div>


</section>

  <Form />

<Contactus />
   
    </>
  )
}
