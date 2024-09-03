import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
// import CaseStudy from "./pages/CaseStudy";
import Home from "./pages/Home";
import Layout from "./Layout";
// import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
