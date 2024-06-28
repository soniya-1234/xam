import React from 'react'
import './viewResume.css'
function viewResume() {
  return (
    <div className='col-6-6'>
    <div className='divhead'>
<p className='name'>NAME</p>
<p className='add'>address</p>
<div className='col-6'>
<tr>
    <th>
        CONTACT
    </th>
   

   
</tr>
</div>
<tr>
    <td>
        EMAILID:
    </td>
</tr>
<tr>
    <td>
    CONTACT NUMBER:
    </td>
</tr>
<tr>
    <th>SKILLS</th>
</tr>
</div>
<div className='col-8'>
<tr>
    <th>
        ABOUT ME
    </th>
    </tr>
<tr>
    <th>EXPERIENCE</th>
</tr>
<tr>
    <th>
        EDUCATION
    </th>
</tr>
    </div>
    </div>
  )
}

export default viewResume