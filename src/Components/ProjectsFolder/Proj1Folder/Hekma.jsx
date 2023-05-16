import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import hekma from '../../Images/pharma-factory1.jpg'
import hekma1 from '../../Images/hekma1.jpg'
import hekma2 from '../../Images/hekma2.jpg'
import hekma3 from '../../Images/hekma3.jpg'
import hekma4 from '../../Images/hekma4.jpg'
import hekma5 from '../../Images/hekma5.jpg'
import hekma6 from '../../Images/hekma6.jpg'
import hekma7 from '../../Images/hekma7.jpg'
import hekma8 from '../../Images/hekma8.jpg'
// import hekma9 from '../../Images/hekma9.jpg'
// import hekma10 from '../../Images/hekma10.jpg'
// import hekma11 from '../../Images/hekma11.jpg'



export default function Hekma() {
  return (

    <>
        <div className="container my-5 py-5">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}>  Hekma Pharma-6th October city  ​</h3>
                <p> Project description: Planning, development and expansion     </p>
                <p>Type of contract: Design and supervision </p>
                <p> Area:  4800 m2 </p>
                <p>Owner Name : Pharma for medicines </p>
                <p>Type of works : Architectural, civil and Electromechanical </p>
            </div>
            <div className="col-md-6">
                <img src={hekma} alt="" className='img-fluid'/>
            </div>   
          </div>

          <div className="row my-5">
          <div className="col-md-3 my-1 text-center">
               <img src={hekma1} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={hekma2} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={hekma3} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={hekma4} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={hekma5} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={hekma6} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={hekma7} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={hekma8} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
       
          </div>
        </div>

    </>
  )
}
