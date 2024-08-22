import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx';
import App from './App.jsx'
import Login from './components/Login.jsx';
import './index.css'
import Browse from './components/Browse.jsx';

export const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/browse",
        element:<Browse/>
      },
    ]
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
