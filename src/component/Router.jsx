import { createBrowserRouter } from "react-router-dom";
import Login from "./admin/Login";
import Home from "./Home";
import Navbar from './admin/Navbar'
import NavbarMain from './Navbar'
import Admin from "./admin/Admin";
import AddStory from "./admin/AddStory";
import StoryDetail from "./StoryDetail";
import Register from "./admin/Register";


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