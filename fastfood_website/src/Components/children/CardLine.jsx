import React, { useState } from "react";

function CardLine() {
  const [num, setNum] = useState(1)

  function increment() {
    setNum(num - 1)
  }
  function dicrement() {
    setNum(num + 1)
  }

  return (
    <li className="py-1 sm:py-3 flex items-center justify-between flex-col gap-4 sm:gap-0 sm:flex-row">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="lg:w-16 lg:h-16 w-12 h-12" src="/img/img1.svg" alt="Neilimage" />
        </div>
        <div className=" min-w-0 flex flex-col gap-2">
          <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
            Мясная бомба
          </p>
          <p className="text-base font-bold text-gray-900 dark:text-white ">
            $320
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-[#F2F2F3] rounded-xl px-2 justify-center">
        <span onClick={() => increment()} className="cursor-pointer text-[20px]">&minus;</span>
        <span className="text-[18px]">{num}</span>
        <span onClick={() => dicrement()} className="cursor-pointer text-[20px]">+</span>
      </div>
    </li>
  );
}

export default CardLine;
