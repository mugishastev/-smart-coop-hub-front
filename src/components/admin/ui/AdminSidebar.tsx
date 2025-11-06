import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, DollarSign, ShoppingCart, FileText, Settings, CheckSquare, FilePlus, Megaphone, BarChart2, LifeBuoy } from "lucide-react";
import { Role } from "./AdminHeader";

const item = (to: string, icon: React.ReactNode, label: string, active?: boolean) => (
  <Link to={to} className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}>
    <span className="w-5 h-5 text-blue-900">{icon}</span>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </Link>
);

const AdminSidebar: React.FC<{ role: Role }> = ({ role }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      <nav className="p-4 space-y-4">
        <div className="px-3 text-xs font-semibold text-gray-500 uppercase">General</div>
        {item("/admin/super", <Home />, "Overview")}

        <div className="px-3 text-xs font-semibold text-gray-500 uppercase mt-4">Super Admin</div>
        {item("/admin/super/verify", <CheckSquare />, "Verify Cooperatives", role === "super")}
        {item("/admin/super/subscriptions", <FilePlus />, "Subscriptions", role === "super")}
        {item("/admin/super/users", <Users />, "Manage Users", role === "super")}
        {item("/admin/super/applications", <FileText />, "Applications", role === "super")}
        {item("/admin/super/announcements", <Megaphone />, "Announcements", role === "super")}
        {item("/admin/super/preferences", <Settings />, "Preferences", role === "super")}
        {item("/admin/super/analytics", <BarChart2 />, "Analytics", role === "super")}
        {item("/admin/super/support", <LifeBuoy />, "Support", role === "super")}

        <div className="px-3 text-xs font-semibold text-gray-500 uppercase mt-4">Cooperative</div>
        {item("/admin/coop/members", <Users />, "Members", role === "coop" || role === "super")}
        {item("/admin/coop/contributions", <DollarSign />, "Contributions", role === "coop" || role === "super")}
        {item("/admin/coop/loans", <FileText />, "Loans", role === "coop" || role === "super")}
        {item("/admin/coop/products", <ShoppingCart />, "Products", role === "coop" || role === "super")}
        {item("/admin/coop/analytics", <BarChart2 />, "Analytics", role === "coop" || role === "super")}
        {item("/admin/coop/support", <LifeBuoy />, "Support", role === "coop" || role === "super")}

        <div className="px-3 text-xs font-semibold text-gray-500 uppercase mt-4">Member</div>
        {item("/admin/member/profile", <Users />, "Profile", role === "member")}
        {item("/admin/member/contributions", <DollarSign />, "My Contributions", role === "member")}
        {item("/admin/member/attendance", <CheckSquare />, "Attendance", role === "member")}
        {item("/admin/member/loans", <FileText />, "Loans", role === "member")}
        {item("/admin/member/products", <ShoppingCart />, "Products", role === "member")}
        {item("/admin/member/announcements", <Megaphone />, "Announcements", role === "member")}
        {item("/admin/member/support", <LifeBuoy />, "Support", role === "member")}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
