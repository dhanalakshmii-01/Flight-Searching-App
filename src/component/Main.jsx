import React from "react";
import { FlightSearchCard } from "./flightSearchCard";
import { FlightDetailSlider } from "./FlightDetailSlider";
import { FlightDetailCard } from "./FlightDetailCard";

export const Main = () => {
  return (
    <div className="grid-container">
      <div className=" col-md-8 col-lg-8 col-xl-12 col-sm-12">
        <FlightSearchCard />

        <div className="d-flex align-items-center justify-content-between">
          <div className="text-start mx-3">
            <p className="mb-1">From</p>
            <h4 className="mb-1">Chennai</h4>
            <p className="mb-1">MAA</p>
          </div>
          <hr className="flex-fill" style={{ borderStyle: "dashed" }} />
          <div className="text-end m-3">
            <p className="mb-1">To</p>
            <h4 className="mb-1">Mumbai</h4>
            <p className="mb-1">Mumbai Airport</p>
          </div>
        </div>

        <div className='pt-5 px-3 '>
          <FlightDetailCard />
        </div>

        <div className="dslider">
        <FlightDetailSlider />
        chgvkuj
      </div>
      </div>

    </div>
  );
};
