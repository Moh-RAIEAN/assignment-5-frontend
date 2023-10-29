import { Outlet } from "react-router-dom";
import Navbar from "../components/view/Navbar";
export default function MainLoayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
