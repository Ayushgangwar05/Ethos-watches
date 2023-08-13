import React from "react";
import Image4 from "../Gallery/Lifestyleimg.png";
import Image from "../Gallery/Collectionboximg.jpg";
import Image1 from "../Gallery/WatchStrapimg.jpg";
import Image2 from "../Gallery/Jawelleryboximg.jpg";
import Image3 from "../Gallery/Jawelleylastimg.jpg";
function LifeStyle() {
  return (
    <div className="Lifestyle">
      <h2>Life Style</h2>
      <div className="flexLifestyle" style={{ display: "flex", gap: "3vw" }}>
        <div className="subflexLifestyle">
          <a href="/">
            <div className="flexlifestyleblack"></div>
          </a>
          <a href="/">
            <img src={Image4} alt="#" />
          </a>
          <div className="subflexLifestyleheading">
            <a
              style={{ textDecoration: "none" }}
              href="https://www.ethoswatches.com/virtual-experience-watches-3d.html"
            >
              <h3 style={{ color: "white" }}>Watch Winders</h3>
              <p style={{ color: "white", width: "40vw" }}>
                A WOLF watch winder is a handmade precision instrument that
                focuses on the health of your watch with patented innovation.
                Only a WOLF counts rotations, all others simply use time to
                estimate the counts per day. With 185 years of innovation, WOLF
                knows that relying on time is simply never enough.
              </p>
              <p style={{ color: "white", fontSize: "15px" }}> SHOP NOW </p>
            </a>
          </div>
        </div>
        <div className="lifestyleleftside">
          <div className="sublifestyleleftside">
            <a href="https://www.ethoswatches.com/accessories/collector-box.html">
              <img src={Image} alt="#" />
            </a>
            <div
              style={{ position: "absolute", top: "0px", marginTop: "33vh" }}
              className="sublifestyleleftsidetext"
            >
              <a style={{ textDecoration: "none" }} href="/">
                <h1
                  style={{
                    fontSize: "22px",
                    color: "white",
                    marginLeft: "4vw",
                  }}
                >
                  Collection BOX
                </h1>
                <p
                  style={{
                    fontSize: "12px",
                    color: "white",
                    marginLeft: "7vw",
                  }}
                >
                  SHOP NOW
                </p>
              </a>
            </div>
          </div>
          <div style={{ marginTop: "4vh" }} className="sublifestyleleftside">
            <a href="https://www.ethoswatches.com/accessories/strap.html">
              <img src={Image1} alt="#" />
            </a>
            <div
              style={{ position: "absolute", top: "0px", marginTop: "32vh" }}
              className="sublifestyleleftsidetext"
            >
              <a style={{ textDecoration: "none" }} href="/">
                <h1
                  style={{
                    fontSize: "22px",
                    color: "white",
                    marginLeft: "4vw",
                  }}
                >
                  Watch Straps
                </h1>
                <p
                  style={{
                    fontSize: "12px",
                    color: "white",
                    marginLeft: "7vw",
                  }}
                >
                  SHOP NOW
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="lifestyleleftside">
          <div className="sublifestyleleftside">
            <a href="/">
              <img src={Image2} alt="#" />
            </a>
            <div
              style={{ position: "absolute", top: "0px", marginTop: "32vh" }}
              className="sublifestyleleftsidetext"
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://www.ethoswatches.com/accessories/jewellery-box.html"
              >
                <h1
                  style={{
                    fontSize: "22px",
                    color: "white",
                    marginLeft: "4vw",
                  }}
                >
                  Jewellery Box
                </h1>
                <p
                  style={{
                    fontSize: "12px",
                    color: "white",
                    marginLeft: "7vw",
                  }}
                >
                  SHOP NOW
                </p>
              </a>
            </div>
          </div>
          <div style={{ marginTop: "4vh" }} className="sublifestyleleftside">
            <a href="/">
              <img src={Image3} alt="#" />
            </a>
            <div
              style={{ position: "absolute", top: "0px", marginTop: "32vh" }}
              className="sublifestyleleftsidetext"
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://www.ethoswatches.com/jewellery/messika.html"
              >
                <h1
                  style={{
                    fontSize: "22px",
                    color: "white",
                    marginLeft: "6vw",
                  }}
                >
                  Jewellery
                </h1>
                <p
                  style={{
                    fontSize: "12px",
                    color: "white",
                    marginLeft: "7vw",
                  }}
                >
                  SHOP NOW
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeStyle;
