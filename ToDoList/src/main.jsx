import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import ToDoList from './ToDoList.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <ToDoList />,
    },
  ],
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
