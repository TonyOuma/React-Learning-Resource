import React from "react";
import "./App.css";
// import "./components/ClassCounter";
// import ClassCounter from "./components/ClassCounter";
// import ClassCounterTwo from "./components/ClassCounterTwo";
// import HookCounter from "./components/HookCounter";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/HookCounterFour";
// import Counter from "./components/Counter";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import FunctionClick from "./components/FunctionClick";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import NewCount from "./components/NewCount";
// import Greet from "./components/Greet";
// import FunctionClick from "./components/FunctionClick";
// import Click from "./components/ClassClick";
// import ClickCounter from './components/ClickCounter'
// import HoverCount from './components/HoverCount'
import ComponentC from './components2/ComponentC'
import { UserProvider } from "./components2/userContext";

function App() {
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      {/* <Click /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <Counter /> */}
      {/* <Greet name="Brandy Clark" favSong="CountryTop" /> */}
      {/* <Greet name="Tim McGraw">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bruce Willis ">
        <button type="">Click Here</button>
      </Greet>
      <Greet name="Brandy Clark" favSong="CountryTop" />
      <Greet name="Luke Combs" favSong="CountryTop" /> */}
      {/* <Welcome name="Brandy Clark" favSong="CountryTop">
        <p>Favourite Lady Singer</p>
      </Welcome>
      <Welcome name="TimMcGraw" favSong="CountryTop" />
      <Welcome name="Kane Brown" favSong="CountryTop" />*/}
      {/* <Welcome name="Lady Antebellum" favSong="CountryTop" /> */}
      {/* <Hello /> */}
      {/* <Message></Message> */}
      {/* <NewCount /> */}
      {/* <ClickCounter />
      <HoverCount /> */}

      <UserProvider value = "Tony">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
