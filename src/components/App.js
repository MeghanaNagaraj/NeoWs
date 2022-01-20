import React from "react";
import PostList from "./PostList";
import DateList from "./DateList";
import MoreInfo from "./MoreInfo";
import SideImg from "./SideImg";

function App() {
  return (
    <div className="">
      <SideImg></SideImg>
      <PostList></PostList>
      <hr />
      <DateList></DateList>
      <hr />
      <MoreInfo></MoreInfo>
    </div>
  );
}

export default App;
