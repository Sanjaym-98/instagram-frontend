import React from 'react';
import './LandingPage.css'
import { Link } from 'react-router-dom';
 
export default function Landing_page() {
  return(
  <div class="containers">
  {/* <h2>Landing Page</h2> */}
  <div className='imagecontainer land'>
  <section class="left">
  <img class="landing_page_image" src="images/landingpage.jpg" alt="landing_pages"></img>
  </section>
  </div>
  <div className='land button'>
    <section class="right">
    <h1 class="text">10x Project</h1>
    <Link to="/postview"><button className='btn'> Enter </button></Link>
  </section>
  </div>
  
  </div>
  )
}
