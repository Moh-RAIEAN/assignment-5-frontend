import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddNewBookPage from "../pages/AddNewBookPage";
import AllBooksPage from "../pages/AllBooksPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import EditBookPage from "../pages/EditBookPage";
import DashboardPage from "../pages/DashboardPage";
import MainLoayout from "../Layout/MainLoayout";
import AuthPage from "../pages/AuthPage";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLoayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/all-books", element: <AllBooksPage /> },
      { path: "/book/:id", element: <BookDetailsPage /> },
      { path: "/add-book", element: <AddNewBookPage /> },
      { path: "/book/edit/:id", element: <EditBookPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/auth/signin", element: <AuthPage isUsingForLogin={true} /> },
      { path: "/auth/sign-up", element: <AuthPage /> },
    ],
  },
]);
