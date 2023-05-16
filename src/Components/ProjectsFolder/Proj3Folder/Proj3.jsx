import React from 'react'
import styles from '../Proj3Folder/Proj3.module.css'
import amricana from '../../Images/amricana.jpg'
import foodstore from '../../Images/food.jpg'
import sadat from '../../Images/sadatfac.jpg'
import { Link } from 'react-router-dom'


export default function Proj3() {
  return (

    <>
       <section className='my-5 py-3'>
       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Industrial Projects 
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> I P </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row">
        <div className="col-md-4 my-5 text-center">
           
         <Link to="/americana" className={`${styles.linkPro}`}> 
         <img src={amricana} alt="" className={`${styles.imgSizeProj}`}/>
         <p className='text-center fw-bold mt-3'>-Americana for food-6th October city </p>
         </Link>  
          </div>
          <div className="col-md-4 my-5 text-center">
              <Link to="/foodstore" className={`${styles.linkPro}`}> 
            <img src={foodstore} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3'>Food Store </p>
             </Link> 
          </div>
          <div className="col-md-4 my-5 text-center">
         
            <img src={sadat} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3'>AL HIJRAH RESIDENTIAL &COMMERCIAL COMPLEX, MAKKAH, KSA</p>
          
          </div>
        </div>
       </div>
       
    </section>

    
    </>
   
  )
}
