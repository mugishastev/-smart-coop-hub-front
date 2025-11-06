import React from "react";
import AdminLayout from "@/components/admin/ui/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";

const BuyerDashboard = () => {
  return (
    <AdminLayout title="Buyer Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Orders</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Saved Cooperatives</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Recent Purchases</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default BuyerDashboard;
