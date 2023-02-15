import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Gift = () => {
  const [copy, setCopy] = useState(true);

  const handleClick = () => {
    setCopy(false);
    setTimeout(() => {
      setCopy(true);
    }, 2000);

    navigator.clipboard.writeText("12345678910");
    return;
  };
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-main bg-cover bg-center p-5 flex flex-col items-center justify-center">
        <div className="max-w-xl w-full bg-white border-[3px] border-third mx-auto rounded-xl flex flex-col items-center justify-center gap-6 p-2">
          <p>Tidak ada lagi hal yang menggembirakan selain kehadiran Anda pada hari bahagia kami. Terimakasih atas doa dan harapan tulus pada kami,.</p>
        </div>
      </div>
    </>
  );
};

export default Gift;
