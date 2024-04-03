
import React from 'react';
import ReactDOM from 'react-dom/client';
import{
    createBrowerRouter,
    RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css'; 
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import Root from './routes/root.jsx';
import ErrorPages from './error-pages.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contacts.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';

import './index.css';
import {theme} from './utils/theme.js'

const router = createBrowerRouter([
    {
        path: '/',
        element: <Root />,  
        errorElement: <ErrorPages />,
        children: [
            {
                path: '/',
                element: <AboutMe />,
            },
            {
                path: '/about-me',
                element: <AboutMe />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/resume',
                element: <Resume />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);