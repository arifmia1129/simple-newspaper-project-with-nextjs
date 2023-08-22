import AdminLayout from "@/components/Layouts/AdminLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1>This is dashboard</h1>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <AdminLayout>{page}</AdminLayout>
    </RootLayout>
  );
};
