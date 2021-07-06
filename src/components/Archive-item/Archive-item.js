import React from "react";
import { cyan } from "@ant-design/colors";
import "./Archive-item.css";

const ArchiveItem = (props) => {
  return (
    <div className="inactive" style={{ backgroundColor: cyan[3] }}>
      {props.value}
    </div>
  );
};

export default ArchiveItem;
