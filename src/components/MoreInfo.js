import React, { Component } from "react";
import axios from "axios";
import AsteroidInfo from "./AsteroidInfo";

const url =
  `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=pK54KJaxWhL7TN8V2CEK79taxNCH8QolYuHzYUnn`;

class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",
      id:""
    };
  }

  handleId = (event) => {
    this.setState({
      id: event.target.value
    });
  };
  handleSubmit = (event) => {
    var aId = parseInt(`${this.state.id}`);
    console.log(aId);
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/${aId}?api_key=pK54KJaxWhL7TN8V2CEK79taxNCH8QolYuHzYUnn`, { Method: "GET" })
        .then((res) => res.json())
        .then((post) => {
          this.setState({ posts: post });
        });
        console.log(posts);
  };
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
        <form>
        <label>Enter Asteroid Id:</label>
          <br />
          <input
            type="text"
            placeholder="3542519"
            value={this.state.id}
            onChange={this.handleId}
          />
          <br />
        </form>
        <button className="button" onClick={this.handleSubmit}>
            Submit
          </button>
        <AsteroidInfo datalist={this.state.posts} />
      </div>
    );
  }
}

export default MoreInfo;
