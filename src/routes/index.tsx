import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddNewBookPage from "../pages/AddNewBookPage";
import AllBooksPage from "../pages/AllBooksPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import EditBookPage from "../pages/EditBookPage";
import DashboardPage from "../pages/DashboardPage";
import MainLoayout from "../Layout/MainLoayout";
import AuthPage from "../pages/AuthPage";
import MyBooks from "../pages/MyBooks";
import WishList from "../pages/WishList";
import ReadedBooks from "../pages/ReadedBooks";
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
      {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
          { path: "/dashboard", element: <MyBooks /> },
          { path: "/dashboard/wish-list", element: <WishList /> },
          { path: "/dashboard/readed-books", element: <ReadedBooks /> },
        ],
      },
      { path: "/auth/signin", element: <AuthPage isUsingForLogin={true} /> },
      { path: "/auth/sign-up", element: <AuthPage /> },
    ],
  },
]);
