import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Signup from "./pages/Signup.tsx";
import Login from './pages/Login.tsx';
import {RootLayout} from "./components/RootLayout.tsx";
import './index.css'


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

        <RouterProvider router={routes}/>
    </>
  )
}

export default App
