import React from "react";
import "./home.scss";
import { SingleCard } from "../../layouts";
import cartSvg from "../../assets/cart60.svg";

export default function Home() {
  return (
    <React.Fragment>
      <h2 className={"content-block"}>Home</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <div className="all-class-holder">
            <SingleCard
              title={"Inventory"}
              description={"Manage All your inventories here"}
              pic={cartSvg}
              count={40}
            />
            <SingleCard
              title={"Inventory"}
              description={"Manage All your inventories here"}
              pic={cartSvg}
              count={40}
            />
            <SingleCard
              title={"Inventory"}
              description={"Manage All your inventories here"}
              pic={cartSvg}
              count={40}
            />
            <SingleCard
              title={"Inventory"}
              description={"Manage All your inventories here"}
              pic={cartSvg}
              count={40}
            />
            <SingleCard
              title={"Inventory"}
              description={"Manage All your inventories here"}
              pic={cartSvg}
              count={40}
            />
            <SingleCard
              title={"Inventory"}
              description={"Manage All your inventories here"}
              pic={cartSvg}
              count={40}
            />
            <SingleCard
              title={"Inventory"}
              description={"Manage All your inventories here"}
              pic={cartSvg}
              count={40}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
