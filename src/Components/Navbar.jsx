import React from "react";
import "../App.css";

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbarleft">
          <i class="bi bi-phone"> +91 87250 28899 / 82</i>
          <div className="Blankdiv"></div>
          <a href="https://api.whatsapp.com/send?phone=918725028835&amp;text=Hi,%20I%20would%20like%20to%20speak%20to%20a%20luxury%20watch%20expert%20at%20Ethos%20Watch%20Boutiques.">
            <i style={{ color: "green" }} class="bi bi-whatsapp">
              +91 87250 28835
            </i>
          </a>
        </div>
        <div className="Navbarright">
          <div className="Blankdiv"></div>

          <a href="/">
            <i id="Wishlist" class="bi bi-heart">
              WISHLIST
            </i>
          </a>
          <div className="Blankdiv"></div>
          <a href="/">
            <i id="Cart" class="bi bi-cart2">
              CART
            </i>
          </a>
          <div className="Blankdiv"></div>
          <div
            className="subnavbarright"
            style={{ display: "flex", gap: "6px" }}
          >
            <a href="https://www.ethoswatches.com/customer/account/login/">
              <i id="Login" class="bi bi-person"> LOGIN</i>
            </a>
            <h6>OR</h6>
            <a id="Singup" href="https://www.ethoswatches.com/customer/account/create/">
              SINGUP
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
