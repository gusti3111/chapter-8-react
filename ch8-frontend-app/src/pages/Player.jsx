import React from 'react'
import batu from "../components/assets/batu.png"
import paper from "../components/assets/kertas.png"
import scissors from "../components/assets/gunting.png"
import { Row, Col } from 'react-bootstrap'

function Player() {
    return (
        // vs PLayer html element
        <div className='vsPlayer'>

            <center >
                <Row className='mt-5' >
                    <Col >
                        {/* player */}
                        <div className='  player-com  ' >
                            <h1>PLAYER 1</h1>
                            {/* player choose */}
                            <img src={batu} alt="" className="r " />
                            <img src={paper} alt="" className="p " />

                            <img src={scissors} alt="" className="s " />
                        </div>

                    </Col>
                    <Col>
                        <div className=' result  '>
                            <h1 class="versus " id="versus">VS</h1>
                            <h1 class="pl-win" id="pl-win">PLAYER 1 WIN</h1>
                            <h1 class="com-win" id="com-win">COM WIN</h1>
                            <h2 class="draw" id="draw"> DRAW</h2>
                            <img alt="refresh" class="refresh" id="refresh" />


                        </div>

                    </Col>
                    <Col>
                        <div className='computer   ' >
                            <h1>PLAYER 2</h1>
                            {/* player choose */}
                            <div>
                                <img src={batu} alt="" className="r-com" />

                            </div>
                            <div>
                                <img src={paper} alt="" className="p-com" />

                            </div>
                            <div>
                                <img src={scissors} alt="" className="s-com" />

                            </div>




                        </div>

                    </Col>



                </Row>






            </center>
        </div>


    )
}

export default Player