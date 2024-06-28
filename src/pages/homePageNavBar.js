import React from 'react'
import { Link } from 'react-router-dom'

function homePageNavBar() {
  return (
    <div style={{backgroundColor:"aquamarine"}} >
    <nav class="navbar navbar-expand-lg " id='navbody'>
<div class="container-fluid">
  <span class="navbar-toggler"></span>
<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  <a style={{color:'black',marginLeft:"10px",marginTop:"10px",style:"italic"}} class="navbar-brand " >RESUME BUILDER APPLICATION</a>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<Link to='/create' style={{textDecoration:"none"}}><a style={{marginLeft:"700px" ,color:'black'}} class="nav-link disabled  " aria-disabled="true">CREATE NEW</a></Link> 
<Link to='/resu' style={{textDecoration:"none"}}> <a style={{color:'black',marginLeft:"50px"}}class="nav-link disabled " aria-disabled="true">VIEW RESUME</a></Link>

 
   <button style={{color:'black',marginLeft:"50px"}}class="btn btn-outline-success " type="button" >LOGOUT</button>
   </ul>
</div>
</div>
</nav>
</div>

  )
}

export default homePageNavBar