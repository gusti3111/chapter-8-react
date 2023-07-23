
import { useState } from 'react'
import Buttons from '../components/Button'
import PlaceHolder from '../components/placeHolder'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const [username,setUsername] = useState(null)
    const navigate = useNavigate()

    const handleLogin= () =>{
        // call api
        // get access token
        const accessToken = username
        // save token to local storage
        localStorage.setItem("accessToken",accessToken)
        navigate("/games")
        // localStorage.setItem("accessToken",accessToken)
        // navigate("/games")
    }
    return (
        <div className='box'>

                <h2>Login</h2>
                <form>
                    {/* import label from placeholder components */}
                    <PlaceHolder label="Username" onChange={(e) =>{
                        setUsername(e.target.value)
                    }} />
                    <PlaceHolder label="Password" />
                    {/* import buttons from buttons components */}
                    <Buttons
                        title="login"  variant= "outline-warning" onClick={handleLogin}/>

                </form>





        </div>
        

    


    )
}
export default Login;
