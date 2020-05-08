import React from "react";

// function Greet() {
//   return <h1>Hello John Doe</h1>;
// }

// const Greet = ({ name, favSong }) => {
//   // console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {name} is {favSong}
//       </h1>
//     </div>
//   );
// };
const Greet = (props) => {
  const { name, favSong } = props;
  return (
    <div>
      <h1>
        Hello {name} is {favSong}
      </h1>
    </div>
  );
};
export default Greet;
