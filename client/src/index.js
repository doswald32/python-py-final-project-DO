import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"

// Commenting out to continue working while issues persist
// const router = createBrowserRouter(routes);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)


// root.render(<RouterProvider router={router} />);
