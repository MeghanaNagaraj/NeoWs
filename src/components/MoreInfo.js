import React, { Component } from "react";
import axios from "axios";
import AsteroidInfo from "./AsteroidInfo";

const url =
  "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=pK54KJaxWhL7TN8V2CEK79taxNCH8QolYuHzYUnn";

class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ""
    };
  }
  componentDidMount() {
    fetch(url, { Method: "GET" })
      .then((res) => res.json())
      .then((post) => {
        this.setState({ posts: post });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Asteroid Info</h1>
        <AsteroidInfo datalist={this.state.posts} />
      </div>
    );
  }
}

export default MoreInfo;
