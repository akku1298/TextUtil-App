import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       let newText= text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to upper case","success")
    }
    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
     }

     const handleCopyClick = ()=>{
     
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to the clipboard","success")
      }
     
      const handleClear = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success")
     }
     
     const handleRemove =()=>{
      let newText="";
      setText(newText);
      props.showAlert("Text has been cleared ","success")
     }

    const handleOnChange = (event)=>{
       setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
    <div className="container my-3" style={{color:props.mode == 'dark'?'white':'black'}}>
       <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode == 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
       <button disabled= {text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button  disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button  disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy</button>
       <button  disabled= {text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClear}>Remove extra space</button>
       <button  disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemove}>Clear Text</button>
   </div>
 
    <div className="container my-3" style={{color:props.mode == 'dark'?'white':'black'}}>
     <h2>Your Text summary </h2>
     <p> {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} time to read </p>
     <h3>Preview</h3>
     <p>{text.length > 0 ? text: "Enter your text in the textarea to preview here"} </p>
    </div>
    </>
  )
}
