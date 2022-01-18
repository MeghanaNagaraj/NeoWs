import React from "react";
import PostList from "./PostList";
import DateList from "./DateList";
import MoreInfo from "./MoreInfo";

function App() {
  return (
    <div className="">
      <PostList></PostList>
      <hr />
      <DateList></DateList>
      <hr />
      <MoreInfo></MoreInfo>
    </div>
  );
}

export default App;
