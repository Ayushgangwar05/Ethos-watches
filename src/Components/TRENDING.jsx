import React from "react";
import Image from "../Gallery/Trending img.png";
import Image1 from "../Gallery/Bovet-Orbis-Mundi-India-Edition-featured.jpg";
import Image2 from "../Gallery/JacobCo-Epic-X-manually-wound-skeleton-monocoque-watch-Titanium-100m-water-resistance-Buckle-sapphire-glass-Honeycomb-strap-featured.jpg";
import Image3 from "../Gallery/Norqain-Wild-ONE-Skeleton-Turquoise-Wild-ONE-Skeleton-Burgundy-Limited-Edition-featued@2x.jpg";
import Image4 from "../Gallery/H-Moser-Cie-Streamliner-Tourbillon-Rainbow-Featured.jpg";
import "../App.css";
function TRENDING() {
  return (
    <div className="Trending">
      <h1 style={{ marginLeft: "5vw", marginTop: "30px" }}>
        TRENDING ARTICLES
      </h1>
      <div className="Trendingmain">
        <div className="leftTrending">
          <a href="https://www.ethoswatches.com/the-watch-guide/jacob-co-epic-x-india/">
            <img src={Image} alt="#" />
          </a>
          <div
            style={{
              width: "4.5vw",
              height: "3vh",
              backgroundColor: "red",
              marginLeft: "2vw",
              marginTop: "4vh",
              textAlign: "center",
            }}
          >
            <h1>REVIEW</h1>
          </div>
          <a
            style={{
              fontSize: "30px",
              color: "black",
              fontWeight: "bold",
              marginLeft: "2vw",
              textDecoration: "none",
            }}
            href="https://www.ethoswatches.com/the-watch-guide/jacob-co-epic-x-india/"
          >
            A Monumental Dial: The New India Edition Jacob & Co Epic X Titanium
          </a>
          <h2
            style={{ marginLeft: "2vw", fontSize: "23px", marginTop: "10px" }}
          >
            Everyone wants a slice of India. Louis Moinet added a vivid ‘Only
            India’ watch to their Mechanical Wonders collection last year. The
            dial had a tiny piece of Shergotty—a Martian meteorite that landed
            in Bihar in 1865—inside a floral motif, fanned out
          </h2>
          <h6 style={{ marginLeft: "2vw", marginTop: "20px" }}>
            July 31, 2023
          </h6>
        </div>
        <div className="MainleftTrending">
          <div className="rightTrending">
            <div className="subrightTrending">
              <a href="https://www.ethoswatches.com/the-watch-guide/bovet-orbis-mundi-india-edition-world-timer/">
                <img src={Image1} alt="#" />
              </a>
              <h6 style={{ color: "red" }}>REVIEW</h6>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="https://www.ethoswatches.com/the-watch-guide/bovet-orbis-mundi-india-edition-world-timer/"
              >
                The World At Your Fingertips: Presenting Bovet’s Orbis Mundi
                India Edition
              </a>
              <h6 style={{ marginTop: "10px", fontSize: "12px" }}>
                July 21, 2023
              </h6>
            </div>
            <div className="subrightTrending">
              <a href="https://www.ethoswatches.com/the-watch-guide/jacob-co-epic-x-primary-colours/">
                <img src={Image2} alt="#" />
              </a>
              <h6 style={{ color: "red" }}>REVIEW</h6>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="https://www.ethoswatches.com/the-watch-guide/jacob-co-epic-x-primary-colours/"
              >
                Basic Instinct: Jacob & Co Epic X Iterations In 'Primary'
                Colours
              </a>
              <h6 style={{ marginTop: "10px", fontSize: "12px" }}>
                July 26, 2023
              </h6>
            </div>
          </div>
          <div className="rightTrending">
            <div className="subrightTrending">
              <a href="https://www.ethoswatches.com/the-watch-guide/h-moser-cie-streamliner-tourbillon-rainbow-watch/">
                <img src={Image4} alt="#" />
              </a>
              <h6 style={{ color: "red" }}>REVIEW</h6>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="https://www.ethoswatches.com/the-watch-guide/h-moser-cie-streamliner-tourbillon-rainbow-watch/"
              >
                Presenting H. Moser & Cie.’s Dazzling Streamliner Tourbillon
                Rainbow
              </a>
              <h6 style={{ marginTop: "30px", fontSize: "12px" }}>
                July 24, 2023
              </h6>
            </div>
            <div className="subrightTrending">
              <a href="https://www.ethoswatches.com/the-watch-guide/norqain-independence-wild-one-skeleton/">
                <img src={Image3} alt="#" />
              </a>
              <h6 style={{ color: "red" }}>REVIEW</h6>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="https://www.ethoswatches.com/the-watch-guide/norqain-independence-wild-one-skeleton/"
              >
                Summer Skeletons: Norqain's New Independence Wild One—The
                Skeleton Edition
              </a>
              <h6 style={{ marginTop: "10px", fontSize: "12px" }}>
                July 28, 2023
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TRENDING;
