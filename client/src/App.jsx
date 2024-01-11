import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {
  
  const router = createBrowserRouter([
    {path : "/",element:<Login/>},
    {path : "/signup",element:<SignUp/>},
    {path : "/home",element:<Home/>}
  ])

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
     
    </>
  )
}

export default App
