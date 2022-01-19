import React from "react";
import { List } from "react-router-dom";

const DateListing = (props) => {
  const renderlist = ({ datalist }) => {
    if (datalist) {
      console.log(datalist);
      // return datalist.near_earth_objects
      //   .filter((item, idx) => idx < 10)
      //   .map((item) => {
          return (
            <div className="">
              <p key="{datalist.element_count}">Total number of Asteroids close to Earth between above dates is: {datalist.element_count}</p>
            </div>
          );
        // });

      // console.log(datalist.near_earth_objects[1].name);
    }
  };
  return <div>{renderlist(props)}</div>;
};

export default DateListing;
