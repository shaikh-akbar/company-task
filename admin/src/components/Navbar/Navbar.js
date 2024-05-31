import React from 'react';
import { FaArrowLeft, FaArrowRight, FaCut, FaCopy, FaFolder } from 'react-icons/fa';
import { RiArrowGoBackLine, RiArrowGoForwardFill } from 'react-icons/ri';
import { BiCut } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import { LuCopyPlus } from "react-icons/lu";
import Sidebar from '../Sidebar/Sidebar';



function Navbar() {
    return (
        <>
            <div className="bg-white-800 text-black p-4 flex items-center shadow-md">
                <div className="flex items-center space-x-3">
                    <img src="https://www.pinclipart.com/picdir/big/444-4448260_standards-auditing-report-icon-png-clipart.png" alt="Logo" className="h-8 w-8" />
                    <span className="text-lg font-bold text-purple-500">Safety Audit</span>
                </div>
                <div className="h-6 border-l border-gray-400 mx-4"></div>

                <div className="flex items-center space-x-2">
                    <button className="focus:outline-none">
                        <RiArrowGoBackLine />
                    </button>
                    <button className="focus:outline-none">
                        <RiArrowGoForwardFill />
                    </button>
                    <div className="h-6 border-l border-gray-400 mx-2"></div>
                    <button className="focus:outline-none">
                        <BiCut />
                    </button>
                    <button className="focus:outline-none">
                        <MdOutlineContentCopy />
                    </button>
                    <button className="focus:outline-none">
                        <LuCopyPlus />
                    </button>
                </div>
                <div className="flex-grow"></div>
            </div>
            <div>
                <Sidebar />
            </div>
        </>

    );
}

export default Navbar;
