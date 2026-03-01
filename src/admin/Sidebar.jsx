import { NavLink } from "react-router-dom";

const base =
  "block px-4 py-2 rounded-md text-sm font-medium transition-colors";
const inactive = "text-slate-300 hover:bg-slate-800 hover:text-white";
const active = "bg-slate-800 text-amber-300";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950/80 backdrop-blur-md p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-lg font-semibold tracking-[0.2em] uppercase text-slate-300">
          Luxe Affairs
        </h2>
        <p className="text-xs text-slate-500 mt-1">Admin Dashboard</p>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/admin/inquiries"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Inquiries
        </NavLink>

        <NavLink
          to="/admin/masterclasses"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Masterclass Signups
        </NavLink>

        <NavLink
          to="/admin/reviews"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Reviews
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Users
        </NavLink>
      </nav>

      <div className="mt-auto pt-6 text-xs text-slate-600">
        © {new Date().getFullYear()} Luxe Affairs
      </div>
    </aside>
  );
}
