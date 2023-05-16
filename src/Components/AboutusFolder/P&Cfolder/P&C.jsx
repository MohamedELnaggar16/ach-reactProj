import React from 'react'
import styles from '../P&Cfolder/P&C.module.css'
import certf1 from '../../Images/certf1.jpg'
import certf2 from '../../Images/certf2.jpg'
import certf3 from '../../Images/certf3.jpg'
import certf4 from '../../Images/certf4.png'
import certf5 from '../../Images/certf5.jpg'
import certf6 from '../../Images/certf6.jpg'

export default function PandC() {
  return (
    <>
    
    <section className='mt-5 pt-5'>
      
   
        <div className={`${styles.bgCard} container my-5 py-5`}>

           

       
    <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>
        Policies & Certifications
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> & </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-5"></div>
    </h2>
 <div className="row text-center">

  <div className="col-md-4 mt-1">
<img src={certf2} alt="" className={`${styles.imgSize2}`}/>
  </div>
  <div className="col-md-4 mt-1">
<img src={certf3} alt="" className={`${styles.imgSize2}`}/>
  </div>
  <div className="col-md-4 mt-1">
<img src={certf4} alt="" className={`${styles.imgSize2}`}/>
  </div>
  <div className="col-md-4 mt-1">
<img src={certf1} alt="" className={`${styles.imgSize2}`}/>
  </div>
  <div className="col-md-4 mt-1">
<img src={certf6} alt="" className={`${styles.imgSize2}`}/>
  </div>
  <div className="col-md-4 mt-1">
<img src={certf5} alt="" className={`${styles.imgSize2}`}/>
  </div>

 </div>
    </div> 


      
    
       
    </section>
   
    </>
  )
}
