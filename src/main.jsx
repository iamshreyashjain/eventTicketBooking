import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'


import LoginScreen from './Components/LoginScreen';

const routes = createBrowserRouter([
    { path: '/', element: <LoginScreen /> }, 
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
);
