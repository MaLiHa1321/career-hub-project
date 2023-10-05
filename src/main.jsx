import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Statistis from './components/statistic/Statistis';
import AppliedJob from './components/apliedJob/AppliedJob';
import Blog from './components/blog/Blog';
import JobDetails from './components/jobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';
import Login from './components/Context/Login';
import Register from './components/Context/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRoutes from './routes/privateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistis></Statistis>

      },  
        {
          path: '/job/:id',
          element:<JobDetails></JobDetails>,
          loader: ()=> fetch('/jobs.json')
        },
   
      {
        path: '/job',
        element: <PrivateRoutes><AppliedJob></AppliedJob></PrivateRoutes> ,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
   

    </HelmetProvider>
  
   
    
    
  </React.StrictMode>,
)
