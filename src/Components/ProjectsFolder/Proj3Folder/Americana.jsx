import React from 'react'
import styles from '../Proj3Folder/Proj3.module.css'
import americana from '../../Images/amricana.jpg'
import americana1 from '../../Images/amricana1.jpg'
import americana2 from '../../Images/amricana2.jpg'
import americana3 from '../../Images/amricana3.jpg'
import americana4 from '../../Images/amricana4.jpg'



export default function Americana() {
  return (

    <>
        <div className="container my-5 py-5">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> Americana for food-6th October city  ​</h3>
                <p> Project description: Development of food factory   </p>
                <p>Type of contract: Design and supervision </p>
                <p> Area:  32000 m2 </p>
                <p>Owner Name : Americana </p>
                <p>Type of works : Architectural, civil and Electromechanical </p>
            </div>
            <div className="col-md-6">
                <img src={americana} alt="" className='img-fluid'/>
            </div>   
          </div>

          <div className="row my-5">
          <div className="col-md-6 my-1 text-center">
               <img src={americana1} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-6 my-1 text-center">
               <img src={americana2} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-6 my-1 text-center">
               <img src={americana3} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-6 my-1 text-center">
               <img src={americana4} alt="" className='img-fluid'/> 
            </div>
          </div>
        </div>

    </>
  )
}
