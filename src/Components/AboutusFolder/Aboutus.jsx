import React from 'react'
import styles from '../AboutusFolder/Aboutus.module.css'
export default function Aboutus() {
  return (
    <>
    
    <section>
       <div className="container my-5 py-5">
   
        <div className={`${styles.bgCard} row p-5`}>

        <p> <span className={`${styles.color} fs-3`}> : </span></p>       

        <div className="col-md-12 my-3">
   <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>
   Over Vieiw
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> O </div>
        <div className='greenLine'></div>
    </h2>
 <p> To be the architectural consultancy House is the best option in all engineering fields and the first reference and keep abreast of contemporary designs to suit the environment and social culture. Mastering global architecture styles and various local detail in accordance with prevailing implementation systems.</p>
    </div> 



   <div className="col-md-12 my-3">
    <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>
      History
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> H </div>
        <div className='greenLine'></div>
      </h2>

    <p>
   <span className={`${styles.color} fs-3`}>ACH</span>  has been providing architectural,civil engineering and project management services since its founding in <span className={`${styles.color} fs-5`}> 2004 </span>  
    </p>
    <p>Our mission is to design and supervise projects satisfying our clients according to the international standards and regulations.</p>
    <p> We believe the best way to achieve this goal is by providing quality control for our projects during both the design and supervision stages to the satisfy our clients.</p>
    <p>
    ACH has a highly dynamic and experienced staff that are up to date with the latest engineering technologies, software , environmental control systems and sustainability in order to deliver clients engineering solutions with innovative ideas.
    </p>
   </div> 

 
   
    <div className="col-md-12 my-3">
   <h2 className='text-center fs-1 fw-bolder position-relative mainColor'>
    Founder
        <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> F </div>
        <div className='greenLine'></div>
    </h2>

<h3 className={`${styles.color} fs-3`}>Pro. Dr. Ashraf EL-sayed Bastawisy</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum quae sed quasi tempore recusandae distinctio provident, vitae facere molestiae laborum deleniti id ex iure nemo tempora repudiandae. Iure, sint! Non sunt voluptatum voluptas modi animi quasi atque necessitatibus fugiat!</p>
 
    </div> 

      </div>
       </div>
       
    </section>
   
    </>
  )
}
