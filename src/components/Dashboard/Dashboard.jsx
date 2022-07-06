import React from "react";
import "./Dashboard.css";
import CardImage01 from "../../asset/Card_image01.png";
import CardImage02 from "../../asset/Card_image02.png";
import CardImage03 from "../../asset/Card_image03.png";
import CardImage04 from "../../asset/Card_image04.png";
import BarGraph from "../BarGraph/BarGraph";
import PieGraph from "../PieGraph/PieGraph";
import AreaGraph from "../AreaChart/AreaChart";
import TinyAreaGraph from "../TinyAreaChart/TinyAreaGraph";
import Dropdown from "../dropDown/Dropdown";
export default function Dashboard() {
  return (
    <div className="Dashboard-Container">
      <div className="Dashboard-row">
        <div className="Element-Card">
          <img src={CardImage01} alt="" />
          <p>3,256</p>
        </div>
        <div className="Element-Card">
          <img src={CardImage02} alt="" />
          <p>329</p>
        </div>
        <div className="Element-Card">
          <img src={CardImage03} alt="" />
          <p>₹2536</p>
        </div>
        <div className="Element-Card">
          <img src={CardImage04} alt="" />
          <p>38</p>
        </div>
      </div>
      <div className="Graph-row">
        <div className="BarGraph_Card">
          <div className="Graph_Card-Col">
            <p>Today’s Data</p>
            <BarGraph />
          </div>
          <div className="Pie-Graph_Card">
          <div className="Pie-Graph-Dropdown">
              <Dropdown label={"Sort by Months"} links={["Target","Target2","Target3"]} />
            </div>
            <PieGraph />
          </div>
        </div>
        <div className="Pie-Graph_Card-02">
          <p>Today's Data</p>
          <PieGraph />
        </div>
      </div>
      <div className="Graph-row">
        <div className="AreaChart_Card">
          <div className="AreaChart-Header">
            <p>Today’s Data</p>
            <div className="AreaChart-Dropdown">
              <Dropdown label={"Today's"} links={["Target","Target2","Target3"]} />
            </div>
          </div>
          <div className="AreaGraph">
            <AreaGraph />
          </div>
        </div>
        <div className="bg-AreaChart_card">
          <div className="TinyGraph-Header">
            {" "}
            <p>Today's Data</p>
          </div>

          <div className="TinyGraph-Container">
            {" "}
            <TinyAreaGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
