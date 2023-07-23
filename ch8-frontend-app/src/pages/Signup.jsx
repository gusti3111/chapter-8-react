import React from 'react'
import PlaceHolder from '../components/placeHolder'

import Buttons from '../components/Button'

function Signup() {
  return (
    <div className="box">

      <form>
        <h2>SignUp</h2>
        <PlaceHolder label="Username" />
        <PlaceHolder label="Email" />
        <PlaceHolder label="Password" />

        <Buttons title="signup" />

      </form>

    </div>

  )
}

export default Signup