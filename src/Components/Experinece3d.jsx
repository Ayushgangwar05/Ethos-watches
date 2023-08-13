import React from "react";
import Image from "../Gallery/map.png";
import Image1 from "../Gallery/Iphoneimg.png";

function Experinece3d() {
  return (
    <div style={{ display: "flex", gap: "10vw" }} className="Experinece3d">
      <div style={{ display: "flex" }}>
        <a href="/">
          <img
            style={{
              marginTop: "6vw",
              width: "14vw",
              height: "60vh",
              position: "relative",
              marginLeft: "5vw",
            }}
            src={Image1}
            alt="#"
          />
        </a>
        <a className="videolick" href="/">
          <video
            style={{ marginLeft: "-.3vw" }}
            className="Video3d"
            autoplay=""
            loop=""
            muted=""
          >
            <source
              src="https://cdn2.ethoswatches.com/media/special-pages/newhome/RPReplayvideo_1.mp4"
              type="video/mp4"
            />
          </video>
        </a>
        <div style={{ marginTop: "20vh", width: "19vw", marginLeft: "3vw" }}>
          <a
            style={{ textDecoration: "none", fontSize: "30px", color: "black" }}
            href="https://www.ethoswatches.com/virtual-experience-watches-3d.html"
          >
            Experience watches in 3D & AR
          </a>
          <h6 style={{ width: "20vw", color: "#6e6d6d", fontWeight: "200" }}>
            These innovative features enhance the user's experience, adding
            depth, perspective, and augmented reality graphics to the watch
            face.
          </h6>
          <br />
          <a
            style={{ textDecoration: "none", fontSize: "14px", color: "black" }}
            href="https://www.ethoswatches.com/virtual-experience-watches-3d.html"
          >
            EXPERIENCE IN AR
          </a>
        </div>
      </div>
      <div style={{ marginTop: "10vh", display: "flex" }}>
        <img style={{ width: "22vw", height: "60vh" }} src={Image} alt="#" />
        <div style={{ marginTop: "11vh", marginLeft: "3vw" }}>
          <a
            style={{ textDecoration: "none", fontSize: "30px", color: "black" }}
            href="https://www.ethoswatches.com/the-million-tree-project/"
          >
            The Million-Tree Project
          </a>
          <h6 style={{ width: "17vw", color: "#6e6d6d", fontWeight: "200" }}>
            Ethos, in partnership with responsible organisations, pledges to
            plant one million trees over the next 10 years.
          </h6>
          <br />
          <a
            style={{ textDecoration: "none", fontSize: "14px", color: "black" }}
            href="https://www.ethoswatches.com/the-million-tree-project/"
          >
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experinece3d;
