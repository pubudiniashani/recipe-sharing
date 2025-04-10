import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Signup from "./pages/Signup.tsx";
import Login from './pages/Login.tsx';
import {RootLayout} from "./components/RootLayout.tsx";


function App() {


    const routes = createBrowserRouter([

        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },

        {
            path : '',
            element : <RootLayout/>,
            children : [
                { path : '/home', element : <Home/>},

            ]
        } ,
    ])


  return (
    <>

        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/signup" element={<Signup/>} />*/}
        {/*        <Route path="/login" element={<Login/>} />*/}
        {/*        <Route path="/home" element={<Home/>} />*/}

        {/*    </Routes>*/}

        {/*</BrowserRouter>*/}

        <RouterProvider router={routes}/>


        </>
  )
}

export default App
