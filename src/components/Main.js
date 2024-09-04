import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div
        className="h-screen"
        style={{ background: "linear-gradient(to right, brown, black )" }}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 ">
          <div className="text-center text-white text-4xl pt-20">
            Welcome to
          </div>
          <div className="text-center text-4xl text-yellow-300 p-0 sm:pt-20 font-bold underline">
            TIC-TAC-TOE
          </div>
        </div>
        <h1 className="text-center text-white pt-24 text-2xl">Select Mode</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 p-10">
          <div>
            <Link to={"/SelectFirstMove"}>
              <button className="bg-gray-700 text-white p-2 border rounded">
                Vs Computer
              </button>
            </Link>
          </div>
          <div>
            <Link to={"/TwoPlayer"}>
              <button className="bg-gray-700 text-white p-2 border rounded">
                Two Players
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
