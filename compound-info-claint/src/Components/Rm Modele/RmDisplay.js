import { readMaterial } from "App/Features/RmDetailsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RmDisplay = () => {
  const dispach = useDispatch();
  const { materials, loading } = useSelector((state) => state.rm);
  console.log(materials);
  useEffect(() => {
    console.log("useeffect");
    dispach(readMaterial());
  }, []);
  return (
    <div>
      <h1>Rm display</h1>
    </div>
  );
};

export default RmDisplay;
