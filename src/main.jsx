import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";
// import { RouterProvider } from 'react-router-dom'
// import Body from "./components/Body.jsx";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import "./index.css";
import Browse from "./components/Browse.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/browse",
                element: <Browse />,
            },
            {
                path:"/movie/:id",
                element:<MovieDetails/>
            }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    // <StrictMode>
        <Provider store={appStore}>
            <RouterProvider router={appRouter} />
        </Provider>
    // </StrictMode>
);
