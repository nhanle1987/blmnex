import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

//icons

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/Dashboard";

import Typography from "../../pages/typography";

import Inventory from "../../pages/Inventory";
import InventoryOrder from "../../pages/Inventory/Order";

import OrderDetail from "../../pages/Inventory/OrderDetail";

import Contractor from "../../pages/Contractor";

import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/trang-chu" exact component={Dashboard} />
            <Route path="/app/hang-hoa" exact component={Inventory} />
            <Route path="/app/hang-hoa/nhap-hang" exact component={InventoryOrder} />
            <Route path="/app/hang-hoa/:id" exact component={OrderDetail} />
            
            <Route path="/app/hang-hoa/tra-hang" exact component={InventoryOrder} />
            <Route path="/app/hang-hoa/xuat-hang" exact component={InventoryOrder} />
            <Route path="/app/hang-hoa/danh-muc" exact component={InventoryOrder} />
            <Route path="/app/hang-hoa/ton-kho" exact component={InventoryOrder} />
            
            <Route path="/thau" exact component={Contractor} />

            <Route path="/typography" exact component={Typography} />
            <Route path="/tables" exact component={Tables} />
            <Route path="/notifications" exact component={Notifications} />
            <Route
              exact
              path="/ui"
              render={() => <Redirect to="/ui/icons" />}
            />
            <Route path="/ui/maps" component={Maps} />
            <Route path="/ui/icons" component={Icons} />
            <Route path="/ui/charts" component={Charts} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
