import React from 'react'
import Button from 'react-bootstrap/Button';

function Buttons(props) {
    // set props for button title
    let buttonTitle = props.title ?? "Submit"
    // set props for button color
    let buttonColor = props.color ?? "primary"
    // set props for button className
    let buttonClass = props.classname ?? "buttons"


    
    return (
       
        <Button variant={buttonColor} className={buttonClass} href='/' size="lg" >
                {buttonTitle}

        </Button>
        // <div className='buttons'>
          
        // </div>
    )
}

export default Buttons