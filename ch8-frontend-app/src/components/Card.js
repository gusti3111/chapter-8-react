import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardComponents = (props) => {
    let cardClass = props.name ?? "card"
    let cardImage = props.image ?? ""

    let cardTitle = props.title ?? ""
    let cardEmail = props.email ?? ""
    let cardAddress = props.address ?? ""
    let cardContentEmail = props.contentEmail ?? ""
    let cardContentAddress = props.contentAddress ?? ""
    let cardNumber = props.num ?? ""
    let cardContentNumber = props.contentNumber ?? ""
    let cardWinner = props.winner ?? ""
    let cardContentWinner = props.contentWinner ?? ""
    
    let linkCard = props.linkCard ?? ""

    return (
        <div>
            <Link to={linkCard} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '18rem' }} className={cardClass}  >
                    <Card.Img variant="top" src={cardImage} />
                    <Card.Body >
                        <Card.Title>{cardTitle}</Card.Title>
                        <Card.Text>
                            {/* start for profile pages */}
                            <div>
                                {cardEmail} {cardContentEmail}

                            </div>
                            <div>
                                {cardAddress} {cardContentAddress}

                            </div>
                            <div>
                                {cardNumber} {cardContentNumber}

                            </div>
                            {/* end for profile */}
                            <div>
                                {cardWinner} {cardContentWinner}
                            </div>
                            {/* start for rooms pages */}




                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>



        </div>
    )
}

export default CardComponents