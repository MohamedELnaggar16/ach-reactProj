import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import pharmfac2 from '../../Images/pharma-factory5.jpg'
import pharmfac3 from '../../Images/nerhado2.jpg'
import pharmfac5 from '../../Images/nerhado4.jpg'
import pharmfac6 from '../../Images/nerhado5.jpg'

export default function Nerhado() {
  return (

    <>
        <div className="container my-5 py-5">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> Nerhado for medicines-6th October city </h3>
                <p> Project description: Administrative and production building 6th October city  </p>
                <p>Type of contract: Design</p>
                <p> Area:  11500 m2</p>
                <p>Owner Name : Nerhado for medicines</p>
                <p>Type of works : Architectural, civil </p>
            </div>
            <div className="col-md-6">
                <img src={pharmfac2} alt="" className='img-fluid'/>
            </div>   
          </div>

          <div className="row my-5">
            <div className="col-md-4 my-1 text-center">
               <img src={pharmfac6} alt="" className={`${styles.imgSizeProj}`}/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={pharmfac3} alt="" className={`${styles.imgSizeProj}`} /> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={pharmfac5} alt="" className={`${styles.imgSizeProj}`}/> 
            </div>
          </div>
        </div>








  
 
    </>
  )
}
