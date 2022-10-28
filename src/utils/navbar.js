import { Navigate } from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { ProductDetails } from "../components/ProductDetails";
import { Products } from "../components/Products";

export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        element: <Home />,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 2,
        title: 'Products',
        path: '/products',
        element: <Products />,
        isPrivate: true,
        hidden: false,
    },
    {
        id: 3,
        title: '',
        path: '/products/:id',
        element: <ProductDetails />,
        isPrivate: false,
        hidden: true,
    },
    {
        id: 4,
        title: 'About',
        path: '/about',
        element: <About />,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 5,
        title: 'Login',
        path: '/login',
        element: <Login />,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 6,
        title: '',
        path: '/',
        element: <Navigate to='/home' />,
        isPrivate: false,
        hidden: true,
    },
]