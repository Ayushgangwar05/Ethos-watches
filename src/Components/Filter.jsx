import React from "react";
import "../App.css";

function Filter() {
  return (
    <div className="Filter">
      <div className="FilterRightside">
        <h6>FILTER</h6>
        <i class="bi bi-funnel"></i>
      </div>
      <div
        style={{ display: "flex", gap: "1vw", marginRight: "2vw" }}
        class="form-group col-md-2"
      >
        <label style={{ width: "8vw", marginTop: "1vh" }} for="inputState">
          SORT BY :
        </label>
        <select id="inputState" class="form-control">
          <option selected>BESTSELLER</option>
          <option>PRICE-HIGH TO LOW</option>
          <option>PRICE-LOW TO HIGH</option>
          <option>NEW ARRIVAL</option>
        </select>
      </div>
      <div className="Nextpage">
        <nav className="Pagenavigation" aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                style={{ backgroundColor: "black", color: "white" }}
                class="page-link"
                href="/"
              >
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        style={{ display: "flex", marginRight: "4vw" }}
        class="form-group col-md-2"
      >
        <label style={{ width: "8vw", marginTop: "1vh" }} for="inputState">
          VIEW :
        </label>
        <select id="inputState" class="form-control">
          <option selected>50</option>
          <option>75</option>
          <option>100</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
