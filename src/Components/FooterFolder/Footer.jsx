import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (

    <>
    <div className="container-fluid">
      <div className="row">
       
          <div className={`${styles.footerBg} text-center p-2 text-white col-md-12`}>All <i class="fa-regular fa-copyright"></i> copy rights reserved for Architectural Consulting House 2023</div>
        
      </div>
    </div>
   
    </>
   
  )
}
