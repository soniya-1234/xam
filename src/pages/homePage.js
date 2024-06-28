import React from 'react'
import photo1 from '../images/img2.png'
import "./homePage.css"

function homePage() {
  return (
    <div className='homebox'>
                <img src={photo1}  id="img1" class="d-block w-100 mt-3" alt="..."/>

        <p className='image-text'>Free Resume Maker - Generate your resume online.</p>
        <p className='image-text2'>Take your resume and your job search to the next level-try Resume Now</p>

        <div className="box2">
        <tr>
          <td>
            <div id="img3"></div>
            <p className="we1">
              {" "}
              Hundreds of profesionally-written samples and templates, designed for every job and industry
            </p>
          </td>
          <td>
            <div id="img4"></div>
            <p className="we1">
              {" "}
              TextTuner™ lets you choose expert samples written by our resume specialists
            </p>
          </td>

</tr>
<tr>
          <td>
            <div id="img5"></div>
            <p className="we1">
              {" "}
              Simple step-by-step instructions guide you through every line of your resume
            </p>
          </td>
          <td>
            <div id="img6"></div>
            <p className="we1">
              {" "}
              Customizable formatting and 1-click designs for a smart, stylish, professional layout
            </p>
          </td>

</tr>
<tr>
          <td>
            <div id="img7"></div>
            <p className="we2">
              {" "}
              Expert career advice and helpful tips to give you an edge in your job search
            </p>
          </td>
</tr>
    </div>
    </div>

  )
}

export default homePage