import React from 'react'
import PlaceHolder from '../components/placeHolder'
import batu from "../components/assets/batu.png"
import paper from "../components/assets/kertas.png"
import scissors from "../components/assets/gunting.png"
import Buttons from '../components/Button'
// VS COM PAGES
function Room() {
  return (
    <div >
      <center className='room'>
        <div className='room-placeholder'>
          <PlaceHolder placeholder="INPUT YOUR ROOM NAME" />
        </div>

        <div className='choose-one'>
          <h1>Choose One</h1>
          {/* player choose */}
          <img src={batu} alt="" className="player mt-5" id="r" />
          <img src={paper} alt="" className="player mt-5" id="p" />

          <img src={scissors} alt="" className="player mt-5" id='s' />



        </div>
        <div>
          <Buttons   title="Save"/>
        </div>

      </center>
    </div>
  )
}

export default Room