import React from "react";
let data = [
  {
    Image:
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/f0b79ae043f96db23a7b71063265844a/p/r/product-bovet-fleurier-nthu023_1.jpg?tr=w-182,h-277",
    Name: "BOVET FLEURIER",
    Price: "₹ 56,70,000",
  },
  {
    Image:
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/f0b79ae043f96db23a7b71063265844a/f/a/favre-leuba-chief-00-10202-08-22-49.jpg?tr=w-182,h-277",
    Name: "FAVRE LEUBA CHIEF CHRONOGRAPH",
    Price: "₹ 2,47,000",
  },
  {
    Image:
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/f0b79ae043f96db23a7b71063265844a/j/a/jacob-co-epic-x-ex110-20-am-aa-abrua.jpg?tr=w-182,h-277",
    Name: "JACOB & CO.EPIC X",
    Price: "₹ 26,00,000",
  },
  {
    Image:
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/f0b79ae043f96db23a7b71063265844a/f/a/favre-leuba-raider-00-10101-08-52-20.jpg?tr=w-182,h-277",
    Name: "FAVRE LEUBA RAIDER HARPOON",
    Price: "₹ 4,10,000",
  },
  {
    Image:
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/f0b79ae043f96db23a7b71063265844a/f/a/favre-leuba-raider-00-10102-08-13-31_1.jpg?tr=w-182,h-277",
    Name: "BREITLING TOP TIME",
    Price: "₹ 6,45,000",
  },
];
function FilterRightpartImage() {
  return (
    <div
      style={{
        display: "flex",
        gap: "3vw",
        marginTop: "10vh",
      }}
    >
      {data.map((ele) => {
        return (
          <div>
            <a href="https://www.ethoswatches.com/product-bovet-fleurier-nthu023.html">
              <img src={ele.Image} alt="#" />
            </a>
            <div style={{ textAlign: "center", marginTop: "3vh" }}>
              <h6>{ele.Name}</h6>
            </div>
            <div style={{ textAlign: "center", marginTop: "2vh" }}>
              <h6>{ele.Price}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FilterRightpartImage;
