import React from "react";
import { MdInfo } from "react-icons/md";
import arrowsidebar from "../../arrow-sidebar.png";
import user from "../../user.png";
import InputWrapper from "../atoms/InputWrapper";

const Configuration = () => {
  return (
    <div className="h-[94.7vh] bg-[#363636] text-white flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar  px-4">
        <ul>
          <li className="py-1  cursor-pointer">
            <p className="block font-bold text-xl my-2">cart_campaign</p>
            <div className="mt-5">
              <span className="flex items-center font-medium text-[16px]  py-2 textwhite">
                <MdInfo className="text-[#FF7A00] mr-2" /> Last 2 commits
                scanned
              </span>
              <span className="flex items-center font-medium text-[16px]  text-white">
                <MdInfo className="text-[#FF7A00] mr-2" /> 5 entry points
                identified
              </span>
            </div>
          </li>
          <li className="py-1 my-3  cursor-pointer">
            <label className="block font-medium text-[16px] mb-3">
              Selected flow
            </label>
            <select className="w-full bg-[#363636] border-[#D9D9D9] border-2 rounded-lg mt-1 p-2 ">
              <option className="font-medium text-[16px] text-white">
                POST /carts/{"{cart_id}"}
              </option>
            </select>
          </li>
          <li className="py-2  cursor-pointer">
            <label className="block font-medium text-base">Dependencies</label>
            <span className="text-sm text-[#B7B7B7]">
              Select the ones you want to mock
            </span>
            <div className="mt-2.5 pr-1">
              <div class="flex justify-between items-center mb-4 pb-0.5">
                <div className=" flex justify-center items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-black border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-[15px] font-medium text- white"
                  >
                    httpx
                  </label>
                </div>
                <div className="image">
                  <img
                    src={arrowsidebar}
                    alt="logo"
                    className="w-[13px] h-[13px] mt-3"
                  />
                </div>
              </div>
              <div class="flex justify-between items-center mb-4 pb-0.5">
                <div className=" flex justify-center items-center">
                  <input
                    id="checked"
                    type="checkbox"
                    value="checked"
                    class="w-4 h-4 text-blue-600 bg-black border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-[15px] font-medium text- white"
                  >
                    product_client
                  </label>
                </div>
                <div className="image">
                  <img
                    src={arrowsidebar}
                    alt="logo"
                    className="w-[13px] h-[13px] mt-3"
                  />
                </div>
              </div>
              <div class="flex justify-between items-center mb-4 pb-0.5">
                <div className=" flex justify-center items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-black border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-[15px] font-medium text- white"
                  >
                    sqlalchemy.orm
                  </label>
                </div>
                <div className="image">
                  <img
                    src={arrowsidebar}
                    alt="logo"
                    className="w-[13px] h-[13px] mt-3"
                  />
                </div>
              </div>
              <div class="flex justify-between items-center mb-4 pb-0.5">
                <div className=" flex justify-center items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-black border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-[15px] font-medium text- white"
                  >
                    cart_crud
                  </label>
                </div>
                <div className="image">
                  <img
                    src={arrowsidebar}
                    alt="logo"
                    className="w-[13px] h-[13px] mt-3"
                  />
                </div>
              </div>
              <div class="flex justify-between items-center mb-4 pb-0.5">
                <div className=" flex justify-center items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-black border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-[15px] font-medium text- white"
                  >
                    cartModel
                  </label>
                </div>
                <div className="image">
                  <img
                    src={arrowsidebar}
                    alt="logo"
                    className="w-[13px] h-[13px] mt-3"
                  />
                </div>
              </div>

              {/* Add more checkboxes as needed */}
            </div>
          </li>
          <li className="pt-3 pb-2  cursor-pointer">
            <label className="block  font-medium text-base">Databases</label>
            <span className="text-sm text-[#B7B7B7]">
              Select if you want to mock databases
            </span>
            <div className="mt-2.5 pr-1">
              <div class="flex justify-between items-center mb-4 pb-0.5">
                <div className=" flex justify-center items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-black border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-[15px] font-medium text- white"
                  >
                    I want to mock databases
                  </label>
                </div>
              </div>
              <div class="flex justify-between items-center mb-4 pb-0.5">
                <div className=" flex justify-center items-center">
                  <input
                    id="checked"
                    type="checkbox"
                    value="checked"
                    class="w-4 h-4 text-blue-600 bg-black border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-[15px] font-medium text- white"
                  >
                    I don’t want to mock database
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li className="  cursor-pointer">
            <label className="block font-medium">Database Configurations</label>
            <div className="mt-7">
              <label className="block w-full">
                <InputWrapper name={"Database User"} />
              </label>
              <label className="block">
                <InputWrapper name={"Database Password"} />
              </label>
              <label className="block">
                <InputWrapper name={"Database Hostname"} />
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-4 mt-1 border-t z-10  w-full border-[#505050] flex justify-end">
        <button className="w-1/4 bg-blue-600 p-2 rounded ">Save</button>
      </div>
    </div>
  );
};

export default Configuration;
