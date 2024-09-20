import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])