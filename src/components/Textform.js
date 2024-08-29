import React, {useState} from 'react'


export default function TextForm(props) {

    const [text,setText] = useState("Enter Text Here");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
       
        
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
       
    }

    const handleClear = ()=>{
        let newText = "";
        setText(newText); 
       
    }

    const handleCopy = ()=>{
      
      navigator.clipboard.writeText(text);
    }


    const handleOnChange = (event)=>{
        
        setText(event.target.value);

    }
  return (

    
    <>
        
<div className='row'>
    <div className='col-12'>
    
  <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="7" style={{backgroundColor:props.mode==="dark"?"rgb(128,128,128,0.3)":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
  <div className="d-flex justify-content-center justify-content-md-start">
  <button className='btn btn-primary mt-3' onClick={handleUpClick}>Convert To UpperCase</button>
  <button className='btn btn-primary mt-3 ms-2' onClick={handleLowClick}>Convert To LowerCase</button>
  <button className='btn btn-primary mt-3 ms-2' onClick={handleClear}>Clear</button>
  <button className='btn btn-primary mt-3 ms-2' onClick={handleCopy}>Copy</button>
  </div>
  </div>

  <div className='col-12 mt-5'>
    <h2>Your Text Sumamry</h2>
    <p>
        {text.length} characters and {text.split(" ").length} words
    </p>


  </div>


</div>

      
    </>
  )
}
