import React from 'react'
import styles from './Contuctus.module.css'



export default function Contactus() {
  return (
<>

    <section className='mb-3 pb-3' id='contactus'> 
    <div className="container">


    <div className={`${styles.bgCard} row p-5 `}>
       
    <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>
           Contact Us
    <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> c</div>
    <div className="shortline mt-2"></div>
    <div className="longline"></div>
    <div className="shortline mb-2"></div>
            </h2>

            <div className='col-md-6 py-1'>
           
          <div className='d-flex align-items-center  my-3 '>
             <div >
             <i className={`${styles.iconsColor} fa-solid fa-location-dot ps-3 fs-1`}></i> 
             </div>
             <div className='mx-5'>
           <p className='text-muted'>Adress</p>
           <p className={`mainColor`}>6th of October city , Central Axis Parallel Road , </p>
           <p className={`mainColor`}>City Star Towers , Tower No. 4 –3rd floor – 6th flat </p>
             </div>
          </div>
          <div className='greenLine w-25'></div>
          <div className='d-flex  align-items-center  my-3'>
             <div >
             <i className={`${styles.iconsColor} fa-solid fa-mobile ps-3 fs-1`}></i> 
             </div>
             <div className='mx-5'>
           <p className='text-muted'>Mobile</p>
           <p className={`mainColor`}>01113419811</p>
             </div>
          </div>
          <div className='greenLine w-25'></div>
          <div className='d-flex  align-items-center  my-3'>
             <div>
             <i className={`${styles.iconsColor} fa-solid fa-envelope ps-3 fs-1`}></i> 
             </div>
             <div className='mx-5'>
           <p className='text-muted'>E-mail</p>
           <p> <a href="mailto:ach_consultant@yahoo.com" className={`${styles.anchorColor}`}> ach_consultant@yahoo.com </a>  </p>
           <p><a href="mailto:ach_bastawissi2005@yahoo.com" className={`${styles.anchorColor}`}>ach_bastawissi2005@yahoo.com</a>  </p>
             </div>
          </div>  
          
            

            
            </div>

            <div className="col-md-6 py-1">


            <iframe title='ach' className='m-auto w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4262.395652227217!2d30.920277882391048!3d29.9585412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458560d6918ea69%3A0xcbdb475b8dea016d!2sCity%20Stars%20Towers%20Mall%20October!5e1!3m2!1sar!2seg!4v1678539077355!5m2!1sar!2seg" 
            
            style={{border:"0"}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            
            </div>

         
        </div>
      </div>
    </section>


 
    </>    
   
  )
}

