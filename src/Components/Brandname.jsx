import React from "react";
import Image from "../Gallery/rolex--album-wallpaper.jpg";
import Image1 from "../Gallery/Alpinaimg.png";
import Image2 from "../Gallery/Angelusimg.jpg";
import Image3 from "../Gallery/Anonimoimg.jpg";
import Image4 from "../Gallery/Arminimg.jpg";
import Image5 from "../Gallery/Arnoldimg.jpg";
import Image6 from "../Gallery/Balmainimg.jpg";
import Image7 from "../Gallery/Baumeimg.jpg";
import Image8 from "../Gallery/Belliimg.jpg";
import Image9 from "../Gallery/Bovetimg.jpg";
import Image10 from "../Gallery/Breitlingimg.jpg";
import Image11 from "../Gallery/Bremontimg.jpg";

function Brandname() {
  return (
    <>
      <div className="Brandname">
        <h1>SHOP BY BRAND</h1>
        <div className="Brandnameimg">
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/rolex-watches.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/alpina-watches.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image1}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/angelus-watches.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image2}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/anonimo-watches.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image3}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/armin-strom-watches.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image4}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/armin-strom-watches.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image5}
                alt="#"
              />
            </a>
          </div>
        </div>
        <div className="Brandnameimg" style={{ marginTop: "5vh" }}>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/arnold-and-son-watches.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image6}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/balmain.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image7}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/baume-mercier.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image8}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/bell-and-ross.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image9}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/bovet-watches.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image10}
                alt="#"
              />
            </a>
          </div>
          <div className="Subbrannameimg">
            <a href="https://www.ethoswatches.com/brands/breitling.html">
              <img
                style={{ width: "10vw", height: "16vh", marginTop: "5px" }}
                src={Image11}
                alt="#"
              />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="BlankBotton"></div>
    </>
  );
}

export default Brandname;
