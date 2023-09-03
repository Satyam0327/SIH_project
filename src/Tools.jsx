import Input from './Input';
import React, { useState } from 'react';
import './Tools.css';


function Tools() {
  // Use state to manage the visibility of the drawer
  const [isDrawerOpen, setDrawerOpen] = useState(false);

    const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry"
    ];


  // Function to toggle the drawer visibility
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
            <div className="text-center">
            <button
                className="custom-button"
                type="button"
                onClick={toggleDrawer}
            >
                {isDrawerOpen ? 'Hide navigation' : 'Show navigation'}
            </button>
            </div>

            <div
            id="drawer-navigation"
            className={`custom-drawer ${isDrawerOpen ? '' : 'hidden'}`}
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label"
            >
            <h5 id="drawer-navigation-label" className="drawer-label">
                Menu
            </h5>
            <button
                onClick={toggleDrawer}
                type="button"
                data-drawer-hide="drawer-navigation"
                aria-controls="drawer-navigation"
                className="close-button"
            >
                <svg
                aria-hidden="true"
                className="close-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                ></path>
                </svg>
                <span className="sr-only">Close menu</span>
            </button>
            <div className="drawer-content">
                <ul className="drawer-list">
                <li>
                    <Input options={indianStates} />
                </li>
                </ul>
            </div>
            </div>











    </>
  );
}

export default Tools;






  