import React from 'react'
import './createNew.css'
import { Link } from 'react-router-dom'
import photo from '../images/img6.png'

function createNew() {
  return (
    <>
   <div className="container">
      <div className="left">
      <div id="body234">
      <div className="container text-center">
        <div className="row align-items-end" />
        <div className="container">
<div id='new22'>
        <form>
        <h1 id="details">
                <b>PERSONAL DETAILS</b>
              </h1>
              <table id="table">
                <tbody>
                  <tr>
                    <td id="pass12">NAME:</td>
                    <td id="td5">
                      <input
                        type="text"
                        id="inp5"
                        required
                      />
                      
                    </td>
                  </tr>
                  <tr>
                    <td id="pass12">ADDRESS:</td>
                    <td id="td5">
                      <input
                        type="text"
                        id="inp5"
                        required
                      />
                      
                    </td>
                  </tr>

                  <tr>
                    <td id="pass12">ABOUT ME</td>
                    <td id="td5">
                      <textarea name='message' rows='2'
                        id="inp5"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td id="pass12">CONTACT NUMBER:</td>
                    <td id="td5">
                      <input
                        type="text"
                        id="inp5"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td id="pass12">EMAIL ID:</td>
                    <td id="td5">
                      <input
                        type="text"
                        id="inp5"
                        required
                      />
                    </td>
                  </tr>
                  
                  <tr>
                    <td id="pass12">SKILLS</td>
                    <td id="td5">
                      <ul>
                       <textarea name='message' rows='2'
                        id="inp5"
                        required/>
                         
                      
                      </ul>
                    </td>
                  </tr>


</tbody>
</table>
        </form>
        </div>
        

        </div>
        </div>
        </div>
   

      </div>
      <div className="right">
        <img src={photo} alt='no' id="img12"/>
      </div>
    </div>


        <div >
        <div class="accordion mt-4 ms-4 me" id="accordionExample " >
  <div class="accordion-item"  style={{color:"brown"}}>
    <h2 class="accordion-header">
      <button class="accordion-button"  style={{color:"brown"}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <b>EDUCATION</b> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <tr>
        <p id='cor'>course:<input type='text' id='sel'/></p>
        </tr>
        <tr>
       
            <td>
              
        <p id='id1'>UNIVERSITY:</p><select id='sel1' >
        <option value="">Select </option>
                        <option value="">college 1</option>
                        <option value="">college 2</option>
                        <option value="">college 3</option>
                        <option value="">college 4</option>
                        </select> 
                       </td>
                       <td>
                       <p id='id2'>INSTITUTION:</p><select id='sel2'>
        <option value="">Select </option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        </select> 
                       </td>
                       <td>
                       <p id='id3'>YEAR OF PASS:</p><select id='sel3'>
        <option value="">Select </option>
                        <option value="">2010</option>
                        <option value="">2011</option>
                        <option value="">2012</option>
                        <option value="">2013</option>
                        <option value="">2014</option>
                        <option value="">2015</option>
                        <option value="">2016</option>
                        <option value="">2017</option>
                        <option value="">2018</option>
                        <option value="">2019</option>
                        <option value="">2020</option>
                        <option value="">2021</option>

                        </select> 
                       </td>
                       <td>
                       <p id='id4'>GPA:</p><input type='mark' id='sel4'/>

                       </td>
                        </tr>
      </div>
    </div>
  </div>
</div>




  <div class="accordion mt-4 ms-4 me" id="accordionExample ">
  <div class="accordion-item" style={{color:"brown"}} >
    <h2 class="accordion-header">
      <button class="accordion-button" style={{color:"brown"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <b>EDUCATION</b> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <tr>
        <p id='cor'>course:<input type='text' id='sel'/></p>
        </tr>
        <tr>
       
            <td>
              
        <p id='id1'>UNIVERSITY:</p><select id='sel1' >
        <option value="">Select </option>
                        <option value="">college 1</option>
                        <option value="">college 2</option>
                        <option value="">college 3</option>
                        <option value="">college 4</option>
                        </select> 
                       </td>
                       <td>
                       <p id='id2'>INSTITUTION:</p><select id='sel2'>
        <option value="">Select </option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        </select> 
                       </td>
                       <td>
                       <p id='id3'>YEAR OF PASS:</p><select id='sel3'>
        <option value="">Select </option>
                        <option value="">2010</option>
                        <option value="">2011</option>
                        <option value="">2012</option>
                        <option value="">2013</option>
                        <option value="">2014</option>
                        <option value="">2015</option>
                        <option value="">2016</option>
                        <option value="">2017</option>
                        <option value="">2018</option>
                        <option value="">2019</option>
                        <option value="">2020</option>
                        <option value="">2021</option>

                        </select> 
                       </td>
                       <td>
                       <p id='id4'>GPA:</p><input type='mark' id='sel4'/>

                       </td>
                        </tr>
      </div>
    </div>
  </div>

</div>





<div class="accordion mt-4 ms-4 me" id="accordionExample" >
  <div class="accordion-item"  style={{color:"brown"}}>
    <h2 class="accordion-header">
      <button class="accordion-button" style={{color:"brown"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <b>EDUCATION</b> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <tr>
        <p id='cor'>course:<input type='text' id='sel'/></p>
        </tr>
        <tr>
       
            <td>
              
        <p id='id1'>UNIVERSITY:</p><select id='sel1' >
        <option value="">Select </option>
                        <option value="">college 1</option>
                        <option value="">college 2</option>
                        <option value="">college 3</option>
                        <option value="">college 4</option>
                        </select> 
                       </td>
                       <td>
                       <p id='id2'>INSTITUTION:</p><select id='sel2'>
        <option value="">Select </option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        </select> 
                       </td>
                       <td>
                       <p id='id3'>YEAR OF PASS:</p><select id='sel3'>
        <option value="">Select </option>
                        <option value="">2010</option>
                        <option value="">2011</option>
                        <option value="">2012</option>
                        <option value="">2013</option>
                        <option value="">2014</option>
                        <option value="">2015</option>
                        <option value="">2016</option>
                        <option value="">2017</option>
                        <option value="">2018</option>
                        <option value="">2019</option>
                        <option value="">2020</option>
                        <option value="">2021</option>

                        </select> 
                       </td>
                       <td>
                       <p id='id4'>GPA:</p><input type='mark' id='sel4'/>

                       </td>
                        </tr>
      </div>
    </div>
  </div>
</div>





<div class="accordion mt-4 ms-4 me" id="accordionExample ">
  <div class="accordion-item" style={{color:"brown"}} >
    <h2 class="accordion-header">
      <button class="accordion-button"   style={{color:"brown"}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <b>EDUCATION</b> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <tr>
        <p id='cor'>course:<input type='text' id='sel'/></p>
        </tr>
        <tr>
       
            <td>
              
        <p id='id1'>UNIVERSITY:</p><select id='sel1' >
        <option value="">Select </option>
                        <option value="">college 1</option>
                        <option value="">college 2</option>
                        <option value="">college 3</option>
                        <option value="">college 4</option>
                        </select> 
                       </td>
                       <td>
                       <p id='id2'>INSTITUTION:</p><select id='sel2'>
        <option value="">Select </option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        <option value="">college name</option>
                        </select> 
                       </td>
                       <td>
                       <p id='id3'>YEAR OF PASS:</p><select id='sel3'>
        <option value="">Select </option>
                        <option value="">2010</option>
                        <option value="">2011</option>
                        <option value="">2012</option>
                        <option value="">2013</option>
                        <option value="">2014</option>
                        <option value="">2015</option>
                        <option value="">2016</option>
                        <option value="">2017</option>
                        <option value="">2018</option>
                        <option value="">2019</option>
                        <option value="">2020</option>
                        <option value="">2021</option>

                        </select> 
                       </td>
                       <td>
                       <p id='id4'>GPA:</p><input type='mark' id='sel4'/>

                       </td>
                        </tr>
      </div>
    </div>
  </div>
</div></div>


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
<div class="fw-bold4 ms-4">EXPERIENCE<textarea name='message' rows="2"/></div> 


   <td className="col-sm-6">
  </td> 


  <div class="d-grid  col-2 mx-auto">
     <Link to="/homepage1" class="btn btn-danger" type="button">submit</Link>
 </div> 

        





</>
  )
}

export default createNew