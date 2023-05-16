import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import riva from '../../Images/riva.jpg'
// import riva1 from '../../Images/riva1.jpg'




export default function Ariva() {
  return (

    <>
        <div className="container my-5 py-5 vh-100">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> RIVA Pharma–Nasir City ​</h3>
                <p> Project description: Administrative and production building 10th Ramadan    </p>
                <p>Type of contract: Design </p>
                <p> Area:  13000 m2 </p>
                <p>Owner Name : Solvida for medicines </p>
                <p>Type of works : Architectural, civil </p>
            </div>
            <div className="col-md-6 text-center">
                <img src={riva} alt="" className='img-fluid'/>
            </div>   
          </div>

          {/* <div className="row my-5">
          <div className="col-md-8 my-1 text-center m-auto">
               <img src={riva1} alt="" className='img-fluid'/> 
            </div>
        

          </div> */}
        </div>

    </>
  )
}
