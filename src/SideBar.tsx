import React from "react";

type SideBarProps = { className?: string; coordinateList?: number[][] };

function SideBar({ className, coordinateList }: SideBarProps) {
  return (
    <>
      <aside className={`pt-12 bg-slate-800 p-7 ${className}`}>
        <h1 className="text-2xl text-center lg:text-4xl text-slate-100">
          Enter Lat Lon
        </h1>
        <div className="flex gap-5 flex-col xl:flex-row my-10 items-center justify-evenly">
          <div>
            <label
              className="block mx-3 text-lg text-slate-200"
              htmlFor="latInput"
            >
              lat
            </label>
            <input
              //   ref={latInputRef}
              className="h-10 p-2 rounded-md"
              id="latInput"
              type="number"
            />
          </div>
          <div>
            <label
              className="block mx-3 text-lg text-slate-200"
              htmlFor="lonInput"
            >
              lon
            </label>
            <input
              //   ref={lonInputRef}
              className="h-10 p-2 rounded-md"
              id="lonInput"
              type="number"
            />
          </div>
        </div>
        <button
          //   onClick={submitHandler}
          className="block w-full p-2 text-2xl bg-teal-500 rounded-md shadow-md text-slate-50"
        >
          submit
        </button>
        <ul className="h-[max(60vh,24rem)] overflow-y-scroll mt-4">
          {coordinateList &&
            coordinateList.length >= 1 &&
            coordinateList.map(([lat, lon], i) => (
              <li
                className="p-2 my-2 text-center rounded-md bg-slate-700 text-slate-50"
                key={i}
              >
                lat: {lat}, lon: {lon}
              </li>
            ))}
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
