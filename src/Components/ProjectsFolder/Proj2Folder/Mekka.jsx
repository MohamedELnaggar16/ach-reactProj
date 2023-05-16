import React from 'react'
import styles from '../Proj2Folder/Proj2.module.css'
import ksa from '../../Images/ksa.jpg'



export default function Mekka() {
  return (

    <>
        <div className="container my-5 py-5 vh-100">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> AL HIJRAH RESIDENTIAL & COMMERCIAL COMPLEX, MAKKAH, KSA ​</h3>
                <p> Project description: bla bla    </p>
                <p>Type of contract: bla bla </p>
                <p> Area:  bla bla </p>
                <p>Owner Name : bla bla </p>
                <p>Type of works : bla bla </p>
            </div>
            <div className="col-md-6">
                <img src={ksa} alt="" className='img-fluid'/>
            </div>   
          </div>

          {/* <div className="row my-5">
          <div className="col-md-12 my-1 text-center">
               <img src={ksa} alt="" className='img-fluid'/> 
            </div>
       
          
          </div> */}
        </div>

    </>
  )
}
