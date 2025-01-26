import React from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import logo from "../images/logo.png";
import { useState } from "react";

const Navbar = ({ auth }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="flex p-2 px-10 justify-between items-center bg-white shadow-lg">
            <img src={logo} className="h-12" />
            <div className="flex space-x-5">
                <NavLink href={route("home")} active={route().current("home")}>
                    Home
                </NavLink>
                <NavLink>Explore</NavLink>
                <NavLink>About</NavLink>
                <NavLink>FAQ</NavLink>
            </div>

            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                {auth.user ? (
                    <div className="relative ms-3">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex">
                                    <button
                                        type="button"
                                        className="inline-flex items-center text-white border border-transparent bg-blue-900 text-xl rounded-full p-3 font-medium leading-4 transition duration-150 ease-in-out"
                                    >
                                        {auth.user.name.charAt(0)}{" "}
                                        {/* Access the user's name */}
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                ) : (
                    <div className="flex space-x-4">
                        <Link
                            href={route("login")}
                            className="py-2 px-3 bg-blue-600 active:bg-blue-700 text-white font-bold rounded-md"
                        >
                            Login
                        </Link>
                        <Link
                            href={route("register")}
                            className="py-2 px-3 bg-green-600 active:bg-green-700 text-white font-bold rounded-md"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>

            <div className="-me-2 flex items-center sm:hidden">
                <button
                    onClick={() =>
                        setShowingNavigationDropdown(
                            (previousState) => !previousState
                        )
                    }
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            className={
                                !showingNavigationDropdown
                                    ? "inline-flex"
                                    : "hidden"
                            }
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        <path
                            className={
                                showingNavigationDropdown
                                    ? "inline-flex"
                                    : "hidden"
                            }
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="space-y-1 pb-3 pt-2">
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <div className="border-t border-gray-200 pb-1 pt-4">
                    {auth.user && (
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {auth.user.name} {/* Access the user's name */}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {auth.user.email}{" "}
                                {/* Access the user's email */}
                            </div>
                        </div>
                    )}

                    <div className="mt-3 space-y-1">
                        {auth.user ? (
                            <>
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </>
                        ) : (
                            <>
                                <ResponsiveNavLink href={route("login")}>
                                    Login
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route("register")}>
                                    Register
                                </ResponsiveNavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
