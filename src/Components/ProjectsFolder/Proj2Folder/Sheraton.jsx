import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import sheraton from '../../Images/sheraton.jpg'
import sheraton1 from '../../Images/sheraton1.png'
import sheraton2 from '../../Images/sheraton2.png'
import sheraton3 from '../../Images/sheraton3.jpg'
import sheraton4 from '../../Images/sheraton4.png'
import sheraton5 from '../../Images/sheraton5.png'
import sheraton6 from '../../Images/sheraton6.png'
import sheraton7 from '../../Images/sheraton7.png'
import sheraton8 from '../../Images/sheraton8.png'
import sheraton9 from '../../Images/sheraton9.png'



export default function Sheraton() {
  return (

    <>
        <div className="container my-5 py-5">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> Capital Sheraton ​</h3>
                <p> Project description: Lorem ipsum dolor sit amet.    </p>
                <p>Type of contract: Lorem, ipsum dolor. </p>
                <p> Area:  Lorem. m2 </p>
                <p>Owner Name : Lorem ipsum dolor sit. </p>
                <p>Type of works : Lorem, ipsum dolor. </p>
            </div>
            <div className="col-md-6">
                <img src={sheraton} alt="" className='img-fluid'/>
            </div>   
          </div>

          <div className="row my-5">
          <div className="col-md-4 my-1 text-center">
               <img src={sheraton1} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={sheraton2} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={sheraton3} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={sheraton4} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={sheraton5} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={sheraton6} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={sheraton7} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={sheraton8} alt="" className='img-fluid'/> 
            </div>
            <div className="col-md-4 my-1 text-center">
               <img src={sheraton9} alt="" className='img-fluid'/> 
            </div>


          </div>
        </div>

    </>
  )
}
