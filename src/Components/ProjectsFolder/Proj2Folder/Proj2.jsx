import React from 'react'
import styles from '../Proj2Folder/Proj2.module.css'
import sheraton from '../../Images/sheraton.jpg'
import goldens from '../../Images/goldens.jpg'
import ksa from '../../Images/ksa.jpg'
import { Link } from 'react-router-dom'


export default function Proj2() {
  return (

    <>
       <section className='my-5 py-3'>
       <div  className={`${styles.bgCard} container my-5 py-5 vh-100`}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Complex Buildings 
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> C B </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row">
        <div className="col-md-4 my-5 text-center">
           
         <Link to="/sheraton" className={`${styles.linkPro}`}> 
         <img src={sheraton} alt="" className={`${styles.imgSizeProj}`}/>
         <p className='text-center fw-bold mt-3'>Sheraton Building</p>
         </Link>  
          </div>
          <div className="col-md-4 my-5 text-center">
              <Link to="/golden" className={`${styles.linkPro}`}> 
            <img src={goldens} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3'>Golden Pyramids </p>
             </Link> 
          </div>
          <div className="col-md-4 my-5 text-center">
             <Link to="/ksa" className={`${styles.linkPro}`}> 
            <img src={ksa} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3'>AL HIJRAH RESIDENTIAL & COMMERCIAL</p>
             </Link> 
         
          </div>


     
        </div>
       </div>
       
    </section>

    
    </>
   
  )
}
