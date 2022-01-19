import React from "react";
import { List } from "react-router-dom";

const DateListing = (props) => {
  const renderlist = ({ datalist }) => {
    if (datalist) {
     console.log(datalist.near_earth_objects)
     var objLength=Object.keys(datalist.near_earth_objects)
     
     var rows = [];
     for(let j=0;j<objLength.length;j++){
      var len=objLength[j];
      for(let i=0;i<datalist.near_earth_objects[len].length;i++){
        rows.push(datalist.near_earth_objects[len][i].name)
      }
     }
     
          return (
            <div className="right">
              <p>Total number of Asteroids close to Earth between above dates is: {datalist.element_count}</p>
              <tbody>{rows}</tbody>
            </div>
          );
       
      
    }
  };
  return <div>{renderlist(props)}</div>;
};

export default DateListing;
