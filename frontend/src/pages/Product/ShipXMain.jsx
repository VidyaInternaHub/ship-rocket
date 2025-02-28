import React from 'react'
// import Cnav1 from '../../components/Products/CargoX/Cnav1'
// import {Cnav2} from '../../components/Products/CargoX/Cnav2'
import Nav1 from '../../components/Products/DomesticPage/Nav1'
import {Nav2} from '../../components/Products/DomesticPage/Nav2'


export const ShipXMain = () => {
  return (
    <>
        <div className='mx-4'>
            {/* nav start  */}
            <Nav1/>
            <Nav2/>
            {/* <Cnav2/> */}
        </div>
    </>
  )
}
