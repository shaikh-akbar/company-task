import React from 'react';
import { IoSearch } from "react-icons/io5";

function Modal({ closeModal }) {
  // Dummy data for country names
  const countryNames = ["India", "UAE", "USA", "QATAR", "PALESTINA"];

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50" onClick={closeModal}>
      <div className="bg-white rounded-lg shadow-md p-6" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>X</button>
        <div className="flex items-center mb-4">
          <div className="relative flex items-center w-full">
            <IoSearch className="text-gray-400 absolute left-2" />
            <input type="text" placeholder="Search country" className="border border-gray-300 p-2 pl-10 w-full" />
          </div>
        </div>
        <div className="overflow-y-auto max-h-60">
          {countryNames.map((country, index) => (
            <div key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>{country}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <h6 className=" text-black px-4 py-2 rounded mr-2 cursor-pointer" onClick={() => console.log("Select all")}>Select All</h6>
          <h6 className=" px-4 py-2 rounded mr-2 cursor-pointer" onClick={() => console.log("Clear all")}>Clear All</h6>
          <h6 className=" text-black px-4 py-2 rounded cursor-pointer" onClick={closeModal}>Done</h6>
        </div>
      </div>
    </div>
  );
}

export default Modal;
