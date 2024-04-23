import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {ThemeProvider} from "./context/themeContext.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./layout/home/Home.jsx";
import OurStore from "./layout/pages/our-store/OurStore.jsx";
import Contact from "./layout/pages/contact/Contact.jsx";
import SignIn from "./layout/pages/auth/SignIn.jsx";
import SignUp from "./layout/pages/auth/SignUp.jsx";

 const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "store",
          element: <OurStore />
        },
        {
          path: "blog",
          element: <Contact />
        },
        {
          path: "signin",
          element: <SignIn />
        },
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }
  ])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
