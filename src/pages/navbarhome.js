import React from 'react'
import { Link } from 'react-router-dom'

function navbarhome() {
  return (
    <div>
            <div style={{backgroundColor:"aquamarine"}} >
    <nav class="navbar navbar-expand-lg " id='navbody'>
<div class="container-fluid">
  <span class="navbar-toggler"></span>
<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  <a style={{color:'black',marginLeft:"10px",marginTop:"10px",style:"italic"}} class="navbar-brand " >RESUME BUILDER APPLICATION</a>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
{/* <Link to='/createnew' style={{textDecoration:"none"}}><a style={{marginLeft:"700px" ,color:'black'}} class="nav-link disabled  " aria-disabled="true">CREATE NEW</a></Link> 
<a style={{color:'black',marginLeft:"50px"}}class="nav-link disabled " aria-disabled="true">VIEW RESUME</a> */}

 
   <Link to="/homepage1" style={{color:'black',marginLeft:"1000px"}}class="btn btn-outline-success " type="button" >LOGOUT</Link>
   </ul>
</div>
</div>
</nav>
</div>

    </div>
  )
}

export default navbarhome