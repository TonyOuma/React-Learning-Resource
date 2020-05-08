import React from "react";

const Hello = () => {
  return (
    <React.Fragment>
      <div className="dummy_text">
        <h1>Hello John Doe</h1>
      </div>
    </React.Fragment>

    //     React.createElement(
    //       "div",
    //       {
    //         id: "hello",
    //         className: "dummy_name",
    //       },
    //       React.createElement("h1", null, "Hello Tony")
    //     )
  );
};

export default Hello;
