import React, { Component } from "react";
import { Stack } from "@mui/material";
import RmAddForm from "../Rm Modele/RmAddForm";
import RmDisplay from "../Rm Modele/RmDisplay";
import { Route, Routes } from "react-router-dom";
import logo from "../../public/Store image.jpg";

const RmModule = () => {
  return (
    <Stack>
      <Routes>
        {/* <Route path="/RmHome/RmAddForm" element={<RmAddForm />} /> */}
        {/* <Route path="/DisplayMaterials" element={<RmDisplay />} /> */}
      </Routes>
      <img
        src={logo}
        alt="Logo"
        className="logo"
        width={1050}
        height={500}
        style={{ alignSelf: "center" }}
      />
    </Stack>
  );
};

export default RmModule;
