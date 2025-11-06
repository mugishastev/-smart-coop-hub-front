import React from "react";
import logo from "@/assets/logo.png";

export type Role = "super" | "coop" | "member" | "buyer" | "rca";

const AdminHeader: React.FC<{ title?: string; role: Role; setRole: (r: Role) => void }> = ({ title, role, setRole }) => {
  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="h-10 w-10 rounded" />
        <div>
          <div className="text-lg font-semibold text-blue-900">Smart Cooperative Hub</div>
          {title && <div className="text-sm text-gray-600">{title}</div>}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="text-sm text-gray-600">Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="border rounded px-2 py-1 text-sm"
          aria-label="Select role"
        >
          <option value="super">Super Admin</option>
          <option value="coop">Coop Admin</option>
          <option value="member">Member</option>
          <option value="buyer">Buyer</option>
          <option value="rca">RCA</option>
        </select>
      </div>
    </header>
  );
};

export default AdminHeader;
