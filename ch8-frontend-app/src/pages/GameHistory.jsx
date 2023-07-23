import React from 'react'
import Table from 'react-bootstrap/Table';

function GameHistory() {
    return (
        <div className='history'>
            <h1 >Game History</h1>
            <Table striped bordered hover variant='dark' className='history-table'>
                <thead>
                    <tr>

                        <th>Opponent</th>
                        <th>Date</th>
                        <th>Result</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Room A</td>
                        <td>  22 January 2023 18:47</td>
                        <td>WIN</td>
                    </tr>
                    <tr>

                        <td>Room B</td>
                        <td>15 May 2023 21:45</td>
                        <td>WIN</td>
                    </tr>
                    <tr>

                        <td>Room C </td>
                        <td>  14 April 2023 23:45</td>
                        <td>DRAW</td>
                    </tr>
                    <tr>
                        <td>Room D </td>
                        <td>  13 March 2023 13:35</td>
                        <td>LOOSE</td>
                    </tr>
                    <tr>
                        <td>Room E </td>
                        <td>  14 July 2023 08:25</td>
                        <td>DRAW</td>
                    </tr>
                    <tr>
                        <td>VSCOM </td>
                        <td>  14 July 2023 08:15</td>
                        <td>LOOSE</td>

                    </tr>
                    <tr>
                        <td>VSCOM </td>
                        <td>  15 July 2023 08:15</td>
                        <td>LOOSE</td>

                    </tr>


                </tbody>
            </Table>
        </div>
    )
}

export default GameHistory