import React from "react";
import Navbar from "./React Components/Navbar/Navbar";
import Main_section from "./React Components/Main/Main_section";
import Initiative from "./React Components/Initiative/Initiative";
// import Mission from "./React Components/Mission/Mission";
import Supporters from "./React Components/Support/Support";

function App() {
  return (
    <div>
      <Navbar />
      <Main_section />
      <Initiative />
      {/* <Mission /> */}
      <Supporters />
    </div>
  );
}

export default App;
