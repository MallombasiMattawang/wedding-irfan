import React from "react";
import Navbar from "../components/Navbar";
import { useTimer } from "reactjs-countdown-hook";

const Home = () => {
  const { seconds, minutes, hours, days } = useTimer('1400000', handleTimerFinish);

  function handleTimerFinish() {
    alert("Waktunya Nikah!");
  }

  return (
    <div className="w-screen min-h-screen bg-main bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full p-8 flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl text-primary font-Bree">Undangan Pernikahan</h1>
        <img src="img/mempelai.png" alt="Mempelai" width={180} className="ml-8" />
        <div className="flex flex-col gap-1">
          <h1 className="font-shalimar font-extrabold text-4xl text-primary text-center">
            Muhammad Irfan Ibnu, S.Kom <br /> & <br /> Irmawati, S.Kom
          </h1>
          <div className="bg-primary p-3 rounded-xl text-center">
          <h2 className="font-Poppins text-white text-center">
            01 Maret 2023
          </h2>
          </div>
          
        </div>
        <div className="flex flex-row text-white font-Bree gap-2">
          <span className="bg-primary p-5 rounded-xl text-center">
            {`${days}`} Hari
          </span>
          <span className="bg-primary p-5 rounded-xl text-center">
            {`${hours}`} Jam
          </span>
          <span className="bg-primary p-5 rounded-xl text-center">
            {`${minutes}`} Menit
          </span>
          <span className="bg-primary p-5 rounded-xl text-center">
            {`${seconds}`} Detik
          </span>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
