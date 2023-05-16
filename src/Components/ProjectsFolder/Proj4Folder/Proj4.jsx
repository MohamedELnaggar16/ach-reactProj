import React from 'react'
import styles from '../Proj4Folder/Proj4.module.css'
import interior1 from '../../Images/interior1.jpg'
import interior2 from '../../Images/interior2.jpg'
import interior3 from '../../Images/interior3.jpg'
import interior4 from '../../Images/interior4.jpg'
import interior5 from '../../Images/interior5.jpg'
import interior6 from '../../Images/interior6.jpg'
import interior7 from '../../Images/interior7.jpg'
import interior8 from '../../Images/interior8.jpg'



export default function Proj3() {
  return (

    <>
       <section className='my-5 py-3'>
       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Interior Design 
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> I D </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row">
        <div className="col-md-4 my-3 text-center">
         <img src={interior1} alt="" className={`${styles.imgSizeProj1}`}/>
       
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={interior2} alt="" className={`${styles.imgSizeProj1}`}/>
       
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={interior3} alt="" className={`${styles.imgSizeProj1}`}/>
       
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={interior4} alt="" className={`${styles.imgSizeProj1}`}/>
       
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={interior5} alt="" className={`${styles.imgSizeProj1}`}/>
       
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={interior6} alt="" className={`${styles.imgSizeProj1}`}/>
       
        </div>
        <div className="col-md-6 my-3 text-center">
         <img src={interior7} alt="" className={`${styles.imgSizeProj1}`}/>
       
        </div>
        <div className="col-md-6 my-3 text-center">
         <img src={interior8} alt="" className={`${styles.imgSizeProj1}`}/>
       
        </div>
          
        </div>
       </div>
       
    </section>

    
    </>
   
  )
}
