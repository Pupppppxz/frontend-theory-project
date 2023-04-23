import React, { useState } from "react";
import { navbarDropdownItems } from "../constants/navbar";
import { INavbarItem } from "interfaces/navbar";

type Props = {};

const NavbarDropdown = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="relative flex flex-col items-center w-36 h-fit rounded-lg">
            <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className={`flex gap-x-2 items-center justify-center bg-custom-green text-custom-white focus:border-2 active:border-2 active:border-custom-white w-full h-fit py-3 focus:outline-none hover:font-bold hover:bg-custom-super-light-navy hover:text-custom-navy ${isOpen ? 'rounded-t-lg border-2' : 'rounded-lg'}`}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                Github
                {!isOpen ? (
                    <svg
                        className="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 ml-2"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                            clip-rule="evenodd"
                        />
                    </svg>
                )}
            </button>

            {isOpen ? (
                <div className="absolute flex flex-col w-full gap-y-[2px] right-0 -bottom-28 bg-gray-300 text-custom-white rounded-b-md shadow-xl">
                    {navbarDropdownItems &&
                        navbarDropdownItems.map((navItem: INavbarItem) => (
                            <div onClick={() => window.open(navItem.path)} className="flex items-center justify-center gap-x-2 w-full h-12 p-2 bg-custom-navy hover:bg-custom-light-navy hover:cursor-pointer last:rounded-b-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                {navItem.title}
                            </div>
                        ))}
                </div>
            ) : null}
        </div>
    );
};

export default NavbarDropdown;
