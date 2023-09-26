import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Donetion from './components/donetion/Donetion.jsx';
import Static from './components/statetic/static.jsx';
import Donetion_Details from './components/Donetio_details/Donetion_Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/donetion',
        element: <Donetion></Donetion>,
        loader: ()=> fetch('../public/donetionData.json')
      },

      {
        path: '/static',
        element: <Static></Static>
      },

      {
        path: '/Donetion_Details/:id',
        element: <Donetion_Details></Donetion_Details>,
        loader: ()=> fetch('../public/donetionData.json')
      },

      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);