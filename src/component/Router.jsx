import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./admin/auth/Login";
import Home from "./Home";
import ResetPassword from "./admin/auth/ResetPassword";
import Register from "./admin/auth/Register";
import SetPassword from "./admin/auth/SetPassword";
import Navbar from "./pages/Navbar";
import AddStory from "./admin/AddStory";
import ListStory from "./admin/ListStory";
import EditStory from "./admin/EditStory";
import StoryDetail from "./StoryDetail";



export default function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>

				<Route path='/' element={<Home />} />
				<Route path='/:id' element={<StoryDetail />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/reset_password' element={<ResetPassword />} />
				<Route path='/setpassword/:id/:resetPassword' element={<SetPassword />} />

				<Route path='/admin/liststory' element={<ListStory />} />
				<Route path='/admin/addstory' element={<AddStory />} />
				<Route path='/admin/editstory/:id' element={<EditStory />} />
			</Routes>

		</BrowserRouter>
	)
}

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <>
//             <NavbarMain />
//             <Home />
//         </>,
//     },
//     {
//         path: '/login',
//         element: <Login />
//     },
//     {
//         path: '/register',
//         element: <Register />
//     },
//     {
//         path: '/user/verify/:id/:token',
//         element: <Verify />
//     },
//     {
//         path: '/admin',
//         element: <>
//             <Navbar />
//             <Admin />
//         </>
//     },
//     {
//         path: '/addstory',
//         element: <>
//             <Navbar />
//             <AddStory />
//         </>
//     },
//     {
//         path: '/detail',
//         element: <>
//             <Navbar />
//             <StoryDetail />
//         </>
//     }

// ])