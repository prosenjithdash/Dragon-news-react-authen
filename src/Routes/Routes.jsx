import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>

            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>

            },
            {
                path: '/',
                element: <Register></Register>

            }
        ]
    }
]);
export default router;
