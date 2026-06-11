import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import WRORobot from "./Pages/WRORobot";
import NOI from "./Pages/NOI";
import EVO from "./Pages/EVO";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robot" element={<WRORobot />} />
        <Route path="/EVO" element={<EVO/>} />
        <Route path="/NOI" element={<NOI />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;