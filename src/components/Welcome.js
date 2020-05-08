import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, favSong } = this.props;
    // console.log(this.props.children);

    return (
      <div>
        <h1>Welcome {name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
