import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Signup from "./pages/Signup.tsx";
import Login from './pages/Login.tsx';


function App() {

  return (
    <>

        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />

            </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
