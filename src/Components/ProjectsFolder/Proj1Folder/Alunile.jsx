import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import sadat from '../../Images/sadatfac.jpg'





export default function Alunile() {
  return (

    <>
        <div className="container my-5 py-5">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> Alunile Factory  ​</h3>
                <p> Project description: bla bla    </p>
                <p>Type of contract: bla bla </p>
                <p> Area:  bla bla </p>
                <p>Owner Name : bla bla </p>
                <p>Type of works : bla bla </p>
            </div>
            <div className="col-md-6">
                <img src={sadat} alt="" className='img-fluid'/>
            </div>   
          </div>

          <div className="row my-5">
          <div className="col-md-12 my-1 text-center">
               <img src={sadat} alt="" className='img-fluid'/> 
            </div>
    
          </div>
        </div>

    </>
  )
}
