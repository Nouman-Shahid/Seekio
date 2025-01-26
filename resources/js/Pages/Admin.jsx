import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

const Admin = ({ auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            <Head title="Dashboard" />
            <div>Admin</div>
        </>
    );
};

export default Admin;
