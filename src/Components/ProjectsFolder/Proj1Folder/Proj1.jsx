import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import pharmfac1 from '../../Images/pharma-factory1.jpg'
import pharmfac2 from '../../Images/pharma-factory5.jpg'
import pharmfac3 from '../../Images/pharma-factory3.jpg'
import pharmfac4 from '../../Images/pharma-factory4.jpg'
import pharmfac5 from '../../Images/pharma-factory2.jpg'
import amricana from '../../Images/amricana.jpg'
import foodstore from '../../Images/food.jpg'
import sadat from '../../Images/sadatfac.jpg'
import { Link } from 'react-router-dom'


export default function Proj1() {
  return (

    <>
       <section className='my-5 py-3'>
       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Pharma Projects
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> FP </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
        </h2>
        <div className="row">
        <div className="col-md-4 my-5">
           
         <Link to="/nerhado" className={`${styles.linkPro}`}> 
         <img src={pharmfac2} alt="" className={`${styles.imgSizeProj}`}/>
         <p className='text-center fw-bold mt-3 '>Nerhado for medicines-6th October city</p>
         </Link>  
          </div>
          <div className="col-md-4 my-5">
              <Link to="/andalos" className={`${styles.linkPro}`}> 
            <img src={pharmfac5} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3 '>AL-Andalus for medicines–6th October city </p>
             </Link> 
          </div>
          <div className="col-md-4 my-5">
          <Link to="/solvida" className={`${styles.linkPro}`}> 
            <img src={pharmfac3} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3'>SOLVIDA Pharma-10th Ramadan</p>
            </Link> 
          </div>
        </div>
        <div className="row">
        <div className="col-md-4 text-center">
        <Link to="/hekma" className={`${styles.linkPro}`}> 
            <img src={pharmfac1} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3 '>Hekma Pharma-6th October city</p>
            </Link> 
          </div>
          <div className="col-md-4 text-center">
          <Link to="/riva" className={`${styles.linkPro}`}> 
            <img src={pharmfac4} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3 '> RIVA Pharma–Nasir City </p>
            </Link> 
          </div>
       
        </div>
       </div>
     
       <div  className={`${styles.bgCard} container my-5 py-5 `}>
        
        <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>  Industrial Projects 
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> IP </div>
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
              <Link to="/alunile" className={`${styles.linkPro}`}> 
            <img src={sadat} alt="" className={`${styles.imgSizeProj}`}/>
            <p className='text-center fw-bold mt-3 '>Alunile Factory </p>
             </Link> 
          
          
          </div>
        </div>
       </div>
    </section>

    
    </>
   
  )
}
