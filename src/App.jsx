import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WRORobot from "./Pages/WRORobot";
import NOI from "./Pages/NOI";
import EVO from "./Pages/EVO";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robot" element={<WRORobot />} />
        <Route path="/EVO" element={<EVO/>} />
        <Route path="/NOI" element={<NOI />} />
      </Routes>
    </HashRouter>
  );
};

export default App;