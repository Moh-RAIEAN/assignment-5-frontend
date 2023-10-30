import Link from "../ui/Link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <Link navigateTo="/all-books">all books</Link>
          </li>
          <li>
            <Link navigateTo="/add-book">add books</Link>
          </li>
          <li>
            <Link navigateTo="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link navigateTo="/auth/signin">signin</Link>
          </li>
          <li>
            <Link navigateTo="/auth/sign-up">signup</Link>
          </li>
          <li>
            <div className="dropdown dropdown-end dropdown-bottom p-0">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>username</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
