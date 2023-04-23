import React, { useState } from "react";
import { Link, Location } from "react-router-dom";
import { AppName } from "../constants/defaultValue";
import { navbarItems } from "../constants/navbar";
import { INavbarItem } from "interfaces/navbar";
import NavbarDropdown from "./navbarDropdown";

type Props = {
    location: Location;
};

const Navbar = ({ location }: Props) => {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

    return (
        <div className="relative overflow-y-hidden">
            <nav
                className={`${showMobileNav ? "bg-custom-darker-black" : "bg-custom-black"
                    } text-custom-white w-full fixed shadow-xl z-50`}
            >
                <div className="container mx-auto flex justify-between items-center px-3 text-custom-green">
                    <div className="py-7 text-2xl font-semibold">{AppName}</div>
                    <ul className="hidden lg:flex gap-x-8">
                        {navbarItems && navbarItems.map((navItem: INavbarItem) => <li
                            className={`text-lg py-7 w-24 text-center ${location.pathname === navItem.path
                                ? "border-custom-green hover:border-custom-white"
                                : "border-custom-black"
                                } border-b-4 hover:py-6 hover:text-custom-white`}
                        >
                            <Link to={navItem.path}>{navItem.title}</Link>
                        </li>)}
                        <li className="flex flex-col items-center justify-center">
                            <NavbarDropdown />
                        </li>
                    </ul>
                    {showMobileNav ? (
                        <svg
                            onClick={() => setShowMobileNav(false)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 cursor-pointer lg:hidden"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            onClick={() => setShowMobileNav(true)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 cursor-pointer lg:hidden"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                            />
                        </svg>
                    )}
                </div>
                {showMobileNav ? (
                    <ul className="absolute flex flex-col lg:hidden gap-y-7 pt-5 min-h-[95vh] w-screen bg-custom-black top-20 z-40 overflow-y-hidden">
                        {navbarItems && navbarItems.map((navItem: INavbarItem) => <li
                            className={`px-4 py-2 w-full text-lg text-center font-semibold ${location.pathname === navItem.path
                                ? "text-custom-green hover:text-custom-white"
                                : "text-custom-white hover:text-custom-green"
                                }`}
                        >
                            <Link to={navItem.path}>{navItem.title}</Link>
                        </li>)}
                        <li
                            className={`flex justify-center px-4 py-2 w-full text-lg text-center font-semibold`}
                        >
                            <NavbarDropdown />
                        </li>
                    </ul>
                ) : null}
            </nav>
        </div>
    );
};

export default Navbar;
