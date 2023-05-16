import React from 'react'
import styles from './Form.module.css'
import { Link } from 'react-router-dom'

export default function Form() {
  return (

    <>
   
     <div className='container my-5'>
      <div className={`${styles.bgCard} row p-5`}>
         <div className="col-md-6">
           <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>
              Stay in touch
              <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> s </div>
              <div className="shortline mt-2"></div>
              <div className="longline"></div>
              <div className="shortline mb-2"></div>
            </h2>


<div className=" my-5"> 
<form action="">
<input className={`${styles.formBorder} form-control mb-4 p-3 shadow-none`} type="text" placeholder="Name" aria-label="default input example" />
<input className={`${styles.formBorder} form-control mb-4 p-3 shadow-none`} type="email" placeholder="Email" aria-label="default input example" />
<input className={`${styles.formBorder} form-control mb-4 p-3 shadow-none`}  type="number" placeholder="Phone" aria-label="default input example" />
<textarea className={`${styles.formBorder} form-control shadow-none`} type="text" id="exampleFormControlTextarea1" placeholder="Message"rows="5" ></textarea>
<div className="text-center">
<button type="submit" className={`${styles.btnEdit}  fw-bold mt-4`}> <i className="fa-solid fa-paper-plane"></i> Send Message</button>
</div>
</form>

</div>

  </div>

  <div className="col-md-6" id='career'>
      <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>
            Social media
    <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> s </div>
    <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
      </h2>


      <div className={`${styles.social} d-flex justify-content-center my-5`}>
            
                <div className='my-3'>  <Link to='https://www.facebook.com/ach.decorations?mibextid=LQQJ4d' target={"_blank"}> <i className="fa-brands fa-facebook fs-1 mx-2"> </i> </Link>  </div> 
                <div className='my-3'>  <Link to='https://instagram.com/ach___0?igshid=YmMyMTA2M2Y=' target={"_blank"}><i className="fa-brands fa-instagram fs-1 mx-2"></i></Link>  </div> 
                <div className='my-3'>  <Link to='https://www.linkedin.com/company/architecture-consulting-house/' target={"_blank"}> <i className="fa-brands fa-linkedin fs-1 mx-2"></i> </Link></div> 
                <div className='my-3'>  <Link to='https://www.whatsapp.com' target={"_blank"}><i className="fa-brands fa-whatsapp fs-1 mx-2"></i></Link></div> 
        


      </div>

      <h2 className='text-center fs-1 fw-bolder position-relative mainColor' >
         Careers
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> c </div>
        <div className="shortline mt-2"></div>
        <div className="longline"></div>
        <div className="shortline mb-2"></div>
      </h2>
       <p className='text-center mt-5 fs-5 text-muted'> To apply for a job with <span className={`${styles.color} fs-4`}> ACH </span>  please send your C.V. to: </p>
       <p className='text-center'> <a href="mailto:ach_consultant@yahoo.com" className={`${styles.anchorColor} fs-5`}> ach_consultant@yahoo.com </a>  </p>
  </div>
 
 </div>
</div>
    </>
   
  )
}











