import React from 'react'
import Contact from './Contact'

function About() {
  return (
    <>
    
    <div className='about '>
<div className='row about_developer '>
<div className='col-lg-5 col-md-12 col-sm-12 about_content'>
<h2>About Itawa Real Estate Developer</h2>
<p className='py-3 px-3'>The leading real estate marketplace. Search millions of for-sale and rental listings, 
    compare home values and connect. With a decade of experience to back the expertise, 
    Itawa Developers, established under the flagship of Real Estate, bring to you a
     project of dreams - With it's prime, affordable 2BHK Independent floors, 
     and dedicated staff with more than 20 years experience in real estate 
     business, We Can Make You Rich. How can I make sure my team is ready?
      Read on how we manage our company efficiently
     so that everyone has one day out of every month where they have time for fun!</p>

     <div className='flex '>

<div>

<div className='property text-center'><h3 className=''>540</h3>
<h6>PROJECTS COMPLETED</h6></div>

<div className='property'><h3 className=''>45</h3>
<h6>MILLION SQ. FEET AREA DEVELOPED</h6></div>
</div>


<div >
<div className='property'><h3 className=''>20</h3>
<h6>YEARS OF BUILDING TRUST</h6></div>

<div className='property'><h3>450</h3>
<h6>EMPLOYEES IN HOUSE</h6></div>
</div>


<div >
  <div className='property'><h3 className=''>35</h3>
<h6>RESIDENTIAL TOWNSHIPS</h6></div>

<div className='property'><h3 className=''>100%</h3>
<h6>CUSTOMER SETISFICATION</h6></div>
</div>

</div>


</div>

<div className='col-lg-5 col-md-12 col-sm-12 '>
<Contact/>

</div>
</div>
    </div>
   
    </>
  )
}

export default About