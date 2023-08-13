import React from "react";

function End({ ChangeHandler, ClickHandler }) {
  return (
    <div className="MainEnd">
      <div className="END">
        <div className="SubEnd">
          <h1>LUXURY BRANDS</h1>
          <div className="anchorend">
            <a href="https://www.ethoswatches.com/rolex-watches.html">Rolex </a>
            <a href="https://www.ethoswatches.com/brands/panerai.html">
              Panerai
            </a>
            <a href="https://www.ethoswatches.com/brands/omega.html">Omega</a>
            <a href="https://www.ethoswatches.com/brands/rado.html">Rado</a>
            <a href="https://www.ethoswatches.com/brands/iwc.html">IWC</a>
          </div>
        </div>
        <div className="SubEnd">
          <h1>CATEGORIES</h1>
          <div className="anchorend">
            <a href="https://www.ethoswatches.com/mens-watches.html">
              Watches for Men{" "}
            </a>
            <a href="https://www.ethoswatches.com/ladies-watches.html">
              Watches for Women
            </a>
            <a href="https://www.ethoswatches.com/luxury-brands.html">
              Premium Brands
            </a>
            <a href="https://www.ethoswatches.com/watches-online.html">
              Watches Online
            </a>
          </div>
        </div>
        <div className="SubEnd">
          <h1>COMPANY</h1>
          <div className="anchorend">
            <a href="https://www.ethoswatches.com/about-ethos/">About Ethos </a>
            <a href="https://www.ethoswatches.com/the-million-tree-project/">
              The Million-Tree Project
            </a>
            <a href="https://www.ethoswatches.com/locatestore/">
              Our Boutiques
            </a>
            <a href="https://www.ethoswatches.com/help-centre/">Help Centre</a>
            <a href="https://www.ethoswatches.com/repair-and-service/">
              Repair & Service
            </a>
          </div>
        </div>
        <div className="SubEnd">
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p style={{ marginLeft: "5vw", width: "27vw", color: "#5b5959" }}>
            Be the first to hear about new arrivals, special offers, and
            invitations to private events
          </p>
          <input
            onChange={ChangeHandler}
            style={{ marginLeft: "5vw" }}
            type="email"
            placeholder="Enter your email id"
          />
          <button onClick={ClickHandler}>SUBSCRIBE</button>
        </div>
      </div>
      <div className="EndBlink"></div>
      <div className="MaindivLink">
        <div className="EndLink">
          <h6 style={{ color: "#5b5959" }}>Follow Ethos:</h6>
          <a href="https://www.instagram.com/ethoswatches/">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/Ethos.Watch.Boutiques">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com/ethoswatches">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/ethoswatchboutiques/?originalSubdomain=in">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/user/EthosWatchBoutiques">
            <i class="bi bi-youtube"></i>
          </a>
        </div>
        <div className="RightEnd">
          <p>© 2023 Ethos Watch Boutiques. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default End;
