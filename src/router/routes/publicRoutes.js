import { lazy } from "react";
const UnAuthorized = lazy(() => import("../../views/UnAuthorized"))
const AdminLogin = lazy(() => import('../../views/auth/AdminLogin'))
const Login = lazy(() => import('../../views/auth/Login'))
const Register = lazy(() => import('../../views/auth/Register'))
const Home = lazy(() => import("../../views/Home"))

const publicRoutes = [
    {
        path: '/',
        element: <Home />
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
        path: '/admin/login',
        element: <AdminLogin />
    },
    {
        path: '/unauthorized',
        element: <UnAuthorized />
    }
]

export default publicRoutes