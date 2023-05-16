import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import solvida from '../../Images/solvida.jpg'
import solvida1 from '../../Images/solvida1.jpg'
import solvida2 from '../../Images/solvida2.jpg'



export default function Solvida() {
  return (

    <>
        <div className="container my-5 py-5">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> SOLVIDA Pharma-10th Ramadan ​</h3>
                <p> Project description: Administrative and production building 10th Ramadan    </p>
                <p>Type of contract: Design </p>
                <p> Area:  13000 m2 </p>
                <p>Owner Name : Solvida for medicines </p>
                <p>Type of works : Architectural, civil </p>
            </div>
            <div className="col-md-6">
                <img src={solvida} alt="" className='img-fluid'/>
            </div>   
          </div>

          <div className="row my-5">
          <div className="col-md-6 my-1 text-center">
               <img src={solvida1} alt="" className={`${styles.imgSizeProj}`}/> 
            </div>
            <div className="col-md-6 my-1 text-center">
               <img src={solvida2} alt="" className={`${styles.imgSizeProj}`}/> 
            </div>

          </div>
        </div>

    </>
  )
}
