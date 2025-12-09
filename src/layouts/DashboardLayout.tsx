import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <div className="content">
        <header>Dashboard Topbar</header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
