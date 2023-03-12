import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Navbar from './admin/Navbar'
import NavbarMain from './Navbar'
import Admin from "./admin/Admin";
import AddStory from "./admin/AddStory";
import StoryDetail from "./StoryDetail";
import Login from "./admin/auth/Login";
import Register from "./admin/auth/Register";
import Verify from "./admin/auth/Verify";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <>
            <NavbarMain />
            <Home />
        </>,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/user/verify/:id/:token',
        element: <Verify />
    },
    {
        path: '/admin',
        element: <>
            <Navbar />
            <Admin />
        </>
    },
    {
        path: '/addstory',
        element: <>
            <Navbar />
            <AddStory />
        </>
    },
    {
        path: '/detail',
        element: <>
            <Navbar />
            <StoryDetail />
        </>
    }

])