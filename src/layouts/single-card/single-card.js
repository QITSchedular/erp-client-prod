import React from "react";
import ScrollView from "devextreme-react/scroll-view";
import "./single-card.scss";

export default function SingleCard({
  title,
  description,
  children,
  pic,
  count,
}) {
  return (
    <ScrollView
      height={"100%"}
      width={"176px"}
      className={"with-footer single-card"}
    >
      <div className={"dx-card content"}>
        <div className={"header"}>
          <div className={"title"}>{title}</div>
          <div className={"description"}>{description}</div>
          <div className={"footer"}>
            <div className={"img-section"}>
              <img src={pic} alt="image" />
            </div>
            <div className={"count-section"}>
              <span className={"count"}>{count}</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </ScrollView>
  );
}
