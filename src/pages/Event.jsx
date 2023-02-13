import React from "react";
import Navbar from "../components/Navbar";
import { SiHandshake } from "react-icons/si";
import { RiCalendarEventLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiEternalLove } from "react-icons/gi";
import Iframe from "react-iframe";

const Event = () => {
  return (
    <div className="w-full min-h-screen bg-secondary bg-cover bg-center ">
      <Navbar />
      <div className="max-w-5xl w-full mx-auto items-center p-5 flex flex-col gap-5">
        <h1 className="font-shalimar text-primary text-6xl text-center">
          Susunan Acara
        </h1>
        {/* Card */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="w-full h-full border-[8px] border-third bg-main bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <SiHandshake color="white" size={40} />
              </div>
              <h1 className="font-Bree text-3xl text-third">AKAD NIKAH</h1>
              <div
                className="flex flex-col items-center justify-center text-third font-Open
               text-center"
              >
                <h2>Bertempat Di</h2>
                <p>Kediaman Mempelai Wanita, Jl. Poros Makassar - Pare Mandalle Utara Pangkep</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <RiCalendarEventLine color="white" size={40} />
                </div>
                <p>
                  Rabu <br />
                  01 Maret 2023
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <AiOutlineClockCircle color="white" size={40} />
                </div>
                <p>11.00 WITA</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="w-full h-full border-[8px] border-third bg-main bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <GiEternalLove color="white" size={40} />
              </div>
              <h1 className="font-Bree text-3xl text-third">RESEPSI</h1>
              <div
                className="flex flex-col items-center justify-center text-third font-Open
               text-center"
              >
                <h2>Bertempat Di</h2>
                <p>Jl. Lanto Dg Pasewang Lr.1/7, Bulukumba (Depan Abbana Cafe)</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <RiCalendarEventLine color="white" size={40} />
                </div>
                <p>
                  Sabtu<br /> 04 Maret 2023
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <AiOutlineClockCircle color="white" size={40} />
                </div>
                <p>13.00 WITA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row mb-24">
          <div className="w-full h-full border-[8px] border-third bg-main bg-cover bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
            <h1 className="font-Bree text-3xl text-third">LOKASI</h1>
            <Iframe
              src="https://maps.google.com/maps?q=Jalan.%20Lanto%20Dg%20Pasewang%20Lr.1/7%20(Depan%20Abbana%20Cafe)&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="rounded-xl w-full h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
