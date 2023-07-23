import React from 'react'

function PlaceHolder(props) {
    let labelName = props.label  ?? ""
    let placeholder =props.placeholder ?? ""
    
    return (
        <div className="user-box">

            <input type="text" name="" placeholder={placeholder} required=""></input>
            <label>{labelName}</label>


        </div>
    )
}

export default PlaceHolder