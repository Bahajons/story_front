import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Navbar from './admin/Navbar'
import Admin from "./admin/Admin";
import AddStory from "./admin/AddStory";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <>
            <Navbar />
            <Admin/>
        </>
    },
    {
        path: '/addstory',
        element: <>
            <Navbar />
            <AddStory/>
        </>
    }

])