import React from "react";
import { List } from "react-router-dom";

const AsteroidInfo = (props) => {
  const renderlist = ({ datalist }) => {
    if (datalist) {
        console.log(datalist);
      
          return (
            <div className="">
             <p key="{datalist.id}">Id : {datalist.id}</p>
              <p key="{datalist.name}">Name : {datalist.name}</p>
              <p key="{datalist.absolute_magnitude_h}">Absolute Magnitude : {datalist.absolute_magnitude_h}</p>
              
            </div>
          );


      // console.log(datalist.near_earth_objects[1].name);
    }
  };
  return <div>{renderlist(props)}</div>;
};

export default AsteroidInfo;
