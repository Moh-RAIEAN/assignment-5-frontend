import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddNewBookPage from "../pages/AddNewBookPage";
import AllBooksPage from "../pages/AllBooksPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import EditBookPage from "../pages/EditBookPage";
import SignupPage from "../pages/SignupPage";
import SigninPage from "../pages/Signinpage";
import DashboardPage from "../pages/DashboardPage";
export const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/all-books", element: <AllBooksPage /> },
  { path: "/book/:id", element: <BookDetailsPage /> },
  { path: "/add-new-Book", element: <AddNewBookPage /> },
  { path: "/book/edit/:id", element: <EditBookPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/auth/login", element: <SigninPage /> },
  { path: "/auth/sign-up", element: <SignupPage /> },
]);
