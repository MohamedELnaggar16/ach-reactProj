import React from 'react'
import styles from '../Proj2Folder/Proj2.module.css'
import golden from '../../Images/goldens.jpg'
import golden1 from '../../Images/golden1.jpg'
import golden2 from '../../Images/golden2.jpg'
import golden3 from '../../Images/golden3.jpg'
import golden4 from '../../Images/golden4.jpg'




export default function Solvida() {
  return (

    <>
        <div className="container my-5 py-5">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> Golden Pyramids Building ​</h3>
                <p> Project description: Commercial administrative Residential building    </p>
                <p>Type of contract: Design and supervision </p>
                <p> Area:  25000 m2 </p>
                <p>Owner Name : Pyramids group </p>
                <p>Type of works : Architectural, Electromechanical and Decorations </p>
            </div>
            <div className="col-md-6">
                <img src={golden} alt="" className='img-fluid'/>
            </div>   
          </div>

          <div className="row my-5">
          <div className="col-md-6 my-1 text-center">
               <img src={golden1} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-6 my-1 text-center">
               <img src={golden2} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-6 my-1 text-center">
               <img src={golden3} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-6 my-1 text-center">
               <img src={golden4} alt="" className='img-fluid'/> 
            </div>
          
          </div>
        </div>

    </>
  )
}
