import React from "react";
import AdminLayout from "@/components/admin/ui/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";

const RcaDashboard = () => {
  return (
    <AdminLayout title="RCA Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Compliance Alerts</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Recent Reports</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Verified Transactions</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default RcaDashboard;
