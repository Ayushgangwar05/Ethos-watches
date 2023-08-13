import { useState } from "react";
import "./App.css";
import EthosWatch from "./Components/EthosWatch";
import Filter from "./Components/Filter";
import Filterleftpart from "./Components/Filterleftpart";
import Navbar from "./Components/Navbar";
import Navbar1 from "./Components/Navbar1";
// import Watch from "./Components/Firebasewatch";
import FilterRightpartImage from "./Components/RightFilter/FilterRightpartImage";
import TRENDING from "./Components/TRENDING";
import Brandname from "./Components/Brandname";
import LifeStyle from "./Components/LifeStyle";
import Experinece3d from "./Components/Experinece3d";
import Help from "./Components/Help";
import End from "../src/Components/End";
import RightFilter2 from "./Components/RightFilter/RightFilter2";
import RightFilter3 from "./Components/RightFilter/RightFilter3";
import RightFilter4 from "./Components/RightFilter/RightFilter4";
import RightFilter5 from "./Components/RightFilter/RightFilter5";

function App() {
  // const [data1, setdata1] = useState("");
  // useEffect(() => {
  //   setdata1(Watch);
  //   console.log(setdata);
  // }, []);

  const [data, setdata] = useState("");
  let task = "";
  function ChangeHandler(event) {
    task = event.target.value;
    console.log(task);
  }
  function ClickHandler() {
    setdata(...data, task);
    console.log(setdata);
  }
  return (
    <div style={{ width: "100%", height: "100%" }} className="App">
      <Navbar />
      <EthosWatch />
      <Navbar1 />
      <Filter />
      <div style={{ display: "flex" }}>
        <Filterleftpart />
        <div>
          <FilterRightpartImage />
          <RightFilter2 />
          <RightFilter3 />
          <RightFilter4 />
          <RightFilter5 />
        </div>
      </div>
      <TRENDING />
      <Brandname />
      <LifeStyle />
      <Experinece3d />
      <Help />
      <End ChangeHandler={ChangeHandler} ClickHandler={ClickHandler} />
    </div>
  );
}

export default App;
