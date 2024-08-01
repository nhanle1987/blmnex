import React from "react";
import {
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import usePageStyles from "../styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";

const refs = [
  {
    page: 'Hàng hóa',
    link: '/app/hang-hoa'
  },
  {
    page: 'Nhà Cung cấp',
    link: '/'
  },

  {
    page: 'Thầu',
    link: '/'
  },
  {
    page: 'Khách hàng (bệnh viện)',
    link: '/'
  },

  {
    page: 'Kho',
    link: '/'
  },
  {
    page: 'Người dùng',
    link: '/'
  },
];

export default function Dashboard() {
  const pageClasses = usePageStyles();
  return (
    <>
      <PageTitle
        title="Chức năng"
      // description="Gồm hoạt động lên kế hoạch nhập hàng và nhập hàng về kho."
      />
      <Grid container spacing={4} xs={12}>
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
