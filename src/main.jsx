import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Bookdetail from './components/Bookdetails/Bookdetail.jsx';
import Signin from './components/Form/Signin.jsx';
import Signup from './components/Form/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/books/:bookId",
        element:<Bookdetail></Bookdetail>,
        loader:() => fetch('../public/booksData.json')
      },
      {
        path:"/signin",
        element:<Signin></Signin> 
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/dashboard"
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
