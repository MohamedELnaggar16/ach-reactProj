import React from 'react'
import styles from './OurServices.module.css'
import service2 from '../Images/site.jpg'
import service3 from '../Images/blog.jpg'
import service4 from '../Images/3d.jpg'
import service5 from '../Images/interior.jpg'
import service6 from '../Images/engineering-drawing.jpg'
import service7 from '../Images/project-management.jpg'
import service8 from '../Images/model.jpg'
import service9 from '../Images/restoration.jpg'



export default function OurServices() {
   
  return (
  <>

  <div className={`container mt-3 pt-3`} >
    <div className={`${styles.bgCard} p-5`}>

    <h2 className='text-center fs-1 fw-bolder position-relative mainColor mb-3'>
    Our services
    <div className={`${styles.middleTric} position-absolute top-0 start-50 translate-middle `}> s </div>
    <div className="shortline mt-2"></div>
    <div className="longline"></div>
    <div className="shortline mb-2"></div>
    </h2>
    <p className='mb-5'> <span className={`${styles.color} fs-5`}>ACH</span> offers a full range of services providing you with a one stop turnkey solution for your development’s design requirements. Our services include master planning, interior design, engineering, architecture,structure,electromechanical design, site supervision and project management.</p>

<div className="row my-3">

    <div className="card col-md-4 text-center border-0 my-1" >
      <div className={`${styles.hidden}`}>
      <img src={service4} className={`${styles.imgHover} ${styles.imgSize} card-img-top `} alt="..."/>
      </div>
     
      <div className={`${styles.divBG} card-body`}>
        <h2 className={`${styles.h2Hover} ${styles.color} fs-5`}>Architectural Design​</h2>
        <p className="card-text"> ​Our designs are innovative, fresh and inspirational in both form and function</p>
      </div>
    </div>

     <div className="card col-md-4 text-center border-0 my-1" >
     <div className={`${styles.hidden}`}>
      <img src={service5} className={`${styles.imgHover} ${styles.imgSize} card-img-top `} alt="..."/>
      </div>
      <div className={`${styles.divBG} card-body`}>
        <h2 className={`${styles.h2Hover} ${styles.color} fs-5`}>Interior Design​</h2>
        <p className="card-text"> Each space in every project is designed to perfection, using the latest advancements architecture</p>
      </div>
    </div>
   
     <div className="card col-md-4 text-center border-0 my-1" >
     <div className={`${styles.hidden}`}>
      <img src={service2} className={`${styles.imgHover} ${styles.imgSize} card-img-top `} alt="..."/>
      </div>
      <div className={`${styles.divBG} card-body`}>
        <h2 className={`${styles.h2Hover} ${styles.color} fs-5`}>Site Supervision​</h2>
        <p className="card-text"> Our team has an extensive knowledge of all engineering disciplines and they are trained to reserve our client’s interests.</p>
      </div>
    </div>
</div>
         
<div className="row my-3">
   
     <div className="card col-md-4 text-center border-0 my-1" >
     <div className={`${styles.hidden}`}>
      <img src={service7} className={`${styles.imgHover} ${styles.imgSize} card-img-top `} alt="..."/>
      </div>
      <div className={`${styles.divBG} card-body`}>
        <h2 className={`${styles.h2Hover} ${styles.color} fs-5`}>Project Management​</h2>
        <p className="card-text"> Our dedicated project managers will make sure that all project stages are completed on time, within budget and complied with quality standards.</p>
      </div>
    </div>
    <div className="card col-md-4 text-center border-0 my-1" >
    <div className={`${styles.hidden}`}>
      <img src={service8} className={`${styles.imgHover} ${styles.imgSize} card-img-top `} alt="..."/>
      </div>
      <div className={`${styles.divBG} card-body`}>
        <h2 className={`${styles.h2Hover} ${styles.color} fs-5`}>Models Maker </h2>
        <p className="card-text"> Making models for buildings and public sites</p>
      </div>
    </div>
     <div className="card col-md-4 text-center border-0 my-1" >
     <div className={`${styles.hidden}`}>
      <img src={service6} className={`${styles.imgHover} ${styles.imgSize} card-img-top `} alt="..."/>
      </div>
      <div className={`${styles.divBG} card-body`}>
        <h2 className={`${styles.h2Hover} ${styles.color} fs-5`}>Electro-mechanical Design​</h2>
        <p className="card-text"> manufacture and maintenance of equipment and products based on the combination of electronic circuits and mechanical systems</p>
      </div>
    </div>
</div>
   
<div className="row my-3 d-flex justify-content-center">
   

    <div className="card col-md-4 text-center border-0 my-1" >
    <div className={`${styles.hidden}`}>
      <img src={service3} className={`${styles.imgHover} ${styles.imgSize} card-img-top `} alt="..."/>
      </div>
      <div className={`${styles.divBG} card-body`}>
        <h2 className={`${styles.h2Hover} ${styles.color} fs-5`}>Structural Design​</h2>
        <p className="card-text"> Our highly qualified Structural engineers are equipped with the latest structural design technologies.</p>
      </div>
    </div>
      <div className="card col-md-4 text-center border-0 my-1" >
      <div className={`${styles.hidden}`}>
      <img src={service9} className={`${styles.imgHover} ${styles.imgSize} card-img-top `} alt="..."/>
      </div>
      <div className={`${styles.divBG} card-body`}>
        <h2 className={`${styles.h2Hover} ${styles.color} fs-5`}>Archeology restoration </h2>
        <p className="card-text"> Providing technical consultations for meticulous restoration works and architectural restoration works for archaeological and historical facilities.</p>
      </div>
    </div>
</div>     

  
</div>
</div> 

  
  </>
  )
}



