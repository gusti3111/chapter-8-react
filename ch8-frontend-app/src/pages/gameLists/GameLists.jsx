import React, { useState } from 'react'
import Buttons from '../../components/Button'
import './Gamelists.css'
import CardComponents from '../../components/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


function GameLists() {
  // state for profile
  const [profile, setProfile] = useState({
    // get data from server
    userId: "1",
    firstname: "emily ",
    lastname: "blunt",
    email: "emily@blunt.com",
    address: "Fleet street B221",
    number: "0822151435"
  })
  // state for get rooms
  const [rooms, setRooms] = useState([
    {
      roomName: "Room A",
      id: 1,
      userId: 1,
      winner: "COM"
    },
    {
      roomName: "Room B",
      id: 2,
      userId: 2,
      winner: "PLAYER 2"
    },
    {
      roomName: "Room C",
      id: 3,
      userId: 3,
      winner: "PLAYER 1"

    },
    {
      roomName: "Room D",
      id: 4,
      userId: 5,
      winner: "COM"
    },
    {
      roomName: "Room E",
      id: 5,
      userId: 6,
      winner: "COM"
    },



  ])
  return (
    <div >
      <div className='main-game-lists'>
        {/* game lists */}
        <div className='game-lists' >
          {/* button link to player vs com */}
          {/* set color title and classname */}
          <Link to="../../Com">
            <Buttons title="PLAYER VS COM" color="dark" classname="buttons-com" href="/com" />
          </Link>


          {/* rooms lists */}
          <div className='rooms'>
            <div className='create-room'>
              {/* button to create new room */}
              <Link to="../../Room">
                <Buttons title="Create New Room" color="danger" classname="buttons-com" />
              </Link>
            </div>

            <CardGroup className='rooms-cards'>

              {rooms.map((room) => {
                return (


                  <CardComponents title={room.roomName} winner="Winner :" contentWinner={room.winner} linkCard="../../Player" onChange={(e) =>{
                    setRooms(e.target.value)
                  }} />





                )

              })}
            </CardGroup>


          </div>


        </div>
        {/* {/* profle users */}
        <div className='profile'>
          <center>
            {/* profile card contents */}

            <CardComponents linkCard="../../history" name="profile-contents" image={require("../../components/assets/orangutan.jpeg")} title={profile.firstname + profile.lastname} email="Email :" contentEmail={profile.email} address=" Address :" contentAddress={profile.address} num="Phone  : " contentNumber={profile.number} buttontitle="Edit" onChange={( e) => {
              setProfile(e.target.value)
            }}/>


          </center>




        </div>

      </div>


    </div >

  )
}

export default GameLists