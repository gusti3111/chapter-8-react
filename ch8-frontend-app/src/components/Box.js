import React from 'react'
import PlaceHolder from './placeHolder'


function Box(props) {
    let Box = props.classBox ?? "box"
    let titleBox = props.titleBox ?? "titlebox"
    let label = props.label ?? ""
    return (
        <div className={Box}>
            <h2>{titleBox}</h2>
            <form>
                <PlaceHolder label={label}/>
            </form>
        </div>
    )
}

export default Box