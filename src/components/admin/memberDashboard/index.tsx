import React from "react";
import AdminLayout from "@/components/admin/ui/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";

const MemberDashboard = () => {
  return (
    <AdminLayout title="Member Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">My Contributions</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Pending Payments</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default MemberDashboard;
