import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const myStyle={
        backgroundImage:'url("./assets/logo.jpg")',
        border:"1px solid black" , 
        backgroundSize:"cover",
        height:"60%", 

    }

    const myimg={
        background:"linear-gradient(to top,#7f00ff,#e100ff)"
    }
   
    return (
        <>
      <div style={myStyle}>
      <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to={'mypage'} class="nav-link active fs-5 fw-bolder" aria-current="page">Home</Link>
                  </li>
                  <li class="nav-item">
                  <Link to={'mypage'} class="nav-link active fs-5 fw-bolder" aria-current="page">Skils</Link>

                  </li>
                  <li class="nav-item">
                  <Link to={'mypage'} class="nav-link active fs-5 fw-bolder" aria-current="page">Projects</Link>
                  </li>
                </ul>
               
                  <Link  to={'Facebook'} className='btn btn-primary me-5'>f</Link>
                  <Link  to={'linkedin'} className='btn btn-primary me-5'>in</Link>
                  <button class="btn btn-light me-5" type="submit">Let's Connect</button>
             

                </div>
            </div>
          </nav>
          <div>
            <div class="col-auto mt-3 ms-5">
              <button type="submit" style={myimg} class="btn btn-primary mb-3 mt-5 fs-5 fw-bolder">Welcome to my profilo</button>
            </div>
            <br/>
            <div  className='loader mt-5' ></div>           
             <p className='text-light fw-bolder m-5 fs-3'>
            Space technology refers  to the tools,<br/> techniques, and knowledge used to  <br/> explore, understand,  and utilize <br/>space.It encompasses a wide range <br/> of disciplines, including:
            </p>
          </div>

          </div>

        </>
    )
}