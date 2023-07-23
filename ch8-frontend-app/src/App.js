import Login from './pages/Login';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import 'react-bootstrap'
import GameLists from './pages/gameLists/GameLists';
import Room from './pages/Room';
import Com from './pages/Com';
import Player from './pages/Player';
import GameHistory from './pages/GameHistory';
import Footer from './components/Footer';
function App() {

  // create access token to protected route
  const accessToken = localStorage.getItem('accessToken')
  const ProtectedRoute = ({ accessToken, children }) => {
    if (!accessToken) {
      return <Navigate to={"/login"} />;
    } else {
      return children
    }

  }
  return (
    <Routes>
      <Route path="/" element={[<Layout />, <Footer />]}>
        <Route path='/games' element={<GameLists />} />
        {/* bungkus elemen dengamn Protected Route */}
        <Route path='/home' element={<ProtectedRoute accessToken={accessToken}>
          <Home />
        </ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/com" element={<Com />} />
        <Route path="/player" element={<Player />} />
        <Route path="/history" element={<GameHistory />} />


      </Route>
    </Routes>



  );
}

export default App;
