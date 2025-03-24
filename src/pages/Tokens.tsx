import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";


const Tokens: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex flex-col items-center gap-[10px] w-full h-full pt-4 relative">
      <div className="flex justify-between items-center w-full h-12 px-4">
        <p className="w-full font-bold text-[24px] leading-[25px]">
          All tokens
        </p>
        <div className="flex w-full h-full gap-2 py-[15.5px] pl-4 pr-3 items-center justify-between rounded-2xl border border-[#00000066]">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            className="w-[80%] font-inter active:text-[#00000066] text-[15px] leading-17px focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex w-fit items-center justify-center">
            <Icon
              icon="mynaui:search-solid"
              width="24"
              height="24"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full px-4 pb-4 overflow-auto">
        <div className="w-full grid grid-cols-1 justify-start gap-6">
          <p className="font-[700] text-[24px] leading-[22px]">
            No data
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
