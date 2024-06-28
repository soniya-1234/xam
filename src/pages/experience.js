import React from "react";
import "./experience.css";
import { Link } from "react-router-dom";

function experience() {
  return (
 <>
<tr>
  <th><p className='work col-sm-6'>WORK EXPERIENCE</p>
  <hr></hr>
  <div id="img8"> 
  </div>

</th>

</tr>
<tr>
<td >
</td>
</tr>


 <div class="fw-bold1 ms-4">COMPANY NAME:<input type="text"/></div>
<div class="fw-bold2 ms-4">POSITION:<input type="text"/></div>
<div class="fw-bold3 ms-4">DURATION:<input type="text"/></div> 

   <td className="col-sm-6">
  </td> 


  <div class="d-grid  col-2 mx-auto">
     <Link to="/homepage1" class="btn btn-danger" type="button">submit</Link>
 </div> 

        

          
      </>   
          

/* <>
  
<p className='work'>WORK EXPERIENCE</p>
    <ul class="list-group list-group-numbered" style={{height:"50px",width:"700px",marginTop:"50px",marginLeft:"90px"}}>
      <li class="list-group-item d-flex justify-content-between align-items-start" style={{backgroundColor:"aquamarine"}}>
        <div class=" me-auto">
          <div class="fw-bold ms-4">COMPANY NAME:</div>
          <input type="text"  id='sel1'/>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold ms-4">POSITION</div>
          <td>
            <select id="sel1">
              <option value="">position </option>
              <option value="">Developer</option>
              <option value="">H R</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </td>

        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold ms-4">DURATION:</div>
          <td>
            <select id="sel1">
              <option value="">years: </option>
              <option value="">1 year</option>
              <option value="">2 year</option>
              <option value="">3 year</option>
              <option value="">4 year</option>
            </select>
          </td>
        </div>
      </li>
    </ul>

    <div class="d-grid  col-2 mx-auto" style={{marginTop:"200px"}}>
  {/* <button class="btn btn-primary" type="button">Button</button> 
     <Link to="/homepage1" class="btn btn-danger" type="button">submit</Link>
// </div> */
    
            /* <nav aria-label="Page navigation example " style={{marginTop:"230px"}}>
            <ul class="pagination justify-content-center">
              <li class="page-item disabled"> */
                /* <a class="page-link">Previous</a> */
              /* </li>
              <Link to="/createnew" style={{textDecoration:"none"}}><li class="page-item"><a class="page-link" href="">1</a></li></Link>
              <Link to="/edu" style={{textDecoration:"none"}}><li class="page-item"><a class="page-link" href="#">2</a></li></Link>
              <Link to="/exp" style={{textDecoration:"none"}}><li class="page-item"><a class="page-link" href="#">3</a></li></Link>
              <li class="page-item"> */
                /* <a class="page-link" href="#">Next</a> */
              /* </li>
            </ul>
          </nav> */
          
  );
}

export default experience;
