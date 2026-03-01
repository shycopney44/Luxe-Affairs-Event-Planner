import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <header className="mb-6 border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-semibold tracking-wide">
            Luxe Affairs Admin
          </h1>
          <p className="text-sm text-slate-400">
            Manage inquiries, masterclass signups, reviews, and users.
          </p>
        </header>

        {/* Nested admin pages */}
        <Outlet />
      </main>
    </div>
  );
}
