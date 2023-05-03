import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import AuthProvider from "./context/authProvider.jsx";
import Root from "./layout/Root";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home/Home";
import ChefsPage from "./pages/Chefs";
import RecipePage from "./pages/Chefs";
import CategoryPage from "./pages/Chefs";
import PrivateRoute from "./routes/PrivateRoute";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Auth/Login";
import SignUpPage from "./pages/Auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chefs",
        element: (
          <PrivateRoute>
            <ChefsPage />,
          </PrivateRoute>
        ),
      },
      {
        path: "chefs/:chefId",
        element: <ChefsPage />,
      },
      {
        path: "recipes",
        element: <RecipePage />,
      },
      {
        path: "recipes/:recipeId",
        element: <RecipePage />,
      },
      {
        path: "categories/:categoryId",
        element: <CategoryPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
