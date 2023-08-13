import React from "react";
import "../App.css";
import Image from "../Gallery/Clockwallpaper.jpg";
import Image1 from "../Gallery/rolex--album-wallpaper.jpg";

function EthosWatch() {
  return (
    <>
      <div className="Ethosdiv">
        <div className="Leftside">
          <a href="/">
            <h6>ethos</h6>
            <div className="Blankrightdiv"></div>
            <h5
              style={{
                width: "7vw",
                fontSize: "15px",
                color: "black",
                fontWeight: "600",
              }}
            >
              Watch Boutiques
            </h5>
          </a>
        </div>
        <div className="Midsidediv">
          <h6>Friday, August 4, 2023</h6>
        </div>
        <div className="Endsidediv" style={{ display: "flex" }}>
          <div
            style={{
              width: "5vw",
              backgroundColor: "white",
              borderStyle: "solid",
              height: "8vh",
              borderColor: " #c4c1c0",
            }}
          >
            <a href="https://www.ethoswatches.com/rolex-watches.html">
              <img
                style={{ width: "4vw", marginTop: "4px", marginLeft: "4px" }}
                src={Image}
                alt="#"
              />
            </a>
          </div>
          <div
            style={{
              width: "5vw",
              backgroundColor: "white",
              borderStyle: "solid",
              height: "8vh",
              borderColor: " #c4c1c0",
            }}
          >
            <a href="https://www.ethoswatches.com/rolex-watches.html">
              <img
                style={{ width: "4vw", marginTop: "6px", marginLeft: "2px" }}
                src={Image1}
                alt="#"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default EthosWatch;
