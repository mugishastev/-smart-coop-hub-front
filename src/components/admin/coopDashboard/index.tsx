import React from "react";
import AdminLayout from "@/components/admin/ui/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CoopDashboard = () => {
  return (
    <AdminLayout title="Cooperative Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Members</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Balance</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-sm text-gray-500">Products</div>
            <div className="text-2xl font-bold text-blue-900">--</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Actions</h3>
        <div className="flex gap-3">
          <Button>Manage Members</Button>
          <Button variant="outline">Add Product</Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CoopDashboard;
