// import React from 'react'

// function Sidebar() {
//   return (
//     <div>
//         //h2 charts
//         //different type of icons 
//         //form fields 
//         //input field with search icon
//         //forward icon dropdown name facility complaints inside dropdown there will be complaint with icon 2nd created on icon 3rd date of execution 
//     </div>
//   )
// }

// export default Sidebar
import React, { useState } from 'react';
import { FaBars, FaChartPie, FaSearch, FaCaretDown, FaRegEdit, FaCalendarAlt, FaCaretRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { IoBarChartOutline } from "react-icons/io5";
import { IoPieChartOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa6";
import { AiTwotonePieChart } from "react-icons/ai";
import { BsPieChart } from "react-icons/bs";
import { IoFolderOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import CreatedProjectOn from '../project/CreatedProjectOn';






function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [facility, setFacility] = useState(false);
    const [service, setService] = useState(false);
    const [sub, setSub] = useState(false);
    const [project, setProject] = useState(false);
    const [contract, setContract] = useState(false);
    const navigate = useNavigate()

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleFacilityDropdown = () => {
        setFacility(!facility);
    };
    const toggleServiceDropdown = () => {
        setService(!service);
    };
    const toggleSubscriptionDropdown = () => {
        setSub(!sub);
    };
    const toggleProjectDropdown = () => {
        setProject(!project);
    };
    const toggleContractDropdown = () => {
        setContract(!contract);
    };
    return (
        <div className="flex h-full">
            <div className={`fixed inset-0 bg-white text-black shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 w-64  mt-0.5`} >
                <div className="p-4 flex justify-between items-center">
                    {/* <h2 className="text-2xl font-semibold">Charts</h2> */}
                    <button className="lg:hidden" onClick={toggleSidebar}>
                        <MdClose className="text-2xl" />
                    </button>
                </div>
                <div className="p-4">
                    <div className="mb-4 ">
                        <div>
                            <h3 className="text-1xl font-semibold">Chart </h3>
                        </div>
                        <div className='flex p-2 items-center'>
                            <div className='p-2'>
                                <BsPieChart />
                            </div>
                            <div className='p-2'>
                                <IoBarChartOutline />
                            </div>
                            <div className='p-2'>
                                <FaRegChartBar />
                            </div>
                            <div className='p-2'>
                                <AiTwotonePieChart />
                            </div>
                            <div className='p-2'>
                                <IoFolderOutline />
                            </div>
                            <div className='p-2'>
                                <IoBarChartOutline />
                            </div>


                        </div>


                    </div>
                    <div className="mb-4">
                        <h3 className="text-1xl font-semibold">Form Fields </h3>
                    </div>
                    <div className="mb-4 flex items-center border border-gray-600 rounded p-2">
                        <IoSearchOutline />
                        <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none pl-2" />
                    </div>
                    <div className="mb-4">
                        <button className="flex items-center w-full focus:outline-none" onClick={toggleFacilityDropdown} >
                            {facility ? <MdKeyboardArrowDown className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} /> : <MdChevronRight className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} />}<IoFolderOutline style={{ marginRight: "5px" }} />
                            <span>Facility Complaints</span>
                        </button>
                        {facility && (
                            <div className="pl-8">
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <BsBoxArrowInDownLeft className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Complaint</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiClock2 className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Created On</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiCalendarDate className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Date Of Execution</h4>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <button className="flex items-center w-full focus:outline-none" onClick={toggleServiceDropdown} >
                            {service ? <MdKeyboardArrowDown className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} /> : <MdChevronRight className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} />}<IoFolderOutline style={{ marginRight: "5px" }} />
                            <span>Service Requests</span>
                        </button>
                        {service && (
                            <div className="pl-8">
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <BsBoxArrowInDownLeft className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Complaint</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiClock2 className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Created On</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiCalendarDate className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Date Of Execution</h4>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <button className="flex items-center w-full focus:outline-none" onClick={toggleSubscriptionDropdown} >
                            {sub ? <MdKeyboardArrowDown className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} /> : <MdChevronRight className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} />}<IoFolderOutline style={{ marginRight: "5px" }} />
                            <span>Subscription</span>
                        </button>
                        {sub && (
                            <div className="pl-8">
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <BsBoxArrowInDownLeft className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Complaint</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiClock2 className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Created On</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiCalendarDate className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Date Of Execution</h4>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <button className="flex items-center w-full focus:outline-none" onClick={toggleProjectDropdown} >
                            {project ? <MdKeyboardArrowDown className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} /> : <MdChevronRight className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} />}<IoFolderOutline style={{ marginRight: "5px" }} />
                            <span>Projects</span>
                        </button>
                        {project && (
                            <div className="pl-8">
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <BsBoxArrowInDownLeft className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Complaint</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiClock2 className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'onClick={() => navigate('/created-project-on')}>Created On</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiCalendarDate className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Date Of Execution</h4>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <button className="flex items-center w-full focus:outline-none" onClick={toggleContractDropdown} >
                            {contract ? <MdKeyboardArrowDown className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} /> : <MdChevronRight className="text-xl mr-2 bg-gray-400" style={{ borderRadius: '50%' }} />}<IoFolderOutline style={{ marginRight: "5px" }} />
                            <span>Contracts</span>
                        </button>
                        {contract && (
                            <div className="pl-8">
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <BsBoxArrowInDownLeft className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Complaint</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiClock2 className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Created On</h4>
                                    </div>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <div>
                                        <CiCalendarDate className="text-xl mr-2" />
                                    </div>
                                    <div>
                                        <h4 className='text-black font-serif'>Date Of Execution</h4>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <div className="flex-1 lg:pl-0">
                <div className="p-4">
                    <button className="lg:hidden fixed top-4 right-4" onClick={toggleSidebar}>
                        <FaBars className="text-2xl" />
                    </button>
               
                    {/* Your main content goes here */} <div>
                  <div >
                  <CreatedProjectOn />
                  </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
