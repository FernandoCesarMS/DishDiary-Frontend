import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import InitialScreen from "./routes/InitialScreen";
import RegisterScreen from "./routes/RegisterScreen";
import LoginScreen from "./routes/LoginScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <InitialScreen />
      },
      {
        path: "/register",
        element: <RegisterScreen />
      },
      {
        path: "/login",
        element: <LoginScreen />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <RouterProvider router={router} />
  </React.StrictMode>
);