import React, { useEffect, useRef } from "react";

const DashPie = () => {
  return (
    <div className="bg-light rounded-2xl shadow-s p-4 col-span-3">
      <p className="text-sm opacity-50 mb-3">Referral Tracking</p>
      <div className="flex items-center gap-[10%] h-full pb-6">
        <div className="flex flex-col gap-9 pl-2">
          <div className="shadow-s rounded-xl p-3">
            <p className="opacity-50">Invited</p>
            <p className="text-xl font-semibold pl-2">12 people</p>
          </div>
          <div className="shadow-s rounded-xl p-3 ">
            <p className="opacity-50">Bonus</p>
            <p className="text-xl font-semibold pl-2">$1098</p>
          </div>
          <div className="shadow-s rounded-xl p-3">
            <p className="opacity-50">Promo</p>
            <p className="text-xl font-semibold pl-2">$1211</p>
          </div>
        </div>
        <div className="w-[15vw] h-[15vw] h-50 my-6 flex items-center justify-center rounded-full bg-white bg-conic from-yellow-300 via-yellow-300 to-light to-70%">
          <div className="w-[12vw] h-[12vw] pt-10 flex items-center justify-center rounded-full bg-light">
            <div className="text-center mb-10">
              <h2 className="text-7xl font-bold">9.3</h2>
              <h3 className="text-lg opacity-70 font-semibold">
                Safety Rating
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashPie;
