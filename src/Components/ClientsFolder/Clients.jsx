import React from 'react'
import styles from './Clients.module.css'
import clientsImg from '../Images/clients.png'
import clientsImg2 from '../Images/clients2.png'
export default function Clients() {
  return (
<>



 <div className="container mt-5">
  <div className="row">
    <div className="col-md-12">
    <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>
           Our Clients
        <div class={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> c </div>
        <div className="shortline mt-2"></div>
    <div className="longline"></div>
    <div className="shortline mb-2"></div>
      </h2>
      <div>
      <img src={clientsImg} alt="" className='img-fluid'/>
      </div>
     <div className='text-center'>
     <img src={clientsImg2} alt="" className='img-fluid text-center'/>
     </div>
     
    </div>
  </div>
 </div>
    </>    
   
  )
}

