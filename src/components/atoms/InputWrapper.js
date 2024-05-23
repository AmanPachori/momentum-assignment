import React from "react";

const InputWrapper = ({ name }) => {
  return (
    <div className="relative flex flex-col mb-7 w-full">
      <input
        type="text"
        id="database-user"
        className="border  rounded-md p-2 text-white bg-[#363636] border-orange-500"
        placeholder=" "
      />
      <label
        htmlFor="database-user"
        className="absolute left-3 -top-3 px-1 bg-[#363636] text-[#ffffffa8] text-sm"
      >
        {name}
      </label>
    </div>
  );
};

export default InputWrapper;
