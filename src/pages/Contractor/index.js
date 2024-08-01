import React from "react";
import {
  Button,
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import usePageStyles from "../styles";

// components
import PageTitle from "../../components/PageTitle";

export default function Contractor() {
  const pageClasses = usePageStyles();
  return (
    <>
      <PageTitle
        title="Danh sách thầu"
        button={(
          <Button title="Thêm Thầu">Thêm thầu</Button>
        )}
      // description="Gồm hoạt động lên kế hoạch nhập hàng và nhập hàng về kho."
      />
      <Grid container spacing={4}>
        <Grid item xs={12} className={pageClasses.Wrapper}>

        </Grid>
      </Grid>
    </>
  );
}
