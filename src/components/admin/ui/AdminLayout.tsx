import React, { useState } from "react";
import AdminHeader, { Role } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => {
  const [role, setRole] = useState<Role>("super");

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader title={title} role={role} setRole={setRole} />
      <div className="flex">
        <AdminSidebar role={role} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
