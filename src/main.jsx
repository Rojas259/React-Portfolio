// Step 1: Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import{
    createBrowerRouter,
    RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from '@rneui/themed';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css'; 
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

import Root from '.routes/root';
import ErrorPages from './error-pages';
import AboutMe from './about-me';
import Contact from './contact';
import Resume from './resume';
import Portfolio from './portfolio';

import './index.css';
import './utils/theme.js'

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
             {
                path: '/portfolio',
                element: <Portfolio />,
            },
        ],
    },
]);

// Step 3: Use ReactDOM to render your component
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);