import React from 'react'
import servicesImg from '../Images/services.jpg'
import styles from '../ServicesFolder/Services.module.css'

export default function Services() {
  return (
  <>
  <div className="container my-5 py-5">
    <div className="row">
      <div className={`${styles.bgCard} col-md-12`}>
        <h2 className='text-center mainColor pt-3'> Organizational Structure </h2>
        <div className="shortline mt-2"></div>
    <div className="longline"></div>
    <div className="shortline mb-2"></div>
        <div className='text-center'> <img src={servicesImg} alt="" className='img-fluid '/> </div>
        
      </div>
      <div className="col-md-12 my-3">
        <h2 className='fs-2'> Bureau Activity </h2>
        <p className={`${styles.color} fs-4`}>Provide advisory services to engineering projects include the following:</p>
        <p> <span className={`${styles.color}`}>1:</span>  Architectural Design and Drawing Execution of public and private buildings.</p>
        <p> <span className={`${styles.color}`}>2:</span>  Continuous or periodic supervision on implementation and quality control.</p>
        <p> <span className={`${styles.color}`}>3:</span> Project – Urban planning, Urban Design and Infrastructure.</p>
        <p> <span className={`${styles.color}`}>4:</span> Preparation of designs and execution drawings operational. </p>
        <p> <span className={`${styles.color}`}>5:</span> Preparation of technical specifications and lists of quantities and general conditions for projects.</p>
        <p> <span className={`${styles.color}`}>6:</span> Examining and evaluating and reviewing designs for constructions.</p>
        <p> <span className={`${styles.color}`}>7:</span> Analysis and examination of tenders and recommendations for action.</p>
        <p> <span className={`${styles.color}`}>8:</span> Project Management.</p>
        <p> <span className={`${styles.color}`}>9:</span> Feasibility studies and economic studies needed for engineering projects </p>
      </div>
    </div>
  </div>
    
  </>
  )
}
