import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import andalos from '../../Images/andalos.jpg'
import andalos1 from '../../Images/andalos1.jpg'
import andalos2 from '../../Images/andalos2.jpg'
import andalos3 from '../../Images/andalos3.jpg'
import andalos4 from '../../Images/andalos4.jpg'
import andalos5 from '../../Images/andalos5.jpg'
import andalos6 from '../../Images/andalos6.jpg'
import andalos7 from '../../Images/andalos7.jpg'
import andalos8 from '../../Images/andalos8.jpg'


export default function Andalos() {
  return (

    <>
        <div className="container my-5 py-5">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> Nerhado for medicines-6th October city</h3>
                <p> Project description: Extension of store and production and development services building 6th October city    </p>
                <p>Type of contract: Design and supervision </p>
                <p> Area:  5600 m2 </p>
                <p>Owner Name : AL-Andalus for medicines </p>
                <p>Type of works : Architectural, civil and Electromechanical</p>
            </div>
            <div className="col-md-6">
                <img src={andalos} alt="" className='img-fluid'/>
            </div>   
          </div>

          <div className="row my-5">
          <div className="col-md-3 my-1 text-center">
               <img src={andalos5} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={andalos6} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={andalos7} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={andalos8} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={andalos1} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={andalos2} alt="" className={`${styles.imgSizeProj1}`} /> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={andalos3} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
            <div className="col-md-3 my-1 text-center">
               <img src={andalos4} alt="" className={`${styles.imgSizeProj1}`}/> 
            </div>
          </div>
        </div>

    </>
  )
}
