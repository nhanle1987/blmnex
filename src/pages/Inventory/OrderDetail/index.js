import React from 'react';
import { Button, Grid, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';

// styles
import useStyles from './styles';

// components
import Widget from '../../../components/Widget/Widget';
import { Typography } from '../../../components/Wrappers/Wrappers';
import PageTitle from '../../../components/PageTitle/PageTitle';
import DummyTable from './DummyTable';
import { useParams } from 'react-router-dom';
import { DATE_FORMAT_LONG } from '../../../utils/format';
import moment from 'moment';

export default function Order() {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id)
  return (
    <>
      <PageTitle title="Thông tin đơn đặt nhập hàng" />
      <Grid container spacing={4} className={classes.wrapper}>
        <Grid item xs={12} md={12}>
          <Widget disableWidgetMenu>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
                <div className="filterblk">
                  <div className="ln">
                    Ngày nhập hàng về: <strong>{moment().format(DATE_FORMAT_LONG)}</strong>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <div className="filterblk">
                  <div className="ln">
                    Gói thầu:
                    <strong>Gói thầu 1</strong>
                  </div>
                  <div className="ln">
                    Người lên đơn
                    <strong>Nguyễn Phi Hùng</strong>
                  </div>
                  <div className="ln">
                    Người nhập đơn
                    <strong>Nguyễn Phi Hùng</strong>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={5} lg={5}>
                <div className="filterblk">
                  <div className="ln align-reverse">
                    <Button variant="contained" color="primary" component="span">
                      Điều chỉnh phiếu nhập/trả
                    </Button>
                  </div>
                  <div className="ln align-reverse">
                    <Button variant="contained" color="primary" component="span">
                      Xuất đơn đặt nhập hàng
                    </Button>
                  </div>
                  <div className="ln align-reverse">
                    <Button variant="contained" color="primary" component="span">
                      Xuất đơn đặt nhập hàng
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <DummyTable />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
