import React from "react";
import {
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import usePageStyles from "../styles";

// components
import PageTitle from "../../components/PageTitle";

const refs = [
  {
    page: 'Đơn Đặt Nhập hàng',
    link: '/app/hang-hoa/nhap-hang',
  },
  {
    page: 'Danh mục hàng hóa',
    link: '/app/hang-hoa/danh-muc',
  },

  {
    page: 'Xuất hàng',
    link: '/app/hang-hoa/xuat-hang',
  },
  {
    page: 'Hàng hóa tồn kho',
    link: '/app/hang-hoa/ton-kho',
  },
];

export default function Inventory() {
  const pageClasses = usePageStyles();
  return (
    <>
      <PageTitle
        title="Quản lý hàng hóa"
      // description="Gồm hoạt động lên kế hoạch nhập hàng và nhập hàng về kho."
      />
      <Grid container spacing={4}>
        <Grid item xs={12} className={pageClasses.Wrapper}>
          {refs.map((fnc, i) => {
            return (
              <Link key={fnc.link + i} className={pageClasses.FncLink} to={fnc.link}>{fnc.page}</Link>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
