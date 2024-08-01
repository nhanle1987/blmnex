import React from "react";
import { Button, Grid, MenuItem, OutlinedInput, Select } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import Widget from '../../../components/Widget/Widget';
import { Typography } from '../../../components/Wrappers/Wrappers';
import DummyTable from "./DummyTable";
import PageTitle from "../../../components/PageTitle/PageTitle";

export default function Order() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Đặt nhập hàng" />
      <Grid container spacing={4} className={classes.wrapper}>
        <Grid item xs={12} md={12}>
          <Widget disableWidgetMenu>
            <Grid container>
              <Grid item xs={12} md={6} lg={6}>
                <div className="filterblk">
                  <div className="ln">
                    <Typography variant="h6">Chọn gói thầu</Typography>
                    <Select
                      value="1"
                      input={
                        <OutlinedInput
                          size="small"
                          labelWidth={0}
                        />
                      }
                      autoWidth
                    >
                      <MenuItem value="1">Gói thầu A</MenuItem>
                      <MenuItem value="2">Gói thầu B</MenuItem>
                      <MenuItem value="3">Gói thầu C</MenuItem>
                    </Select>
                  </div>
                  <div className="ln">
                    <Typography variant="h6">Tìm kiếm đơn đặt nhập hàng</Typography>
                    <OutlinedInput
                      labelWidth={0}
                      size="small"
                    />
                  </div>
                  <div className="ln">
                    <Typography variant="h6">ID phiếu nhập</Typography>
                    <OutlinedInput
                      size="small"
                      labelWidth={0}
                    />
                  </div>
                  <div className="ln">
                    <Typography variant="h6">Trạng thái đơn đặt nhập hàng</Typography>
                    <Select
                      value="1"
                      input={
                        <OutlinedInput
                          size="small"
                          labelWidth={0}
                        />
                      }
                      autoWidth
                    >
                      <MenuItem value="1">Chờ nhập</MenuItem>
                      <MenuItem value="2">Nhập đủ</MenuItem>
                    </Select>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div className="filterblk">
                  <div className="ln align-reverse">
                    <Button variant="contained" color="primary" component="span">
                      Tải lên đơn đặt nhập hàng
                    </Button>
                  </div>
                  <div className="ln align-reverse">
                    <Button variant="contained" color="primary" component="span">
                      Tải lên đơn nhập hàng
                    </Button>
                  </div>
                  <div className="ln align-reverse">
                    <Button variant="contained" color="primary" component="span">
                      Tải lên đơn trả hàng
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <DummyTable />
          </Widget>
        </Grid>
      </Grid>
      {/* <Grid container spacing={4} className={classes.wrapper}>
        <Grid item xs={12} md={12}>
        </Grid>
      </Grid> */}
    </>
  );
}
