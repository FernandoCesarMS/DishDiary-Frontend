import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import InitialScreen from "./routes/initialscreen/InitialScreen";
import ExperienceScreen from "./routes/experiences/ExperiencesScreen";
import CreateAccountScreen from "./routes/createaccount/CreateAccountScreen";
import LoginScreen from "./routes/login/LoginScreen";
import AllExperiencesScreen from "./routes/allexperiences/AllExperiencesScreen";

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
        path: "/experiences",
        element: <ExperienceScreen />
      },
      {
        path: "/create-account",
        element: <CreateAccountScreen />
      },
      {
        path: "/login",
        element: <LoginScreen />
      },
      {
        path: "/explore",
        element: <AllExperiencesScreen />
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