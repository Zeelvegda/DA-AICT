import React from 'react'
import { Link } from 'react-router-dom'
import space from './spacecraft.jpg'
import water from './water.jpg'
import hydro from './hydro.jpg'
import active from './active.jpg'
import carbon from './carbon.jpg'
import multi from './multi.jpg'



export default function Main() {
    const mycard={
        background:"linear-gradient(to top,#7f00ff,#e100ff)"
    }
    return (
        <>
        <div className='card-group'>
            <div className="card m-3" style={mycard}>
                <img src={water} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title fw-bolder text-light fs-4">Water-Based Shielding</h5>
                    <p className="card-text text-light">Water is an effective radiation shield due to its high hydrogen content. It can be used as a liquid or in the form of ice to surround spacecraft or astronauts.</p>
                    <Link to={'sheild'} className="btn btn-light">Explore More</Link>
                </div>
            </div>
            <div className="card m-3" style={mycard}>
                <img src={space} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title fw-bolder  text-light fs-4">Inflatable Spacecraft Modules</h5>
                    <p className="card-text text-light">Inflatable spacecraft modules can provide a larger volume for astronauts while also offering improved radiation shielding due to their thicker walls.
                    </p>
                    <Link to={'Inflatablespacecraft'} className="btn btn-light">Explore More</Link>
                </div>
            </div>
            <div className="card m-3" style={mycard}>
                <img src={hydro} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-light fw-bolder fs-4">Liquid Hydrogen-Based Shielding</h5>
                    <p className="card-text text-light"> <h6>Liquid hydrogen is another effective radiation shield due to its high hydrogen content. It can be used as fuel for spacecraft and also provide radiation shielding.</h6>
                    </p>
                    <Link to={'LiquidHydrogen'} className="btn btn-light">Explore More</Link>
                </div>
            </div>

         </div>
         <div className='card-group' >
         <div className="card m-3" style={mycard}>
             <img src={active} className="card-img-top" />
             <div className="card-body">
                 <h5 className="card-title fw-bolder fs-4 text-light">Active Radiation Shielding</h5>
                 <p className="card-text text-light"> Active radiation shielding involves using magnetic or electric fields to deflect charged particles and reduce radiation exposure.
                 </p>
                 <Link to={'ActiveRadiation'} className="btn btn-light">Explore More</Link>
                 </div>
         </div>
         <div className="card m-3" style={mycard}>
             <img src={multi} className="card-img-top" />
             <div className="card-body">
                 <h5 className="card-title fw-bolder fs-4 text-light">Multi-Layered Insulation (MLI) Blankets</h5>
                 <p className="card-text text-light">MLI blankets are composed of multiple layers of thin, reflective materials that can provide effective radiation shielding while also reducing heat transfer.
                 </p>
                 <Link to={'MultiLayered'} className="btn btn-light">Explore More</Link>
                 </div>
         </div>
         <div className="card m-3" style={mycard}>
             <img src={carbon} className="card-img-top" />
             <div className="card-body">
                 <h5 className="card-title fw-bolder fs-4 text-light">Carbon Nanotubes</h5>
                 <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to={'Carbonnanotube'} className="btn btn-light">Explore More</Link>
                 </div>
         </div>

      </div>
      </>
    )
}