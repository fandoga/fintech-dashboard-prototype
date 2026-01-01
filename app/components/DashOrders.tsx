import React from "react";
import { orders } from "../constants";

const DashOrders = () => {
  return (
    <div className="orders bg-light rounded-2xl shadow-s p-4 col-span-3 max-h-62 overflow-y-scroll">
      <p className="text-sm opacity-50 mb-3">Orders</p>
      <div className="flex justify-between items-center px-2 pb-1 font-semibold">
        <p className="w-15">ID</p>
        <p className="w-15">Date</p>
        <p className="w-15">Status</p>
        <p className="w-15">Total</p>
      </div>
      <div className="flex flex-col gap-1">
        {orders.map((order) => (
          <div
            className="flex justify-between items-center shadow-s p-2 rounded-xl"
            key={order.id}
          >
            <p className="w-15">{order.id}</p>
            <p className="w-15">{order.date}</p>
            <p className="w-15">{order.status}</p>
            <p className="w-15">${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashOrders;
