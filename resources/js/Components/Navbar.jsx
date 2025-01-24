import React from "react";
import logo from "../images/logo.png";
import { Link } from "@inertiajs/react";

const Navbar = ({ auth }) => {
    return (
        <nav className=" flex p-2  justify-between items-end bg-white shadow-lg">
            <img src={logo} className="h-12" />

            <div className="flex space-x-5 ">
                <Link className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]">
                    Home
                </Link>{" "}
                <Link className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]">
                    Explore
                </Link>{" "}
                <Link className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]">
                    About
                </Link>{" "}
                <Link className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]">
                    FAQ
                </Link>
            </div>

            <div className="flex">
                <Link
                    href={route("login")}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                >
                    Log in
                </Link>
                <Link
                    href={route("register")}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                >
                    Register
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
