import { Outlet } from "react-router-dom";
import Link from "../components/ui/Link";

export default function DashboardPage() {
  return (
    <div className="flex gap-3 p-3">
      <div className="flex flex-col gap-3">
        <Link navigateTo="/dashboard/">My Books</Link>
        <Link navigateTo="/dashboard/wish-list">Wish List</Link>
        <Link navigateTo="/dashboard/readed-books">Readed Books</Link>
        <Link navigateTo="/add-book">Add Books</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
