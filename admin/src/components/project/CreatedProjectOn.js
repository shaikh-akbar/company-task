import React, { useState } from 'react';
import './CreatedProjectOn.css';
import { CiFilter } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { Bar } from 'react-chartjs-2';
import { IoFolderOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { BsPieChart } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Modal from './Modal';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data1 = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const data2 = {
  labels: ['Service A', 'Service B', 'Service C', 'Service D', 'Service E'],
  datasets: [
    {
      backgroundColor: 'rgba(153,102,255,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [100, 150, 150, 200, 300]
    }
  ]
};

const options = {
  scales: {
    y: {
      ticks: {
        callback: function (value) {
          const steps = [0, 60, 100, 240, 320, 400];
          return steps.includes(value) ? value : null;
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false // This hides the legend
    },
    title: {
      display: true,
      fontSize: 20
    }
  }
};

function CreatedProjectOn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  }

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  }
  const handleRegionClick = () => {
    openModal();
  }
  return (
    <>
      <div className="flex h-full  p-4 parents">
        <div className="bg-white-200 p-4 rounded-lg shadow-lg w-full max-w-5xl">
          <h3 className=" text-xl font-bold mb-4">Monthly Report</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className='flex justify-between'>
                <CiFilter />
                <IoIosMore />
              </div>
              <div>
                <h6 className="text-lg font-semibold mb-4 mt- font-sans">Week Order By Status</h6>
                <Bar
                  data={data1}
                  options={{
                    ...options,
                    plugins: {
                      ...options.plugins,
                      title: {
                        ...options.plugins.title,
                        // text: 'Orders by Day'
                      }
                    }
                  }}
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className='flex justify-between'>
                <CiFilter />
                <IoIosMore />
              </div>
              <div>
                <h6 className="text-lg font-semibold mb-4 mt-2 font-sans ">Week Order By Service</h6>
                <Bar
                  data={data2}
                  options={{
                    ...options,
                    plugins: {
                      ...options.plugins,
                      title: {
                        ...options.plugins.title,
                        // text: 'Orders by Service'
                      }
                    }
                  }}
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className='flex justify-between '>
                <CiFilter className='mt-1' />

                <select value={selectedRegion} onChange={handleRegionChange} className="bg-gray-200 text-sm p-1" style={{ fontSize: "9px", borderRadius: "20px" }} onClick={handleRegionClick}>
                  <option value="">Select Region</option>

                </select>



                <select value={selectedCountry} onChange={handleCountryChange} className="bg-gray-200 text-sm" style={{ fontSize: "9px", borderRadius: "20px" }} onClick={handleRegionClick}>
                  <option value="">Select Country</option>

                </select>
                <IoIosMore className='mt-1' />
                {isModalOpen && <Modal closeModal={closeModal} />}
              </div>
              <div>
                <h6 className="text-lg font-semibold mb-4 mt-2 font-sans">Status</h6>
                <Bar
                  data={data2}
                  options={{
                    ...options,
                    plugins: {
                      ...options.plugins,
                      title: {
                        ...options.plugins.title,
                        // text: 'Orders by Service'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-0 bg-gray-100 rounded-lg shadow-md p-4 w-100 " style={{ height: "auto" }} >
          <div className='flex gap-3'>
            <IoFolderOutline />
            <CiClock2 />
            <BsPieChart />
          </div>
          <div className="vertical-line mx-4"></div>
          <div className='flex gap-1 mt-4 items-center' >
            <FaWpforms />
            <h6>Form Setttings</h6>
          </div>
          <form className='mt-2'>
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="flex items-center justify-center  mt-5">
              <button
                className="bg-gradient-to-r from-blue-800 to-blue-300 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
              >
                <IoFolderOutline /> Design <IoArrowForwardSharp />
              </button>

            </div>
          </form>
        </div>
      </div>
    </>

  );
}

export default CreatedProjectOn;
