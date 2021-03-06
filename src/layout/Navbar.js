import { useState } from "react";
import { SearchDrawer } from "../components/shared/SearchDrawer";
export const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <>
            <nav className="flex justify-end flex-wrap bg-white sticky top-0 border-b">
                <button
                    className=" inline-flex py-4 -mr-3 md:p-4 rounded lg:hidden hover:text-grey outline-none"
                    onClick={handleClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                   
                {/* a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${
                        active ? "" : "hidden"
                    } w-full lg:inline-flex lg:flex-grow lg:w-auto md:bg-white text-gray-900 py-5`}
                >
                    <div className="flex flex-col w-full lg:w-auto items-start lg:items-center lg:h-auto justify-end">
                        <a href="/">
                            <div className="fixed ml-6 md:ml-16 top-0 w-32 bg-black">
                                <div className="top-0 h-20 w-32 bg-black text-white"></div>
                                <div className="border-b w-100"></div>
                                <div className="h-10 w-32 bg-black border-t border-wh text-center text-white">
                                    depiction
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse">
                        <a
                            href="/"
                            className=" w-full lg:w-auto px-3 py-2 rounded items-center active:font-bold hover:font-bold"
                        >
                            Link
                        </a>
                        <a
                            href="/"
                            className="w-full lg:w-auto px-3 py-2 rounded items-center active:font-bold hover:font-bold"
                        >
                            Link
                        </a>
                        <a
                            href="/"
                            className="w-full lg:w-auto px-3 py-2 rounded items-center active:font-bold hover:font-bold"
                        >
                            Link
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};
