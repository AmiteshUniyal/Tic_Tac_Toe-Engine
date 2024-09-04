import React from "react";
import { Link } from "react-router-dom";

export default function SelectFirstMove() {
  return (
    <>
        <div
        className="h-screen"
        style={{ background: "linear-gradient(to right, brown, black )" }}
      >
        <div>
        <Link to={"/"}>
          <button className="text-white m-4">
            <img
              src="https://www.svgviewer.dev/static-svgs/23264/leftarrowl-left-arrow-direction-arrows-pointer-move.svg"
              className="h-12"
              alt="back"
            />
          </button>
        </Link>
      </div>
        <h1 className="text-center text-white pt-24 text-2xl">Do You Want To Play First ?</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 p-10">
          <div>
            <Link to={"/SinglePlayer"}>
              <button className="bg-gray-700 text-white p-2 border rounded">
                Yes
              </button>
            </Link>
          </div>
          <div>
            <Link to={"/ComputerMovesFirst"}>
              <button className="bg-gray-700 text-white p-2 border rounded">
                No
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}