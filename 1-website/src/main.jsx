import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import profileData from './profileData.json';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import Layout from './Layout.jsx';
import ErrorPage from './ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profileCard",
        element: (
          <ProfileCard
            name={profileData.name}
            age={profileData.age}
            birthdate={profileData.birthdate}
            height={profileData.height}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);