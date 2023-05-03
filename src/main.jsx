import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthProvider from "./context/authProvider.jsx";
import Root from "./layout/Root";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import ChefsPage from "./pages/Chefs";
import RecipePage from "./pages/Chefs";
import CategoryPage from "./pages/Chefs";
import PrivateRoute from "./routes/PrivateRoute";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
