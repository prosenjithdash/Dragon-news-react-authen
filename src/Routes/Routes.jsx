import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')

            },
            {
                path: '/news/:id',
                element: <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>

            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>

            },
            {
                path: '/register',
                element: <Register></Register>

            }
        ]
    }
]);
export default router;
