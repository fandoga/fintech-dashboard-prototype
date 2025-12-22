"use client";

import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    //поменять h-screen на full когда будет контент
    <div className="w-full h-screen relative pl-19">
      <Navbar />
      <Dashboard />
    </div>
  );
}
