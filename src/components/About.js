import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    //   })

    let myStyle={
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode === 'dark'?'black':'white'
    }
    
  return (
    
    <div className="container" style={myStyle}>
        <h1>About Us</h1>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse your text
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       TextUtils give you the ability to analyze your text quickly and efficiently and help you to modify it .
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free To Use
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        TextUtils is a free character counter tool that provide instat character count and word count statistics for given text.
        </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Browser Compatible 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        This word counter software works in any browser .
        </div>
    </div>
  </div>
</div>

</div>
</div>
    
  )
}
