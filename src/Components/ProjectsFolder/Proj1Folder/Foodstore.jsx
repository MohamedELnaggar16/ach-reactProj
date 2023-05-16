import React from 'react'
import styles from '../Proj1Folder/Proj1.module.css'
import food from '../../Images/food.jpg'
// import food1 from '../../Images/food1.jpg'




export default function Americana() {
  return (

    <>
        <div className="container my-5 py-5 vh-100">
          <div className="row  align-items-center">
            <div className="col-md-6">
                <h3 className={`${styles.color} my-3`}> Food Store  ​</h3>
                <p> Project description: Food Store    </p>
                <p>Type of contract: Design and supervision </p>
                <p> Area:  2120 m2 , Concert And Steel Structur </p>
                <p>Owner Name : travco Group Factorys-Soma bay-Hurgada </p>
                <p>Type of works : Architectural, Electromechanical and Decorations </p>
            </div>
            <div className="col-md-6">
                <img src={food} alt="" className='img-fluid'/>
            </div>   
          </div>

        </div>

    </>
  )
}
