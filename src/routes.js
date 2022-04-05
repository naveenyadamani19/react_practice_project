import { Route, Routes } from "react-router-dom";
import Authorization from "./authorizationroutes/authorization";
import Unauthorization from "./authorizationroutes/unauthorization";
import Home from "./Pages/home/home";

export default function Routing() {
  console.log("routes");
  return (
    <>
      {/* <Authorization />
      <Unauthorization /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
