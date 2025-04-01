import './App.css'
import {BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProductPlacement from "./pages/ProductPlacement.jsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <ProductPlacement/>
                }
            ]
        }
    ])

    return <RouterProvider router={router} />;
}

export default App
