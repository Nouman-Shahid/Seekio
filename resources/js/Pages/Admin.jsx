import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Admin = () => {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div>Admin</div>
        </AuthenticatedLayout>
    );
};

export default Admin;
