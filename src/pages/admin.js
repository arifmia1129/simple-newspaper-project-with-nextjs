import AdminLayout from "@/components/Layouts/AdminLayout";
import React from "react";

export default function Admin() {
  return (
    <div>
      <h1>This is admin dashboard</h1>
    </div>
  );
}

Admin.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
