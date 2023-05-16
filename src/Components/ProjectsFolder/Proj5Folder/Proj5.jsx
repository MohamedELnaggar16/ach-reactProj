import React from 'react'
import styles from '../Proj5Folder/Proj5.module.css'
import planning1 from '../../Images/planning1.jpg'
import planning2 from '../../Images/planning2.jpg'
import bank1 from '../../Images/bank1.jpg'
import bank2 from '../../Images/bank2.jpg'
import bank3 from '../../Images/bank3.jpg'
import villa1 from '../../Images/villa1.jpg'
import villa2 from '../../Images/villa2.jpg'
import villa3 from '../../Images/villa3.jpg'
import villa4 from '../../Images/villa4.jpg'
import villa5 from '../../Images/villa5.jpg'
import em1 from '../../Images/em1.jpg'
import em2 from '../../Images/em2.jpg'
import em3 from '../../Images/em3.jpg'
import mp1 from '../../Images/mp1.jpg'
import mp2 from '../../Images/mp2.jpg'


export default function Proj3() {
  return (

    <>
       <section className='my-5 py-3'>
       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Urban Planning  
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> U P </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row">
        <div className="col-md-12 my-3 text-center">
         <img src={planning1} alt="" className='img-fluid'/>
        </div>
        <div className="col-md-12 text-center">
         <img src={planning2} alt="" className='img-fluid'/>
        </div>
 
          
        </div>
       </div>

       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Banks  
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> B </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row mt-3">
        <div className="col-md-4  text-center">
         <img src={bank1} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        <div className="col-md-4 text-center">
         <img src={bank2} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        <div className="col-md-4 text-center">
         <img src={bank3} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
 
          
        </div>
       </div>
       
       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Residential Buildings   
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> R B </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row">
        <div className="col-md-4 my-3 text-center">
         <img src={villa1} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={villa2} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={villa3} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={villa4} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={villa5} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        </div>
       </div>

       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Educational And Medical Buildings   
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> E M </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row">
        <div className="col-md-4 my-3 text-center">
         <img src={em1} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        <div className="col-md-4 my-3 text-center d-flex align-items-center">
            <div>
            <img src={em3} alt="" className={`${styles.imgSizeProj}`}/>
            </div>
        
        </div>
        <div className="col-md-4 my-3 text-center">
         <img src={em2} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        </div>
       </div>

       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Management and public Buildings   
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> M P </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row">
        <div className="col-md-6 my-3 text-center ">
            <img src={mp1} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        <div className="col-md-6 my-3 text-center">
         <img src={mp2} alt="" className={`${styles.imgSizeProj}`}/>
        </div>
        </div>
       </div>
    </section>

    
    </>
   
  )
}
