import React, { Component, useState } from "react";
import { Stack, TextField, Typography, Button } from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { creatematerial } from "App/Features/RmDetailsSlice";

const RmAddForm = () => {
  const [rmMaterial, setrmMaterial] = useState({
    materialcode: "",
    catagory: "",
    materialdiscription: "",
    remark: "",
  });

  const dispach = useDispatch();

  const getmaterialData = (e) => {
    setrmMaterial({
      ...rmMaterial,
      updatedTime: new Date(),
      [e.target.name]: e.target.value,
    });
    console.log(rmMaterial);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("material details ....", rmMaterial);
    dispach(creatematerial(rmMaterial));
    setrmMaterial(rmMaterial);
    setrmMaterial({
      materialcode: "",
      catagory: "",
      materialdiscription: "",
      remark: "",
    });
  };

  return (
    <Stack my={4} mx={50} direction={`column`} spacing={3}>
      <Typography variant="h1" fontSize={25} fontWeight={`bold`}>
        Material Creation form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Stack direction={`column`} spacing={2}>
            <TextField
              label="materialcode"
              size="small"
              name="materialcode"
              value={rmMaterial.materialcode || ""}
              onChange={getmaterialData}
            />
            <TextField
              label="catagory"
              size="small"
              name="catagory"
              value={rmMaterial.catagory}
              onChange={getmaterialData}
            />
            <TextField
              label="materialdiscription"
              size="small"
              name="materialdiscription"
              value={rmMaterial.materialdiscription}
              onChange={getmaterialData}
            />
            <TextField
              label="remark"
              size="small"
              name="remark"
              value={rmMaterial.remark}
              onChange={getmaterialData}
            />
          </Stack>
        </Stack>
        <Stack spacing={2} direction={`row`} marginTop={3}>
          <LoadingButton
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            size="small"
            type="submit">
            Save
          </LoadingButton>

          <Button variant="outlined" size="small" onClick={SubmitEvent}>
            Cleare
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default RmAddForm;
